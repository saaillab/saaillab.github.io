# Step-by-Step Guide: Create SAAIL Lab Organization

## Step 1: Create GitHub Organization

### 1.1 Go to GitHub
1. **Open:** https://github.com
2. **Make sure you're signed in** to your GitHub account

### 1.2 Create New Organization
1. **Click the "+" icon** in the top-right corner
2. **Select "New organization"**
3. **Choose "Create a free organization"**

### 1.3 Set Up Organization
1. **Organization account name:** `saaillab`
2. **Contact email:** Use your email address
3. **This organization belongs to:** My personal account
4. **Click "Next"**

### 1.4 Complete Setup
1. **Add members:** Skip this for now (click "Complete setup")
2. **Survey questions:** You can skip these
3. **Click "Submit"**

## Step 2: Create Repository Under Organization

### 2.1 Create New Repository
1. **You should now be in the saaillab organization**
2. **Click "Create a new repository"** (green button)

### 2.2 Repository Settings
1. **Repository name:** `saaillab.github.io` (EXACTLY this - very important!)
2. **Description:** "SAAIL Lab - Sustainable AI for Agriculture & Intelligent Livelihoods"
3. **Visibility:** Public ✅ (must be public for GitHub Pages)
4. **Initialize repository:** 
   - ❌ Do NOT check "Add a README file"
   - ❌ Do NOT add .gitignore
   - ❌ Do NOT choose a license
5. **Click "Create repository"**

## Step 3: Upload Your Files

### 3.1 Upload All Project Files
1. **You'll see an empty repository page**
2. **Click "uploading an existing file"**
3. **Upload ALL these files/folders:**
   ```
   src/ (entire folder with all components)
   public/ (entire folder)
   .github/ (entire folder)
   package.json
   astro.config.mjs
   tsconfig.json
   ```

### 3.2 Important: Update Configuration
Before uploading, make sure your `astro.config.mjs` looks like this:

```javascript
// @ts-check
import { defineConfig } from 'astro/config';

// Configuration for saaillab.github.io deployment
export default defineConfig({
  site: 'https://saaillab.github.io',
});
```

**Note:** Remove the `base: '/saaillab.github.io'` line - you don't need it anymore!

### 3.3 Commit Files
1. **Scroll down to "Commit changes"**
2. **Commit message:** "Initial commit: SAAIL Lab website"
3. **Click "Commit changes"**

## Step 4: Enable GitHub Pages

### 4.1 Go to Settings
1. **Click "Settings" tab** in your repository
2. **Click "Pages"** in the left sidebar

### 4.2 Configure Pages
1. **Source:** Select "GitHub Actions"
2. **Custom domain:** Leave empty
3. **Enforce HTTPS:** Should be checked automatically

## Step 5: Wait for Deployment

### 5.1 Check Actions
1. **Click "Actions" tab**
2. **You should see "Deploy SAAIL Lab to GitHub Pages" workflow**
3. **Wait for green checkmark** (2-5 minutes)

### 5.2 Access Your Website
Your website will be live at: **https://saaillab.github.io**

## Step 6: Update Your Personal Website Link

Update the link in your personal website from:
```html
<a href="https://inyalala.github.io/saaillab.github.io/">SAAIL Lab</a>
```

To:
```html
<a href="https://saaillab.github.io/">SAAIL Lab</a>
```

## Expected Results

✅ **Clean URL:** https://saaillab.github.io
✅ **Professional domain** for your research lab
✅ **Easy to remember** and share
✅ **All sections working** (About, Research, Projects, Team, Contact)

## Troubleshooting

### If organization creation fails:
- The name `saaillab` might be taken
- Try `saail-lab` or `saaillab-iitmz`

### If repository creation fails:
- Make sure the name is exactly `saaillab.github.io`
- Make sure it's under the organization, not your personal account

### If deployment fails:
- Check that all files uploaded correctly
- Verify the astro.config.mjs has the correct configuration
- Check Actions tab for error messages

## Benefits of This Setup

1. **Professional URL:** https://saaillab.github.io
2. **Organization branding:** Separate from personal account
3. **Team collaboration:** Can add other researchers later
4. **Clean separation:** Lab website separate from personal portfolio

## Next Steps After Setup

1. **Test the website** at https://saaillab.github.io
2. **Update your personal website** with the new link
3. **Share the new URL** with colleagues and collaborators
4. **Consider adding team members** to the organization later

Let me know when you're ready to start, and I'll help you through each step!