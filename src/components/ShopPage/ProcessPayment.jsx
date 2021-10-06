import { useState, useRef, useEffect } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../tgc_logo.png";

const config = {
  public_key: "FLWPUBK_TEST-f34df863fe579323ddb58f901d65da9a-X",
  tx_ref: Date.now(),
  amount: 1000,
  currency: "KES",
  payment_options: "card,mobilemoney,ussd",
  customer: {
    email: "shammahranks@gmail.com",
    phonenumber: "07064586146",
    name: "Shammah Ranks",
  },
  customizations: {
    title: "The Good Company",
    description: "Payment for items in cart",
    logo: logo,
  },
};
function ProcessPayment({ totalCost, itemCount }) {
  const [orderDetails, setOrderDetails] = useState(config);
  const total = useRef();
  const count = useRef();

  useEffect(() => {
    // setOrderDetails(...orderDetails, (orderDetails.amount = total));

    return () => {};
  }, [orderDetails]);

  let handleFlutterPayment;

  handleFlutterPayment = useFlutterwave(orderDetails);

  const handleClick = (e) => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };

  // const getUserDetails = () => {};

  return (
    <div className="checkout-container">
      <Link to="/shop/checkout" className="cart-link">
        <span className="cart-count">0</span>
        <FaCartPlus className="icon cart" />
      </Link>
      <div className="order-totals">
        <span>
          <h4>Items: </h4>
          <i ref={count}>{itemCount}</i>
        </span>
        <span>
          <h4>SubTotal: </h4>
          <i ref={total}>{totalCost}</i>
        </span>
      </div>
      <button className="btn payment" onClick={handleClick}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default ProcessPayment;
