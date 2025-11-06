# 📧 Email Setup Guide - Customer Booking Notifications

## ✅ Maine Kya Kiya Hai

Maine booking form mein **EmailJS** integrate kar diya hai. Ab jab bhi koi customer booking karega, aapko email aayega!

---

## 🚀 EmailJS Setup Kaise Karein (Step by Step)

### **Step 1: EmailJS Account Banayein**

1. **Website kholen**: [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Sign Up** karein (Free hai)
3. Email verify karein

---

### **Step 2: Email Service Add Karein**

1. Dashboard mein **"Email Services"** pe click karein
2. **"Add New Service"** pe click karein
3. **Gmail** select karein (ya jo email use karna hai)
4. Apna Gmail account connect karein
5. **Service ID** copy karein (ye important hai!)

**Example Service ID**: `service_abc123`

---

### **Step 3: Email Template Banayein**

1. Dashboard mein **"Email Templates"** pe click karein
2. **"Create New Template"** pe click karein
3. Template name: `booking_notification`
4. **Template content** aise likhen:

```
Subject: New Booking - {{service_type}}

Hello,

Aapko ek naya booking mila hai!

Customer Details:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Phone: {{customer_phone}}
- Address: {{customer_address}}, {{customer_city}}

Booking Details:
- Service: {{service_type}}
- Property Type: {{property_type}}
- Date: {{booking_date}}
- Time: {{booking_time}}

Additional Message:
{{message}}

---
Vinaag Pest Control
```

5. **Template ID** copy karein

**Example Template ID**: `template_xyz789`

---

### **Step 4: Public Key Copy Karein**

1. Dashboard mein **"Account"** pe click karein
2. **"API Keys"** section mein jayen
3. **Public Key** copy karein

**Example Public Key**: `abcd1234efgh5678`

---

### **Step 5: Code Mein Keys Dalein**

Ab **booking page** file kholen aur ye 3 cheezein update karein:

**File**: `app/booking/page.tsx`

**Line 56-58** pe ye update karein:

```typescript
const serviceId = 'service_abc123'  // Apna Service ID yahan
const templateId = 'template_xyz789'  // Apna Template ID yahan
const publicKey = 'abcd1234efgh5678'  // Apna Public Key yahan
```

**Line 66** pe apna email update karein:

```typescript
to_email: 'support@vinaag.com',  // APNA EMAIL YAHAN DALEIN
```

---

## 🎯 Kaise Test Karein

1. Website kholen: `http://localhost:3000/booking`
2. Form fill karein
3. **"Confirm Booking"** pe click karein
4. Agar sab sahi hai toh:
   - Button "Sending..." dikhayega
   - Phir "Booking Confirmed!" message aayega
   - **Aapke email pe notification aayega!**

---

## ❓ Common Problems

### **Problem 1: Email nahi aa raha**
**Solution**: 
- EmailJS dashboard mein check karein ki service active hai
- Gmail settings mein "Less secure apps" allow karein
- Spam folder check karein

### **Problem 2: "Failed to send" error**
**Solution**:
- Service ID, Template ID, Public Key sahi check karein
- Internet connection check karein
- EmailJS dashboard mein quota check karein (free plan: 200 emails/month)

### **Problem 3: Keys kahan se milenge?**
**Solution**:
- Service ID: Email Services section
- Template ID: Email Templates section  
- Public Key: Account > API Keys section

---

## 💰 EmailJS Pricing

- **Free Plan**: 200 emails/month (shuru mein ye kaafi hai)
- **Paid Plans**: Agar zyada bookings aayein toh upgrade kar sakte hain

---

## 🔄 Alternative Option: WhatsApp Notification

Agar email setup mushkil lag raha hai, toh simple option:

**WhatsApp Business API** use kar sakte hain, ya manual process:
- Customer booking kare
- Aapko WhatsApp pe message aaye
- Ye already working hai (WhatsApp button)

---

## 📱 Contact for Help

Agar koi problem aaye setup mein:
- Email: support@vinaag.com
- Phone: 7498571873

---

## ✅ Quick Checklist

- [ ] EmailJS account banaya
- [ ] Gmail service add kiya
- [ ] Email template banaya
- [ ] Service ID copy kiya
- [ ] Template ID copy kiya
- [ ] Public Key copy kiya
- [ ] Code mein sab IDs update kiye
- [ ] Apna email address update kiya
- [ ] Test booking kiya
- [ ] Email receive kiya

---

**Sab kuch setup ho gaya toh aapko har booking pe email milega! 🎉**
