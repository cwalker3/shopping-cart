import { useState } from "react";
import styles from "./Cart.module.scss";
import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";

export default function Cart({ cart, setCart }) {
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

  function renderCartItems() {
    return cart.map((cartItem) => (
      <CartItem
        key={cartItem.id}
        cartItem={cartItem}
        setCart={setCart}
        cart={cart}
      />
    ));
  }

  return (
    <div className={styles.cart}>
      <div onClick={toggleOpen} className={styles.navView}>
        <img src="cart.svg" alt="Cart" onClick={toggleOpen} />
        <p>{cartQuantity()}</p>
      </div>
      {open && (
        <div className={styles.cartOpen}>
          <div className={styles.cartItems}>{renderCartItems()}</div>
          <button disabled>Checkout</button>
        </div>
      )}
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
};
