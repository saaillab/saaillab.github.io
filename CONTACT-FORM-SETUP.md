# Contact Form Setup Instructions

## Step 1: Set Up Formspree (Free Email Service)

### 1.1 Create Formspree Account
1. **Go to:** https://formspree.io
2. **Click "Get Started"**
3. **Sign up** with your email (innocent@iitmz.ac.in)
4. **Verify your email address**

### 1.2 Create New Form
1. **Click "New Form"**
2. **Form Name:** "SAAIL Lab Contact Form"
3. **Email:** innocent@iitmz.ac.in (where you want to receive emails)
4. **Click "Create Form"**

### 1.3 Get Your Form ID
1. **Copy the form endpoint** (looks like: `https://formspree.io/f/xvgpkjbl`)
2. **Note the form ID** (the part after `/f/` - example: `xvgpkjbl`)

## Step 2: Update Your Website

### 2.1 Replace Form Action
In your `Contact.astro` file, replace:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

With your actual form ID:
```html
<form class="contact-form" action="https://formspree.io/f/xvgpkjbl" method="POST">
```

### 2.2 Test the Form
1. **Deploy your website** with the updated form
2. **Fill out the contact form** on your website
3. **Submit the form**
4. **Check your email** (innocent@iitmz.ac.in) for the message

## Step 3: Customize Email Notifications

### 3.1 Formspree Dashboard Settings
1. **Go to your Formspree dashboard**
2. **Click on your form**
3. **Settings tab:**
   - **Reply-to:** Automatically uses sender's email
   - **Subject:** "New Contact Form Submission - SAAIL Lab"
   - **Redirect:** Back to your contact page

### 3.2 Email Template
Emails you receive will include:
- **Sender's name and email**
- **Institution/Organization**
- **Inquiry type** (Research, Student, Partnership, etc.)
- **Full message**
- **Timestamp**

## Step 4: Advanced Features (Optional)

### 4.1 Spam Protection
Formspree includes built-in spam protection, but you can add:
```html
<!-- Honeypot field (hidden from users) -->
<input type="text" name="_gotcha" style="display:none">
```

### 4.2 Custom Thank You Page
```html
<input type="hidden" name="_next" value="https://inyalala.github.io/saaillab.github.io/thank-you">
```

### 4.3 Email Notifications
```html
<!-- CC yourself -->
<input type="hidden" name="_cc" value="backup@email.com">
```

## Step 5: Alternative Email Services

### Option 1: Netlify Forms (if using Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 2: EmailJS (Client-side)
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

### Option 3: Custom Backend
- Node.js with Nodemailer
- PHP mail() function
- Python with Flask/Django

## Step 6: Testing Checklist

### Test Form Functionality
- [ ] Form submits without errors
- [ ] Email arrives at innocent@iitmz.ac.in
- [ ] All form fields are included in email
- [ ] Reply-to address is sender's email
- [ ] Subject line is correct
- [ ] Redirect works after submission

### Test Email Content
- [ ] Sender name appears correctly
- [ ] Email address is captured
- [ ] Institution/organization field works
- [ ] Inquiry type dropdown functions
- [ ] Message text is complete
- [ ] Timestamp is included

## Step 7: Form Validation & UX

### Client-side Validation
```javascript
// Add to your Contact.astro
<script>
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!email || !message) {
        e.preventDefault();
        alert('Please fill in all required fields.');
    }
});
</script>
```

### Success Message
```css
.form-success {
    background: #d1fae5;
    color: #065f46;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
}
```

## Expected Results

After setup, you'll receive emails like this:

```
Subject: New Contact Form Submission - SAAIL Lab
From: formspree@formspree.io
Reply-To: sender@email.com

Name: Dr. John Smith
Email: sender@email.com
Institution: University of Example
Inquiry Type: Research Collaboration

Message:
Hello Dr. Nyalala,

I'm interested in collaborating on AI for agriculture research...

---
Sent via SAAIL Lab Contact Form
Time: 2024-12-19 10:30 AM UTC
```

## Troubleshooting

### Form Not Working
1. Check form action URL is correct
2. Verify Formspree account is active
3. Ensure method="POST" is set
4. Check for JavaScript errors

### Not Receiving Emails
1. Check spam/junk folder
2. Verify email address in Formspree settings
3. Test with different email addresses
4. Check Formspree dashboard for submissions

### Styling Issues
1. Ensure CSS classes are applied correctly
2. Test responsive design on mobile
3. Verify button styling and hover effects

Your contact form will now be fully functional and you'll receive all inquiries directly to your email address!