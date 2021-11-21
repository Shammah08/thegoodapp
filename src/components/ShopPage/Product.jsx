import { FaWindowClose } from "react-icons/fa";

const Product = ({ image, setActiveProduct }) => {
  return (
    <div
      className={`product-image-container ${image ? "active" : ""}`}
      id='product'>
      <FaWindowClose className='icon' onClick={() => setActiveProduct("")} />
      <img src={image} alt='PRODUCT' />
    </div>
  );
};

export default Product;
