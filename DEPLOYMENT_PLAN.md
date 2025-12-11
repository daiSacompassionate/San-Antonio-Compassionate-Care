# Deployment Plan: San Antonio Compassionate Care
## Domain: bloomtechtest.com

---

## 📋 Project Overview

**Stack:**
- **Frontend**: React 19 + Vite + TailwindCSS
- **Backend**: Node.js + Express + PostgreSQL
- **Web Server**: Nginx
- **Tunnel**: Cloudflare Zero Trust (Cloudflared)
- **Domain**: bloomtechtest.com

---

## 🎯 Architecture Overview

```
Internet (bloomtechtest.com)
        ↓
Cloudflare Zero Trust Tunnel (cloudflared)
        ↓
Nginx (Reverse Proxy on localhost:80/443)
        ↓
    ┌───────┴───────┐
    ↓               ↓
Frontend        Backend API
(Static)        (localhost:5000)
```

---

## 📦 Prerequisites

### System Requirements
- Ubuntu/Debian Linux Server (or similar)
- Sudo/root access
- At least 2GB RAM
- 20GB storage
- Node.js 18+ and npm
- PostgreSQL 12+
- Domain registered at a DNS provider

### Required Accounts
- Cloudflare account (free tier works)
- Domain: bloomtechtest.com (added to Cloudflare)

---

## 🚀 DEPLOYMENT STEPS

---

## PHASE 1: Server Setup & Dependencies

### Step 1.1: Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### Step 1.2: Install Node.js 20.x
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node --version  # Verify installation
npm --version
```

### Step 1.3: Install PostgreSQL
```bash
sudo apt install -y postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
sudo systemctl status postgresql
```

### Step 1.4: Install Nginx
```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
```

### Step 1.5: Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
pm2 --version
```

---

## PHASE 2: Database Setup

### Step 2.1: Create PostgreSQL Database & User
```bash
# Switch to postgres user
sudo -i -u postgres

# Access PostgreSQL
psql

# Create database and user
CREATE DATABASE eldercare_db;
CREATE USER postgres WITH ENCRYPTED PASSWORD 'Tharusha@12345';
GRANT ALL PRIVILEGES ON DATABASE eldercare_db TO postgres;

# Grant schema privileges
\c eldercare_db
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgres;

# Exit
\q
exit
```

### Step 2.2: Configure PostgreSQL for Local Access
Edit `/etc/postgresql/*/main/pg_hba.conf`:
```bash
sudo nano /etc/postgresql/14/main/pg_hba.conf
```

Add or ensure this line exists:
```
local   all             postgres                              md5
host    all             postgres      127.0.0.1/32            md5
```

Restart PostgreSQL:
```bash
sudo systemctl restart postgresql
```

### Step 2.3: Test Database Connection
```bash
psql -U postgres -d eldercare_db -h localhost
# Enter password when prompted: Tharusha@12345
# If successful, type \q to exit
```

---

## PHASE 3: Application Setup

### Step 3.1: Clone/Upload Project
```bash
# If using Git
cd /var/www/
sudo mkdir -p san-antonio-care
sudo chown $USER:$USER san-antonio-care
cd san-antonio-care

# Copy your project files here
# Or use git clone if pushing to a repository
```

For now, we'll assume the project is in the current directory.

### Step 3.2: Backend Configuration

#### Create Backend .env File
```bash
cd backend
nano .env
```

Add the following content:
```env
# Server Configuration
NODE_ENV=production
PORT=5000

# Database Configuration
PGUSER=postgres
PGHOST=localhost
PGDATABASE=eldercare_db
PGPASSWORD=Tharusha@12345
PGPORT=5432

# JWT Secret (generate a strong random string)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345

# CORS Origin
CORS_ORIGIN=https://bloomtechtest.com
```

#### Install Backend Dependencies
```bash
npm install
```

#### Run Database Migrations/Seeding
```bash
# If you have seed data for admins
npm run seed
```

#### Test Backend Locally
```bash
npm start
# Verify it runs on http://localhost:5000
# Press Ctrl+C to stop
```

### Step 3.3: Frontend Configuration

#### Create Frontend .env File
```bash
cd ../frontend
nano .env
```

