// src/api.js

// Function to fetch stock data from an external API
export const fetchStockData = async (symbol) => {
    try {
      // Make a GET request to the API endpoint to fetch stock data
      const response = await fetch(`https://api.example.com/stocks/${symbol}`);
      if (!response.ok) {
        throw new Error('Failed to fetch stock data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching stock data:', error);
      throw error;
    }
  };
  