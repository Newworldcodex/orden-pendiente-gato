const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get(['/', '/pendiente'], (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/gracias', (req, res) => {
  res.sendFile(path.join(__dirname, 'gracias.html'));
});

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
  res.redirect('/pendiente');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
