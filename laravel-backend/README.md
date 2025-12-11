# Portfolio Application - Laravel Backend

This is a Laravel-based recreation of the original Express/React portfolio application.

## Features

- Laravel 12 backend API
- SQLite database (can be switched to PostgreSQL)
- User authentication
- Certificate management CRUD
- React frontend (built and served from public directory)

## Setup Instructions

### Prerequisites

- PHP 8.2+
- Composer
- Node.js & npm (for building frontend)
- SQLite (included with PHP) or PostgreSQL (optional)

### Installation

1. **Install PHP dependencies:**
   ```bash
   composer install
   ```

2. **Configure environment:**
   - The `.env` file is already configured to use SQLite
   - To use PostgreSQL instead, update `.env`:
     ```
     DB_CONNECTION=pgsql
     DB_HOST=127.0.0.1
     DB_PORT=5432
     DB_DATABASE=your_database_name
     DB_USERNAME=your_username
     DB_PASSWORD=your_password
     ```

3. **Generate application key:**
   ```bash
   php artisan key:generate
   ```

4. **Run migrations:**
   ```bash
   php artisan migrate
   ```

5. **Build and copy React frontend (from parent directory):**
   ```bash
   cd ..
   npm install
   npm run build
   xcopy /E /I /Y dist\public laravel-backend\public
   ```

6. **Start the development server:**
   ```bash
   php artisan serve
   ```

The application will be available at `http://localhost:8000`

## API Endpoints

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

## Database Schema

### Users Table
- `id` (UUID, primary key)
- `username` (string, unique)
- `password` (hashed string)
- `created_at`, `updated_at`

### Certificates Table
- `id` (UUID, primary key)
- `title` (string)
- `issuer` (string)
- `date` (string)
- `category` (string)
- `description` (text, nullable)
- `certificate_id` (string, nullable)
- `created_at`, `updated_at`

## Development

To rebuild the frontend after changes:
```bash
cd ..
npm run build
xcopy /E /I /Y dist\public laravel-backend\public
```

## Production Deployment

1. Set `APP_ENV=production` in `.env`
2. Set `APP_DEBUG=false` in `.env`
3. Run `php artisan config:cache`
4. Run `php artisan route:cache`
5. Run `php artisan view:cache`
6. Configure your web server (Apache/Nginx) to point to the `public` directory
