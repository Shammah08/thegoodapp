import { useContext } from "react";
import CartContext from "../../contexts/cart-context";
import AppContext from "../../contexts/app-context";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const ProcessPayment = ({ setUserOpen, active, setactive }) => {
  // user details from context
  const { activeUser } = useContext(AppContext);
  const { auth } = activeUser;
  const { username, email, phone } = activeUser.userDetails;

  // cart items from context
  const { cart } = useContext(CartContext);

  // get individual prices
  const prices = cart.map((item) => {
    return item.price * item.quantity;
  });
  const total = prices.length > 0 ? prices.reduce((a, b) => a + b) : 0;

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
    tx_ref: Date.now(),
    amount: total,
    currency: "KES",
    payment_options: "card,mobilemoney,ussd",
    // specified redirect URL
    redirect_url: "/shop",
    meta: {
      consumer_phone: phone,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: email,
      phonenumber: phone,
      name: username,
    },
    customizations: {
      title: "The Good Company",
      description: `Payment for items in cart ${{ ...cart }}`,
      logo: "",
    },
    callback: (data) => {
      console.log(data);
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleClick = (e) => {
    if (auth && email) {
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          closePaymentModal(); // this will close the modal programmatically
        },
        onClose: () => {},
      });
    } else {
      setUserOpen(true);
    }
  };

  return (
    <>
      {/* Check if cart is empty */}
      {cart.length > 0 ? (
        <div className='checkout-container'>
          <div className='order-totals'>
            <span>
              <h4>Items: </h4>
              <i>{cart.length}</i>
            </span>
            <span>
              <h4>SubTotal: </h4>
              <i>{total}.00</i>
            </span>
          </div>
          {/* check if user is authenticated and email is present */}
          {auth && email ? (
            <button className='btn payment' onClick={handleClick}>
              Proceed to Checkout
            </button>
          ) : (
            <button className='btn payment' onClick={handleClick}>
              Checkout
            </button>
          )}
        </div>
      ) : (
        <div className='empty-cart'>
          <h2>No Items in the cart.</h2>
          <strong onClick={() => setactive(!active)}>Continue Shopping</strong>
        </div>
      )}
    </>
  );
};

export default ProcessPayment;
