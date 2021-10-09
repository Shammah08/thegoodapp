import { FaCartPlus, FaCartArrowDown, FaSearchDollar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ShoppingCenter({ handleClick, products, count }) {
  return (
    <section className="shop-section">
      <Link to="/shop/checkout" className="cart-link">
        <span className="cart-count">{count}</span>
        <FaCartPlus className="icon cart" />
      </Link>
      {/* <a href="/shop/checkout" className="cart-link"></a> */}
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              {product.soldOut ? (
                <span className="sold-out-product">
                  <h3>Sold Out</h3>
                </span>
              ) : (
                ""
              )}
              {product.new ? (
                <span className="new-product">
                  <h3>New</h3>
                </span>
              ) : (
                ""
              )}
              <img src={product.img} alt="PRODUCT" />
              <span className="product-options">
                <FaCartArrowDown
                  className="cart-option"
                  onClick={handleClick}
                />

                <Link
                  to={`/shop/${product.id}/${product.name}/`}
                  className="link"
                >
                  <FaSearchDollar className="cart-option" />
                </Link>
              </span>
              <span className="product-details">
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
