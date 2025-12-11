# Laravel Migration Guide

Your project has been recreated with Laravel! Here's what changed:

## Project Structure

```
JomarPortfolio/
├── laravel-backend/          # New Laravel API backend
│   ├── app/
│   │   ├── Models/           # User & Certificate models
│   │   └── Http/Controllers/Api/  # API controllers
│   ├── database/migrations/  # Database schema
│   ├── routes/web.php        # API routes
│   └── public/               # React build output
├── client/                   # React frontend (unchanged)
├── server/                   # Old Express backend (can be removed)
├── shared/                   # Old schema (can be removed)
└── build-frontend.bat        # Helper script to rebuild frontend
```

## What Was Migrated

✅ **Database Schema:**
- Users table (id, username, password)
- Certificates table (id, title, issuer, date, category, description, certificate_id)

✅ **API Endpoints:**
- Authentication (register, login, logout, user)
- Certificate CRUD operations

✅ **Frontend:**
- React app remains unchanged
- Built and served from Laravel's public directory

## Quick Start

1. **Configure Database:**
   Edit `laravel-backend/.env` with your PostgreSQL credentials

2. **Run Migrations:**
   ```bash
   cd laravel-backend
   php artisan migrate
   ```

3. **Start Laravel Server:**
   ```bash
   php artisan serve
   ```
   
   Visit: http://localhost:8000

## Updating Frontend

When you make changes to the React app in `client/src/`:

```bash
# Option 1: Use the deploy script
deploy.bat

# Option 2: Manual
npm run build
xcopy /E /I /Y dist\public laravel-backend\public
```

The certificates are now linked to actual PDF/image files in `/certificates/` directory.

## Key Differences from Express

| Feature | Express (Old) | Laravel (New) |
|---------|--------------|---------------|
| Language | TypeScript | PHP |
| ORM | Drizzle | Eloquent |
| Validation | Zod | Laravel Validation |
| Auth | Passport | Laravel Auth |
| Port | 5000 | 8000 |
| API Prefix | /api | /api |

## Next Steps

1. Test the API endpoints with Postman or your frontend
2. ✅ Old Express files have been removed
3. Update your deployment process for Laravel
4. Consider adding Laravel Sanctum for API token authentication

## What Was Removed

The following old Express/Node.js files have been cleaned up:
- `server/` - Express backend
- `shared/` - TypeScript schemas
- `dist/` - Build output
- `node_modules/` - Node dependencies
- `package.json`, `package-lock.json` - Node configs
- `tsconfig.json`, `vite.config.ts` - Build configs
- `drizzle.config.ts` - Old ORM config

## Troubleshooting

**Database connection error:**
- Check PostgreSQL is running
- Verify credentials in `laravel-backend/.env`

**Frontend not loading:**
- Run `build-frontend.bat` to rebuild
- Check `laravel-backend/public/index.html` exists

**API routes not working:**
- Clear Laravel cache: `php artisan cache:clear`
- Check routes: `php artisan route:list`
