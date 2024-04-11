import React from 'react';

const StockList = ({ stocks }) => {
  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.id}>
            <strong>{stock.symbol}</strong> - {stock.quantity} shares
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockList;
