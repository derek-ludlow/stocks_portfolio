import React, { useState, useEffect } from 'react';

const PortfolioPage = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch('/stocks');
      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  return (
    <div>
      <h2>Portfolio Page</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.id}>
            {stock.symbol} - Quantity: {stock.quantity} - Purchase Price: ${stock.purchasePrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioPage;
