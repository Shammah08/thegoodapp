// STORE
import { createStore } from "redux";

let store = createStore(reducer);

// ACTION  --- ACTION THAT RETURNS AN OBJECT
const addToCart = () => {
  return {
    name: "ADD",
  };
};

const removeCart = () => {
  return {
    name: "REMOVE",
  };
};

// REDUCER
const cart = (state = {}, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
  }
};

let store = createStore(cart);

store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatchh(addToCart);
