# 📸 Website Mein Photos Kaise Add Karein

## 📂 Step 1: Photos Ko Sahi Folder Mein Dalein

### **Public Folder Structure:**

```
vinaag/
└── public/
    └── images/
        ├── logo.png              (Company logo)
        ├── hero-bg.jpg           (Home page background)
        ├── services/
        │   ├── termite.jpg
        │   ├── rodent.jpg
        │   ├── cockroach.jpg
        │   ├── bedbug.jpg
        │   ├── mosquito.jpg
        │   └── commercial.jpg
        ├── about/
        │   ├── team.jpg
        │   └── office.jpg
        └── gallery/
            ├── work1.jpg
            ├── work2.jpg
            └── work3.jpg
```

---

## 🖼️ Step 2: Folder Banayein

1. **Project folder** kholen: `c:\Users\Ghanshyam\Desktop\vinaag`
2. **public** folder kholen (already hai)
3. **images** folder banayein (agar nahi hai)
4. Andar **services**, **about**, **gallery** folders banayein

---

## 📥 Step 3: Photos Copy Karein

1. Apne photos select karein
2. Copy karein (Ctrl+C)
3. Sahi folder mein paste karein (Ctrl+V)

**Example:**
- Termite control ki photo → `public/images/services/termite.jpg`
- Team photo → `public/images/about/team.jpg`

---

## 💻 Step 4: Code Mein Use Karein

### **Method 1: Next.js Image Component (Recommended)**

```tsx
import Image from 'next/image'

<Image 
  src="/images/services/termite.jpg"
  alt="Termite Control Service"
  width={600}
  height={400}
  className="rounded-lg"
/>
```

### **Method 2: Simple HTML Image**

```tsx
<img 
  src="/images/services/termite.jpg" 
  alt="Termite Control Service"
  className="w-full h-auto rounded-lg"
/>
```

---

## 🎨 Specific Examples

### **1. Home Page Hero Image Add Karein**

**File**: `app/page.tsx`

**Find this section** (around line 64):
```tsx
<section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
```

**Replace with:**
```tsx
<section className="relative bg-cover bg-center py-20" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="container mx-auto px-4 relative z-10">
```

### **2. Services Page Mein Photos Add Karein**

**File**: `app/services/page.tsx`

Service card mein image add karein:

```tsx
<div className="bg-white p-8 rounded-lg shadow-lg">
  <img 
    src="/images/services/termite.jpg" 
    alt="Termite Control"
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
  <service.icon className="w-16 h-16 text-primary-600 mb-4" />
  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
  ...
</div>
```

### **3. About Page Mein Team Photo**

**File**: `app/about/page.tsx`

```tsx
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <img 
        src="/images/about/team.jpg"
        alt="Our Expert Team"
        className="w-full rounded-lg shadow-lg mb-8"
      />
      <Users className="w-16 h-16 text-primary-600 mx-auto mb-6" />
      ...
    </div>
  </div>
</section>
```

### **4. Gallery Section Banayein (Home Page)**

```tsx
{/* Gallery Section */}
<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <img src="/images/gallery/work1.jpg" alt="Work 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
      <img src="/images/gallery/work2.jpg" alt="Work 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
      <img src="/images/gallery/work3.jpg" alt="Work 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
    </div>
  </div>
</section>
```

---

## 🎯 Image Optimization Tips

### **Recommended Image Sizes:**

- **Hero Background**: 1920x1080px (landscape)
- **Service Images**: 800x600px
- **Team Photos**: 1200x800px
- **Gallery Images**: 800x600px
- **Logo**: 300x300px (transparent PNG)

### **File Formats:**

- **Photos**: `.jpg` (smaller file size)
- **Graphics/Logo**: `.png` (transparent background)
- **Icons**: `.svg` (scalable)

### **File Size:**

- Keep images under 500KB
- Use online tools to compress: [tinypng.com](https://tinypng.com)

---

## 🔄 Quick Example: Logo Add Karein

### **Step 1: Logo File**
- Logo ko `public/images/logo.png` mein save karein

### **Step 2: Header Update Karein**

**File**: `components/Header.tsx`

**Find** (around line 36):
```tsx
<Link href="/" className="flex items-center">
  <div className="text-2xl font-bold text-primary-600">
    VINAAG
    <span className="text-gray-700 text-sm block">Pest Control</span>
  </div>
</Link>
```

**Replace with:**
```tsx
<Link href="/" className="flex items-center gap-3">
  <img 
    src="/images/logo.png" 
    alt="Vinaag Logo" 
    className="h-12 w-12"
  />
  <div className="text-2xl font-bold text-primary-600">
    VINAAG
    <span className="text-gray-700 text-sm block">Pest Control</span>
  </div>
</Link>
```

---

## 📱 Responsive Images

Mobile pe sahi dikhne ke liye:

```tsx
<img 
  src="/images/hero-bg.jpg"
  alt="Hero"
  className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
/>
```

---

## ✅ Checklist

- [ ] `public/images` folder banaya
- [ ] Sub-folders banaye (services, about, gallery)
- [ ] Photos copy kiye
- [ ] Photos ka naam sahi rakha (no spaces, lowercase)
- [ ] Code mein path sahi likha (`/images/...`)
- [ ] Server restart kiya (`npm run dev`)
- [ ] Browser mein check kiya

---

## 🚨 Common Problems

### **Problem 1: Image nahi dikh rahi**
**Solution:**
- Path check karein: `/images/...` (forward slash)
- File name exact match hona chahiye
- Server restart karein

### **Problem 2: Image blur hai**
**Solution:**
- High resolution image use karein
- Image compress karein (quality maintain karke)

### **Problem 3: Slow loading**
**Solution:**
- Images compress karein
- Next.js Image component use karein (automatic optimization)

---

## 🎨 Pro Tips

1. **Consistent Style**: Sab images ka same aspect ratio rakhen
2. **Alt Text**: Har image mein descriptive alt text dalein (SEO ke liye)
3. **Lazy Loading**: Next.js Image component automatically lazy load karta hai
4. **WebP Format**: Modern format use karein (better compression)

---

## 📞 Need Help?

Agar koi specific image add karni hai ya problem aa rahi hai, batayein!
Main exact code likh dunga. 🚀
