@echo off
title ApnoAI Mini Portfolio - Build and Deploy
cd /d "%~dp0"

echo ==========================================
echo       APNOAI MINI PORTFOLIO
echo ==========================================
echo.

echo [1/4] Building project...
call npm run build
if errorlevel 1 (
  echo.
  echo BUILD FAILED. Fix the error before deploying.
  pause
  exit /b 1
)

echo.
echo [2/4] Checking Git repository...
git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo This folder is not connected to Git yet.
  echo Follow the GitHub setup instructions in README.md first.
  pause
  exit /b 1
)

echo.
echo [3/4] Staging changes...
git add .
if errorlevel 1 (
  echo Could not stage changes.
  pause
  exit /b 1
)

git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Update mini portfolio"
  if errorlevel 1 (
    echo Commit failed.
    pause
    exit /b 1
  )
) else (
  echo No new changes to commit.
)

echo.
echo [4/4] Pushing to GitHub...
git push origin main
if errorlevel 1 (
  echo Push failed. Check internet and GitHub remote with: git remote -v
  pause
  exit /b 1
)

echo.
echo SUCCESS: GitHub updated.
echo If Vercel is connected to this repository, deployment should start automatically.
pause
