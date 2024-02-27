import React, { useEffect, useState } from "react";
import Cart from "../Cart";
import useProducts from "../hooks/useProducts";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useProducts();

  // useEffect( () =>{
  //     fetch('products.json')
  //     .then(res => res.json())
  //     .then(data => setProducts(data));
  // }, []);

  return (
    <div className="mt-2 product-container">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
