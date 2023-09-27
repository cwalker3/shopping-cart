import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(item, quantity) {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      console.log(existingItem);
      console.log(newQuantity);

      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: newQuantity }
            : cartItem,
        ),
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  }

  return (
    <>
      <Nav cart={cart} />
      <Outlet context={[addItemToCart]} />
    </>
  );
}