Add:
```env
VITE_BACKEND_URL=https://bloomtechtest.com/api
```

#### Install Frontend Dependencies
```bash
npm install
```

#### Build Frontend for Production
```bash
npm run build
```

This creates a `dist` folder with optimized static files.

#### Verify Build
```bash
ls -la dist/
# Should see index.html, assets/, etc.
```

---

## PHASE 4: Nginx Configuration

### Step 4.1: Create Nginx Configuration File
```bash
sudo nano /etc/nginx/sites-available/san-antonio-care
```

Add the following configuration:

```nginx
# Upstream for Backend API
upstream backend_api {
    server localhost:5000;
    keepalive 64;
}

# HTTP Server - Redirect to HTTPS (will be handled by Cloudflare Tunnel)
server {
    listen 80;
    listen [::]:80;
    server_name localhost;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Root directory for frontend static files
    root /var/www/san-antonio-care/frontend/dist;
    index index.html;

    # Logging
    access_log /var/log/nginx/san-antonio-care-access.log;
    error_log /var/log/nginx/san-antonio-care-error.log;

    # API Backend Proxy
    location /api/ {
        proxy_pass http://backend_api/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Frontend Static Files
    location / {
        try_files $uri $uri/ /index.html;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

### Step 4.2: Enable the Site
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/san-antonio-care /etc/nginx/sites-enabled/

# Remove default site if exists
sudo rm /etc/nginx/sites-enabled/default
```

### Step 4.3: Test Nginx Configuration
```bash
sudo nginx -t
```

### Step 4.4: Restart Nginx
```bash
sudo systemctl restart nginx
sudo systemctl status nginx
```

---

## PHASE 5: PM2 Process Management

### Step 5.1: Start Backend with PM2
```bash
cd /var/www/san-antonio-care/backend
pm2 start server.js --name "san-antonio-backend" --watch
```

### Step 5.2: Save PM2 Configuration
```bash
pm2 save
```

### Step 5.3: Setup PM2 to Start on Boot
```bash
pm2 startup systemd
# Follow the command output instructions (run the suggested command)
```

### Step 5.4: Monitor PM2 Processes
```bash
pm2 status
pm2 logs san-antonio-backend
pm2 monit
```

### Useful PM2 Commands
```bash
pm2 restart san-antonio-backend  # Restart app
pm2 stop san-antonio-backend     # Stop app
pm2 delete san-antonio-backend   # Remove app
pm2 logs                         # View all logs
pm2 logs --lines 100             # View last 100 lines
```

---

## PHASE 6: Cloudflare Zero Trust Tunnel Setup

### Step 6.1: Create Cloudflare Account & Add Domain
1. Go to https://dash.cloudflare.com/
2. Sign up or log in
3. Click "Add Site"
4. Enter: **bloomtechtest.com**
5. Select Free plan
6. Update nameservers at your domain registrar to Cloudflare's nameservers
7. Wait for DNS propagation (can take up to 48 hours, usually faster)

### Step 6.2: Install Cloudflared on Server
```bash
# Download and install cloudflared
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb

# Verify installation
cloudflared --version
```

### Step 6.3: Authenticate Cloudflared
```bash
cloudflared tunnel login
```

This will:
- Open a browser window (or provide a URL)
- Log in to Cloudflare
- Select your domain: **bloomtechtest.com**
- Authorize the tunnel

A cert.pem file will be saved to `~/.cloudflared/`

### Step 6.4: Create a Tunnel
```bash
cloudflared tunnel create san-antonio-tunnel
```

This creates a tunnel and saves credentials to:
`~/.cloudflared/<TUNNEL-ID>.json`

Note the **Tunnel ID** from the output.

### Step 6.5: Create Tunnel Configuration File
```bash
nano ~/.cloudflared/config.yml
```

Add the following (replace `<TUNNEL-ID>` with your actual tunnel ID):

```yaml
tunnel: <TUNNEL-ID>
credentials-file: /home/<YOUR-USERNAME>/.cloudflared/<TUNNEL-ID>.json

ingress:
  # Route all traffic to local Nginx
  - hostname: bloomtechtest.com
    service: http://localhost:80
  - hostname: www.bloomtechtest.com
    service: http://localhost:80
  # Catch-all rule (required)
  - service: http_status:404
```

