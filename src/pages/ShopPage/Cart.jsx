import ProcessPayment from "./ProcessPayment";
import UserForm from "./UserForm";
import CartItem from "./CartItem";
import { useState, useContext } from "react";
import { cartContext } from "../../contexts/CartState";

const Cart = ({ active, setactive }) => {
  const [userFormOpen, setUserFormOpen] = useState(false);
  const { cart } = useContext(cartContext);

  return (
    <section className="cart-section">
      <div className="cart-items">
        <span className="cart-intro">
          <h1>Cart</h1>
          <h5>Price</h5>
        </span>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <UserForm userOpen={userFormOpen} setUserOpen={setUserFormOpen} />
      <ProcessPayment
        userOpen={userFormOpen}
        setUserOpen={setUserFormOpen}
        active={active}
        setactive={setactive}
      />
    </section>
  );
};

export default Cart;
