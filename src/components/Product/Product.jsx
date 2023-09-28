import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import QuantityInput from "../QuantityInput/QuantityInput";

export default function Product({ product, addItemToCart }) {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function updateQuantity(e) {
    setQuantity(+e.target.value);
  }

  function addToCart() {
    addItemToCart(product, quantity);
  }

  return (
    <div className={styles.product}>
      <div className={styles.imgContainer}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.titleContainer}>
        <p>{product.title}</p>
      </div>
      <div>Price: ${product.price}</div>
      <QuantityInput
        value={quantity}
        increment={increment}
        decrement={decrement}
        onChange={updateQuantity}
      />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,

  addItemToCart: PropTypes.func,
};
