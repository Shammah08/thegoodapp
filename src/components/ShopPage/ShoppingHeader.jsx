import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import CartContext from "../../contexts/cart-context";

const ShoppingHeader = ({ active, setactive, setActiveProduct }) => {
  const { cart } = useContext(CartContext);
  const handleClick = () => {
    setActiveProduct("");
    setactive(!active);
  };

  return (
    <div className='shopping-text'>
      <h1>The Shop</h1>
      <div className='cart-link' onClick={handleClick}>
        <span className='cart-count'>{cart.length}</span>
        <FaCartPlus className='icon cart' />
      </div>
    </div>
  );
};

export default ShoppingHeader;
