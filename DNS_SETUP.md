# DNS Setup Guide for GitHub Pages Custom Domain

## Your Custom Domain: abaten.portfolio

### Step 1: Configure DNS at Your Domain Registrar

Go to your domain registrar (where you bought `portfolio` domain) and add these DNS records:

#### Option A: Using A Records (Recommended for apex domains)
Add these 4 A records:

```
Type: A
Host: abaten
Value: 185.199.108.153

Type: A
Host: abaten
Value: 185.199.109.153

Type: A
Host: abaten
Value: 185.199.110.153

Type: A
Host: abaten
Value: 185.199.111.153
```

#### Option B: Using CNAME Record (Recommended for subdomains)
Add this CNAME record:

```
Type: CNAME
Host: abaten
Value: <your-github-username>.github.io
```

Replace `<your-github-username>` with your actual GitHub username.

### Step 2: Wait for DNS Propagation

DNS changes can take 24-48 hours to propagate, but usually happen within a few hours.

You can check DNS propagation status at: https://dnschecker.org

### Step 3: Configure GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Custom domain", enter: `abaten.portfolio`
4. Click **Save**
5. Wait for DNS check to complete (may take a few minutes)
6. Once verified, check **Enforce HTTPS**

### Step 4: Rebuild and Deploy

After DNS is configured, rebuild your site:

```bash
npm run deploy
git add .
git commit -m "Add CNAME for custom domain"
git push origin main
```

### Troubleshooting

**If DNS check fails:**
- Verify DNS records are correct at your registrar
- Wait longer for DNS propagation (can take up to 48 hours)
- Try using `dig abaten.portfolio` or `nslookup abaten.portfolio` to check DNS

**If you see "improperly configured":**
- Make sure you're using the correct DNS records
- Ensure there are no conflicting DNS records
- Check that the CNAME file exists in your repository

**Common Issues:**
- Using `www.abaten.portfolio` instead of `abaten.portfolio`
- Forgetting to add all 4 A records
- DNS not propagated yet
- CNAME file missing or incorrect

### Verify DNS Configuration

Run these commands to check your DNS:

```bash
# Check A records
nslookup abaten.portfolio

# Check CNAME
nslookup abaten.portfolio

# Detailed DNS info
dig abaten.portfolio
```

You should see the GitHub IP addresses in the response.
