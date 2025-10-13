import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const addToCart = () => setCartCount((prev) => prev + 1);
  const addToWishlist = () => setWishlistCount((prev) => prev + 1);

  return (
    <GlobalContext.Provider
      value={{
        cartCount,
        wishlistCount,
        addToCart,
        addToWishlist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
