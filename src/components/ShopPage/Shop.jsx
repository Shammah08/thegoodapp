import "./Shop.css";
import "./Shop.media.css";
import ShoppingHeader from "./ShoppingHeader.jsx";
import ShoppingCenter from "./ShoppingCenter.jsx";
import Cart from "./Cart.jsx";
import CartState from "../../contexts/CartState";
import { useState } from "react";

const Shop = () => {
  const [active, setactive] = useState(true);

  return (
    <CartState>
      <section className='shopping-center'>
        <ShoppingHeader active={active} setactive={setactive} />
        {active ? (
          <ShoppingCenter active={active} />
        ) : (
          <Cart active={active} setactive={setactive} />
        )}
      </section>
    </CartState>
  );
};

export default Shop;
