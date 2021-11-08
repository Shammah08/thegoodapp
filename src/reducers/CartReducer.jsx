const cartReducer = (state, action) => {
  let updatedCart = [...state.cart];
  let updatedItemIndex = updatedCart.findIndex(
    (product) => product.id === action.payload.id
  );
  switch (action.type) {
    case "ADD ITEM":
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };

    case "REDUCE ITEM":
      const updatedItem = { ...updatedCart[updatedItemIndex] };
      if (updatedItem.quantity > 1) {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return { ...state, cart: updatedCart };
      } else {
        // remove item from cart if quantity === 0
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }

    case "REMOVE ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