**Important**: Replace:
- `<TUNNEL-ID>` with your actual tunnel ID
- `<YOUR-USERNAME>` with your Linux username (run `whoami` to find it)

### Step 6.6: Route DNS to Tunnel
```bash
cloudflared tunnel route dns san-antonio-tunnel bloomtechtest.com
cloudflared tunnel route dns san-antonio-tunnel www.bloomtechtest.com
```

This creates DNS records in Cloudflare pointing to your tunnel.

### Step 6.7: Test the Tunnel
```bash
cloudflared tunnel run san-antonio-tunnel
```

If successful, you should see logs indicating the tunnel is connected.

Visit **https://bloomtechtest.com** in your browser to test.

Press `Ctrl+C` to stop the test.

### Step 6.8: Install Tunnel as a Service
```bash
sudo cloudflared service install
sudo systemctl start cloudflared
sudo systemctl enable cloudflared
sudo systemctl status cloudflared
```

### Step 6.9: Verify Tunnel is Running
```bash
cloudflared tunnel info san-antonio-tunnel
sudo systemctl status cloudflared
```

---

## PHASE 7: Cloudflare Dashboard Configuration

### Step 7.1: Configure SSL/TLS Settings
1. Go to Cloudflare Dashboard → Your Domain
2. Navigate to **SSL/TLS** → **Overview**
3. Set encryption mode to: **Flexible** or **Full**
   - **Flexible**: Cloudflare ↔ Server (HTTP)
   - **Full**: Cloudflare ↔ Server (HTTPS, self-signed OK)
   - Since we're using HTTP locally, choose **Flexible**

### Step 7.2: Configure Security Settings
1. **SSL/TLS** → **Edge Certificates**
   - Enable "Always Use HTTPS": ON
   - Enable "Automatic HTTPS Rewrites": ON
   - Minimum TLS Version: 1.2

2. **Security** → **Settings**
   - Security Level: Medium
   - Bot Fight Mode: ON (optional)

3. **Speed** → **Optimization**
   - Auto Minify: Enable CSS, JavaScript, HTML
   - Brotli: ON

### Step 7.3: Configure DNS Records (if not auto-created)
1. Go to **DNS** → **Records**
2. Ensure these records exist:

| Type  | Name | Content                    | Proxy Status |
|-------|------|----------------------------|--------------|
| CNAME | @    | <TUNNEL-ID>.cfargotunnel.com | Proxied (Orange) |
| CNAME | www  | bloomtechtest.com          | Proxied (Orange) |

---

## PHASE 8: Final Testing & Verification

### Step 8.1: Check All Services are Running
```bash
# Check Nginx
sudo systemctl status nginx

# Check PostgreSQL
sudo systemctl status postgresql

# Check PM2 Backend
pm2 status

# Check Cloudflare Tunnel
sudo systemctl status cloudflared
```

### Step 8.2: Test Backend API
```bash
# Test locally
curl http://localhost:5000/

# Test through Nginx
curl http://localhost/api/

# Test through domain
curl https://bloomtechtest.com/api/
```

### Step 8.3: Test Frontend
1. Open browser to: **https://bloomtechtest.com**
2. Verify homepage loads
3. Test navigation
4. Test API connectivity (login, forms, etc.)

### Step 8.4: Check Browser Console
- Open Developer Tools (F12)
- Check for any CORS errors
- Check Network tab for API calls
- Verify all resources load correctly

### Step 8.5: Test From Multiple Locations
- Test from different devices
- Test from different networks
- Use tools like:
  - https://www.whatsmydns.net/ (DNS propagation)
  - https://www.ssllabs.com/ssltest/ (SSL configuration)

---

## PHASE 9: Monitoring & Maintenance

### Step 9.1: Setup Log Monitoring
```bash
# Nginx logs
sudo tail -f /var/log/nginx/san-antonio-care-access.log
sudo tail -f /var/log/nginx/san-antonio-care-error.log

# Backend logs (PM2)
pm2 logs san-antonio-backend

# Cloudflare tunnel logs
sudo journalctl -u cloudflared -f
```

### Step 9.2: Setup Automated Backups

#### Database Backup Script
```bash
sudo nano /usr/local/bin/backup-database.sh
```

