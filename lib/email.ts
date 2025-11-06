import nodemailer from 'nodemailer'

// Email transporter setup (Hostinger SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // SSL
  auth: {
    user: process.env.SMTP_USER || 'support@vinaag.com',
    pass: process.env.SMTP_PASSWORD || '',
  },
})

interface BookingData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  service: string
  propertyType: string
  date: string
  time: string
  message: string
}

export async function sendBookingEmail(bookingData: BookingData) {
  const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #16a34a; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; }
    .section { margin-bottom: 20px; }
    .label { font-weight: bold; color: #16a34a; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 New Booking Received!</h1>
      <p>Vinaag Pest Control</p>
    </div>
    
    <div class="content">
      <div class="section">
        <h2>Customer Details</h2>
        <p><span class="label">Name:</span> ${bookingData.name}</p>
        <p><span class="label">Email:</span> ${bookingData.email}</p>
        <p><span class="label">Phone:</span> ${bookingData.phone}</p>
        <p><span class="label">Address:</span> ${bookingData.address}</p>
        <p><span class="label">City:</span> ${bookingData.city}</p>
      </div>
      
      <div class="section">
        <h2>Service Details</h2>
        <p><span class="label">Service Type:</span> ${bookingData.service}</p>
        <p><span class="label">Property Type:</span> ${bookingData.propertyType}</p>
        <p><span class="label">Booking Date:</span> ${bookingData.date}</p>
        <p><span class="label">Booking Time:</span> ${bookingData.time}</p>
      </div>
      
      <div class="section">
        <h2>Additional Message</h2>
        <p>${bookingData.message || 'No additional message'}</p>
      </div>
      
      <div class="section" style="background: #fff3cd; padding: 15px; border-left: 4px solid #ffc107;">
        <p><strong>⚠️ Action Required:</strong> Please contact the customer to confirm the booking.</p>
      </div>
    </div>
    
    <div class="footer">
      <p>Vinaag Pest Control - Professional Pest Management</p>
      <p>📞 7498571873 | 📧 support@vinaag.com</p>
      <p style="color:#999; font-size:11px; margin-top:8px;">
        Orders are facilitated by Vinaag; services are fulfilled by Regal Services (Govt. License: LAID10050103).
      </p>
    </div>
  </div>
</body>
</html>
  `

  try {
    await transporter.sendMail({
      from: `"Vinaag Pest Control" <${process.env.SMTP_FROM || 'support@vinaag.com'}>`,
      to: process.env.SMTP_USER || 'support@vinaag.com',
      subject: `🔔 New Booking: ${bookingData.service} - ${bookingData.name}`,
      html: emailContent,
      text: `
New Booking Received!

Customer Details:
- Name: ${bookingData.name}
- Email: ${bookingData.email}
- Phone: ${bookingData.phone}
- Address: ${bookingData.address}, ${bookingData.city}

Service Details:
- Service: ${bookingData.service}
- Property Type: ${bookingData.propertyType}
- Date: ${bookingData.date}
- Time: ${bookingData.time}

Message: ${bookingData.message || 'No message'}
      `,
    })
    
    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}
