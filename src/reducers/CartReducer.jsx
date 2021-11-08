const cartReducer = (state, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case "ADD ITEM":
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(updatedCart);

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };

    case "REMOVE ITEM":
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      } else {
        const updatedItem = { ...updatedCart[updatedItemIndex] };
        updatedItem.quantity--;
        updatedCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updatedCart,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
