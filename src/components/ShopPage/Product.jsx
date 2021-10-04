import { products } from "../database";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

function Product({ match, onClick }) {
  const [count, setCount] = useState(1);
  const item = products.filter((product) => {
    return product.id == match.params.id;
  });

  const handleClick = (e) => {
    console.log(e.target.innerHTML);
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

  return (
    <main>
      <a href="/shop/checkout" className="cart-link">
        <span className="cart-count">0</span>
        <FaCartPlus className="icon cart" />
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
                <p>{detail.details}</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                  animi, delectus quidem exercitationem recusandae culpa.
                </p>
                <span>
                  <strong>Cost: </strong>
                  <small>Ksh. {detail.price} /=</small>
                </span>
                <br />
                <span className="quantity-count">
                  <span onClick={handleClick}>-</span>
                  <span>{count}</span>
                  <span onClick={handleClick}>+</span>
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
