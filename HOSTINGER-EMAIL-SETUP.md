# 📧 Hostinger Email Setup Guide

## ✅ Maine Kya Setup Kiya Hai

1. ✅ **Nodemailer** install kar diya
2. ✅ **Email utility** file banai (`lib/email.ts`)
3. ✅ **API route** update kiya email ke saath
4. ✅ **Beautiful HTML email** template banaya

---

## 🔑 Ab Aapko Kya Karna Hai

### **Step 1: Hostinger Email Password Nikalen**

1. **Hostinger** login karein: [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. **Emails** section mein jayen
3. **Email Accounts** pe click karein
4. `support@vinaag.com` ke paas **Manage** pe click karein
5. **Change Password** ya **Show Password** se password dekhen/note karein

---

### **Step 2: Environment File Banayein**

1. Project folder kholen: `c:\Users\Ghanshyam\Desktop\vinaag`
2. `.env.example` file ko **copy** karein
3. Naam change karke `.env.local` rakhen
4. File kholen aur apna password dalein:

```env
# Hostinger Email Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=support@vinaag.com
SMTP_PASSWORD=apna_actual_password_yahan_dalein
SMTP_FROM=support@vinaag.com
```

**⚠️ Important:** 
- `SMTP_PASSWORD` mein apna **actual Hostinger email password** dalein
- Quotes nahi chahiye, seedha password likhen

---

### **Step 3: Hostinger SMTP Settings Verify Karein**

Hostinger ke default SMTP settings ye hain:

| Setting | Value |
|---------|-------|
| **SMTP Host** | smtp.hostinger.com |
| **SMTP Port** | 465 (SSL) ya 587 (TLS) |
| **Username** | support@vinaag.com |
| **Password** | Aapka email password |
| **Encryption** | SSL/TLS |

**Note:** Agar 465 port kaam nahi kare, toh 587 try karein.

---

### **Step 4: Test Karein**

1. **Server restart** karein:
```bash
# Ctrl+C dabakar band karein
npm run dev
```

2. **Browser** mein jayen: `http://localhost:3000/booking`

3. **Test booking** karein:
   - Form fill karein
   - Submit karein
   - Check karein:
     - ✅ `bookings/bookings.txt` file mein data save hua
     - ✅ `support@vinaag.com` pe email aaya

4. **Email check** karein:
   - Hostinger webmail: [webmail.hostinger.com](https://webmail.hostinger.com)
   - Ya apne email client mein

---

## 📧 Email Kaisa Dikhega

Aapko ek **professional HTML email** milega jisme:

- 🎨 **Colorful design** (green theme)
- 📋 **Customer details** clearly organized
- 📅 **Booking details** highlighted
- ⚠️ **Action reminder** (customer ko call karne ke liye)
- 📞 **Contact info** footer mein

---

## 🔧 Troubleshooting

### **Problem 1: Email nahi aa raha**

**Check karein:**
```bash
# Terminal mein ye command run karein
npm run dev
```

Booking submit karne ke baad terminal mein dekhein:
- ✅ "Email sent successfully!" → Email gaya
- ❌ "Email send failed" → Problem hai

**Solutions:**
1. `.env.local` file check karein (password sahi hai?)
2. Hostinger email account active hai?
3. SMTP port 465 ki jagah 587 try karein
4. Internet connection check karein

### **Problem 2: "Authentication failed"**

**Solution:**
- Hostinger email password sahi check karein
- Password mein special characters hain toh quotes mein dalein:
  ```env
  SMTP_PASSWORD="your@password#here"
  ```

### **Problem 3: "Connection timeout"**

**Solution:**
- Port 587 use karein:
  ```env
  SMTP_PORT=587
  ```
- Firewall/antivirus check karein

---

## 🎯 Email Features

### **Automatic Emails Jayengi:**
- ✅ Har naye booking pe
- ✅ Beautiful HTML format mein
- ✅ Customer details ke saath
- ✅ Booking details clearly

### **Email Mein Hoga:**
- Customer ka naam, email, phone
- Address aur city
- Service type aur property type
- Booking date aur time
- Customer ka message (agar hai)

---

## 📱 Mobile Mein Email Check Karein

Hostinger email ko mobile mein setup karein:

### **Gmail App:**
1. Gmail app kholen
2. Settings → Add account → Other
3. Email: `support@vinaag.com`
4. Password: Aapka Hostinger password
5. Incoming server: `imap.hostinger.com`, Port: 993
6. Outgoing server: `smtp.hostinger.com`, Port: 465

### **Outlook App:**
Similar settings use karein

---

## 🔐 Security Tips

1. **.env.local file** ko Git mein **mat** upload karein (already .gitignore mein hai)
2. Password **strong** rakhen
3. Regular password change karein
4. 2FA enable karein Hostinger account pe

---

## 📊 Email Limits

**Hostinger Free/Basic:**
- Usually 100-200 emails per hour
- Agar zyada bookings hain toh upgrade karein

**Hostinger Premium:**
- Unlimited emails
- Better deliverability

---

## ✅ Quick Checklist

- [ ] Hostinger email password nikala
- [ ] `.env.local` file banai
- [ ] Password `.env.local` mein dala
- [ ] Server restart kiya
- [ ] Test booking kiya
- [ ] Email receive kiya
- [ ] Mobile mein email setup kiya (optional)

---

## 🎉 Success!

Agar email aa gaya toh:
- ✅ Booking file mein data save ho raha hai
- ✅ Email notification aa raha hai
- ✅ System fully functional hai!

Ab har booking pe automatically email milega! 🚀

---

## 📞 Still Need Help?

Agar koi problem aa rahi hai:
1. Terminal ka screenshot bhejein
2. Error message batayein
3. Main turant help kar dunga!

**Common Issues:**
- Password wrong → Hostinger se verify karein
- Port blocked → 587 try karein
- Email not received → Spam folder check karein
