import "./Shop.css";
import "./Shop.media.css";
import ShoppingCenter from "./ShoppingCenter.jsx";
import Cart from "./Cart.jsx";
import CartState from "../../contexts/CartState";

function Shop() {
  return (
    <section className='shopping-center'>
      <div className='shopping-text'>
        <h1>The Shop</h1>
      </div>
      <CartState>
        <ShoppingCenter />
        <Cart />
      </CartState>
    </section>
  );
}

export default Shop;
