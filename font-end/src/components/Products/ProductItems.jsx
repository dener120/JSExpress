import React from "react";
import ProductItem from "./ProductItem";

const ProductItems = () => {
  return <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
      <ProductItem/>
    </div>
  </div>
}

export default ProductItems;