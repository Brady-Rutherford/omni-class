#!/bin/bash

# Omni-Class Startup Script
echo "🚀 Starting Omni-Class AI Note-Taking App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the backend server
echo "🔧 Starting backend server on port 3001..."
node server.js &

# Wait a moment for the server to start
sleep 2

# Check if the server started successfully
if curl -s http://localhost:3001/api/health > /dev/null; then
    echo "✅ Backend server is running!"
    echo "🌐 Backend API: http://localhost:3001"
    echo "📱 Frontend: Open index.html in your browser"
    echo ""
    echo "💡 Tips:"
    echo "   - Open index.html in your browser to use the app"
    echo "   - Get a free Hugging Face API key for better AI responses"
    echo "   - Press Ctrl+C to stop the backend server"
    echo ""
    echo "🎉 Omni-Class is ready to use!"
else
    echo "❌ Failed to start backend server"
    echo "   Check if port 3001 is available"
    exit 1
fi

# Keep the script running
wait
