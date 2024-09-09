import React, { createContext, useEffect, useState } from "react";
import ProductService from "../Services/ProductService";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try{
            const response = await ProductService.getProducts();
            setProducts(response.data);
        }catch (error){
            console.error("Error fetching products: ", error);
        }
    }

    useEffect(() => {
        fetchProducts();
      }, []);
    const contextValue = {products}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;