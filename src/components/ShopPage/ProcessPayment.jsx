// import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import logo from "../tgc_logo.png";

function ProcessPayment({ cost }) {
  // const [userDetails, setUserDetails] = useState({});
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

  // const getUserDetails = () => {};

  const handleFlutterPayment = useFlutterwave(config);
  return (
    <button
      className="btn payment"
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => {},
        });
      }}
    >
      CheckOut
    </button>
  );
}

export default ProcessPayment;
