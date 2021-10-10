import ProcessPayment from "./ProcessPayment.jsx";
import UserForm from "./UserForm.jsx";
import { products } from "../database";
import { useState, useEffect } from "react";

function Cart() {
  const [totalCost, setTotalCost] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  const [userOpen, setUserOpen] = useState(false);

  const [userDetails, setUserDetails] = useState({
    username: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    const prices = products.map((product) => {
      return product.price;
    });
    const total = prices.reduce((a, b) => a + b);

    setTotalCost(total);
    setItemCount(products.length);

    return () => {
      console.log("Calculation Done", total);
    };
  }, [itemCount]);

  return (
    <section className='checkout-section'>
      <div className='cart-items'>
        <span className='cart-intro'>
          <h1>Shopping Cart</h1>
          <h5>Price</h5>
        </span>
        {/* {products.map((product) => {
          return ( */}
        <div className='cart-item' key={5}>
          <img src={""} alt='Cart Item' />
          <div className='cart-item-details'>
            <h4>{"Coffee Mug - White"}</h4>
            <p>
              {
                "lorem  const handleFlutterPayment = useFlutterwave(config)  const handleFlutterPayment = useFlutterwave(config)"
              }
            </p>
            <h5>by{" The Mics Are Open"}</h5>
            <strong>{false ? "Out Of Stock" : "In Stock"}</strong>
            <select name='quantity' id=''>
              <option value='1'>Qty:</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <span className='item-price'>Ksh. {"100"}</span>
        </div>
        <div className='cart-item' key={58}>
          <img src={""} alt='Cart Item' />
          <div className='cart-item-details'>
            <h4>{"Coffee Mug - White"}</h4>
            <p>
              {
                "lorem  const handleFlutterPayment = useFlutterwave(config)  const handleFlutterPayment = useFlutterwave(config)"
              }
            </p>
            <h5>by{" The Mics Are Open"}</h5>
            <strong>{false ? "Out Of Stock" : "In Stock"}</strong>
            <select name='quantity' id=''>
              <option value='1'>Qty:</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <span className='item-price'>Ksh. {"100"}</span>
        </div>
        <div className='cart-item' key={65}>
          <img src={""} alt='Cart Item' />
          <div className='cart-item-details'>
            <h4>{"Coffee Mug - White"}</h4>
            <p>
              {
                "lorem  const handleFlutterPayment = useFlutterwave(config)  const handleFlutterPayment = useFlutterwave(config)"
              }
            </p>
            <h5>by{" The Mics Are Open"}</h5>
            <strong>{false ? "Out Of Stock" : "In Stock"}</strong>
            <select name='quantity' id=''>
              <option value='1'>Qty:</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <span className='item-price'>Ksh. {"100"}</span>
        </div>
        {/* );
        })} */}
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
}

export default Cart;
