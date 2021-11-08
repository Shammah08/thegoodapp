import { useContext } from "react";
import CartContext from "../../contexts/cart-context";

const CartItem = ({ item }) => {
  const { deleteItem, addItem, reduceItem } = useContext(CartContext);
  return (
    <div className='cart-item' key={item.id}>
      <img src={item.img} alt='Cart Item' />
      <div className='cart-item-details'>
        <h4>{item.name}</h4>
        <p>{item.detail}</p>
        <h5>by{item.by}</h5>
        <strong>{item.soldOut ? "Out Of Stock" : "In Stock"}</strong>
        <span className='quantity-count'>
          <button onClick={() => reduceItem(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addItem(item)}>+</button>
        </span>
        <i onClick={() => deleteItem(item.id)}>Remove Item</i>
      </div>
      <span className='item-price'>Ksh. {item.price * item.quantity}</span>
    </div>
  );
};

export default CartItem;
