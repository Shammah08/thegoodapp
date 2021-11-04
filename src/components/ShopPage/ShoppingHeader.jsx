import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../../contexts/cart-context";

const ShoppingHeader = ({ active, setactive }) => {
  const { cart } = useContext(CartContext);

  const handleClick = () => {
    setactive(!active);
  };

  return (
    <div className='shopping-text'>
      <h1>The Shop</h1>
      <a className='cart-link' onClick={() => setactive(!active)}>
        <span className='cart-count'>{cart.length}</span>
        <FaCartPlus className='icon cart' />
      </a>
    </div>
  );
};

export default ShoppingHeader;
