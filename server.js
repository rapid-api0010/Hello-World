const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World123!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
