const express = require('express');
const app = express();

// Middleware để parse JSON
app.use(express.json());

// Endpoint GET /api/hello (test đơn giản)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Vercel API!' });
});

// Endpoint POST /api/echo (bonus: test POST, nhận data và echo lại)
app.post('/api/echo', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Missing "text" in body' });
  }
  res.json({ echoed: text, timestamp: new Date().toISOString() });
});

// Vercel serverless: Export handler
module.exports = app; 
