const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// API endpoint that returns the WhatsApp link as JSON
app.get('/api/whatsapp', (req, res) => {
  res.json({
    message: 'WhatsApp chat link',
    url: 'https://wa.me/233545986719'
  });
});

// Optional redirect endpoint
app.get('/r/whatsapp', (req, res) => {
  res.redirect('https://wa.me/233545986719');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
