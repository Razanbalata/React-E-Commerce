import React, { createContext, useReducer, useEffect } from "react";
import toast from "react-hot-toast";

export const GlobalContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  wishlistCount: 0,
};
console.log(initialState)

function handleCart(state, action) {
  console.log(state)
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cartItems.find(item => item.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "ADD_TO_WISHLIST":
      return { ...state, wishlistCount: state.wishlistCount + 1 };

    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleCart, initialState);

 console.log("اثمخ")
  // كل ما يتغير cartItems نخزنها في localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (product) => dispatch({ type: "ADD_TO_CART", payload: product });
  const removeFromCart = (id) => {
    const confirmed = window.confirm("Are you sure you want to remove this item?");
    if (confirmed) {
      dispatch({ type: "REMOVE_FROM_CART", payload: id })
    }
    toast.success("Item removed from cart!");
    
  };
  const updateQuantity = (id, quantity) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  const addToWishlist = () => dispatch({ type: "ADD_TO_WISHLIST" });

  return (
    <GlobalContext.Provider
      value={{
        cartItems: state.cartItems,
        wishlistCount: state.wishlistCount,
        cartCount: state.cartItems.length,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};




