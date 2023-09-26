import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Product({ product, addItemToCart }) {
  const [amount, setAmount] = useState(1);

  function increment() {
    setAmount(amount + 1);
  }

  function decrement() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  function updateAmount(e) {
    setAmount(+e.target.value);
  }

  function addToCart() {
    addItemToCart(product, amount);
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
      <div className={styles.amountInput}>
        <button onClick={decrement}>-</button>
        <input type="text" value={amount} onChange={updateAmount} />
        <button onClick={increment}>+</button>
      </div>
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
