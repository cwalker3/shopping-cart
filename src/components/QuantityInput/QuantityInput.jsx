import styles from "./QuantityInput.module.scss";

export default function QuantityInput({
  value,
  increment,
  decrement,
  onChange,
}) {
  return (
    <div className={styles.quantityInput}>
      <button onClick={decrement}>-</button>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={increment}>+</button>
    </div>
  );
}
