// import { useState, useEffect, useRef } from "react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import Loader from "../Loader";
import "./Shop.css";
import { products } from "../database";
import ShoppingCenter from "./ShoppingCenter.jsx";
import logo from "../tgc_logo.png";

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

  // const getUserDetails = () => {};

  // const handleFlutterPayment = useFlutterwave(config);

  const handleClick = (e) => {
    console.log(e.target.value, "Added to Cart");
  };
  return (
    <main>
      {/* <section className="landing-section">
        <Loader />
        <div className="team-text">
          <h1 style={{ color: "black" }}>Welcome To The Shop</h1>
          <p style={{ color: "black" }}>Coming Soon!</p>
        </div>
      </section> */}
      <ShoppingCenter onClick={handleClick} logo={logo} products={products} />
    </main>
  );
}

export default Shop;
