# How to Set Up https://saaillab.github.io Domain

## Current Situation
- Your repository: `inyalala/saaillab.github.io`
- Current URL: `https://inyalala.github.io/saaillab.github.io/`
- Desired URL: `https://saaillab.github.io/`

## What You Need to Do

### Option 1: Create Organization Repository (Recommended)

#### Step 1: Create GitHub Organization
1. **Go to GitHub.com**
2. **Click the "+" icon → "New organization"**
3. **Organization name:** `saaillab`
4. **Choose "Free" plan**
5. **Complete the setup**

#### Step 2: Create Repository Under Organization
1. **In the saaillab organization**
2. **Click "New repository"**
3. **Repository name:** `saaillab.github.io` (EXACTLY this name)
4. **Make it PUBLIC**
5. **Don't initialize with README**
6. **Click "Create repository"**

#### Step 3: Upload Your Files
1. **Upload ALL your project files** to the new repository
2. **Use this configuration in `astro.config.mjs`:**

```javascript
// @ts-check
import { defineConfig } from 'astro/config';

// Configuration for saaillab.github.io deployment
export default defineConfig({
  site: 'https://saaillab.github.io',
});
```

#### Step 4: Enable GitHub Pages
1. **Go to Settings → Pages**
2. **Source:** GitHub Actions
3. **Wait for deployment**

### Option 2: Transfer Existing Repository

#### Step 1: Create Organization (as above)

#### Step 2: Transfer Repository
1. **Go to your current repository:** `inyalala/saaillab.github.io`
2. **Settings → General**
3. **Scroll to "Danger Zone"**
4. **Click "Transfer ownership"**
5. **New owner:** `saaillab`
6. **Repository name:** `saaillab.github.io`
7. **Confirm transfer**

#### Step 3: Update Configuration
1. **Edit `astro.config.mjs` in the transferred repository:**

```javascript
// @ts-check
import { defineConfig } from 'astro/config';

// Configuration for saaillab.github.io deployment
export default defineConfig({
  site: 'https://saaillab.github.io',
});
```

2. **Commit the change**

## Important Notes

### Repository Naming Rules
- For `https://saaillab.github.io` to work, the repository MUST be named exactly `saaillab.github.io`
- It MUST be under the `saaillab` organization/user account
- It MUST be public

### Configuration Changes
- Remove the `base: '/saaillab.github.io'` line
- Set `site` to `https://saaillab.github.io`

### GitHub Pages Settings
- Source: GitHub Actions (not "Deploy from a branch")
- Custom domain: Leave empty

## Expected Result

After completing either option:
✅ **Clean URL:** https://saaillab.github.io
✅ **Professional domain** for your research lab
✅ **All functionality** working correctly
✅ **Easy to remember** and share

## Which Option to Choose?

### Option 1 (Create New) - Choose if:
- You want a fresh start
- You don't mind re-uploading files
- You want to ensure everything is clean

### Option 2 (Transfer) - Choose if:
- You want to keep your commit history
- You don't want to re-upload files
- You're comfortable with repository transfers

## Alternative: Keep Current Setup

If creating an organization is too complex, you can keep your current setup:
- URL: `https://inyalala.github.io/saaillab.github.io/`
- Works perfectly fine
- No additional setup needed
- Just update your personal website link

## Next Steps

1. **Decide which option** you prefer
2. **Create the organization** (if needed)
3. **Set up the repository** with correct name
4. **Update configuration** file
5. **Update links** in your personal website

Let me know which option you'd like to pursue and I'll guide you through the specific steps!