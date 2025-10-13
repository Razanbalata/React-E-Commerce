import React, { createContext, useState, useEffect } from "react";
 
export const ProductsContext = createContext()

export const ProductsProvider =({children}) => {
    const [products,setProducts] = useState([])
     const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>{
        console.error("Error fetching products:", error);
        setLoading(false);
      })
  },[])


    return (
      <ProductsContext value={{products,loading}}>
        {children}
      </ProductsContext>
    ) 
}