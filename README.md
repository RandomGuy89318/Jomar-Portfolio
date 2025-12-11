# Jomar Portfolio - Laravel Edition

A modern portfolio website showcasing professional certificates and skills, built with Laravel backend and React frontend.

## 🚀 Live Demo

Visit the live site: [Your Portfolio URL will be here]

## 🛠️ Tech Stack

**Backend:**
- Laravel 12 (PHP 8.2+)
- SQLite Database
- RESTful API

**Frontend:**
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## ✨ Features

- 📱 Responsive design
- 🌙 Dark theme
- 📜 Certificate management with PDF/image viewing
- 🔐 User authentication API
- ⚡ Fast loading with optimized builds
- 🎨 Modern UI with smooth animations

## 🏗️ Project Structure

```
├── laravel-backend/          # Laravel API backend
│   ├── app/Models/          # User & Certificate models
│   ├── app/Http/Controllers/Api/  # API controllers
│   ├── database/migrations/ # Database schema
│   ├── routes/web.php      # API routes
│   └── public/             # Built React app + certificates
├── client/                 # React frontend source
│   ├── src/components/     # React components
│   ├── src/pages/         # Page components
│   └── index.html         # HTML template
└── deploy.bat             # Build & deploy script
```

## 🚀 Quick Start

### Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/jomar-portfolio.git
   cd jomar-portfolio
   ```

2. **Set up Laravel backend:**
   ```bash
   cd laravel-backend
   composer install
   php artisan key:generate
   php artisan migrate
   ```

3. **Build and deploy frontend:**
   ```bash
   cd ..
   npm install
   npm run build
   xcopy /E /I /Y dist\public laravel-backend\public
   ```

4. **Start the development server:**
   ```bash
   cd laravel-backend
   php artisan serve
   ```

Visit `http://localhost:8000`

## 📱 API Endpoints

### Authentication
- `POST /api/register` - Register new user
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user
- `GET /api/user` - Get authenticated user

### Certificates
- `GET /api/certificates` - List all certificates
- `POST /api/certificates` - Create certificate
- `GET /api/certificates/{id}` - Get certificate
- `PUT /api/certificates/{id}` - Update certificate
- `DELETE /api/certificates/{id}` - Delete certificate

## 🔧 Development

### Making Frontend Changes

1. Edit files in `client/src/`
2. Run the deploy script:
   ```bash
   deploy.bat
   ```

### Adding New Certificates

1. Add PDF/image files to `laravel-backend/public/certificates/`
2. Update the certificates array in `client/src/components/CertificatesSection.tsx`
3. Rebuild and deploy

## 🌐 Deployment Options

### Option 1: Shared Hosting (Recommended)
1. Upload `laravel-backend/` contents to your hosting
2. Point domain to `public/` directory
3. Set up database credentials in `.env`

### Option 2: Heroku
1. Add Heroku buildpacks for PHP
2. Configure database (PostgreSQL)
3. Set environment variables

### Option 3: Vercel/Netlify
1. Deploy as static site (frontend only)
2. Use separate API hosting for Laravel

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Jomar N. Abaten - [Your Email]

Project Link: [https://github.com/yourusername/jomar-portfolio](https://github.com/yourusername/jomar-portfolio)

---

⭐ Star this repository if you found it helpful!