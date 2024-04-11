import React from 'react';

const StockItem = ({ stock }) => {
  return (
    <div>
      <h3>{stock.symbol}</h3>
      <p>Quantity: {stock.quantity}</p>
      <p>Purchase Price: ${stock.purchasePrice}</p>
    </div>
  );
}

export default StockItem;
