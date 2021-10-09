import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import "./Shop.css";
import "./Shop.media.css";
import { products } from "../database";
import ShoppingCenter from "./ShoppingCenter.jsx";

// const config = {
//   public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
//   tx_ref: Date.now(),
//   amount: totalCost,
//   currency: "KES",
//   payment_options: "card,mobilemoney,ussd",
//   customer: {
//     email: userDetails.email,
//     phonenumber: userDetails.phone,
//     name: userDetails.username,
//   },
//   customizations: {
//     title: "The Good Company",
//     description: "Payment for items in cart",
//     logo: logos.logoRed,
//   },
// };

function Shop() {
  // const [userDetails, setUserDetails] = useState(config);
  // const [cartCount, setCartCount] = useState(0);
  const [count, setCount] = useState(0);

  // const [cart, setCart] = useState({});

  // const getUserDetails = () => {};

  // const handleFlutterPayment = useFlutterwave(config);

  // const handleClick = (e) => {
  //   console.log(e.target.value, "Added to Cart");
  // };

  const handleClick = (e) => {
    // console.log(e.target.innerHTML);
    e.preventDefault();

    setCount(count + 1);
  };

  return (
    <section className="shopping-center">
      <div className="shopping-text">
        <h1>Welcome To The Shop</h1>
      </div>

      <ShoppingCenter
        products={products}
        handleClick={handleClick}
        count={count}
      />
    </section>
  );
}

export default Shop;
