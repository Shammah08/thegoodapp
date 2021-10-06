// import { useState } from "react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import "./Shop.css";
import { products } from "../database";
import ShoppingCenter from "./ShoppingCenter.jsx";

// const config = {
//   public_key: "FLWPUBK_TEST-f34df863fe579323ddb58f901d65da9a-X",
//   tx_ref: Date.now(),
//   amount: 1000,
//   currency: "KES",
//   payment_options: "card,mobilemoney,ussd",
//   customer: {
//     email: "shammahranks@gmail.com",
//     phonenumber: "07064586146",
//     name: "Shammah Ranks",
//   },
//   customizations: {
//     title: "The Good Company",
//     description: "Payment for items in cart",
//     logo: "../tgc_logo.png",
//   },
// };

function Shop() {
  // const [userDetails, setUserDetails] = useState(config);
  // const [cart, setCart] = useState({});

  // const getUserDetails = () => {};

  // const handleFlutterPayment = useFlutterwave(config);

  // const handleClick = (e) => {
  //   console.log(e.target.value, "Added to Cart");
  // };
  return (
    <section className="shopping-center">
      <div className="shopping-text">
        <h1>Welcome To The Shop</h1>
        <p>Explore the store!</p>
      </div>

      <ShoppingCenter products={products} />
    </section>
  );
}

export default Shop;
