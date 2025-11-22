# NBNE Website - Netlify CLI Deployment Guide

## 🚀 Quick Start

You now have automated deployment scripts for your NBNE website!

---

## 📋 Prerequisites

### 1. Install Netlify CLI

Open PowerShell or Command Prompt and run:

```bash
npm install -g netlify-cli
```

If you don't have Node.js/npm installed:
1. Download from: https://nodejs.org/
2. Install the LTS version
3. Restart your terminal
4. Run the command above

### 2. Authenticate with Netlify

```bash
netlify login
```

This will open your browser to authorize the CLI.

### 3. Link Your Site

Navigate to your website folder:

```bash
cd "g:\My Drive\002 NBNE ADMIN\056 WEBSITE\009 FRAMER\website"
```

Link to your existing Netlify site:

```bash
netlify link
```

Choose "Use current git remote origin" or "Enter a site ID" (if you know it).

---

## 🎯 Deployment Scripts

### Option 1: Preview Deployment (Recommended First)

**Double-click:** `deploy-preview.bat`

**Or run manually:**
```bash
cd "g:\My Drive\002 NBNE ADMIN\056 WEBSITE\009 FRAMER\website"
netlify deploy --dir=.
```

**What it does:**
- Creates a temporary preview URL
- Does NOT affect your live site
- Perfect for testing changes before going live
- You'll get a unique URL like: `https://deploy-preview-123--nbnesigns.netlify.app`

**Use this when:**
- Testing new service pages
- Checking layout changes
- Verifying links work
- Showing client previews

---

### Option 2: Production Deployment

**Double-click:** `deploy.bat`

**Or run manually:**
```bash
cd "g:\My Drive\002 NBNE ADMIN\056 WEBSITE\009 FRAMER\website"
netlify deploy --prod --dir=.
```

**What it does:**
- Deploys directly to your live site
- Updates https://nbnesigns.co.uk immediately
- No preview step

**Use this when:**
- You've tested changes in preview
- Making urgent fixes
- You're confident in your changes

---

## 🔄 Recommended Workflow

### For Major Changes (New Service Pages, Layout Updates)

1. **Make your changes** to HTML files
2. **Preview first:**
   ```bash
   # Double-click deploy-preview.bat
   # Or run: netlify deploy --dir=.
   ```
3. **Test the preview URL** thoroughly
   - Check all links
   - Test on mobile
   - Verify content
4. **Deploy to production:**
   ```bash
   # Double-click deploy.bat
   # Or run: netlify deploy --prod --dir=.
   ```

### For Minor Changes (Text Updates, Small Fixes)

1. **Make your changes**
2. **Deploy directly:**
   ```bash
   # Double-click deploy.bat
   ```

---

## 📁 What Gets Deployed

When you deploy, Netlify uploads:
- ✅ `index.html` (Homepage)
- ✅ `style.css` (Styles)
- ✅ `script.js` (JavaScript)
- ✅ `services/*.html` (All 8 service pages)
- ✅ `assets/` folder (Images, logos)
- ✅ `netlify.toml` (Configuration)

**NOT deployed:**
- ❌ `.md` files (documentation)
- ❌ `.bat` files (deployment scripts)
- ❌ Any files in `.gitignore` (if you add one)

---

## ⚙️ Netlify Configuration

The `netlify.toml` file includes:

### Security Headers
- Protects against clickjacking
- Prevents MIME type sniffing
- XSS protection
- Referrer policy

### Performance Optimization
- Caching for images (1 year)
- Caching for CSS/JS (1 year)
- Caching for HTML (1 hour)

### Future Features Ready
- Form handling setup (commented out)
- Redirect rules template
- Custom 404 page support

---

## 🛠️ Useful Commands

### Check Deployment Status
```bash
netlify status
```

### View Site Info
```bash
netlify sites:list
```

### Open Live Site
```bash
netlify open:site
```

### Open Netlify Dashboard
```bash
netlify open:admin
```

### View Recent Deploys
```bash
netlify deploy:list
```

### Rollback to Previous Deploy
```bash
# View deploy list first
netlify deploy:list

# Rollback using deploy ID
netlify rollback --deploy-id=DEPLOY_ID
```

---

## 🔍 Deploy Previews in Detail

### What Are Deploy Previews?

Deploy previews are temporary versions of your site that:
- Have a unique URL (e.g., `https://5f8a7b9c--nbnesigns.netlify.app`)
- Don't affect your live site
- Stay active for a few days
- Perfect for testing and client approval

### Creating a Deploy Preview

**Method 1: Using the script**
```bash
# Double-click deploy-preview.bat
```

