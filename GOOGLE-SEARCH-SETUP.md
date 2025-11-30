# Google Search Console Setup Guide

## Step 1: Add Your Site to Google Search Console

### 1.1 Go to Google Search Console
1. **Visit:** https://search.google.com/search-console
2. **Sign in** with your Google account
3. **Click "Add Property"**

### 1.2 Add Your Website
1. **Select "URL prefix"** (not Domain)
2. **Enter:** `https://saaillab.github.io`
3. **Click "Continue"**

### 1.3 Verify Ownership
**Method 1: HTML Tag (Recommended)**
1. **Copy the meta tag** Google provides
2. **Add it to your Layout.astro** in the `<head>` section
3. **Deploy your changes**
4. **Click "Verify" in Google Search Console**

**Method 2: HTML File**
1. **Download the HTML file** Google provides
2. **Upload it to your `public/` folder**
3. **Deploy your changes**
4. **Click "Verify"**

## Step 2: Submit Your Sitemap

### 2.1 Submit Sitemap
1. **In Google Search Console, go to "Sitemaps"**
2. **Enter:** `sitemap.xml`
3. **Click "Submit"**

### 2.2 Check Sitemap Status
- Should show "Success" status
- All 7 URLs should be discovered
- May take 24-48 hours to fully process

## Step 3: Request Indexing

### 3.1 Manual URL Inspection
1. **Go to "URL Inspection"** in Search Console
2. **Enter:** `https://saaillab.github.io`
3. **Click "Request Indexing"**
4. **Wait for confirmation**

### 3.2 Monitor Indexing
- Check "Coverage" report for indexed pages
- Monitor "Performance" for search appearances
- Usually takes 1-7 days for new sites

## Step 4: Optimize for Search

### 4.1 Key Search Terms
Your site is now optimized for these searches:
- "Dr Innocent Nyalala"
- "SAAIL Lab IIT Madras"
- "AI agriculture Tanzania"
- "Sustainable farming East Africa"
- "Medical imaging AI Zanzibar"

### 4.2 Monitor Performance
- **Impressions:** How often your site appears in search
- **Clicks:** How many people click through
- **Position:** Average ranking in search results
- **CTR:** Click-through rate

## Step 5: Additional SEO Actions

### 5.1 Create Google My Business (Optional)
If you want local search visibility:
1. **Create business profile** for SAAIL Lab
2. **Add location:** IIT Madras Zanzibar
3. **Include research focus** in description

### 5.2 Social Media Integration
- **Share your website** on LinkedIn, Twitter
- **Include in email signatures**
- **Add to conference presentations**

## Expected Timeline

### **Week 1:**
- Site submitted and verified
- Sitemap processed
- Initial crawling begins

### **Week 2-4:**
- Pages start appearing in search results
- Search performance data becomes available
- Rankings improve for your name

### **Month 2-3:**
- Established presence for research terms
- Higher rankings for "SAAIL Lab" and related terms
- Increased organic traffic

## Troubleshooting

### If Verification Fails:
- Ensure meta tag is in `<head>` section
- Check that site is deployed and accessible
- Try HTML file method instead

### If Sitemap Not Found:
- Verify `sitemap.xml` is in `public/` folder
- Check that file is accessible at `https://saaillab.github.io/sitemap.xml`
- Wait 24 hours and try again

### If No Search Results:
- New sites can take 2-4 weeks to appear
- Keep creating quality content
- Share your site on social media for faster discovery

Your SAAIL Lab website is now fully optimized for Google search and should start appearing in results within 1-2 weeks!