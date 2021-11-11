import "./shop.scss";
import "./Shop.media.css";
import ShoppingHeader from "./ShoppingHeader";
import ShoppingCenter from "./ShoppingCenter";
import Cart from "./Cart";
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
