import { createContext, useReducer } from "react";


// Initial state


const initialState = {
  cartItem = [
    { id: 1, productName: 'Coffee Mug', amount: 200 },
    { id: 2, productName: "Coaster", amount: 900 },
    { id: 3, productName: "T/Shirt- Black", amount: 1000 },
    { id: 4, productName: "Water Bottle", amount: 1050 },
  ]
};


// Create Context

export const GlobalContext = createContext(initialState);


//AppReducer

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};