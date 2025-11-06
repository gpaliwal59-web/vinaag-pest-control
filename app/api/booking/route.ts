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

    // Bookings folder banayein agar nahi hai
    const bookingsDir = path.join(process.cwd(), 'bookings')
    if (!existsSync(bookingsDir)) {
      await mkdir(bookingsDir, { recursive: true })
    }

    // File path
    const filePath = path.join(bookingsDir, 'bookings.txt')

    // Existing content read karein (agar file exist karti hai)
    let existingContent = ''
    if (existsSync(filePath)) {
      existingContent = await readFile(filePath, 'utf-8')
    }

    // New booking add karein (top pe)
    const newContent = bookingEntry + existingContent

    // File mein save karein
    await writeFile(filePath, newContent, 'utf-8')

    // Email bhi bhejein (Hostinger SMTP use karke)
    try {
      await sendBookingEmail(bookingData)
      console.log('Email sent successfully!')
    } catch (emailError) {
      console.error('Email send failed, but booking saved:', emailError)
      // Email fail ho bhi jaye toh booking save hai
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Booking saved successfully!' 
    })

  } catch (error) {
    console.error('Booking save error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to save booking' },
      { status: 500 }
    )
  }
}
