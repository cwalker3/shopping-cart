import styles from "./Shop.module.scss";
import { useEffect, useState } from "react";
import { preloadImages } from "../../utils/utils";
import Product from "../Product/Product";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=8",
        );

        if (!response.ok) {
          throw new Error("server error");
        }

        const result = await response.json();
        setProducts(result);
        preloadImages(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className={styles.shop}>
      {error && <p>Network Error</p>}
      {loading && <p>Loading...</p>}
      {products.length > 0 &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}
