import React, { createContext, useState, useEffect, useRef } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const gridRef = useRef(null);

  const handleNext = () => {
    if (gridRef.current) gridRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (gridRef.current) gridRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, loading, gridRef, handleNext, handlePrev }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
