const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), (err) => {
    if (err) {
      // If dist/index.html doesn't exist, try public/index.html
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT}`);
});
