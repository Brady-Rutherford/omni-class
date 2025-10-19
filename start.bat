@echo off
REM Omni-Class Startup Script for Windows

echo 🚀 Starting Omni-Class AI Note-Taking App...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Start the backend server
echo 🔧 Starting backend server on port 3001...
start /b node server.js

REM Wait a moment for the server to start
timeout /t 3 /nobreak >nul

REM Check if the server started successfully
curl -s http://localhost:3001/api/health >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Backend server is running!
    echo 🌐 Backend API: http://localhost:3001
    echo 📱 Frontend: Open index.html in your browser
    echo.
    echo 💡 Tips:
    echo    - Open index.html in your browser to use the app
    echo    - Get a free Hugging Face API key for better AI responses
    echo    - Close this window to stop the backend server
    echo.
    echo 🎉 Omni-Class is ready to use!
    echo.
    echo Press any key to open the app in your browser...
    pause >nul
    start index.html
) else (
    echo ❌ Failed to start backend server
    echo    Check if port 3001 is available
    pause
    exit /b 1
)

REM Keep the window open
pause
