# 🔑 API Token Setup Guide

## Why READ Token?

For the **Hugging Face Inference API**, you only need a **READ token** because:
- We're only **reading/generating** text from the models
- We're not uploading or modifying any models
- READ tokens are sufficient for text generation

## Step-by-Step Setup

### 1. Get Your Free READ Token

1. **Go to Hugging Face:**
   - Visit: [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

2. **Create New Token:**
   - Click "New token"
   - Name: `omni-class` (or anything you like)
   - **Permission: READ** ✅ (this is what we need)
   - Click "Generate a token"

3. **Copy the Token:**
   - It looks like: `hf_abc123def456...`
   - Copy the entire token

### 2. Configure Your App

**Option A: Create .env file**
```bash
# Create .env file in your project root
echo "HUGGINGFACE_API_KEY=hf_your_actual_token_here" > .env
```

**Option B: Set environment variable**
```bash
# macOS/Linux
export HUGGINGFACE_API_KEY=hf_your_actual_token_here

# Windows
set HUGGINGFACE_API_KEY=hf_your_actual_token_here
```

**Option C: Edit config.js directly**
```javascript
// In config.js, replace this line:
HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY || 'hf_your_free_token_here',

// With your actual token:
HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY || 'hf_your_actual_token_here',
```

### 3. Test Your Setup

1. **Restart your backend:**
   ```bash
   # Stop the current server (Ctrl+C)
   # Then restart:
   node server.js
   ```

2. **Test the API:**
   ```bash
   curl -X POST http://localhost:3001/api/ai/generation \
     -H "Content-Type: application/json" \
     -d '{"prompt":"What is programming?"}'
   ```

3. **Check the response:**
   - If you get a real AI response (not fallback), you're good!
   - If you still get fallback, check your token

## 🔍 Troubleshooting

### Still Getting Fallback Responses?
- ✅ Check your token starts with `hf_`
- ✅ Make sure you selected "Read" permission
- ✅ Restart the backend server after adding the token
- ✅ Check the server logs for error messages

### Token Not Working?
- ✅ Verify the token is correct (no extra spaces)
- ✅ Make sure your Hugging Face account is verified
- ✅ Try generating a new token

### Rate Limited?
- ✅ Hugging Face has rate limits on free accounts
- ✅ Wait a few minutes and try again
- ✅ Consider upgrading to a paid plan for higher limits

## 🎯 What You'll Get

With a proper READ token, you'll get:
- **Real AI responses** instead of fallback messages
- **Better quality** text generation
- **Access to all models** (TinyLlama, DialoGPT, etc.)
- **Faster responses** (usually 1-3 seconds)

---

**Need Help?** Check the server logs or open `test.html` to debug!

