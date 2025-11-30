# Fresh Upload Instructions for SAAIL Lab Website

## The Issue
You have green checkmarks but still see the old website. This is almost always a **browser cache issue**, but let's get you fresh files and force an update.

## Quick Fix First (Try This!)

### Step 1: Force Browser Refresh
1. **Hold Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
2. **Or try incognito/private browsing mode**
3. **Visit:** https://inyalala.github.io/saaillab.github.io

### Step 2: Force GitHub Pages Rebuild
1. **Go to your repository:** https://github.com/inyalala/saaillab.github.io
2. **Actions tab → Latest workflow**
3. **Click "Re-run all jobs"**
4. **Wait 3-5 minutes**

## If Still Not Working - Fresh Upload Method

### Method 1: Update Single File to Force Rebuild
1. **Go to your repository**
2. **Click on `package.json`**
3. **Click edit (pencil icon)**
4. **Add a space somewhere (like after a comma)**
5. **Commit with message: "Force rebuild"**
6. **Wait for deployment**

### Method 2: Complete Fresh Upload
If you really want to start fresh:

1. **Download all current files** from your repository
2. **Delete the repository** (Settings → Danger Zone → Delete)
3. **Create new repository** with same name: `saaillab.github.io`
4. **Upload all files at once**
5. **Enable GitHub Pages** (Settings → Pages → GitHub Actions)

## Files You Need for Fresh Upload

### Core Files:
```
src/
├── components/
│   ├── About.astro
│   ├── Contact.astro (UPDATED)
│   ├── Footer.astro
│   ├── Header.astro (UPDATED - Clickable Logo)
│   ├── Hero.astro
│   ├── Projects.astro
│   ├── Research.astro
│   └── Team.astro
├── layouts/
│   └── Layout.astro (UPDATED - Google Analytics)
└── pages/
    └── index.astro

public/
└── favicon.svg

.github/
└── workflows/
    └── deploy.yml

package.json
astro.config.mjs
tsconfig.json
```

## What's New in Updated Files

### ✅ **Header.astro** - Clickable Logo
- Logo now clickable and scrolls to top
- Smooth scroll animation
- Hover effects on logo

### ✅ **Contact.astro** - Working Contact Form
- Form sends emails to innocent@iitmz.ac.in
- Professional email formatting
- All form fields included

### ✅ **Layout.astro** - Google Analytics
- Your tracking code G-4MEPY7MLVN added
- Tracks all pages automatically

## Most Likely Solution

**90% chance this is just browser cache.** Try:
1. **Ctrl+Shift+R** to force refresh
2. **Incognito mode**
3. **Wait 10 minutes** after deployment
4. **Different browser**

## Verification Steps

After any changes:
1. **Check Actions tab** - Green checkmark ✅
2. **Wait 5 minutes** minimum
3. **Force refresh browser** (Ctrl+Shift+R)
4. **Try incognito mode**
5. **Check on mobile device**

## Contact Form Setup

Don't forget to:
1. **Sign up at Formspree.io**
2. **Create form** for SAAIL Lab
3. **Replace form ID** in Contact.astro
4. **Test the form**

Your website should update with all the new changes once the cache clears!