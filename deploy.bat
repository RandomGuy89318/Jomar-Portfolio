@echo off
echo Building React frontend...
call npm run build

echo.
echo Copying to Laravel public directory...
xcopy /E /I /Y dist\public laravel-backend\public

echo.
echo Done! Frontend deployed to Laravel.
echo Visit: http://127.0.0.1:8000
