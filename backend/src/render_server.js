const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'kiwo-super-secret-jwt-key-2024';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage (for testing without database)
let users = [];
let questions = [];
let userIdCounter = 1;
let questionIdCounter = 1;

// Generate token
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' });
};

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, educationLevel } = req.body;
    
    // Check if user exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Bu email zaten kayıtlı'
      });
    }
    
    // Create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: userIdCounter++,
      name,
      email,
      password: hashedPassword,
      education_level: educationLevel || 'lise',
      is_premium: false
    };
    users.push(newUser);
    
    const token = generateToken(newUser.id);
    
    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        educationLevel: newUser.education_level,
        isPremium: newUser.is_premium
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({
      success: false,
      message: 'Kayıt sırasında hata oluştu',
      error: error.message
    });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = users.find(u => u.email === email);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Email veya şifre hatalı'
      });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Email veya şifre hatalı'
      });
    }
    
    const token = generateToken(user.id);
    
    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        educationLevel: user.education_level,
        isPremium: user.is_premium
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Giriş sırasında hata oluştu',
      error: error.message
    });
  }
});

// Mock AI response
app.post('/api/ai/solve', (req, res) => {
  const { question, type } = req.body;
  
  res.json({
    success: true,
    answer: `Bu bir demo cevabıdır. Gerçek AI yanıtı için backend'i tamamen yapılandırmanız gerekiyor. Soru: ${question}`,
    steps: [
      'Adım 1: Soruyu analiz et',
      'Adım 2: Formülleri uygula',
      'Adım 3: Sonucu hesapla'
    ]
  });
});

// Get questions
app.get('/api/questions', async (req, res) => {
  try {
    res.json({
      success: true,
      questions: questions
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Sorular alınırken hata oluştu',
      error: error.message
    });
  }
});

// Create question
app.post('/api/questions', async (req, res) => {
  try {
    const { userId, type, question, answer } = req.body;
    
    const newQuestion = {
      id: questionIdCounter++,
      user_id: userId,
      type,
      question,
      answer,
      created_at: new Date()
    };
    questions.push(newQuestion);
    
    res.json({
      success: true,
      question: newQuestion
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Soru oluşturulurken hata oluştu',
      error: error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`⚠️  Note: Running without database (in-memory storage)`);
});
