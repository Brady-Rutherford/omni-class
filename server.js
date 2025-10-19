const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const axios = require('axios');
require('dotenv').config();
const config = require('./config');

const app = express();
const PORT = config.PORT;

// Security middleware
app.use(helmet());
app.use(cors({
    origin: config.CORS_ORIGINS,
    credentials: true
}));

// Rate limiting
const limiter = rateLimit({
    windowMs: config.RATE_LIMIT.windowMs,
    max: config.RATE_LIMIT.max,
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Groq API configuration (Free Llama 3)
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_API_KEY = config.GROQ_API_KEY;
const GROQ_MODELS = config.GROQ_MODELS;
const DEFAULT_MODEL = config.DEFAULT_MODEL;

// AI Service class
class AIService {
    constructor() {
        this.currentModel = DEFAULT_MODEL; // Default to Llama 3.1 8B
        this.promptCount = 0; // Track number of prompts for Socratic questioning
        console.log('🧠 AIService initialized with Socratic questioning enabled');
    }

    async generateResponse(prompt, type = 'generation') {
        try {
            console.log(`🤖 Calling Groq API with model: ${this.currentModel}`);
            console.log(`🔑 Using API key: ${GROQ_API_KEY ? GROQ_API_KEY.substring(0, 10) + '...' : 'NOT SET'}`);
            
            const response = await this.callGroqAPI(prompt, type);
            
            // Increment prompt count and check for Socratic questioning
            this.promptCount++;
            console.log(`📊 Prompt count: ${this.promptCount} (Socratic question every 3 prompts)`);
            
            if (this.promptCount % 3 === 0) {
                console.log('🧠 Triggering Socratic question!');
                const socraticQuestion = this.generateSocraticQuestion(prompt, type);
                return response + socraticQuestion;
            }
            
            return response;
        } catch (error) {
            console.error('Groq API failed:', error.message);
            return this.getFallbackResponse(prompt, type);
        }
    }

    async callGroqAPI(prompt, type) {
        try {
            const headers = {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            };

            // Format prompt based on type
            const systemPrompt = this.getSystemPrompt(type);
            const userPrompt = this.formatPrompt(prompt, type);

            const payload = {
                model: GROQ_MODELS[this.currentModel],
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: userPrompt
                    }
                ],
                max_tokens: 500,
                temperature: 0.7,
                top_p: 0.9
            };

            console.log(`📝 Sending request to Groq:`, JSON.stringify(payload, null, 2));

            const response = await axios.post(GROQ_API_URL, payload, {
                headers,
                timeout: 30000
            });

            console.log(`✅ Groq Response Status: ${response.status}`);
            console.log(`📄 Response data:`, response.data);

            if (response.data && response.data.choices && response.data.choices[0]) {
                const content = response.data.choices[0].message.content;
                const formatted = this.formatResponse(content, type);
                console.log(`🎯 Formatted response: ${formatted.substring(0, 100)}...`);
                return formatted;
            }

            throw new Error('No response content received from Groq');

        } catch (error) {
            console.error('❌ Groq API call failed:', error.response?.data || error.message);
            throw error;
        }
    }

    getSystemPrompt(type) {
        if (type === 'research') {
            return `You are a helpful research assistant. Provide clear, accurate, and well-structured answers to research questions. 
            Format your responses with proper headings, bullet points, and explanations. Be concise but comprehensive.`;
        } else {
            return `You are a helpful writing assistant. Help users generate, improve, or expand on their writing. 
            Provide creative and practical suggestions. Format your responses clearly with examples and actionable advice.`;
        }
    }

    async callAlternativeAI(prompt, type) {
        // Use a simple text generation service or create enhanced fallback
        console.log(`🔄 Using enhanced fallback AI for: ${prompt}`);
        
        // Simulate AI processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (type === 'research') {
            return this.generateEnhancedResearchResponse(prompt);
        } else {
            return this.generateEnhancedGenerationResponse(prompt);
        }
    }

    generateEnhancedResearchResponse(prompt) {
        const responses = {
            'machine learning': `Machine learning is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can access data and use it to learn patterns and make predictions or decisions.`,
            'programming': `Programming is the process of creating instructions for computers to follow. It involves writing code in programming languages to solve problems, automate tasks, and build software applications.`,
            'artificial intelligence': `Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans. It encompasses machine learning, natural language processing, computer vision, and robotics.`,
            'python': `Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in web development, data science, artificial intelligence, and automation.`,
            'javascript': `JavaScript is a programming language that enables interactive web pages and is an essential part of web development. It runs in browsers and can also be used on servers with Node.js.`
        };

        const lowerPrompt = prompt.toLowerCase();
        let response = '';

        for (const [key, value] of Object.entries(responses)) {
            if (lowerPrompt.includes(key)) {
                response = value;
                break;
            }
        }

        if (!response) {
            response = `Based on your question about "${prompt}", here's what I can tell you: This is an important topic in computer science and technology. It involves understanding fundamental concepts, practical applications, and real-world implementations.`;
        }

        return `<h4>Research Results:</h4>
            <p><strong>Topic:</strong> ${prompt}</p>
            <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #667eea;">
                <p><strong>Answer:</strong> ${response}</p>
            </div>
            <div style="background: #f8f9fa; padding: 10px; border-radius: 6px; margin: 10px 0;">
                <strong>Key Points:</strong>
                <ul>
                    <li>This is a fundamental concept in computer science</li>
                    <li>It has practical applications in many industries</li>
                    <li>Understanding the basics is essential for further learning</li>
                </ul>
            </div>
            <p><em>Generated using AI research assistance.</em></p>`;
    }

    generateEnhancedGenerationResponse(prompt) {
        const responses = {
            'write': `Here's a well-structured response to help you with your request:`,
            'create': `I'll help you create content for your needs:`,
            'explain': `Let me explain this concept clearly:`,
            'help': `I'm here to help you with your learning:`
        };

        const lowerPrompt = prompt.toLowerCase();
        let intro = 'Here\'s a helpful response to your request:';

        for (const [key, value] of Object.entries(responses)) {
            if (lowerPrompt.includes(key)) {
                intro = value;
                break;
            }
        }

        return `<h4>AI Generated Response:</h4>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>${intro}</strong></p>
                <p>${prompt}</p>
                <div style="background: #e8f5e8; padding: 10px; border-radius: 6px; margin: 10px 0;">
                    <strong>Key Points:</strong>
                    <ul>
                        <li>Break down the concept into manageable parts</li>
                        <li>Look for practical examples and applications</li>
                        <li>Practice with hands-on exercises</li>
                        <li>Connect it to what you already know</li>
                    </ul>
                </div>
            </div>
            <div style="background: #fff3cd; padding: 10px; border-radius: 6px; margin: 10px 0;">
                <strong>Next Steps:</strong>
                <ol>
                    <li>Review the main concepts</li>
                    <li>Find examples in your field of study</li>
                    <li>Practice with exercises or projects</li>
                    <li>Ask follow-up questions if needed</li>
                </ol>
            </div>
            <p><em>This response is generated to enhance your learning and understanding.</em></p>`;
    }


    formatPrompt(prompt, type) {
        // For OpenAI, we just return the prompt as-is since we handle formatting in the system prompt
        return prompt;
    }

    formatResponse(response, type) {
        // Clean up the response
        let cleaned = response.trim();
        
        if (type === 'research') {
            return this.formatResearchResponse(cleaned);
        } else {
            return this.formatGenerationResponse(cleaned);
        }
    }

    formatResearchResponse(response) {
        // Simple formatting: heading + space + text
        return `<h3>Research Analysis</h3>
        <div class="response-text">
            ${response}
        </div>`;
    }

    formatGenerationResponse(response) {
        // Simple formatting: heading + space + text
        return `<h3>AI Generated Content</h3>
        <div class="response-text">
            ${response}
        </div>`;
    }

    generateSocraticQuestion(prompt, type) {
        const questions = {
            research: [
                "🤔 **Socratic Question:** Based on what we just discussed, can you think of a real-world example where this concept applies?",
                "🤔 **Socratic Question:** What do you think would happen if we changed one key aspect of this topic?",
                "🤔 **Socratic Question:** How does this relate to other concepts you've learned? Can you make connections?",
                "🤔 **Socratic Question:** What questions do you still have about this topic? What would you like to explore further?",
                "🤔 **Socratic Question:** Can you explain this concept in your own words? What's the most important takeaway?"
            ],
            generation: [
                "🤔 **Socratic Question:** How would you apply this information in a practical project?",
                "🤔 **Socratic Question:** What challenges do you think you might face when implementing this?",
                "🤔 **Socratic Question:** Can you think of alternative approaches to what we discussed?",
                "🤔 **Socratic Question:** What would you do differently if you were starting this from scratch?",
                "🤔 **Socratic Question:** How confident do you feel about using this information? What would help you feel more prepared?"
            ]
        };
        
        const questionList = questions[type] || questions.research;
        const randomQuestion = questionList[Math.floor(Math.random() * questionList.length)];
        
        return `
        <div class="socratic-question">
            <div class="question-header">
                <div class="question-icon">🧠</div>
                <h4>Critical Thinking Challenge</h4>
            </div>
            <div class="question-content">
                <p>${randomQuestion}</p>
                <div class="question-tip">
                    <strong>💡 Tip:</strong> Take a moment to think deeply about this question. Consider writing your thoughts in your notes!
                </div>
            </div>
        </div>`;
    }

    getFallbackResponse(prompt, type) {
        if (type === 'research') {
            return `<h4>Research Response (Fallback):</h4>
                <p><strong>Topic:</strong> ${prompt}</p>
                <p>Based on available information, here's what I can tell you:</p>
                <ul>
                    <li><strong>Key Concept:</strong> This is an important topic in your field of study</li>
                    <li><strong>Main Points:</strong> Focus on understanding the core principles</li>
                    <li><strong>Applications:</strong> Consider how this applies to real-world scenarios</li>
                </ul>
                <p><em>Note: This is a fallback response. For more detailed research, try again later.</em></p>`;
        } else {
            return `<h4>Generated Response (Fallback):</h4>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p>I understand you're asking about: <strong>${prompt}</strong></p>
                    <p>Here's a helpful response to guide your learning:</p>
                    <ul>
                        <li>Break down the concept into smaller parts</li>
                        <li>Look for examples and applications</li>
                        <li>Practice with exercises and problems</li>
                    </ul>
                </div>
                <p><em>Note: This is a fallback response. For more detailed assistance, try again later.</em></p>`;
        }
    }
}

