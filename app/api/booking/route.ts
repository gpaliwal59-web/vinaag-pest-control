import { NextResponse } from 'next/server'
import path from 'path'
import { existsSync } from 'fs'
import { mkdir, readFile, writeFile } from 'fs/promises'
import { sendBookingEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const bookingData = await request.json()
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    const bookingEntry = `
==== Booking ====
Name: ${bookingData.name}
Email: ${bookingData.email}
Service: ${bookingData.service}
Date: ${bookingData.date}
Time: ${bookingData.time}
Message: ${bookingData.message || 'No additional message'}
Timestamp: ${timestamp}
=================

`

    let saved = false
    let emailed = false

    // ✅ File write only if NOT on Vercel
    if (!process.env.VERCEL) {
      try {
        const bookingsDir = path.join(process.cwd(), 'bookings')
        if (!existsSync(bookingsDir)) {
          await mkdir(bookingsDir, { recursive: true })
        }

        const filePath = path.join(bookingsDir, 'bookings.txt')
        let existingContent = ''
        if (existsSync(filePath)) {
          existingContent = await readFile(filePath, 'utf-8')
        }

        const newContent = bookingEntry + existingContent
        await writeFile(filePath, newContent, 'utf-8')
        saved = true
      } catch (fsError) {
        console.error('File write failed:', fsError)
      }
    }

    // ✅ Email logic
    try {
      const res = await sendBookingEmail(bookingData)
      emailed = !!(res as any)?.success
      if (emailed) {
        console.log('Email sent successfully!')
      }
    } catch (emailError) {
      console.error('Email send failed:', emailError)
    }

    // ✅ Final response
    if (saved || emailed) {
      return NextResponse.json({
        success: true,
        message: saved
          ? 'Booking saved successfully!'
          : 'Booking received via email!',
      })
    }

    return NextResponse.json(
      { success: false, message: 'Failed to record booking' },
      { status: 500 }
    )
  } catch (error) {
    console.error('Booking save error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process booking' },
      { status: 500 }
    )
  }
}