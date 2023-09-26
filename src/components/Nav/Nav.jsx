import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";

export default function Nav({ cart }) {
  return (
    <div className={styles.nav}>
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
      </div>
      <div className={styles.cart}>
        <Cart cart={cart} />
      </div>
    </div>
  );
}

Nav.propTypes = {
  cart: PropTypes.array,
};
