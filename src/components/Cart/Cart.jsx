import { useState } from "react";
import styles from "./Cart.module.scss";

export default function Cart({ cart }) {
  console.log(cart);
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    open ? setOpen(false) : setOpen(true);
  }

  function cartQuantity() {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.quantity;
    });
    return total;
  }

  return (
    <div className={styles.cart}>
      <div className={styles.navView}>
        <img src="cart.svg" alt="Cart" onClick={toggleOpen} cursor="pointer" />
        <p>{cartQuantity()}</p>
      </div>
    </div>
  );
}
