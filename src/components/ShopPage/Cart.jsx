import ProcessPayment from "./ProcessPayment.jsx";
import UserForm from "./UserForm.jsx";
import CartItem from "./CartItem.jsx";
// import { products } from "../database";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../contexts/cart-context";

const Cart = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [userOpen, setUserOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const [userDetails, setUserDetails] = useState({
    username: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    const prices = cart.map((item) => {
      return item.price;
    });
    const total = prices.length > 1 ? prices.reduce((a, b) => a + b) : 0;

    setTotalCost(total);
    setItemCount(cart.length);

    return () => {
      // console.log("Calculation Done", total);
    };
  }, [cart]);

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

      {/* Check if auth == true and display either of the components */}
      <UserForm
        userOpen={userOpen}
        setUserOpen={setUserOpen}
        setUserDetails={setUserDetails}
      />
      <ProcessPayment
        totalCost={totalCost}
        itemCount={itemCount}
        userOpen={userOpen}
        setUserOpen={setUserOpen}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
    </section>
  );
};

export default Cart;
