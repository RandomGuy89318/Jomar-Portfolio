# GitHub Setup & Deployment Guide

## 🚀 Quick Setup

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (green button)
3. Repository name: `jomar-portfolio` (or your preferred name)
4. Description: `Modern portfolio website with Laravel backend and React frontend`
5. Make it **Public** (so it can be deployed for free)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

### Step 2: Connect Local Repository to GitHub

Copy and run these commands in your terminal:

```bash
# Add GitHub as remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jomar-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages (Free Static Hosting)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build React app
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/public
```

6. Your site will be available at: `https://YOUR_USERNAME.github.io/jomar-portfolio`

## 🌐 Alternative: Full Stack Deployment

For the complete Laravel backend, consider these options:

### Option A: Railway (Recommended)
1. Connect your GitHub repo to [Railway](https://railway.app)
2. Deploy automatically on every push
3. Get a custom domain: `your-app.railway.app`

### Option B: Heroku
1. Connect to [Heroku](https://heroku.com)
2. Add PHP buildpack
3. Configure environment variables
4. Deploy from GitHub

### Option C: Vercel
1. Connect to [Vercel](https://vercel.com)
2. Deploy frontend automatically
3. Use serverless functions for API

## 📝 Repository Structure

Your GitHub repository will contain:

```
jomar-portfolio/
├── README.md                 # Project overview
├── DEPLOYMENT.md            # Deployment guide
├── laravel-backend/         # Laravel API
├── client/                  # React frontend
├── .github/workflows/       # GitHub Actions
└── package.json            # Build configuration
```

## 🔄 Workflow

1. **Make changes** to your code locally
2. **Test** with `php artisan serve` (Laravel) or `npm run dev` (React)
3. **Commit** changes: `git add . && git commit -m "Your message"`
4. **Push** to GitHub: `git push origin main`
5. **Automatic deployment** via GitHub Actions
6. **Live site** updates in 2-3 minutes

## 🎯 Next Steps

After setting up GitHub:

1. **Update README.md** with your actual GitHub username
2. **Add your live URL** to the README
3. **Configure custom domain** (optional)
4. **Set up analytics** (Google Analytics, etc.)
5. **Add contact form** backend
6. **Implement blog** functionality

## 🔧 Commands Reference

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/jomar-portfolio.git

# Make changes and deploy
git add .
git commit -m "Update portfolio"
git push origin main

# Build locally
npm run build

# Test Laravel locally
cd laravel-backend
php artisan serve
```

## 🆘 Troubleshooting

**"Permission denied" error:**
```bash
git remote set-url origin https://YOUR_USERNAME@github.com/YOUR_USERNAME/jomar-portfolio.git
```

**Build fails on GitHub:**
- Check `package.json` dependencies
- Verify Node.js version in workflow
- Check build logs in Actions tab

**Site not updating:**
- Check GitHub Actions tab for build status
- Verify GitHub Pages is enabled
- Clear browser cache

## 📞 Support

- GitHub Issues: Report bugs in your repository
- GitHub Discussions: Community help
- Documentation: Check README.md files