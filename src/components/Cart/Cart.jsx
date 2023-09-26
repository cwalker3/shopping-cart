import { useState } from "react";
import styles from "./Cart.module.scss";

export default function Cart({ cart }) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <div className={styles.cart}>
      <div className={styles.navView}>
        <img src="cart.svg" alt="Cart" onClick={toggleOpen} cursor="pointer" />
        <p>{cart.length}</p>
      </div>
    </div>
  );
}
