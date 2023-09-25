import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.navLinks}>
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
      </div>
      <div className={styles.cart}>Cart</div>
    </div>
  );
}
