import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import path from 'path'
import { promises as fs } from 'fs'

type Partner = {
  id: string
  name: string
  phone: string
  email?: string
  city: string
  serviceArea: string
  company?: string
  experience?: string
  message?: string
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
  updatedAt: string
}

const DATA_PATH = path.join(process.cwd(), 'data', 'partners.json')

async function ensureDataFile() {
  try {
    await fs.access(DATA_PATH)
  } catch {
    await fs.mkdir(path.dirname(DATA_PATH), { recursive: true })
    await fs.writeFile(DATA_PATH, '[]', 'utf-8')
  }
}

async function readPartners(): Promise<Partner[]> {
  await ensureDataFile()
  const raw = await fs.readFile(DATA_PATH, 'utf-8')
  return JSON.parse(raw)
}

async function writePartners(list: Partner[]) {
  await fs.writeFile(DATA_PATH, JSON.stringify(list, null, 2), 'utf-8')
}

function mailer() {
  if (!process.env.SMTP_HOST) return null
  const port = Number(process.env.SMTP_PORT || 465)
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASSWORD || '',
    },
  })
}

export async function GET() {
  const list = await readPartners()
  return NextResponse.json({ success: true, data: list })
}

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const required = ['name', 'phone', 'city', 'serviceArea']
    for (const k of required) {
      if (!data?.[k]) {
        return NextResponse.json({ success: false, error: `Missing field: ${k}` }, { status: 400 })
      }
    }

    const now = new Date().toISOString()
    const record: Partner = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: data.name,
      phone: data.phone,
      email: data.email,
      city: data.city,
      serviceArea: data.serviceArea,
      company: data.company,
      experience: data.experience,
      message: data.message,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    }

    const list = await readPartners()
    list.unshift(record)
    await writePartners(list)

    const tx = mailer()
    if (tx) {
      const to = process.env.PARTNER_ALERT_TO || process.env.SMTP_FROM || process.env.SMTP_USER || 'support@vinaag.com'
      await tx.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@vinaag.com',
        to,
        subject: 'New Partner Application',
        text: JSON.stringify(record, null, 2),
      })
    }

    return NextResponse.json({ success: true, data: record })
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json()
    const { id, status } = body as { id?: string; status?: Partner['status'] }
    if (!id || !status) return NextResponse.json({ success: false, error: 'id and status required' }, { status: 400 })
    const list = await readPartners()
    const idx = list.findIndex((p) => p.id === id)
    if (idx === -1) return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 })
    list[idx].status = status
    list[idx].updatedAt = new Date().toISOString()
    await writePartners(list)
    return NextResponse.json({ success: true, data: list[idx] })
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}
