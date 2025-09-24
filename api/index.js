const express = require('express');
const app = express();

// Middleware parse JSON
app.use(express.json());

// CORS middleware (cho phép web gọi từ browser)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Endpoint GET /api/hello
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Vercel API!' });
});

// Endpoint POST /api/echo
app.post('/api/echo', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Missing "text" in body' });
  }
  res.json({ echoed: text, timestamp: new Date().toISOString() });
});

// Export cho Vercel serverless
module.exports = app;