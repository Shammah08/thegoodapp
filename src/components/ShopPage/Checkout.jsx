import React from "react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";


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

const Checkout = () => {
  // const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <h2>Checkout</h2>
    </div>
  );
};

export default Checkout;
