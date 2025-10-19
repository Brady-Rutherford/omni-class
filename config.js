// Configuration for Omni-Class Backend
module.exports = {
    // Server Configuration
    PORT: process.env.PORT || 3001,
    NODE_ENV: process.env.NODE_ENV || 'development',
    
    // Groq API Configuration (Free Llama 3)
    // Get your free API key from: https://console.groq.com/keys
    GROQ_API_KEY: process.env.GROQ_API_KEY || 'your_groq_api_key_here',
    
    // Groq Models Available (Free)
    GROQ_MODELS: {
        'llama-3.1-8b': 'llama-3.1-8b-instant',
        'llama-3.1-70b': 'llama-3.1-70b-versatile',
        'mixtral-8x7b': 'mixtral-8x7b-32768'
    },
    
    // Default model to use
    DEFAULT_MODEL: 'llama-3.1-8b',
    
    // API Configuration
    RATE_LIMIT: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // requests per window
    },
    
    // CORS Configuration
    CORS_ORIGINS: [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:8000',
        'http://127.0.0.1:8000',
        'file://'
    ]
};
