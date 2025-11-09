import { NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { sendBookingEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const bookingData = await request.json()

    // Booking data ko format karein
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    const bookingEntry = `
=====================================
BOOKING #${Date.now()}
Date & Time: ${timestamp}
=====================================

Customer Details:
- Name: ${bookingData.name}
- Email: ${bookingData.email}
- Phone: ${bookingData.phone}
- Address: ${bookingData.address}
- City: ${bookingData.city}

Service Details:
- Service Type: ${bookingData.service}
- Property Type: ${bookingData.propertyType}
- Booking Date: ${bookingData.date}
- Booking Time: ${bookingData.time}

Additional Message:
${bookingData.message || 'No additional message'}

=====================================

`

    let saved = false
    // Vercel par filesystem read-only hota hai. Local/dev me file write karne ki koshish karein.
    try {
      const bookingsDir = path.join(process.cwd(), 'bookings')
      if (!process.env.VERCEL) {
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
      }
    } catch (fsError) {
      console.error('File write failed:', fsError)
    }

    let emailed = false
    try {
      const res = await sendBookingEmail(bookingData)
      emailed = !!(res as any)?.success
      if (emailed) {
        console.log('Email sent successfully!')
      }
    } catch (emailError) {
      console.error('Email send failed:', emailError)
    }

    if (saved || emailed) {
      return NextResponse.json({
        success: true,
        message: saved ? 'Booking saved successfully!' : 'Booking received via email!',
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
