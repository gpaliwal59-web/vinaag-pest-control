# 🚀 Hostinger Pe Website Kaise Deploy Karein

## 📋 Overview

Hostinger pe Next.js website deploy karne ke **2 main options** hain:

### **Option 1: Node.js Hosting (Recommended)**
- Best for Next.js
- Full features support
- Dynamic routes work karenge
- API routes work karenge

### **Option 2: Static Export**
- Cheaper option
- Basic hosting pe chal jayega
- Kuch features limited honge

---

## 🎯 Option 1: Node.js Hosting (Best Method)

### **Step 1: Hostinger Node.js Hosting Check Karein**

1. Hostinger hPanel login karein
2. Check karein ki aapke plan mein **Node.js support** hai
3. Agar nahi hai toh **VPS** ya **Cloud Hosting** plan lein

### **Step 2: Project Build Karein**

Local computer pe:

```bash
cd c:\Users\Ghanshyam\Desktop\vinaag

# Dependencies install karein (agar nahi kiya)
npm install

# Production build banayein
npm run build

# Test karein locally
npm start
```

### **Step 3: Files Upload Karein**

**Upload karne ke liye:**

#### **Method A: FTP/SFTP (Recommended)**

1. **FileZilla** download karein: [filezilla-project.org](https://filezilla-project.org/)

2. **Hostinger FTP Details** nikalen:
   - hPanel → Files → FTP Accounts
   - Host: ftp.yourdomain.com
   - Username: your_ftp_username
   - Password: your_ftp_password
   - Port: 21 (FTP) ya 22 (SFTP)

3. **FileZilla mein connect** karein

4. **Upload karein ye files/folders:**
   ```
   ✅ .next/               (build folder)
   ✅ public/              (images, logo, etc)
   ✅ node_modules/        (ya server pe npm install karein)
   ✅ package.json
   ✅ package-lock.json
   ✅ next.config.js
   ✅ .env.local           (email settings)
   ❌ .git/               (mat upload karein)
   ❌ .gitignore
   ❌ README.md
   ❌ *.md files
   ```

5. **Upload location:**
   - Usually: `/public_html/` ya `/domains/yourdomain.com/public_html/`

#### **Method B: Git Deploy**

Agar Hostinger mein Git support hai:

```bash
# GitHub pe repository banayein
git init
git add .
git commit -m "Initial commit"
git remote add origin your-github-repo-url
git push -u origin main

# Hostinger hPanel se Git connect karein
```

### **Step 4: Server Setup**

**SSH se connect karein:**

```bash
# Hostinger hPanel → Advanced → SSH Access
ssh username@yourdomain.com

# Project folder mein jayen
cd public_html

# Dependencies install karein (agar upload nahi kiye)
npm install --production

# Build karein (agar local build upload nahi kiya)
npm run build

# PM2 install karein (process manager)
npm install -g pm2

# Application start karein
pm2 start npm --name "vinaag-website" -- start

# Auto-restart on server reboot
pm2 startup
pm2 save
```

### **Step 5: Domain Configure Karein**

1. **hPanel** → **Domains**
2. Apna domain select karein
3. **Document Root** set karein: `/public_html`
4. **Node.js Application** enable karein
5. **Port** set karein: 3000 (ya jo available ho)

### **Step 6: Environment Variables**

**hPanel mein:**
1. **Advanced** → **Environment Variables**
2. Add karein:
   ```
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=support@vinaag.com
   SMTP_PASSWORD=00GD*#paliwal123
   SMTP_FROM=support@vinaag.com
   ```

---

## 💡 Option 2: Static Export (Simple Method)

Agar Node.js hosting nahi hai, toh static site banayein:

### **Step 1: next.config.js Update Karein**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### **Step 2: Build Karein**

```bash
npm run build
```

Ye `out/` folder banayega.

### **Step 3: Upload Karein**

**FileZilla se:**
1. `out/` folder ke andar ki **sab files** select karein
2. `/public_html/` mein upload karein

**⚠️ Limitations:**
- API routes kaam nahi karenge (booking email nahi jayega)
- Dynamic features limited honge
- Server-side rendering nahi hoga

---

## 📁 Final Folder Structure (Server Pe)

```
public_html/
├── .next/                  (build files)
├── public/
│   ├── logo.png
│   └── images/
├── bookings/               (booking data)
│   └── bookings.txt
├── node_modules/
├── package.json
├── .env.local             (environment variables)
└── next.config.js
```

---

## 🔧 Troubleshooting

### **Problem 1: Website nahi khul rahi**

**Check karein:**
```bash
# SSH se
pm2 status
pm2 logs vinaag-website

# Restart karein
pm2 restart vinaag-website
```

### **Problem 2: Images nahi dikh rahi**

**Solution:**
- `public/` folder properly upload hua hai check karein
- File permissions check karein: `chmod 755 public/`

### **Problem 3: Booking email nahi aa raha**

**Check karein:**
1. `.env.local` file upload hui hai
2. Environment variables sahi hain
3. SMTP port (465 ya 587) firewall mein open hai

### **Problem 4: Port already in use**

**Solution:**
```bash
# Different port use karein
PORT=3001 npm start

# Ya running process kill karein
pm2 delete vinaag-website
pm2 start npm --name "vinaag-website" -- start
```

---

## ✅ Post-Deployment Checklist

- [ ] Website khul rahi hai (yourdomain.com)
- [ ] Logo dikh raha hai
- [ ] Sab pages load ho rahe hain
- [ ] Navigation kaam kar raha hai
- [ ] WhatsApp button kaam kar raha hai
- [ ] Booking form submit ho raha hai
- [ ] Email aa raha hai (test booking karein)
- [ ] Mobile pe sahi dikh raha hai
- [ ] SSL certificate active hai (https://)

---

## 🔐 Security Tips

1. **`.env.local` file** ko secure rakhen
2. **File permissions** sahi set karein:
   ```bash
   chmod 644 .env.local
   chmod 755 public/
   ```
3. **Bookings folder** ko protect karein:
   ```bash
   chmod 700 bookings/
   ```
4. **Regular backups** lein

---

## 📊 Performance Optimization

### **1. Enable Caching**

`.htaccess` file banayein:

```apache
# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>
```

### **2. Image Optimization**

- Images ko compress karein (tinypng.com)
- WebP format use karein
- Lazy loading enable hai (Next.js automatic karta hai)

---

## 🆘 Support

### **Hostinger Support:**
- Live Chat: hPanel se
- Email: support@hostinger.com
- Knowledge Base: hostinger.com/tutorials

### **Common Commands:**

```bash
# Application status
pm2 status

# Logs dekhein
pm2 logs

# Restart
pm2 restart vinaag-website

# Stop
pm2 stop vinaag-website

# Delete
pm2 delete vinaag-website

# Server restart pe auto-start
pm2 startup
pm2 save
```

---

## 🎉 Success!

Agar sab kuch sahi hai toh:
- ✅ Website live hai
- ✅ Bookings kaam kar rahi hain
- ✅ Emails aa rahe hain
- ✅ Professional website ready hai!

**Congratulations! 🎊**

---

## 📞 Need Help?

Agar deployment mein koi problem aaye:
1. Error message screenshot lein
2. PM2 logs check karein
3. Hostinger support se contact karein
4. Ya mujhe batayein, main help kar dunga!
