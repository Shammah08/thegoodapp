import { useState, useContext } from "react";
import CartContext from "../../contexts/cart-context";

function CartItem({ item }) {
  // console.log(onClick, cartCount);
  // const [cartCount, setCartCount] = useState(0);
  const { deleteItem } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    e.preventDefault();
    switch (e.target.innerHTML) {
      case "+":
        setCount(count + 1);
        break;
      case "-":
        setCount(count - 1);
        break;
      default:
        break;
    }
  };
  const handleDelete = (itemId) => {
    deleteItem(itemId);
  };

  return (
    <div className='cart-item' key={item.id}>
      <img src={item.img} alt='Cart Item' />
      <div className='cart-item-details'>
        <h4>{item.name}</h4>
        <p>{item.detail}</p>
        <h5>by{item.by}</h5>
        <strong>{item.soldOut ? "Out Of Stock" : "In Stock"}</strong>
        <span className='quantity-count'>
          <span onClick={handleClick}>-</span>
          <span>{count}</span>
          <span onClick={handleClick}>+</span>
        </span>
        <span onClick={() => handleDelete(item.id)}>Remove Item</span>
      </div>
      <span className='item-price'>Ksh. {item.price}</span>
    </div>
  );
}

export default CartItem;
