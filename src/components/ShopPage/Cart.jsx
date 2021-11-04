import ProcessPayment from "./ProcessPayment.jsx";
import UserForm from "./UserForm.jsx";
// import { products } from "../database";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../contexts/cart-context";

const Cart = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [userOpen, setUserOpen] = useState(false);
  const { cart } = useContext(CartContext);
  console.log("CART:", cart);

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
    <section className='checkout-section'>
      <div className='cart-items'>
        <span className='cart-intro'>
          <h1>Shopping Cart</h1>
          <h5>Price</h5>
        </span>
        {cart.map((item) => {
          return (
            <div className='cart-item' key={item.id}>
              <img src={item.img} alt='Cart Item' />
              <div className='cart-item-details'>
                <h4>{item.name}</h4>
                <p>{item.detail}</p>
                <h5>by{item.by}</h5>
                <strong>{item.soldOut ? "Out Of Stock" : "In Stock"}</strong>
                <select name='quantity' id=''>
                  <option value='1'>Qty:</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>
              </div>
              <span className='item-price'>Ksh. {item.price}</span>
            </div>
          );
        })}
      </div>
      <UserForm
        userOpen={userOpen}
        setUserOpen={setUserOpen}
        setUserDetails={setUserDetails}
      />
      <ProcessPayment
        totalCost={totalCost}
        itemCount={itemCount}
        // onSubmit={handleSubmit}
        userOpen={userOpen}
        setUserOpen={setUserOpen}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
    </section>
  );
};

export default Cart;
