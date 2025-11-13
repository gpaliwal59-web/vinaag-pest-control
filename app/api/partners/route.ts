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
  return NextResponse.json({ success: false, error: 'Partners feature disabled' }, { status: 404 })
}

export async function POST(req: Request) {
  return NextResponse.json({ success: false, error: 'Partners feature disabled' }, { status: 404 })
}

export async function PATCH(req: Request) {
  return NextResponse.json({ success: false, error: 'Partners feature disabled' }, { status: 404 })
}