Add:
```bash
#!/bin/bash
BACKUP_DIR="/var/backups/san-antonio-care"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

# Backup database
PGPASSWORD='Tharusha@12345' pg_dump -U postgres -h localhost eldercare_db | gzip > $BACKUP_DIR/eldercare_db_$DATE.sql.gz

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.sql.gz" -mtime +7 -delete

echo "Backup completed: eldercare_db_$DATE.sql.gz"
```

Make executable:
```bash
sudo chmod +x /usr/local/bin/backup-database.sh
```

#### Setup Cron Job for Daily Backups
```bash
sudo crontab -e
```

Add:
```
# Daily database backup at 2 AM
0 2 * * * /usr/local/bin/backup-database.sh >> /var/log/san-antonio-backup.log 2>&1
```

### Step 9.3: Setup System Monitoring
```bash
# Install htop for system monitoring
sudo apt install -y htop

# Monitor system resources
htop
```

### Step 9.4: Regular Maintenance Tasks

**Weekly:**
- Check PM2 status: `pm2 status`
- Review logs for errors
- Check disk space: `df -h`
- Check memory usage: `free -h`

**Monthly:**
- Update system packages: `sudo apt update && sudo apt upgrade`
- Review and rotate logs
- Test backup restoration
- Check SSL certificate status

---

## 🔧 Troubleshooting Guide

### Issue 1: Cannot Connect to Database
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Check connection
PGPASSWORD='Tharusha@12345' psql -U postgres -d eldercare_db -h localhost

# Review PostgreSQL logs
sudo tail -f /var/log/postgresql/postgresql-*-main.log
```

### Issue 2: Backend Not Starting
```bash
# Check PM2 logs
pm2 logs san-antonio-backend

# Check if port 5000 is in use
sudo lsof -i :5000

# Restart backend
pm2 restart san-antonio-backend
```

### Issue 3: Nginx Errors
```bash
# Test nginx configuration
sudo nginx -t

# Check nginx logs
sudo tail -f /var/log/nginx/error.log

# Restart nginx
sudo systemctl restart nginx
```

### Issue 4: Cloudflare Tunnel Not Working
```bash
# Check tunnel status
sudo systemctl status cloudflared

# Check tunnel logs
sudo journalctl -u cloudflared -n 50

# Restart tunnel
sudo systemctl restart cloudflared

# Test tunnel manually
cloudflared tunnel run san-antonio-tunnel
```

### Issue 5: CORS Errors
- Update backend `.env` file `CORS_ORIGIN` to match your domain
- Restart backend: `pm2 restart san-antonio-backend`
- Clear browser cache

### Issue 6: Frontend Shows Old Version
```bash
# Rebuild frontend
cd /var/www/san-antonio-care/frontend
npm run build

# Clear Cloudflare cache
# Go to Cloudflare Dashboard → Caching → Configuration → Purge Everything
```

### Issue 7: 502 Bad Gateway
- Backend might be down: `pm2 status`
- Check nginx upstream configuration
- Check firewall rules: `sudo ufw status`

---

## 🔐 Security Best Practices

### 1. Firewall Configuration
```bash
# Install UFW (Uncomplicated Firewall)
sudo apt install -y ufw

# Allow SSH (important - don't lock yourself out!)
sudo ufw allow 22/tcp

# Allow HTTP and HTTPS (for Cloudflare Tunnel)
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

### 2. Secure Environment Variables
```bash
# Restrict access to .env files
chmod 600 /var/www/san-antonio-care/backend/.env
chmod 600 /var/www/san-antonio-care/frontend/.env
```

