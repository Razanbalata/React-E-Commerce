import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(()=>{
    const saved = localStorage.getItem("cartItems")
    return saved ? JSON.parse(saved) : []
  });
  const [wishlistCount, setWishlistCount] = useState(0);

  // كل ما يتغير الكارت: نخزن البيانات في localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

const addToCart = (product) => {
  setCartItems((prev) => {
    const exist = prev.find(item => item.id === Number(product.id)); // 👈 نحول لنمبر
    if (exist) {
      return prev.map(item =>
        item.id === Number(product.id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prev, { ...product, id: Number(product.id), quantity: 1 }];
    }
  });
};


  const updateQuantity = (id, newQty) => {
  setCartItems((prev) => {
    if (newQty <= 0) {
      return prev.filter(item => item.id !== id); // نحذف المنتج
    }
    return prev.map(item =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
  });
};

  const cartCount = cartItems.length;

  const addToWishlist = () => setWishlistCount((prev) => prev + 1);

  return (
    <GlobalContext.Provider
      value={{
        cartCount,
        cartItems,
        wishlistCount,
        addToCart,
        addToWishlist,
        updateQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
