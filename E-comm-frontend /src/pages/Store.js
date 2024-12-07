import React, { useState } from "react";
import Catalog from "../components/Customer/Catalog";
import Cart from "../components/Customer/Cart";
import Checkout from "../components/Customer/Checkout";

const Store = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("catalog");

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const item = prev.find((p) => p.id === product.id);
      if (item) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCheckout = (orderDetails) => {
    console.log("Order Details:", orderDetails);
    setCart([]);
    setView("catalog");
  };

  return (
    <div>
      {view === "catalog" && <Catalog onAddToCart={handleAddToCart} />}
      {view === "cart" && (
        <Cart
          cartItems={cart}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={(id, quantity) => {
            setCart((prev) =>
              prev.map((p) =>
                p.id === id ? { ...p, quantity: Number(quantity) } : p
              )
            );
          }}
        />
      )}
      {view === "checkout" && (
        <Checkout cartItems={cart} onCheckout={handleCheckout} />
      )}
      <button onClick={() => setView("catalog")}>Catalog</button>
      <button onClick={() => setView("cart")}>Cart</button>
      {view === "cart" && cart.length > 0 && (
        <button onClick={() => setView("checkout")}>Checkout</button>
      )}
    </div>
  );
};

export default Store;
