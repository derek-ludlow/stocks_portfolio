import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [stocks, setStocks] = useState([]);
  const [newStock, setNewStock] = useState({ symbol: '', quantity: 0, purchasePrice: 0 });

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    const response = await axios.get('http://localhost:5000/stocks');
    setStocks(response.data);
  };

  const addStock = async () => {
    await axios.post('http://localhost:5000/stocks', newStock);
    fetchStocks();
  };

  return (
    <div>
      <h1>Stock Portfolio Tracker</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock._id}>
            {stock.symbol} - {stock.quantity} shares - ${stock.purchasePrice.toFixed(2)}
          </li>
        ))}
      </ul>
      <h2>Add New Stock</h2>
      <label>Symbol:</label>
      <input type="text" value={newStock.symbol} onChange={(e) => setNewStock({ ...newStock, symbol: e.target.value })} />
      <label>Quantity:</label>
      <input type="number" value={newStock.quantity} onChange={(e) => setNewStock({ ...newStock, quantity: e.target.value })} />
      <label>Purchase Price:</label>
      <input type="number" value={newStock.purchasePrice} onChange={(e) => setNewStock({ ...newStock, purchasePrice: e.target.value })} />
      <button onClick={addStock}>Add Stock</button>
    </div>
  );
}

export default App;