### 3. Regular Security Updates
```bash
# Enable automatic security updates
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

### 4. Use Strong Passwords
- Database password: At least 16 characters
- JWT secret: At least 32 random characters
- Generate secure passwords: `openssl rand -base64 32`

### 5. Enable Cloudflare Security Features
- Enable "Bot Fight Mode"
- Enable "Rate Limiting" (paid feature)
- Enable "Web Application Firewall" (paid feature)
- Configure "Page Rules" for additional protection

---

## 📝 Post-Deployment Checklist

- [ ] All services running (Nginx, PostgreSQL, PM2, Cloudflared)
- [ ] Domain resolves to correct IP/tunnel
- [ ] HTTPS working correctly
- [ ] Frontend loads without errors
- [ ] Backend API responds correctly
- [ ] Database connections working
- [ ] CORS configured properly
- [ ] Admin login working
- [ ] Forms submitting correctly
- [ ] All routes working (tours, inquiries, etc.)
- [ ] Mobile responsive design working
- [ ] Logs are being generated
- [ ] Backup system in place
- [ ] Monitoring setup
- [ ] SSL certificate valid
- [ ] Security headers present
- [ ] Performance optimized (caching, minification)
- [ ] Error pages configured
- [ ] Contact forms working
- [ ] Email notifications working (if applicable)

---

## 📚 Useful Commands Reference

### PM2 Commands
```bash
pm2 list                          # List all processes
pm2 restart <name>                # Restart process
pm2 stop <name>                   # Stop process
pm2 delete <name>                 # Delete process
pm2 logs <name>                   # View logs
pm2 monit                         # Monitor processes
pm2 save                          # Save process list
pm2 resurrect                     # Restore saved processes
```

### Nginx Commands
```bash
sudo nginx -t                     # Test configuration
sudo systemctl restart nginx      # Restart Nginx
sudo systemctl reload nginx       # Reload configuration
sudo systemctl status nginx       # Check status
```

### Cloudflare Tunnel Commands
```bash
cloudflared tunnel list           # List tunnels
cloudflared tunnel info <name>    # Get tunnel info
cloudflared tunnel run <name>     # Run tunnel manually
sudo systemctl restart cloudflared # Restart tunnel service
```

### PostgreSQL Commands
```bash
sudo -u postgres psql                    # Access PostgreSQL
sudo systemctl restart postgresql         # Restart PostgreSQL
pg_dump -U user database > backup.sql    # Backup database
psql -U user database < backup.sql       # Restore database
```

---

## 🎉 Success Criteria

Your application is successfully deployed when:

1. ✅ **Domain Access**: https://bloomtechtest.com loads correctly
2. ✅ **HTTPS**: SSL certificate is valid and active
3. ✅ **Frontend**: React app loads without console errors
4. ✅ **Backend**: API endpoints respond correctly
5. ✅ **Database**: Data persists and can be queried
6. ✅ **Authentication**: Admin login/register works
7. ✅ **Forms**: Inquiry and tour scheduling works
8. ✅ **Performance**: Page loads in < 3 seconds
9. ✅ **Mobile**: Site is responsive on mobile devices
10. ✅ **Monitoring**: All services auto-restart on server reboot

---

## 📞 Support Resources

- **Cloudflare Docs**: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/
- **Nginx Docs**: https://nginx.org/en/docs/
- **PM2 Docs**: https://pm2.keymetrics.io/docs/usage/quick-start/
- **PostgreSQL Docs**: https://www.postgresql.org/docs/

---

## 🔄 Deployment Timeline Estimate

| Phase | Task | Estimated Time |
|-------|------|----------------|
| 1 | Server Setup | 30 minutes |
| 2 | Database Setup | 20 minutes |
| 3 | Application Setup | 30 minutes |
| 4 | Nginx Configuration | 20 minutes |
| 5 | PM2 Setup | 10 minutes |
| 6 | Cloudflare Tunnel | 45 minutes |
| 7 | Cloudflare Dashboard | 15 minutes |
| 8 | Testing | 30 minutes |
| 9 | Monitoring Setup | 20 minutes |
| **Total** | | **~3.5 hours** |

*Note: DNS propagation may take additional time (up to 48 hours)*

---

## ✨ Next Steps After Deployment

1. **Monitor Performance**: Use Cloudflare Analytics
2. **SEO Optimization**: Add sitemap, meta tags, robots.txt
3. **Analytics**: Integrate Google Analytics or similar
4. **Email Service**: Setup email notifications (SendGrid, etc.)
5. **Content Management**: Add admin panel for content updates
6. **Backups**: Setup automated offsite backups
7. **CDN**: Leverage Cloudflare CDN for static assets
8. **Documentation**: Create user documentation

---

**Good luck with your deployment! 🚀**

For questions or issues, refer to the troubleshooting section or official documentation links provided above.
