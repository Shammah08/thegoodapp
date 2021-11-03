import { FaCartArrowDown, FaSearchDollar } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../contexts/cart-context";
import ProductsContext from "../../contexts/products-context";
import { Link } from "react-router-dom";

function ShoppingCenter() {
  const { cart, addItem } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const addToCart = (itemId) => {
    // filter ordered item from products
    const orderItem = products.filter((product) => product.id === itemId);

    // destructure orders object from mapped list
    addItem(...orderItem);
  };
  return (
    <section className='shop-section'>
      {/* <a href="/shop/checkout" className="cart-link"></a> */}
      <div className='products'>
        {products.map((product) => {
          return (
            <div className='product' key={product.id}>
              {product.soldOut ? (
                <span className='sold-out-product'>
                  <h2>Sold Out</h2>
                </span>
              ) : (
                ""
              )}
              {product.new ? (
                <span className='new-product'>
                  <h2>New</h2>
                </span>
              ) : (
                ""
              )}
              <img src={product.img} alt='PRODUCT' />
              <span className='product-options'>
                <FaCartArrowDown
                  className='cart-option'
                  onClick={() => addToCart(product.id)}
                />

                <Link
                  to={`/shop/${product.id}/${product.name}/`}
                  className='link'>
                  <FaSearchDollar className='cart-option' />
                </Link>
              </span>
              <span className='product-details'>
                <h3>{product.name}</h3>
                <h5>Ksh. {product.price} /=</h5>
              </span>
            </div>
          );
        })}
      </div>
      ;
    </section>
  );
}

export default ShoppingCenter;
