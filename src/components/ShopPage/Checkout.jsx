import ProcessPayment from "./ProcessPayment.jsx";

function Checkout() {
  return (
    <section className="checkout-container">
      <h3>Checkout</h3>
      <h5>Welcome to the chekout section</h5>
      <ProcessPayment />
    </section>
  );
}

export default Checkout;
