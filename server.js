const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect('mongodb://localhost/portfolio-tracker', { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schema and Model for Stocks
const stockSchema = new mongoose.Schema({
  symbol: String,
  quantity: Number,
  purchasePrice: Number,
});

const Stock = mongoose.model('Stock', stockSchema);

// Routes
app.get('/stocks', async (req, res) => {
  const stocks = await Stock.find();
  res.json(stocks);
});

app.post('/stocks', async (req, res) => {
  const { symbol, quantity, purchasePrice } = req.body;
  const newStock = new Stock({ symbol, quantity, purchasePrice });
  await newStock.save();
  res.json(newStock);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
