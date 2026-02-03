# Blog Article Images

This folder contains all images used in blog articles.

## 📁 Folder Structure

```
images/blog/
├── README.md (this file)
├── article-1-image.webp
├── article-2-image.webp
└── ... (your blog images)
```

## 📝 How to Add Images for Blog Articles

### Step 1: Prepare Your Image

1. **Recommended Format**: WebP (best compression and quality)
2. **Alternative Formats**: JPG or PNG (will work but larger file size)
3. **Recommended Size**: 
   - Width: 1200-1600px (for featured images)
   - Height: 600-800px (for featured images)
   - Keep file size under 200KB for best performance

### Step 2: Convert to WebP (Optional but Recommended)

**Using Online Tools:**
- Visit: https://cloudconvert.com/webp-converter
- Upload your image and convert to WebP

**Using Command Line (if you have ImageMagick):**
```bash
convert your-image.jpg your-image.webp
```

### Step 3: Add Image to This Folder

1. Save your image in this folder: `/images/blog/`
2. Use descriptive names: `iphone-maintenance-hero.webp`, `macbook-thermal-guide.webp`
3. Avoid spaces in filenames - use hyphens instead

### Step 4: Reference in Your Article

In `blog-article.js`, update the `image` field:

```javascript
{
    id: 10,
    title: "Your Article Title",
    image: "images/blog/your-image.webp", // Add path here
    // ... rest of article
}
```

Also update the same in `blog.js`:

```javascript
{
    id: 10,
    title: "Your Article Title",
    image: "images/blog/your-image.webp", // Must match blog-article.js
    // ... rest of metadata
}
```

## 🎨 Image Guidelines

### Featured Images (Article Thumbnails)
- **Aspect Ratio**: 16:9 or 4:3
- **Dimensions**: 1200x675px (16:9) or 1200x900px (4:3)
- **Content**: Should represent the article topic visually
- **Text**: Minimal or no text overlay (let the title speak)

### In-Article Images
- **Placement**: Use gradient placeholders in the content or add real images
- **Format**: WebP for best performance
- **Size**: Optimize for web (under 100KB each)

## 📋 Naming Conventions

Use descriptive, lowercase names with hyphens:

✅ **Good Examples:**
- `iphone-battery-health.webp`
- `macbook-thermal-management.webp`
- `ipad-storage-optimization.webp`
- `apple-watch-sensors.webp`

❌ **Bad Examples:**
- `IMG_1234.jpg`
- `Screen Shot 2026-01-22.png`
- `my image.webp` (has spaces)

## 🗑️ Cleaning Up Unused Images

Periodically check for unused images:

1. Search your codebase for the image filename
2. If not referenced in `blog-article.js` or `blog.js`, it can be deleted
3. Keep a backup before deleting, just in case

## 💡 Tips

- **Consistency**: Use similar styling for all featured images
- **Quality**: High-quality images improve user engagement
- **Performance**: Compress images before uploading
- **Backup**: Keep original high-resolution versions elsewhere
- **Attribution**: If using stock photos, keep track of licenses

## 🔗 Useful Resources

- **Free Stock Photos**: 
  - Unsplash: https://unsplash.com
  - Pexels: https://pexels.com
  
- **Image Optimization**:
  - TinyPNG: https://tinypng.com
  - Squoosh: https://squoosh.app
  
- **WebP Conversion**:
  - CloudConvert: https://cloudconvert.com/webp-converter

---

**Last Updated**: January 22, 2026
