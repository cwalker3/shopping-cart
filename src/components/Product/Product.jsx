import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";

export default function Product({ product }) {
  const [amount, setAmount] = useState(1);

  function increment() {
    setAmount(amount + 1);
  }

  function decrement() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  function addToCart() {
    console.log(amount);
  }

  return (
    <div className={styles.product}>
      <img src={product.image} alt={product.title} />
      <div>{product.title}</div>
      <div>Price: {product.price}</div>
      <div className="amountInput">
        <button onClick={decrement}>-</button>
        <input type="text" value={amount} />
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
};
