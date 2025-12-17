# NBNE Website Deployment Workflow

## The Problem We Had

The website broke because:
1. Changes were made to the live site via direct Netlify CLI deploys
2. Those changes were **never committed to Git**
3. When new Git commits were pushed, they overwrote the live site with an outdated version
4. The Git repo became the "source of truth" but contained old code

---

## The Solution: Single Source of Truth

**RULE: All website changes MUST go through Git → GitHub → Netlify**

Never deploy directly to Netlify without committing to Git first.

---

## Correct Workflow for Website Updates

### Step 1: Pull Latest Changes
```powershell
cd "g:\My Drive\002 NBNE ADMIN\056 WEBSITE\009 FRAMER\website"
git pull origin main
```

### Step 2: Make Your Changes
Edit files in the `website` folder using your preferred editor or Cascade.

### Step 3: Test Locally (Optional)
Open `index.html` in a browser to preview changes.

### Step 4: Commit Changes
```powershell
git add .
git commit -m "Brief description of changes"
```

### Step 5: Push to GitHub
```powershell
git push origin main
```

Netlify will automatically deploy within 1-2 minutes.

### Step 6: Verify
Check https://nbnesigns.co.uk to confirm changes are live.

---

## Handling Separate App Developments

If you're developing separate apps (RAMS Generator, Survey Tool, etc.) in different Cascade chats:

### Option A: Separate Repositories (Recommended)
- Each app has its own GitHub repo
- Each app deploys to its own subdomain (e.g., rams.nbnesigns.co.uk)
- Main website repo remains independent

### Option B: Monorepo with Subdirectories
- All apps live in the same repo under `/apps/`
- Main website lives in `/website/`
- Netlify deploys from `/website/` directory only

### Current Setup
| Project | Repo | Deploys To |
|---------|------|------------|
| Main Website | NBNEORIGIN/nbne-website | nbnesigns.co.uk |
| Assessment Tool | (separate) | assess.nbnesigns.co.uk |

---

## Emergency Recovery

If the site breaks after a bad deploy:

### Option 1: Rollback via Netlify
```powershell
# List recent deploys
netlify api listSiteDeploys --data '{"site_id": "16786467-fde8-49f2-8340-600781e39d6f"}' | Select-String -Pattern '"id"|"created_at"|"title"' | Select-Object -First 30

# Rollback to a specific deploy
netlify api restoreSiteDeploy --data '{"site_id": "16786467-fde8-49f2-8340-600781e39d6f", "deploy_id": "DEPLOY_ID_HERE"}'
```

### Option 2: Revert Git Commit
```powershell
git revert HEAD --no-edit
git push origin main
```

### Option 3: Download Live Site & Sync
If live site has changes not in Git:
```powershell
# Download from a working deploy
Invoke-WebRequest -Uri "https://DEPLOY_ID--playful-narwhal-f07205.netlify.app/index.html" -OutFile "index.html"
Invoke-WebRequest -Uri "https://DEPLOY_ID--playful-narwhal-f07205.netlify.app/style.css" -OutFile "style.css"

# Commit the synced files
git add .
git commit -m "Sync with live site"
git push origin main
```

---

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Main homepage |
| `style.css` | All styling |
| `script.js` | JavaScript functionality |
| `assets/` | Images, logos, SVGs |
| `services/` | Service pages |
| `netlify.toml` | Netlify configuration |

---

## Netlify Project Info

- **Site Name:** playful-narwhal-f07205
- **Site ID:** 16786467-fde8-49f2-8340-600781e39d6f
- **Live URL:** https://nbnesigns.co.uk
- **GitHub Repo:** https://github.com/NBNEORIGIN/nbne-website
- **Admin:** https://app.netlify.com/projects/playful-narwhal-f07205

---

## Checklist Before Any Cascade Chat

When starting a new Cascade chat that might touch the website:

- [ ] Confirm which repo/project you're working on
- [ ] Pull latest from Git before making changes
- [ ] Commit ALL changes to Git before deploying
- [ ] Never use `netlify deploy --prod` without Git commit first

---

## Contact

If something breaks and you can't fix it, the Netlify deploy history preserves all previous versions. You can always rollback.

Last updated: December 17, 2025
