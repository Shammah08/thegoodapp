import { useRef, useEffect } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import { FaCartPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";

import { logos } from "../database.jsx";

function ProcessPayment({ totalCost, itemCount, setUserOpen, userDetails }) {
  // const [orderDetails, setOrderDetails] = useState(config);
  const total = useRef();
  const count = useRef();

  // eslint-disable-next-line
  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
    tx_ref: Date.now(),
    amount: totalCost,
    currency: "KES",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userDetails.email,
      phonenumber: userDetails.phone,
      name: userDetails.username,
    },
    customizations: {
      title: "The Good Company",
      description: "Payment for items in cart",
      logo: logos.logoRed,
    },
  };

  useEffect(() => {
    // setOrderDetails(...orderDetails, (orderDetails.amount = total));

    return () => {};
  }, [config]);

  let handleFlutterPayment;

  handleFlutterPayment = useFlutterwave(config);

  // eslint-disable-next-line
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
    <div className='checkout-container'>
      <div className='order-totals'>
        <span>
          <h4>Items: </h4>
          <i ref={count}>{itemCount}</i>
        </span>
        <span>
          <h4>SubTotal: </h4>
          <i ref={total}>{totalCost}.00</i>
        </span>
      </div>
      <button className='btn payment' onClick={() => setUserOpen(true)}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default ProcessPayment;
