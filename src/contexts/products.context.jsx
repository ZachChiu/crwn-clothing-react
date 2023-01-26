import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

const ProductsContext = createContext({
  products: [],
});

const ProductProvider = ({ children }) => {
  const [products] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductProvider };
