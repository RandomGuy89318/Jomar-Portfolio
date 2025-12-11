# Deployment Guide

This guide covers different ways to deploy your Laravel portfolio online.

## 🌐 Option 1: Shared Hosting (Easiest)

### Requirements
- PHP 8.2+ support
- Composer access
- MySQL/PostgreSQL database

### Steps

1. **Prepare files:**
   ```bash
   # Build frontend
   npm run build
   xcopy /E /I /Y dist\public laravel-backend\public
   
   # Create deployment package
   cd laravel-backend
   composer install --no-dev --optimize-autoloader
   ```

2. **Upload to hosting:**
   - Upload entire `laravel-backend/` folder
   - Point your domain to the `public/` directory
   - Create database and update `.env`

3. **Configure environment:**
   ```env
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://yourdomain.com
   
   DB_CONNECTION=mysql
   DB_HOST=localhost
   DB_DATABASE=your_database
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

4. **Run migrations:**
   ```bash
   php artisan migrate --force
   php artisan config:cache
   php artisan route:cache
   ```

## 🚀 Option 2: Heroku (Free Tier Available)

### Setup

1. **Install Heroku CLI and login:**
   ```bash
   heroku login
   ```

2. **Create Heroku app:**
   ```bash
   cd laravel-backend
   heroku create your-portfolio-name
   ```

3. **Add buildpacks:**
   ```bash
   heroku buildpacks:add heroku/php
   heroku buildpacks:add heroku/nodejs
   ```

4. **Configure environment:**
   ```bash
   heroku config:set APP_KEY=$(php artisan --no-ansi key:generate --show)
   heroku config:set APP_ENV=production
   heroku config:set APP_DEBUG=false
   ```

5. **Add database:**
   ```bash
   heroku addons:create heroku-postgresql:mini
   ```

6. **Deploy:**
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   heroku run php artisan migrate --force
   ```

### Procfile
Create `laravel-backend/Procfile`:
```
web: vendor/bin/heroku-php-apache2 public/
```

## ☁️ Option 3: Railway (Modern Alternative)

1. **Connect GitHub repository to Railway**
2. **Configure environment variables:**
   - `APP_KEY` - Generate with `php artisan key:generate --show`
   - `APP_ENV=production`
   - `APP_DEBUG=false`
3. **Add PostgreSQL database**
4. **Deploy automatically on git push**

## 🔥 Option 4: Firebase Hosting + Backend

### Frontend Only (Static)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

### With Functions (Full Stack)
- Deploy Laravel API to Google Cloud Functions
- Host React frontend on Firebase Hosting

## 🐳 Option 5: Docker + DigitalOcean

### Dockerfile
Create `laravel-backend/Dockerfile`:
```dockerfile
FROM php:8.2-apache

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy application
COPY . /var/www

# Install dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions
RUN chown -R www-data:www-data /var/www
RUN chmod -R 755 /var/www/storage

# Configure Apache
COPY .docker/vhost.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod rewrite

EXPOSE 80
```

## 📊 Comparison

| Platform | Cost | Ease | Performance | Custom Domain |
|----------|------|------|-------------|---------------|
| Shared Hosting | $3-10/mo | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ |
| Heroku | Free-$7/mo | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ |
| Railway | $5/mo | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |
| Firebase | Free-$25/mo | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |
| DigitalOcean | $5/mo | ⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ |

## 🔧 Post-Deployment Checklist

- [ ] SSL certificate configured
- [ ] Database migrations run
- [ ] Environment variables set
- [ ] File permissions correct
- [ ] Cache cleared and optimized
- [ ] Error logging configured
- [ ] Backup strategy in place

## 🐛 Common Issues

### "500 Internal Server Error"
- Check file permissions (755 for directories, 644 for files)
- Verify `.env` file exists and is configured
- Check error logs

### "Database connection failed"
- Verify database credentials in `.env`
- Ensure database exists
- Check host/port settings

### "Mix manifest not found"
- Run `npm run build` to generate assets
- Ensure `public/mix-manifest.json` exists

## 📞 Support

If you encounter issues:
1. Check the error logs
2. Verify environment configuration
3. Test locally first
4. Check hosting provider documentation