**Method 2: Command line**
```bash
cd "g:\My Drive\002 NBNE ADMIN\056 WEBSITE\009 FRAMER\website"
netlify deploy --dir=.
```

**Method 3: With a custom message**
```bash
netlify deploy --dir=. --message="Testing new metal tags page"
```

### After Preview Deployment

You'll see output like:
```
✔ Deploy is live!

Website Draft URL: https://5f8a7b9c--nbnesigns.netlify.app

If everything looks good on your draft URL, deploy it to your main site URL with the --prod flag.
netlify deploy --prod
```

**Test your preview:**
1. Open the Draft URL in your browser
2. Check all pages work
3. Test on mobile devices
4. Verify forms and links
5. If good → deploy to production!

---

## 📊 Monitoring Deployments

### View Deploy Logs

```bash
netlify logs:deploy
```

### Watch Live Logs

```bash
netlify logs:function --follow
```

### Check Build Status

```bash
netlify status
```

---

## 🚨 Troubleshooting

### Issue: "Command not found: netlify"

**Solution:**
```bash
# Reinstall Netlify CLI
npm install -g netlify-cli

# Or update it
npm update -g netlify-cli
```

### Issue: "Not authorized"

**Solution:**
```bash
# Re-authenticate
netlify logout
netlify login
```

### Issue: "Site not found"

**Solution:**
```bash
# Re-link your site
cd "g:\My Drive\002 NBNE ADMIN\056 WEBSITE\009 FRAMER\website"
netlify unlink
netlify link
```

### Issue: Deploy fails with errors

**Solution:**
```bash
# Check for file path issues
netlify deploy --dir=. --debug

# Verify you're in the right directory
cd "g:\My Drive\002 NBNE ADMIN\056 WEBSITE\009 FRAMER\website"
pwd
```

### Issue: Changes not showing on live site

**Solution:**
1. Clear browser cache (Ctrl+Shift+R)
2. Check you used `--prod` flag
3. Wait 30 seconds for CDN propagation
4. Verify deploy completed successfully

---

## 🎓 Advanced Tips

### 1. Deploy Specific Files Only

```bash
# Deploy only service pages
netlify deploy --dir=services --prod
```

### 2. Set Custom Deploy Message

```bash
netlify deploy --prod --message="Added UV glass bottle printing page"
```

### 3. Deploy with Environment Variables

```bash
netlify deploy --prod --context=production
```

### 4. Alias a Deploy Preview

```bash
# Create a memorable URL for a preview
netlify deploy --alias=client-review
# Creates: https://client-review--nbnesigns.netlify.app
```

### 5. Schedule Deploys (Using Netlify Dashboard)

You can set up scheduled deploys in the Netlify dashboard for:
- Regular content updates
- Automated backups
- Timed launches

---

## 📝 Best Practices

### ✅ DO:
- Always preview major changes first
- Use meaningful deploy messages
- Test preview URLs thoroughly
- Keep your CLI updated
- Check deploy logs if issues occur

### ❌ DON'T:
- Deploy directly to production without testing
- Deploy with broken links
- Forget to test mobile responsiveness
- Deploy without checking the preview URL first

---

## 🔐 Security Notes

Your `netlify.toml` includes security headers that:
- Prevent clickjacking attacks
- Block MIME type sniffing
- Enable XSS protection
- Control referrer information

These are automatically applied to all deployments.

---

## 📞 Quick Reference

### Most Common Commands

```bash
# Preview deployment
netlify deploy --dir=.

# Production deployment
netlify deploy --prod --dir=.

# Check status
netlify status

# Open site
netlify open:site

# View deploys
netlify deploy:list

# Rollback
netlify rollback
```

---

## 🎯 Your Deployment Checklist

Before deploying to production:

- [ ] Changes tested locally
- [ ] Preview deployment created and tested
- [ ] All links work correctly
- [ ] Mobile responsiveness verified
- [ ] Images load properly
- [ ] Forms work (if applicable)
- [ ] No console errors
- [ ] SEO meta tags correct
- [ ] Ready to go live!

---

## 🆘 Need Help?

- **Netlify CLI Docs:** https://docs.netlify.com/cli/get-started/
- **Netlify Support:** https://www.netlify.com/support/
- **Community Forum:** https://answers.netlify.com/

---

## 🎉 You're All Set!

Your NBNE website now has:
- ✅ One-click preview deployments
- ✅ One-click production deployments
- ✅ Automated configuration
- ✅ Security headers
- ✅ Performance optimization
- ✅ Easy rollback capability

**Happy deploying!** 🚀

---

*Last updated: November 2024*
