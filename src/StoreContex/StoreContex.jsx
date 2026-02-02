/* eslint-disable no-unused-vars */
import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllProducts(data);
      setProducts(data)
    };

    fetchProducts();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        allProducts,
        products,
        setProducts,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
