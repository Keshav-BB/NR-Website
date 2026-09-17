# Production Deployment Guide

This guide details deployment procedures for the rebuilt Neuro Recode Next.js web application.

---

## 1. Deployment Options

### Option A: Vercel Deployment (Recommended)
Next.js App Router applications deploy with zero configuration on Vercel:
1. Connect the GitHub/GitLab repository to Vercel.
2. Under **Project Settings → Environment Variables**, add the values specified in `.env.example`:
   - `NEXT_PUBLIC_SITE_URL` = `https://www.neurorecode.in`
   - `NEXT_PUBLIC_GA_ID`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_FREE_TRAINING_URL`
   - `FRAPPE_BASE_URL`, `FRAPPE_API_KEY`, `FRAPPE_API_SECRET`
3. Click **Deploy**. Vercel will automatically run `next build`, compile the static routes, and deploy edge serverless route handlers.

---

### Option B: Node.js Standalone / VPS Deployment
For hosting on a self-managed VPS (e.g. DigitalOcean, AWS EC2, or Hetzner) using PM2:

1. **Clone and Install Dependencies**:
   ```bash
   git clone <repo-url> /var/www/neurorecode
   cd /var/www/neurorecode
   npm install --production=false
   ```

2. **Configure Environment**:
   ```bash
   cp .env.example .env.production
   nano .env.production # Fill in production credentials
   ```

3. **Build the Production Application**:
   ```bash
   npm run build
   ```

4. **Launch with PM2**:
   ```bash
   npm install -g pm2
   pm2 start npm --name "neurorecode-web" -- start -- -p 3000
   pm2 save
   pm2 startup
   ```

5. **Nginx Reverse Proxy Configuration**:
   ```nginx
   server {
       server_name neurorecode.in www.neurorecode.in;

       location / {
           proxy_pass http://127.0.0.1:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }

       listen 443 ssl;
       # Add SSL certificate directives (Certbot / Let's Encrypt)
   }
   ```

---

## 2. Pre-Launch Verification
Before updating DNS `A` or `CNAME` records to point to the new platform:
1. Verify `https://<staging-domain>/sitemap.xml` returns valid XML.
2. Verify legacy redirect endpoints (`/The%20Company.dc.html`) return HTTP 301.
3. Test a live submission on `/contact` to confirm lead reaches Frappe CRM or the fail-safe queue.
4. Verify SSL certificate validity and HSTS response headers.
