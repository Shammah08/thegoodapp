import ProcessPayment from "./ProcessPayment.jsx";
import UserForm from "./UserForm.jsx";
import CartItem from "./CartItem.jsx";
import { useState, useContext } from "react";
import CartContext from "../../contexts/cart-context";
// import AppContext from "../../contexts/app-context.jsx";

const Cart = () => {
  const [userOpen, setUserOpen] = useState(false);
  const { cart } = useContext(CartContext);
  // const { activeUser } = useContext(AppContext);

  return (
    <section className='cart-section'>
      <div className='cart-items'>
        <span className='cart-intro'>
          <h1>Shopping Cart</h1>
          <h5>Price</h5>
        </span>
        {cart.map((item) => {
          return <CartItem item={item} />;
        })}
      </div>
      <UserForm userOpen={userOpen} setUserOpen={setUserOpen} />
      <ProcessPayment userOpen={userOpen} setUserOpen={setUserOpen} />
    </section>
  );
};

export default Cart;
