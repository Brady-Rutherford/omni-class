#!/bin/bash

# Omni-Class Complete App Startup Script
echo "🚀 Starting Omni-Class AI Note-Taking App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 is not installed. Please install Python3 first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --cache /tmp/.npm --no-optional
fi

# Start the backend server
echo "🔧 Starting backend server on port 3001..."
node server.js &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Check if backend started successfully
if curl -s http://localhost:3001/api/health > /dev/null; then
    echo "✅ Backend server is running!"
else
    echo "❌ Failed to start backend server"
    kill $BACKEND_PID 2>/dev/null
    exit 1
fi

# Start the frontend server
echo "🌐 Starting frontend server on port 8000..."
python3 -m http.server 8000 &
FRONTEND_PID=$!

# Wait for frontend to start
sleep 2

echo ""
echo "🎉 Omni-Class is now running!"
echo ""
echo "📱 Frontend: http://localhost:8000"
echo "🔧 Backend API: http://localhost:3001"
echo ""
echo "💡 How to use:"
echo "   1. Open http://localhost:8000 in your browser"
echo "   2. Try the Research AI: 'What is machine learning?'"
echo "   3. Try the Generation AI: 'Help me write a summary'"
echo "   4. Copy AI responses to your notes"
echo ""
echo "🛑 To stop the app: Press Ctrl+C"
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "🛑 Stopping Omni-Class..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "✅ App stopped successfully"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Keep the script running
wait
