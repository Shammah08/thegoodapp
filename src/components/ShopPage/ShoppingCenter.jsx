import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function ShoppingCenter({ onClick, products }) {
  return (
    <section className="shop-section">
      <span className="title">
        <h1>EXPLORE STORE!!</h1>
        <a href="/shop/checkout">
          <FaCartPlus className="icon" />
        </a>
      </span>
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product">
              {product.new ? (
                <span className="new-product">
                  <h3>New</h3>
                </span>
              ) : (
                ""
              )}
              <img src={product.img} alt="PRODUCT" />
              <span>
                {product.details ? (
                  product.details
                ) : (
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illo, enim
                  </h6>
                )}

                <h3>
                  <Link
                    to={`/shop/${product.id}/${product.name}/`}
                    className="link"
                  >
                    {product.name}
                  </Link>
                </h3>
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
