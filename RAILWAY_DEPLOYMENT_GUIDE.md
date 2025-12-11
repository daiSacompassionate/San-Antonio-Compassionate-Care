# Railway Deployment Guide: San Antonio Compassionate Care
## 🚀 Fast & Cost-Efficient Cloud Deployment ($5/month)

---

## 📋 Overview

This guide will help you deploy your San Antonio Compassionate Care application to the cloud using:
- **Railway** - Backend + PostgreSQL ($5/month)
- **Cloudflare Pages** - Frontend (FREE)
- **Total Time**: ~30 minutes
- **Total Cost**: $5/month

---

## 🎯 Architecture

```
Internet (sacompassionatecare.com)
        ↓
Cloudflare Pages (Frontend)
        ↓
Railway (Backend API + PostgreSQL)
```

---

## ✅ Prerequisites

Before starting, ensure you have:
- [ ] GitHub account
- [ ] Railway account (we'll create this)
- [ ] Cloudflare account (we'll create this)
- [ ] Domain: sacompassionatecare.com (or any domain)
- [ ] Your code pushed to GitHub repository
- [ ] Credit/debit card for Railway ($5/month after trial)

---

## 📦 PHASE 0: GitHub Repository Setup (10 minutes)

### Step 0.1: Change GitHub Repository Remote

**⚠️ Important Note:** The project was initially connected to the old repository. We've now updated it to point to the new repository.

**Old Repository:** `https://github.com/TharushaTDK/San-Antonio-Compassionate-Care.git`  
**New Repository:** `https://github.com/daiSacompassionate/San-Antonio-Compassionate-Care.git`

### Step 0.2: Update Git Remote Configuration

The git remote was updated by modifying the `.git/config` file:

**Previous Configuration:**
```ini
[remote "origin"]
	url = https://github.com/TharushaTDK/San-Antonio-Compassionate-Care.git
	fetch = +refs/heads/*:refs/remotes/origin/*
```

**New Configuration:**
```ini
[remote "origin"]
	url = https://github.com/daiSacompassionate/San-Antonio-Compassionate-Care.git
	fetch = +refs/heads/*:refs/remotes/origin/*
```

**To verify the remote:**
```bash
git remote -v
# Should show:
# origin  https://github.com/daiSacompassionate/San-Antonio-Compassionate-Care.git (fetch)
# origin  https://github.com/daiSacompassionate/San-Antonio-Compassionate-Care.git (push)
```

### Step 0.3: GitHub Authentication Setup

**⚠️ Critical:** GitHub no longer supports password authentication for Git operations. You must use a Personal Access Token (PAT).

#### Creating a GitHub Personal Access Token

1. **Go to GitHub Settings:**
   - Visit https://github.com/settings/tokens
   - Or: Click your profile → Settings → Developer settings → Personal access tokens

2. **Generate New Token:**
   - Click **"Generate new token"** → **"Generate new token (classic)"**
   - Name: `San-Antonio-Care-Deployment`
   - Expiration: Choose based on your preference (90 days or no expiration)
   
3. **Select Scopes:**
   - ✅ `repo` (Full control of private repositories)
   - This includes all sub-scopes needed for pushing code

4. **Generate and Copy:**
   - Click **"Generate token"**
   - **⚠️ IMPORTANT:** Copy the token immediately (you won't see it again!)
   - Token format: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

#### Token Setup Example

**Account:** daiSacompassionate  
**Email:** admin@sacompassionatecare.com  
**Token Type:** Classic Personal Access Token  
**Token:** `ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` (Replace with your actual token)

**Security Note:** Store this token securely. Treat it like a password. Never commit actual tokens to Git.

### Step 0.4: Push Code to New Repository

**First Time Push (using token):**
```bash
# Push with token authentication
git push https://daiSacompassionate:YOUR_TOKEN_HERE@github.com/daiSacompassionate/San-Antonio-Compassionate-Care.git main
```

**Example command format:**
```bash
git push https://daiSacompassionate:YOUR_GITHUB_TOKEN_HERE@github.com/daiSacompassionate/San-Antonio-Compassionate-Care.git main
```

**Output:**
```
Enumerating objects: 189, done.
Counting objects: 100% (189/189), done.
Delta compression using up to 8 threads
Compressing objects: 100% (175/175), done.
Writing objects: 100% (189/189), 5.02 MiB | 1.67 MiB/s, done.
Total 189 (delta 78), reused 68 (delta 10), pack-reused 0
remote: Resolving deltas: 100% (78/78), done.
To https://github.com/daiSacompassionate/San-Antonio-Compassionate-Care.git
 * [new branch]      main -> main
```

✅ **Success!** All 189 objects (5.02 MB) successfully pushed to the new repository.

### Step 0.5: Configure Git Credential Storage

To avoid entering your token every time you push:

```bash
# Enable credential storage
git config credential.helper store
```

**What this does:**
- Stores credentials in plain text in `~/.git-credentials`
- Automatically uses saved credentials for future operations
- Works across all repositories

**Alternative (macOS Keychain):**
```bash
git config credential.helper osxkeychain
```

**Alternative (Windows Credential Manager):**
```bash
git config credential.helper manager
```

### Step 0.6: Verify Repository Setup

```bash
# Check current remote
git remote -v

# Check current branch
git branch --show-current

# Check repository status
git status

# Test push access (dry run)
git push --dry-run origin main
```

### Step 0.7: Troubleshooting GitHub Authentication

#### Issue: "Permission denied" or 403 Error

**Symptoms:**
```
remote: Permission to daiSacompassionate/San-Antonio-Compassionate-Care.git denied
fatal: unable to access 'https://github.com/...': The requested URL returned error: 403
```

**Common Causes & Solutions:**

1. **Using Fine-grained Token without proper permissions:**
   - Fine-grained tokens need explicit repository access
   - **Solution:** Use Classic Personal Access Token instead
   - Or configure Fine-grained token:
     - Repository access: Select specific repository
     - Permissions: Contents (Read and Write)

2. **Token expired:**
   - Check token expiration in GitHub settings
   - Generate new token if expired

3. **Wrong token scope:**
   - Token must have `repo` scope
   - Regenerate with correct permissions

4. **Repository doesn't exist:**
   - Verify repository exists at GitHub URL
   - Check spelling and capitalization

#### Issue: "Password authentication is not supported"

**Solution:** Use Personal Access Token instead of password (as documented above).

#### Issue: Token not working after creation

**Checklist:**
- [ ] Token has `repo` scope enabled
- [ ] Repository exists and is accessible
- [ ] Token hasn't expired
- [ ] Using Classic token (not Fine-grained without proper config)
- [ ] Copied complete token (no truncation)

---

## 📦 PHASE 1: Prepare Your Repository (5 minutes)

### Step 1.1: Ensure Code is on GitHub

Your repository is now at: `https://github.com/daiSacompassionate/San-Antonio-Compassionate-Care.git`

✅ **Already Completed:** Code has been pushed to the new repository (189 objects, 5.02 MB)

If you have additional local changes, push them:
```bash
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

**Note:** With credential storage enabled, you won't need to enter your token again.

### Step 1.2: Create Backend Environment Template

Create a `.env.example` file in the backend directory if it doesn't exist:

```bash
cd backend
cat > .env.example << 'EOF'
# Server Configuration
NODE_ENV=production
PORT=5000

# Database Configuration (Railway will auto-populate)
PGUSER=postgres
PGHOST=
PGDATABASE=
PGPASSWORD=
PGPORT=5432

# JWT Secret
JWT_SECRET=

# CORS Origin
CORS_ORIGIN=
EOF
```

### Step 1.3: Verify Backend Structure

Make sure your backend has:
- ✅ `package.json` with start script: `"start": "node server.js"`
- ✅ `server.js` as entry point
- ✅ PostgreSQL connection configuration
- ✅ `schema.sql` for database setup

---

## � PHASE 2: Deploy Backend to Railway (10 minutes)

### Step 2.1: Create Railway Account

1. Go to https://railway.app/
2. Click **"Start a New Project"** or **"Login"**
3. Sign up with **GitHub** (recommended)
4. Authorize Railway to access your repositories

### Step 2.2: Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose: **"San-Antonio-Compassionate-Care"**
4. Railway will detect your Node.js backend automatically

### Step 2.3: Add PostgreSQL Database

1. In your Railway project dashboard, click **"+ New"**
2. Select **"Database"**
3. Choose **"PostgreSQL"**
4. Railway will provision a database automatically
5. Click on the PostgreSQL service to view connection details

### Step 2.4: Configure Backend Service

1. Click on your **backend service** (the one with your code)
2. Go to **"Variables"** tab
3. Add the following environment variables:

**Add These Variables:**

```env
NODE_ENV=production
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345_railway
CORS_ORIGIN=https://sacompassionatecare.com
```

**Database Variables (Copy from PostgreSQL service):**

**Option 1: Direct Values (Your Actual Configuration):**
```env
PGHOST=postgres.railway.internal
PGPORT=5432
PGUSER=postgres
PGPASSWORD=xqkGKwoDHXfkjBvfyycIGPaYTlYmngMI
PGDATABASE=railway
```

**Option 2: Use Railway's Reference Variables (Recommended - Auto-updates):**
```env
PGHOST=${{Postgres.PGHOST}}
PGPORT=${{Postgres.PGPORT}}
PGUSER=${{Postgres.PGUSER}}
PGPASSWORD=${{Postgres.PGPASSWORD}}
PGDATABASE=${{Postgres.PGDATABASE}}
```

**How to get these values:**
1. Click on your PostgreSQL service
2. Go to **"Variables"** or **"Connect"** tab
3. Copy the values shown there
4. Paste them into your backend service Variables tab

**Note:** Using reference variables (Option 2) is recommended as they automatically update if you regenerate database credentials.

### Step 2.5: Setup Database Schema

**Option A: Using Railway PostgreSQL Client**
1. Click on PostgreSQL service
2. Go to **"Data"** tab
3. Click **"Query"**
4. Copy and paste your `schema.sql` content
5. Click **"Run"**

**Option B: Using Local Connection**
```bash
# Get connection string from Railway PostgreSQL service
# Copy the DATABASE_URL from Variables tab

# Connect and run schema
psql "your_railway_database_url_here" < backend/schema.sql
```

### Step 2.6: Seed Admin Users (Optional)

If you need to create admin users:

1. Add a seed script to your `package.json`:
```json
"scripts": {
  "start": "node server.js",
  "seed": "node seedAdmins.js"
}
```

2. In Railway backend service, go to **"Settings"** → **"Deploy"**
3. Add custom start command: `npm run seed && npm start`

OR run seed manually using Railway's terminal.

### Step 2.7: Deploy Backend

1. Railway auto-deploys on every GitHub push
2. Check **"Deployments"** tab to see progress
3. Once deployed, click **"View Logs"** to verify no errors
4. Go to **"Settings"** → **"Networking"**
5. Click **"Generate Domain"** to get your backend URL
6. Copy the URL (e.g., `https://your-app.up.railway.app`)

### Step 2.8: Test Backend

```bash
# Test if backend is running
curl https://your-app.up.railway.app/

# Test API endpoints
curl https://your-app.up.railway.app/api/
```

---

## 🌐 PHASE 3: Deploy Frontend to Cloudflare Pages (10 minutes)

### Step 3.1: Create Cloudflare Account

1. Go to https://dash.cloudflare.com/sign-up
2. Create account with email
3. Verify your email

### Step 3.2: Add Your Domain (Optional)

If you want to use sacompassionatecare.com:
1. Go to **"Websites"** → **"Add a site"**
2. Enter: **sacompassionatecare.com**
3. Select **Free** plan
4. Update nameservers at your domain registrar
5. Wait for DNS propagation (5 mins - 48 hours)

### Step 3.3: Create Cloudflare Pages Project

1. In Cloudflare Dashboard, go to **"Workers & Pages"**
2. Click **"Create application"**
3. Select **"Pages"** tab
4. Click **"Connect to Git"**
5. Authorize Cloudflare with GitHub
6. Select repository: **"San-Antonio-Compassionate-Care"**

### Step 3.4: Configure Build Settings

**Project Name:** `san-antonio-care` (or your choice)

**Production Branch:** `main`

**Build Settings:**
- **Framework preset**: Vite
- **Build command**: `cd frontend && npm install && npm run build`
- **Build output directory**: `frontend/dist`
- **Root directory**: `/` (leave as project root)

**Environment Variables:**
Add this variable:
```
VITE_BACKEND_URL=https://your-railway-backend.up.railway.app/api
```
(Replace with your Railway backend URL from Step 2.7)

### Step 3.5: Deploy Frontend

1. Click **"Save and Deploy"**
2. Wait for build to complete (2-5 minutes)
3. Once deployed, you'll get a URL like: `https://san-antonio-care.pages.dev`

### Step 3.6: Setup Custom Domain

1. In your Pages project, go to **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter: **sacompassionatecare.com**
4. Click **"Continue"**
5. Cloudflare will automatically configure DNS
6. Also add: **www.sacompassionatecare.com**
7. Wait 2-5 minutes for SSL certificate activation

---

## 🔧 PHASE 4: Final Configuration (5 minutes)

### Step 4.1: Update CORS in Backend

Make sure your Railway backend CORS_ORIGIN includes your frontend URL:

In Railway backend service Variables:
```env
CORS_ORIGIN=https://sacompassionatecare.com,https://san-antonio-care.pages.dev,https://www.sacompassionatecare.com
```

**Or update in your backend code** (`app.js` or `server.js`):
```javascript
const cors = require('cors');

app.use(cors({
  origin: [
    'https://sacompassionatecare.com',
    'https://www.sacompassionatecare.com',
    'https://san-antonio-care.pages.dev'
  ],
  credentials: true
}));
```

Commit and push changes:
```bash
git add .
git commit -m "Update CORS for production"
git push origin main
```

Railway will auto-deploy the changes.

### Step 4.2: Update Frontend API URL

Verify your frontend `.env` or `vite.config.js`:

**Frontend .env:**
```env
VITE_BACKEND_URL=https://your-railway-backend.up.railway.app/api
```

If you need to update, commit and push:
```bash
git add .
git commit -m "Update API endpoint"
git push origin main
```

Cloudflare Pages will auto-deploy.

### Step 4.3: Test Complete Application

1. Visit: **https://sacompassionatecare.com** (or your Cloudflare Pages URL)
2. Check that homepage loads
3. Test navigation
4. Try submitting inquiry form
5. Test tour scheduling form
6. Try admin login at `/login`

---

## 📊 PHASE 5: Monitoring & Management

### Railway Dashboard

**View Logs:**
1. Go to Railway project
2. Click on backend service
3. Go to **"Observability"** tab
4. View real-time logs

**Monitor Usage:**
1. Go to **"Usage"** in project settings
2. Track monthly costs
3. Set usage alerts

**Database Management:**
1. Click PostgreSQL service
2. Go to **"Data"** tab to query database
3. Use **"Backups"** for database snapshots

### Cloudflare Pages Dashboard

**View Deployments:**
1. Go to Workers & Pages
2. Click your project
3. View deployment history
4. Rollback if needed

**Analytics:**
1. Go to **"Analytics"** tab
2. View page views, bandwidth, requests

**Build Settings:**
1. Update environment variables anytime
2. Trigger manual rebuild
3. Configure custom headers

### Cost Monitoring

**Railway:**
- Monthly credit: $5
- Check usage: Dashboard → Usage
- Typical cost for your app: $5-7/month

**Cloudflare Pages:**
- Free tier: 500 builds/month, unlimited requests
- Your usage: Well within free tier = $0

**Total: ~$5/month**

---

## 🔥 Common Commands

### Railway CLI (Optional)

Install Railway CLI for advanced management:
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Link to project
railway link

# View logs
railway logs

# Open service URL
railway open

# Run database migrations
railway run npm run migrate
```

### Useful Git Commands

```bash
# Deploy new changes
git add .
git commit -m "Your changes"
git push origin main

# View remote
git remote -v

# Pull latest
git pull origin main
```

---

## 🐛 Troubleshooting

### Issue 1: Backend Not Starting

**Check Railway Logs:**
1. Go to backend service → Observability
2. Look for errors in logs

**Common Fixes:**
- Verify `PORT` environment variable is set to 5000
- Check database connection variables
- Ensure `package.json` has correct start script
- Verify Node.js version compatibility

### Issue 2: Database Connection Failed

**Check:**
- All PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE are set
- Database service is running (green status)
- Schema has been created (run schema.sql)

**Fix:**
```bash
# Get Railway PostgreSQL connection string
# From PostgreSQL service → Connect tab

# Connect locally to verify
psql "postgresql://user:password@host:port/database"
```

### Issue 3: CORS Errors

**Symptoms:** 
- Frontend loads but API calls fail
- Console shows: "CORS policy: No 'Access-Control-Allow-Origin'"

**Fix:**
1. Update Railway backend CORS_ORIGIN variable
2. Include all your frontend URLs
3. Redeploy backend

### Issue 4: Frontend Build Fails

**Check Cloudflare Pages Build Log:**
1. Go to deployment that failed
2. View build log
3. Look for npm errors

**Common Fixes:**
- Verify build command is correct
- Check if all dependencies are in `package.json`
- Ensure VITE_BACKEND_URL is set
- Check for TypeScript/ESLint errors

### Issue 5: 404 on Frontend Routes

**Symptom:** 
- Homepage works but /about, /services return 404
- Refresh on nested routes fails

**Fix:**
In Cloudflare Pages project:
1. Go to **Settings** → **Functions**
2. Add `_redirects` file to `frontend/public/`:
```
/* /index.html 200
```

Or create `frontend/public/_redirects`:
```bash
cat > frontend/public/_redirects << 'EOF'
/* /index.html 200
EOF
```

Commit and push.

### Issue 6: Environment Variables Not Working

**Frontend:**
- Must start with `VITE_`
- Set in Cloudflare Pages environment variables
- Rebuild after changing

**Backend:**
- Set in Railway service variables
- Auto-redeploys when changed
- Use ${{Postgres.VARIABLE}} for references

### Issue 7: Cold Starts (Railway)

**Symptom:** First request after inactivity is slow

**This is normal on Railway's Hobby plan**

**Workaround:**
- Upgrade to paid plan for always-on
- Use a uptime monitoring service (UptimeRobot) to ping every 5 mins
- Accept 2-3 second delay on first load

---

## 🔒 Security Best Practices

### 1. Secure Environment Variables

**Generate Strong JWT Secret:**
```bash
# Generate random 32-byte secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Use this for JWT_SECRET in Railway.

### 2. Enable Cloudflare Security Features

1. Go to **Security** in Cloudflare
2. Enable **"Bot Fight Mode"**
3. Configure **"Security Level"**: Medium
4. Enable **"Always Use HTTPS"**

### 3. Database Security

- Railway PostgreSQL is private by default
- Only accessible through Railway network
- Enable backups in PostgreSQL settings

### 4. Rate Limiting

Add rate limiting to your backend:
```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## 📈 Scaling & Optimization

### When to Scale

Monitor these metrics:
- Response time > 2 seconds
- Railway usage > $5/month consistently
- Database storage > 80% full
- Error rate increases

### Scaling Options

**Railway:**
- Upgrade to Pro plan ($20/mo) for:
  - More CPU/RAM
  - Priority support
  - Advanced metrics

**Cloudflare:**
- Still free! (Pages has generous limits)
- Consider Cloudflare Pro ($20/mo) for:
  - Advanced DDoS protection
  - Image optimization
  - WAF rules

**Database:**
- Railway PostgreSQL scales automatically
- Consider dedicated database service if > 10GB data

### Performance Optimization

**Frontend:**
- Image optimization (already using Vite)
- Lazy loading for components
- Enable Cloudflare caching

**Backend:**
- Add Redis for caching (Railway addon)
- Database indexing (already in schema.sql)
- Enable gzip compression

---

## 💾 Backup Strategy

### Railway PostgreSQL Backups

**Automatic Backups:**
- Railway does daily backups (retained for 7 days)
- Access in PostgreSQL service → Backups tab

**Manual Backup:**
```bash
# Get database URL from Railway
railway variables | grep DATABASE_URL

# Backup
pg_dump "your_database_url" > backup_$(date +%Y%m%d).sql

# Restore
psql "your_database_url" < backup_20241209.sql
```

### Code Backups

- Your code is on GitHub (automatic backup)
- Consider branch protection rules
- Tag releases: `git tag v1.0.0 && git push --tags`

---

## 🚀 Deployment Workflow

### Continuous Deployment

**Automatic Deployments:**
1. Make changes locally
2. Test locally: `npm run dev`
3. Commit: `git add . && git commit -m "Feature: XYZ"`
4. Push: `git push origin main`
5. Railway & Cloudflare auto-deploy
6. Verify at production URLs

**Branch Deployments (Optional):**
1. Create feature branch: `git checkout -b feature/new-feature`
2. Push: `git push origin feature/new-feature`
3. Cloudflare creates preview deployment
4. Test preview URL
5. Merge to main when ready

### Rollback Process

**Railway:**
1. Go to Deployments
2. Find previous working deployment
3. Click **"Redeploy"**

**Cloudflare Pages:**
1. Go to Deployments
2. Find previous deployment
3. Click **"Rollback"**

**Or via Git:**
```bash
git revert HEAD
git push origin main
```

---

## 📞 Support & Resources

### Railway

- **Documentation**: https://docs.railway.app/
- **Discord**: https://discord.gg/railway
- **Status**: https://status.railway.app/

### Cloudflare Pages

- **Documentation**: https://developers.cloudflare.com/pages/
- **Community**: https://community.cloudflare.com/
- **Status**: https://www.cloudflarestatus.com/

### Your Application

- **GitHub**: https://github.com/TharushaTDK/San-Antonio-Compassionate-Care
- **Frontend**: https://sacompassionatecare.com
- **Backend API**: https://your-railway-app.up.railway.app

---

## ✅ Post-Deployment Checklist

After completing deployment, verify:

- [ ] **Backend Running**: Railway service shows "Active"
- [ ] **Database Connected**: PostgreSQL service shows "Active"
- [ ] **Schema Created**: Tables exist in database
- [ ] **Frontend Deployed**: Cloudflare Pages shows "Active"
- [ ] **Custom Domain**: sacompassionatecare.com points to site
- [ ] **HTTPS Working**: Site loads with padlock icon
- [ ] **API Connectivity**: Frontend can call backend APIs
- [ ] **CORS Configured**: No CORS errors in browser console
- [ ] **Forms Working**: Inquiry and tour forms submit successfully
- [ ] **Admin Login**: Can login at /login
- [ ] **Dashboard Access**: Admin dashboard loads after login
- [ ] **Responsive**: Site works on mobile devices
- [ ] **SEO**: Meta tags present in HTML
- [ ] **Performance**: Page load < 3 seconds
- [ ] **Monitoring**: Railway logs viewable
- [ ] **Backups**: Database backup strategy in place
- [ ] **Cost Tracking**: Railway usage under $5
- [ ] **Documentation**: Team knows how to deploy updates

---

## 🎉 Success!

Congratulations! Your application is now deployed on:

### 🌐 **Production URLs**
- **Website**: https://sacompassionatecare.com
- **Backend API**: https://your-railway-app.up.railway.app

### 💰 **Monthly Cost**
- **Railway**: $5/month
- **Cloudflare Pages**: $0/month
- **Total**: $5/month

### ⏱️ **Deployment Time**
- **Setup**: ~30 minutes
- **vs VPS**: 3.5 hours saved!

### 🎯 **What You Got**
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (Cloudflare)
- ✅ Auto-deployments from GitHub
- ✅ Managed PostgreSQL database
- ✅ 99.9% uptime SLA
- ✅ Automatic backups
- ✅ Zero server maintenance
- ✅ Easy scaling path
- ✅ Built-in monitoring
- ✅ Professional hosting setup

---

## 🔄 Next Steps

1. **Monitor**: Check Railway and Cloudflare dashboards daily for first week
2. **Test**: Have real users test all features
3. **Optimize**: Review performance and make improvements
4. **Market**: Promote your site to potential residents
5. **Scale**: Upgrade plan if needed when traffic grows

---

## 📝 Quick Reference Commands

```bash
# Deploy updates
git add .
git commit -m "Update: description"
git push origin main

# View Railway logs
railway logs

# Connect to database
railway connect Postgres

# View environment variables
railway variables

# Rollback deployment
# Do this in Railway/Cloudflare dashboard
```

---

**Happy Deploying! 🚀**

For questions or issues, refer to the troubleshooting section above or contact Railway/Cloudflare support.

---

## 📄 Document Information

- **Version**: 1.0
- **Last Updated**: December 2024
- **Application**: San Antonio Compassionate Care
- **Deployment Type**: Railway + Cloudflare Pages
- **Estimated Cost**: $5/month
- **Deployment Time**: ~30 minutes
