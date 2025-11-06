# ⚡ Quick Deployment Steps - Hostinger

## 🎯 Sabse Aasan Tarika (Static Export)

### **Step 1: Local Setup Complete Karein**

```bash
cd c:\Users\Ghanshyam\Desktop\vinaag

# 1. Logo save karein
# Logo image ko save karein: public\logo.png

# 2. Email password setup
# .env.local file banayein with:
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=support@vinaag.com
SMTP_PASSWORD=00GD*#paliwal123
SMTP_FROM=support@vinaag.com

# 3. Test karein
npm run dev
# Browser: http://localhost:3000
```

---

### **Step 2: Production Build Banayein**

```bash
# Build command
npm run build

# Ye .next folder banayega with production files
```

---

### **Step 3: FileZilla Setup**

1. **Download FileZilla**: https://filezilla-project.org/
2. **Install** karein
3. **Hostinger FTP details** nikalen:
   - Login: hpanel.hostinger.com
   - Files → FTP Accounts
   - Details copy karein

---

### **Step 4: Files Upload Karein**

**FileZilla mein:**

1. **Connect** karein (Host, Username, Password, Port 21)

2. **Left side** (Local): `c:\Users\Ghanshyam\Desktop\vinaag`

3. **Right side** (Server): `/public_html/` ya `/domains/yourdomain.com/public_html/`

4. **Upload ye folders/files:**
   ```
   ✅ .next/               (IMPORTANT - build files)
   ✅ public/              (logo aur images)
   ✅ node_modules/        (ya server pe npm install)
   ✅ package.json
   ✅ package-lock.json
   ✅ next.config.js
   ✅ .env.local
   ✅ app/
   ✅ components/
   ✅ lib/
   
   ❌ .git/               (mat upload karein)
   ❌ .gitignore
   ❌ README.md
   ❌ *.md files
   ```

5. **Upload time**: 10-20 minutes (internet speed pe depend karta hai)

---

### **Step 5: Server Pe Setup**

**Option A: Hostinger hPanel se (Easy)**

1. **hPanel** → **Advanced** → **Node.js**
2. **Enable Node.js** for your domain
3. **Application Root**: `/public_html`
4. **Application URL**: yourdomain.com
5. **Application Startup File**: `node_modules/next/dist/bin/next`
6. **Node.js version**: 18.x ya higher
7. **Save** karein

**Option B: SSH se (Advanced)**

```bash
# SSH connect
ssh username@yourdomain.com

# Project folder
cd public_html

# Dependencies install (agar upload nahi kiye)
npm install --production

# PM2 se start
npm install -g pm2
pm2 start npm --name "vinaag" -- start
pm2 save
```

---

### **Step 6: Domain Configure**

1. **hPanel** → **Domains**
2. Apna domain select karein
3. **Manage** → **DNS/Nameservers**
4. Check karein domain properly point kar raha hai

---

### **Step 7: Test Karein**

1. **Browser** mein apna domain kholen: `https://yourdomain.com`
2. **Check karein:**
   - [ ] Website load ho rahi hai
   - [ ] Logo dikh raha hai
   - [ ] Sab pages kaam kar rahe hain
   - [ ] Navigation working
   - [ ] WhatsApp button working
   - [ ] Booking form submit ho raha hai
   - [ ] Email aa raha hai (test booking)

---

## 📋 Files Upload Checklist

### **Must Upload:**
- [x] `.next/` folder (complete)
- [x] `public/logo.png`
- [x] `public/images/` (agar photos hain)
- [x] `package.json`
- [x] `package-lock.json`
- [x] `next.config.js`
- [x] `.env.local`
- [x] `app/` folder (all pages)
- [x] `components/` folder
- [x] `lib/` folder (email utility)

### **Optional:**
- [ ] `node_modules/` (ya server pe install karein)
- [ ] `bookings/` folder (automatically banegi)

### **Don't Upload:**
- [ ] `.git/`
- [ ] `.gitignore`
- [ ] `README.md`
- [ ] `*.md` files
- [ ] `.env.example`

---

## 🚨 Common Issues & Quick Fixes

### **Issue 1: Website nahi khul rahi**

```bash
# SSH se check
pm2 status
pm2 logs vinaag

# Restart
pm2 restart vinaag
```

### **Issue 2: "Module not found" error**

```bash
# Server pe
cd public_html
npm install
pm2 restart vinaag
```

### **Issue 3: Logo nahi dikh raha**

- Check: `public/logo.png` upload hua hai
- File permissions: `chmod 755 public/`
- Browser cache clear karein (Ctrl+Shift+R)

### **Issue 4: Email nahi aa raha**

- `.env.local` file check karein
- Password sahi hai verify karein
- Hostinger email account active hai check karein

---

## ⏱️ Estimated Time

- **Local setup**: 5 minutes
- **Build**: 2-3 minutes
- **Upload**: 10-20 minutes
- **Server setup**: 5-10 minutes
- **Testing**: 5 minutes

**Total**: 30-45 minutes

---

## 📞 Quick Help

### **Hostinger Support:**
- Live Chat: hPanel bottom-right
- Email: support@hostinger.com
- Phone: Check hPanel for number

### **Important Links:**
- hPanel: https://hpanel.hostinger.com
- Webmail: https://webmail.hostinger.com
- FileZilla: https://filezilla-project.org

---

## ✅ Final Checklist

Before going live:

- [ ] Logo saved at `public/logo.png`
- [ ] `.env.local` created with email password
- [ ] Local test successful (`npm run dev`)
- [ ] Production build created (`npm run build`)
- [ ] All files uploaded via FileZilla
- [ ] Node.js enabled on Hostinger
- [ ] Domain configured
- [ ] Website opens on domain
- [ ] Test booking done
- [ ] Email received
- [ ] Mobile responsive check
- [ ] SSL/HTTPS working

---

## 🎉 Done!

Website live ho gayi! 🚀

**Next Steps:**
1. Social media pe share karein
2. Google My Business listing banayein
3. SEO optimize karein
4. Regular bookings check karein

**Congratulations!** 🎊
