import { products } from "../database";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";

function Product({ match }) {
  // console.log(onClick, cartCount);
  const [cartCount, setCartCount] = useState(0);
  const [count, setCount] = useState(1);
  // eslint-disable-next-line
  const [orderItem, setOrderItem] = useState({});

  const item = products.filter((product) => {
    const id = Number(match.params.id);
    return product.id === id;
  });
  console.log("Item", item);

  const handleClick = (e) => {
    // console.log(e.target.innerHTML);
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
  const handleSubmit = () => {
    const order = {
      product: item[0].name,
      count: count,
    };
    console.log(order);
    setCartCount(count);
    setOrderItem(order);
    localStorage.setItem(item[0].name, JSON.stringify(order));
    setCount(1);
  };

  return (
    <main>
      <a href="/shop/checkout" className="cart-link">
        <span className="cart-count">{cartCount}</span>
        <FaCartPlus className="icon cart" />
      </a>
      <section className="product-section">
        {item.map((detail) => {
          return (
            <>
              <div className="product-image" key={detail.id}>
                {detail.soldOut ? (
                  <span className="sold-out-product">
                    <h3>Sold Out</h3>
                  </span>
                ) : (
                  ""
                )}
                {detail.new ? (
                  <span className="new-product">
                    <h3>New</h3>
                  </span>
                ) : (
                  ""
                )}
                <img src={detail.img} alt={detail.name} />
              </div>
              <div className="product-text" key={detail.name}>
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
                  onClick={handleSubmit}
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
