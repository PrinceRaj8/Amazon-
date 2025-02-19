import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = Array.from({ length: 8 }).map((_, index) => ({
      id: index + 1,
      title: `Product ${index + 1}`,
      image: `https://picsum.photos/200/300?random=${index + 1}`,
      price: (Math.random() * 100).toFixed(2),
    }));

    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
