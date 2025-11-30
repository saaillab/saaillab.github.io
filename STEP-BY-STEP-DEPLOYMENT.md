# SAAIL Lab Website - Complete Deployment Guide

## What You Need Before Starting

1. A GitHub account
2. Access to create a new repository named `saaillab.github.io`
3. The project files (which you already have)

## Step 1: Download Your Project Files

Since you asked about downloading files in a zip:

### Option A: Download from Current Environment
1. In your current environment, you can see all the files in the file explorer
2. You need to download these key files and folders:
   - `src/` folder (contains all your website components)
   - `public/` folder (contains favicon and assets)
   - `package.json`
   - `astro.config.mjs`
   - `tsconfig.json`
   - `.github/` folder (contains deployment workflow)

### Option B: Use the Built Files
The project has already been built and the files are in the `dist/` folder. You can use these for a simple deployment.

## Step 2: Create GitHub Repository

1. **Go to GitHub.com and sign in**
2. **Click the "+" icon in the top right corner**
3. **Select "New repository"**
4. **Repository settings:**
   - Repository name: `saaillab.github.io`
   - Description: "SAAIL Lab - Sustainable AI for Agriculture & Intelligent Livelihoods"
   - Make it **Public** (required for GitHub Pages)
   - **DO NOT** check "Add a README file"
   - **DO NOT** add .gitignore or license yet
5. **Click "Create repository"**

## Step 3: Upload Files to GitHub

### Method A: Using GitHub Web Interface (Easiest)

1. **After creating the repository, you'll see an empty repo page**
2. **Click "uploading an existing file"**
3. **Drag and drop ALL your project files** or click "choose your files"
4. **Important files to upload:**
   ```
   src/
   public/
   .github/
   package.json
   astro.config.mjs
   tsconfig.json
   README.md (optional)
   ```
5. **Scroll down to "Commit changes"**
6. **Add commit message:** "Initial commit: SAAIL Lab website"
7. **Click "Commit changes"**

### Method B: Using Git Commands (If you have Git installed)

```bash
# Clone the empty repository
git clone https://github.com/saaillab/saaillab.github.io.git
cd saaillab.github.io

# Copy all your project files into this folder
# Then run:
git add .
git commit -m "Initial commit: SAAIL Lab website"
git push origin main
```

## Step 4: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click on "Settings" tab** (top of the repository page)
3. **Scroll down to "Pages" in the left sidebar**
4. **Under "Source":**
   - Select "GitHub Actions" (not "Deploy from a branch")
5. **The page will refresh and show GitHub Actions is selected**

## Step 5: Wait for Deployment

1. **Go to the "Actions" tab** in your repository
2. **You should see a workflow running** called "Deploy SAAIL Lab to GitHub Pages"
3. **Wait for it to complete** (usually 2-5 minutes)
4. **When it shows a green checkmark, your site is deployed**

## Step 6: Access Your Website

Your website will be available at: **https://saaillab.github.io**

## What You Should See

### During Upload:
- Files being uploaded to GitHub
- Repository showing your files

### During Deployment:
- Actions tab showing "Deploy SAAIL Lab to GitHub Pages" workflow
- Yellow circle (running) → Green checkmark (success)

### After Deployment:
- Your website live at https://saaillab.github.io
- Professional SAAIL Lab website with all sections

## Linking with Your Personal Website

Your personal website (inyalala.github.io) now has links to the SAAIL Lab:
- In the header navigation: "Dr. Nyalala's Portfolio" 
- In the footer: "Visit Dr. Nyalala's Portfolio" button

To add a link FROM your personal site TO SAAIL Lab:
1. Edit your personal website
2. Add a link: `<a href="https://saaillab.github.io">SAAIL Lab Research</a>`

## Troubleshooting

### If the build fails:
1. Check the "Actions" tab for error messages
2. Ensure all files were uploaded correctly
3. Make sure the repository is public

### If the site doesn't load:
1. Wait 5-10 minutes (GitHub Pages can be slow)
2. Try accessing in an incognito/private browser window
3. Check that GitHub Pages is enabled in Settings

### If you see a 404 error:
1. Verify the repository name is exactly `saaillab.github.io`
2. Check that the main branch has your files
3. Ensure GitHub Pages source is set to "GitHub Actions"

## Next Steps After Deployment

1. **Test your website** - Click through all sections
2. **Share the link** - https://saaillab.github.io
3. **Update your personal website** to link to SAAIL Lab
4. **Monitor the Actions tab** for future updates

## Making Updates Later

To update your website:
1. Edit files in the GitHub repository (or upload new versions)
2. Commit the changes
3. The site will automatically rebuild and deploy

## File Structure You Should Have

```
saaillab.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── public/
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## Success Indicators

✅ Repository created with name `saaillab.github.io`
✅ All files uploaded to GitHub
✅ GitHub Pages enabled with "GitHub Actions" source
✅ Deployment workflow completed successfully
✅ Website accessible at https://saaillab.github.io
✅ All sections working (About, Research, Projects, Team, Contact)
✅ Links to your personal website working

## Need Help?

If you encounter any issues:
1. Check the specific error message in GitHub Actions
2. Verify all files are present in the repository
3. Ensure the repository is public
4. Wait a few minutes and try again

Your SAAIL Lab website should now be live and professional!