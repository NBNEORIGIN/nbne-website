@echo off
REM NBNE Website - Preview Deployment Script
REM This script creates a preview deployment for testing before going live

echo ========================================
echo   NBNE Website - Preview Deploy
echo ========================================
echo.

REM Navigate to website directory
cd /d "g:\My Drive\002 NBNE ADMIN\056 WEBSITE\009 FRAMER\website"

echo Current directory: %CD%
echo.
echo Creating PREVIEW deployment...
echo This will NOT affect your live site.
echo.

REM Deploy to preview
netlify deploy --dir=.

echo.
echo ========================================
echo   Preview Deployment Complete!
echo ========================================
echo.
echo Test your changes at the preview URL above.
echo If everything looks good, run deploy.bat to go live.
echo.
pause
