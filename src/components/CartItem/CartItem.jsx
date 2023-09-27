import QuantityInput from "../QuantityInput/QuantityInput";
import styles from "./CartItem.module.scss";

export default function CartItem({ cart, cartItem, setCart }) {
  function itemPrice() {
    return cartItem.price * cartItem.quantity;
  }

  function increment() {
    updateQuantity(+cartItem.quantity + 1);
  }

  function decrement() {
    updateQuantity(+cartItem.quantity - 1);
  }

  function onChange(e) {
    updateQuantity(+e.target.value);
  }

  function updateQuantity(newQuantity) {
    setCart(
      cart.map((item) =>
        item.id === cartItem.id ? { ...cartItem, quantity: newQuantity } : item,
      ),
    );
  }

  function removeItem() {
    setCart(cart.filter((item) => item.id !== cartItem.id));
  }

  return (
    <div className={styles.cartItem}>
      <img src={cartItem.image} alt={cartItem.title} />
      <p className="title">{cartItem.title}</p>
      <QuantityInput
        value={cartItem.quantity}
        increment={increment}
        decrement={decrement}
        onChange={onChange}
      />
      <button onClick={removeItem}>Remove Item</button>
    </div>
  );
}
