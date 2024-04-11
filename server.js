const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'portfolio-tracker', 'public')));

// Serve favicon.ico separately to avoid decoding errors
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio-tracker', 'public', 'favicon.ico'));
});

// Endpoint to get all stocks
app.get('/stocks', (req, res) => {
  res.json(mockStocks);
});

// Endpoint to add a new stock
app.post('/stocks', (req, res) => {
  const { symbol, quantity, purchasePrice } = req.body;
  const newStock = { id: mockStocks.length + 1, symbol, quantity, purchasePrice };
  mockStocks.push(newStock);
  res.json(newStock);
});

// Route for any other requests - serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio-tracker', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
