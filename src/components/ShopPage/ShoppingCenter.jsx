import { FaCartArrowDown, FaSearchDollar } from "react-icons/fa";
import { useContext } from "react";
import { cartContext } from "../../contexts/CartState";
import ProductsContext from "../../contexts/products-context";

const ShoppingCenter = ({ setActiveProduct }) => {
  const { addItem } = useContext(cartContext);
  const { products } = useContext(ProductsContext);

  const addToCart = (product) => {
    addItem(product);
  };

  return (
    <section className="shop-section">
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              {product.soldOut ? (
                <span className="sold-out-product">
                  <h2>Sold Out</h2>
                </span>
              ) : (
                ""
              )}
              {product.new ? (
                <span className="new-product">
                  <h2>New</h2>
                </span>
              ) : (
                ""
              )}
              <img src={product.img} alt="PRODUCT" />
              <span className="product-options">
                <FaCartArrowDown
                  className="cart-option"
                  onClick={() => addToCart(product)}
                />

                <a href="#product">
                  <FaSearchDollar
                    className="cart-option"
                    onClick={() => setActiveProduct(product.img)}
                  />
                </a>
              </span>
              <span className="product-details">
                <h3>{product.name}</h3>
                <h5>Ksh. {product.price} /=</h5>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShoppingCenter;
