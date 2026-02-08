# Images Folder Organization

This folder contains all images used throughout the Only Apple Tech website.

## 📁 Folder Structure

```
images/
├── README.md (this file)
├── blog/              # Blog article images
├── showcase/          # Device showcase carousel images
├── services/          # Service cards images
└── ui/                # UI elements (logo, backgrounds, etc.)
```

---

## 📂 Folder Descriptions

### 🗂️ `/blog/`
**Purpose**: Images for blog articles (featured images and in-article images)

**Current Status**: Empty - ready for your blog images

**What to Put Here**:
- Featured images for blog articles
- In-article images and diagrams
- Screenshots and illustrations

**Naming Convention**: `article-topic-description.webp`
- Example: `iphone-battery-health.webp`, `macbook-thermal-guide.webp`

**See**: `images/blog/README.md` for detailed instructions

---

### 🗂️ `/showcase/`
**Purpose**: Images for the Device Showcase carousel on the homepage

**Current Files** (6 images):
- `iphone.webp` - iPhone showcase image
- `macbook.webp` - MacBook showcase image
- `ipad.webp` - iPad showcase image
- `apple-watch.webp` - Apple Watch showcase image
- `imac-new.webp` - iMac showcase image
- `mac-mini.webp` - Mac Mini showcase image

**Image Specs**:
- Aspect Ratio: Square (1:1) for mobile, 4:3 for desktop
- Recommended Size: 800x800px minimum
- Format: WebP

**Referenced In**: `script.js` (showcaseSlides array)

---

### 🗂️ `/services/`
**Purpose**: Images for the "What We Can Fix" services section

**Current Files** (6 images):
- `iphone.webp` - iPhone repair service
- `macbook.webp` - MacBook repair service
- `ipad.webp` - iPad repair service
- `apple-watch.webp` - Apple Watch service
- `imac.webp` - iMac service
- `mac-mini.webp` - Mac Mini service

**Image Specs**:
- Aspect Ratio: Square (1:1) for mobile, 4:3 for desktop
- Recommended Size: 800x800px minimum
- Format: WebP
- Content: Before/after repair images work well

**Referenced In**: `script.js` (repairSlides array)

---

### 🗂️ `/ui/`
**Purpose**: UI elements, logos, backgrounds, and design assets

**Current Files** (5 images):
- `logo.webp` - Company logo (9.3 KB)
- `repair-hero.webp` - Hero section image (33.6 KB)
- `card-background.webp` - Card background texture (109 KB)
- `wood-texture.webp` - Wood texture for cards (2.9 KB)
- `google-logo.webp` - Google logo for reviews (21.9 KB)

**Image Specs**: Varies by use case

**Referenced In**: 
- `index.html` - Logo, hero image
- `style.css` - Background textures
- Various HTML files

---

## 🎨 Image Guidelines

### General Best Practices

1. **Format**: Use WebP for best compression and quality
2. **Optimization**: Compress images before uploading (aim for <100KB each)
3. **Naming**: Use lowercase, descriptive names with hyphens (no spaces)
4. **Backup**: Keep original high-resolution versions elsewhere
5. **Consistency**: Maintain similar styling across related images

### Recommended Image Sizes

| Location | Recommended Size | Aspect Ratio | Max File Size |
|----------|-----------------|--------------|---------------|
| Blog Featured | 1200x675px | 16:9 | 200 KB |
| Showcase Cards | 800x800px | 1:1 | 100 KB |
| Service Cards | 800x800px | 1:1 | 100 KB |
| Logo | 300x100px | 3:1 | 20 KB |
| Hero Image | 1920x1080px | 16:9 | 150 KB |

---

## 🔧 How to Add/Replace Images

### Adding a New Blog Image

1. Save your image in `images/blog/`
2. Update `blog-article.js` with the image path
3. Update `blog.js` with the same path
4. See `images/blog/README.md` for detailed instructions

### Replacing Showcase/Service Images

1. Create a new image matching the specs above
2. Save with the same filename in the respective folder (or use a new name)
3. If using a new name, update `script.js`:
   - For showcase: Update `showcaseSlides` array
   - For services: Update `repairSlides` array

### Replacing UI Elements

1. Create a new image matching the original specs
2. Save with the same filename in `images/ui/`
3. If changing the logo, ensure it works on both light and dark backgrounds

---

## 🗑️ Cleaning Up Unused Images

To find unused images:

```bash
# Search for image references in the codebase
grep -r "image-name.webp" /home/n/Desktop/only_apple_care/
```

If an image is not referenced anywhere, it can be safely deleted.

---

## 🔗 Useful Tools

### Image Optimization
- **TinyPNG**: https://tinypng.com (PNG/JPG compression)
- **Squoosh**: https://squoosh.app (WebP conversion & optimization)
- **CloudConvert**: https://cloudconvert.com/webp-converter

### Free Stock Photos
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

### Image Editing
- **Photopea**: https://photopea.com (Free online Photoshop alternative)
- **Canva**: https://canva.com (Easy graphic design)

---

## 📊 Current Storage Usage

```
Total Images: 17 files
Total Size: ~630 KB

Breakdown:
- blog/: 0 files (0 KB) - Empty, ready for content
- showcase/: 6 files (~258 KB)
- services/: 6 files (~260 KB)
- ui/: 5 files (~176 KB)
```

---

## 💡 Tips

- **WebP Format**: Saves 25-35% file size compared to JPG/PNG
- **Lazy Loading**: Images are lazy-loaded for better performance
- **Responsive**: Images adapt to different screen sizes
- **Alt Text**: Always add descriptive alt text in HTML for SEO
- **Version Control**: Keep track of image changes if using Git

---

**Last Updated**: January 22, 2026
**Maintained By**: Only Apple Tech
