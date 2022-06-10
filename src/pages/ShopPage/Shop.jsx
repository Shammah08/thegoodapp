import "./shop.scss";
import ShoppingHeader from "./ShoppingHeader";
import ShoppingCenter from "./ShoppingCenter";
import Cart from "./Cart";
import CartState from "../../contexts/CartState";
import Product from "./Product";
import { useState } from "react";
import Header from "../../components/Header/Header";

const Shop = () => {
  const [active, setactive] = useState(true);
  const [activeProduct, setActiveProduct] = useState("");

  return (
    <div style={{backgroundColor: 'grey'}}>
      <Header />

    <CartState>
      <section className='shopping-center'>
        <ShoppingHeader
          active={active}
          setactive={setactive}
          setActiveProduct={setActiveProduct}
        />
        <Product image={activeProduct} setActiveProduct={setActiveProduct} />
        {active ? (
          <ShoppingCenter active={active} setActiveProduct={setActiveProduct} />
        ) : (
          <Cart active={active} setactive={setactive} />
        )}
      </section>
    </CartState>
    </div>
  );
};

export default Shop;