// Initialize AI service
const aiService = new AIService();

// Routes
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'Omni-Class Backend is running',
        timestamp: new Date().toISOString()
    });
});

app.post('/api/ai/research', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt || prompt.trim().length === 0) {
            return res.status(400).json({ 
                error: 'Prompt is required',
                message: 'Please provide a research question or topic'
            });
        }

        if (prompt.length > 1000) {
            return res.status(400).json({ 
                error: 'Prompt too long',
                message: 'Please keep your prompt under 1000 characters'
            });
        }

        const response = await aiService.generateResponse(prompt, 'research');
        
        res.json({
            success: true,
            response: response,
            type: 'research',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Research API Error:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'Failed to process research request',
            fallback: aiService.getFallbackResponse(req.body.prompt || '', 'research')
        });
    }
});

app.post('/api/ai/generation', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt || prompt.trim().length === 0) {
            return res.status(400).json({ 
                error: 'Prompt is required',
                message: 'Please provide a prompt for content generation'
            });
        }

        if (prompt.length > 1000) {
            return res.status(400).json({ 
                error: 'Prompt too long',
                message: 'Please keep your prompt under 1000 characters'
            });
        }

        const response = await aiService.generateResponse(prompt, 'generation');
        
        res.json({
            success: true,
            response: response,
            type: 'generation',
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Generation API Error:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: 'Failed to process generation request',
            fallback: aiService.getFallbackResponse(req.body.prompt || '', 'generation')
        });
    }
});

// Model management endpoints
app.get('/api/models', (req, res) => {
    res.json({
        available: FREE_MODELS,
        current: aiService.currentModel,
        description: 'Available free models for AI assistance'
    });
});

app.post('/api/models/switch', (req, res) => {
    try {
        const { model } = req.body;
        
        if (!model || !FREE_MODELS[model]) {
            return res.status(400).json({
                error: 'Invalid model',
                message: `Available models: ${Object.keys(FREE_MODELS).join(', ')}`
            });
        }

        aiService.currentModel = model;
        res.json({
            success: true,
            message: `Switched to ${model} model`,
            current: aiService.currentModel
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to switch model',
            message: error.message
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: 'Something went wrong on our end'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Not found',
        message: 'The requested endpoint does not exist'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Omni-Class Backend running on port ${PORT}`);
    console.log(`📚 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🤖 AI Models available: ${Object.keys(GROQ_MODELS).join(', ')}`);
    console.log(`🔑 Groq API Key: ${GROQ_API_KEY ? 'Set' : 'Not set (using fallback responses)'}`);
});

module.exports = app;
