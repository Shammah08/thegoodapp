import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../../contexts/cart-context";

const ShoppingHeader = ({ active, setactive }) => {
  const { cart } = useContext(CartContext);


  return (
    <div className='shopping-text'>
      <h1>The Shop</h1>
      <div className='cart-link' onClick={() => setactive(!active)}>
        <span className='cart-count'>{cart.length}</span>
        <FaCartPlus className='icon cart' />
      </div>
    </div>
  );
};

export default ShoppingHeader;
