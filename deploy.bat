@echo off
REM NBNE Website - Production Deployment Script
REM This script deploys your website to Netlify production

echo ========================================
echo   NBNE Website - Production Deploy
echo ========================================
echo.

REM Navigate to website directory
cd /d "g:\My Drive\002 NBNE ADMIN\056 WEBSITE\009 FRAMER\website"

echo Current directory: %CD%
echo.
echo Deploying to PRODUCTION...
echo.

REM Deploy to production
netlify deploy --prod --dir=.

echo.
echo ========================================
echo   Deployment Complete!
echo ========================================
echo.
echo Your website is now live at:
echo https://nbnesigns.co.uk
echo.
pause
