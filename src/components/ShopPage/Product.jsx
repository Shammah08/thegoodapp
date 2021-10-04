import { products } from "../database";
import { FaCartPlus } from "react-icons/fa";

function Product({ match, onClick }) {
  const item = products.filter((product) => {
    return product.id == match.params.id;
  });

  return (
    <main>
      <a href="/shop/checkout">
        <FaCartPlus className="icon" className="cart" />
        <span className="cart-count">0</span>
      </a>
      <section className="product-section">
        {item.map((detail) => {
          return (
            <>
              <div className="product-image">
                {detail.new ? (
                  <span className="new-product">
                    <h3>New</h3>
                  </span>
                ) : (
                  ""
                )}
                <img src={detail.img} alt={detail.name} />
              </div>
              <div className="product-text">
                <h1>{detail.name}</h1>
                <small>{detail.details}</small>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                  animi, delectus quidem exercitationem recusandae culpa.
                </p>
                <span>
                  <strong>Cost: </strong>
                  <small>Ksh. {detail.price} /=</small>
                </span>
                <br />
                <button
                  className="btn-small"
                  value={detail.name}
                  onClick={onClick}
                >
                  Add to Cart
                </button>
              </div>
              ;
            </>
          );
        })}
      </section>
    </main>
  );
}

export default Product;
