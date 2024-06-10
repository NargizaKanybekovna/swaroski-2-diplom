import { useContext, useState } from "react";
import CartList from "../../Components/CartList/CartList";
import OrderForm from "../../Components/OrderForm/OrderForm";
import { AppContext } from "../../App";

export function Cart() {
  const [modalActive, setModalActive] = useState(false);
  const { cart, user, setCart } = useContext(AppContext);
  
  const removeFromCart = (itemId) => {
    const updatedCart = { ...cart };
    delete updatedCart[itemId];
    setCart(updatedCart);
  };

  if (Object.keys(cart).length === 0) {
    return (
      <div className="Cart" >
        <h1>Cart</h1>
        <CartList removeFromCart={removeFromCart} />
        <OrderForm active={modalActive} setActive={setModalActive} />
      </div>
    );
  }
  
  if (!user) {
    return (
      <div className="Cart" >
        <h1>Cart</h1>
        <CartList removeFromCart={removeFromCart} />
        <OrderForm active={modalActive} setActive={setModalActive} />
      </div>
    );
  }

  return (
    <div className="Cart" >
      <h1>Cart</h1>
      <CartList removeFromCart={removeFromCart} />
      <button className="order" onClick={() => setModalActive(true)}>Order</button>
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  );
}