# Contact Form Setup - Formspree Integration 📧

## ✅ What's Been Done

Your contact form is now configured to send emails to both:
- **toby@nbnesigns.com** (primary)
- **jo@nbnesigns.com** (CC)

---

## 🔧 How It Works

**Service:** Formspree (Free tier - 50 submissions/month)
**Form ID:** `xdkopbvg`
**Endpoint:** `https://formspree.io/f/xdkopbvg`

### Email Routing:
- **Primary recipient:** toby@nbnesigns.com
- **CC recipient:** jo@nbnesigns.com
- **Subject line:** "New Contact Form Submission - nbnesigns.co.uk"

---

## 🚀 IMPORTANT: Activation Required!

### Step 1: Confirm Your Email (REQUIRED)
When you deploy the site and someone submits the first form:

1. **Formspree will send a confirmation email to toby@nbnesigns.com**
2. **You MUST click the confirmation link** in that email
3. Only after confirmation will forms start working

**Until you confirm, forms will NOT be delivered!**

---

## 📋 Form Fields Captured

The form collects:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Message** (required)

All submissions include:
- Timestamp
- Sender's IP address
- User agent (browser info)

---

## 🎯 User Experience

### When Form is Submitted:
1. Button changes to "Sending..."
2. Button is disabled during submission
3. Success: "Thank you! Your message has been sent..."
4. Error: "Oops! Please email us directly at toby@nbnesigns.com"
5. Form resets after successful submission

### Email You'll Receive:
```
From: Formspree <noreply@formspree.io>
To: toby@nbnesigns.com
CC: jo@nbnesigns.com
Subject: New Contact Form Submission - nbnesigns.co.uk

Name: [Customer Name]
Email: [customer@email.com]
Phone: [Phone Number]
Message: [Their message]

---
Sent via nbnesigns.co.uk contact form
```

---

## 🆓 Free Tier Limits

**Formspree Free Plan:**
- ✅ 50 submissions per month
- ✅ Unlimited forms
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (not currently used)
- ❌ No custom "from" address
- ❌ No custom thank you page

**If you exceed 50/month:**
- Upgrade to Gold ($10/month) for 1,000 submissions
- Or use alternative service

---

## 🔐 Spam Protection

**Built-in protection:**
- ✅ Honeypot field (hidden from users)
- ✅ reCAPTCHA integration available
- ✅ Rate limiting
- ✅ Email validation

**To add reCAPTCHA (optional):**
Add to form:
```html
<input type="hidden" name="_captcha" value="true">
```

---

## 📊 Tracking Submissions

### View Submissions Dashboard:
1. Go to https://formspree.io
2. Sign in with toby@nbnesigns.com
3. View all submissions, export data, manage settings

### What You Can See:
- All form submissions
- Submission timestamps
- Sender details
- Export to CSV
- Spam filtering settings

---

## 🛠️ Alternative Options (If Needed)

### Option 1: Netlify Forms (Recommended if on Netlify)
- Free: 100 submissions/month
- Built into Netlify
- No external service needed

**To switch:**
```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 2: Web3Forms
- Free: Unlimited submissions
- No account needed
- Simple API key

### Option 3: EmailJS
- Free: 200 emails/month
- Client-side only
- More customization

---

## 🧪 Testing the Form

### Before Going Live:
1. Deploy the website
2. Submit a test form
3. Check toby@nbnesigns.com inbox
4. **Click the Formspree confirmation link**
5. Submit another test
6. Verify both toby@ and jo@ receive it

### Test Checklist:
- [ ] Form submits without errors
- [ ] Confirmation email received
- [ ] Confirmation link clicked
- [ ] Test submission received by toby@
- [ ] Test submission received by jo@
- [ ] Subject line is correct
- [ ] All form fields captured
- [ ] Form resets after submission

---

## ⚙️ Advanced Configuration (Optional)

### Custom Thank You Page:
Add to form:
```html
<input type="hidden" name="_next" value="https://nbnesigns.co.uk/thank-you">
```

### Custom Reply-To:
Add to form:
```html
<input type="hidden" name="_replyto" value="customer-email-field">
```

### Disable Auto-Reply:
Add to form:
```html
<input type="hidden" name="_autoresponse" value="false">
```

---

## 🚨 Troubleshooting

### Forms Not Being Received?

**Check:**
1. ✅ Did you confirm the Formspree email?
2. ✅ Check spam/junk folders
3. ✅ Verify form action URL is correct
4. ✅ Check browser console for errors
5. ✅ Test with different email addresses

### Common Issues:

**"Form not found" error:**
- Form ID is incorrect
- Formspree account not confirmed

**Emails going to spam:**
- Add noreply@formspree.io to contacts
- Whitelist formspree.io domain

**Form submits but no email:**
- Confirmation link not clicked
- Check Formspree dashboard for submissions

---

## 📞 Support

### Formspree Support:
- Email: support@formspree.io
- Docs: https://help.formspree.io
- Status: https://status.formspree.io

### Your Form Details:
- **Form ID:** xdkopbvg
- **Endpoint:** https://formspree.io/f/xdkopbvg
- **Dashboard:** https://formspree.io/forms/xdkopbvg

---

## ✅ Summary

**What's Configured:**
- ✅ Contact form with Formspree
- ✅ Sends to toby@nbnesigns.com
- ✅ CC to jo@nbnesigns.com
- ✅ Custom subject line
- ✅ Loading states
- ✅ Error handling
- ✅ Form validation

**Next Steps:**
1. Deploy the website
2. Submit a test form
3. Check email and confirm Formspree
4. Test again to verify delivery
5. Monitor submissions in dashboard

---

**Your contact form is ready to receive messages!** 📧

**Remember: You MUST confirm the Formspree email after the first submission!** ⚠️
