// src/context.js

import React, { createContext, useReducer, useContext } from 'react';

// Define the initial state for the context
const initialState = {
  stocks: [],
  isLoading: false,
  error: null,
};

// Define actions to manipulate state
const ACTIONS = {
  FETCH_STOCKS_REQUEST: 'FETCH_STOCKS_REQUEST',
  FETCH_STOCKS_SUCCESS: 'FETCH_STOCKS_SUCCESS',
  FETCH_STOCKS_FAILURE: 'FETCH_STOCKS_FAILURE',
};

// Create a context object
const StockContext = createContext();

// Define a reducer function to update state based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_STOCKS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case ACTIONS.FETCH_STOCKS_SUCCESS:
      return { ...state, isLoading: false, stocks: action.payload };
    case ACTIONS.FETCH_STOCKS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

// Custom hook to access stock context
export const useStockContext = () => useContext(StockContext);

// Stock provider component to wrap the application
export const StockProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StockContext.Provider value={{ state, dispatch }}>
      {children}
    </StockContext.Provider>
  );
};
