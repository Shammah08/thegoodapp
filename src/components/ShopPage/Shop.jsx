import "./Shop.css";
import "./Shop.media.css";
import ShoppingCenter from "./ShoppingCenter.jsx";
import Cart from "./Cart.jsx";
import CartState from "../../contexts/CartState";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useState, useContext } from "react";
import CartContext from "../../contexts/cart-context";

const Shop = () => {
  const [active, setactive] = useState(true);

  return (
    <CartState>
      <section className='shopping-center'>
        <ShoppingHeader active={active} setactive={setactive} />
        {active ? <ShoppingCenter active={active} /> : <Cart active={active} />}
      </section>
    </CartState>
  );
};

const ShoppingHeader = ({ active, setactive }) => {
  const { cart } = useContext(CartContext);

  const handleClick = () => {
    setactive(!active);
  };

  return (
    <div className='shopping-text'>
      <h1>The Shop</h1>
      <a className='cart-link' onClick={() => setactive(!active)}>
        <span className='cart-count'>{cart.length}</span>
        <FaCartPlus className='icon cart' />
      </a>
    </div>
  );
};

export default Shop;
