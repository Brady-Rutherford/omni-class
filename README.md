# Omni-Class: AI-Powered Student Note-Taking App

I am making a powerful note-taking application with integrated AI assistance using free open-source language models for now and if it is succesful I may upgrade. Essentially I am building a free software that is open surce that prevents cognitive decay from AI usage 

## Features

- 📝 **Smart Note-Taking**: Clean, distraction-free interface for taking notes
- 🤖 **AI Research Assistant**: Get research-backed answers to your questions
- ✨ **AI Content Generation**: Generate study materials and explanations
- 📚 **Class Management**: Organize notes by classes and lessons
- 🔄 **Real-time AI**: Connect to free 1B parameter Llama models via Hugging Face
- 💾 **Auto-save**: Your notes are automatically saved locally

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Get Free AI API Key (Optional)

1. Go to [Hugging Face](https://huggingface.co/settings/tokens)
2. Create a free account
3. Generate a new token
4. Copy the token

### 3. Configure Environment (Optional)

Create a `.env` file in the root directory:

```env
HUGGINGFACE_API_KEY=your_free_huggingface_token_here
PORT=3001
```

*Note: The app works without an API key using fallback responses*

### 4. Start the Backend

```bash
npm start
```

The backend will start on `http://localhost:3001`

### 5. Open the Frontend

Open `index.html` in your browser or serve it with a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Or simply open index.html directly
```

## AI Models Available

The app connects to several free models:

- **TinyLlama 1.1B** (Default) - Fast, lightweight model
- **DialoGPT Medium** - Conversational AI
- **GPT-2** - General purpose text generation
- **DistilGPT-2** - Smaller, faster version of GPT-2

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/ai/research` - Research AI requests
- `POST /api/ai/generation` - Content generation requests
- `GET /api/models` - List available models
- `POST /api/models/switch` - Switch between models

## Usage

### Research AI
- Ask questions about topics you're studying
- Get research-backed explanations
- Perfect for understanding complex concepts

### Generation AI
- Generate study materials
- Create summaries and explanations
- Get help with writing and content creation

### Note Management
- Take notes in the main textarea
- Organize by classes and lessons
- Auto-save functionality
- Copy AI responses directly to your notes

## Keyboard Shortcuts

- `Ctrl/Cmd + S` - Finalize and save notes
- `Ctrl/Cmd + Enter` - Submit AI prompt (when focused)

## Troubleshooting

### Backend Not Starting
- Make sure port 3001 is available
- Check if Node.js is installed
- Run `npm install` to install dependencies

### AI Not Responding
- Check if backend is running on port 3001
- Verify internet connection
- Check browser console for errors
- Try refreshing the page

### CORS Errors
- Make sure you're opening the HTML file through a web server
- Don't open `file://` directly in some browsers

## Development

### Project Structure
```
omni-class/
├── index.html          # Frontend HTML
├── script.js           # Frontend JavaScript
├── styles.css          # Frontend CSS
├── server.js           # Backend server
├── config.js           # Configuration
├── package.json        # Dependencies
└── README.md           # This file
```

### Adding New AI Models
Edit `config.js` to add new models to the `FREE_MODELS` object.

### Customizing UI
Modify `styles.css` and `index.html` to customize the appearance.

## License

MIT License - feel free to use and modify!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Ensure the backend is running
3. Verify your internet connection
4. Try switching between different AI models

---

**Happy Note-Taking! 📚✨**
