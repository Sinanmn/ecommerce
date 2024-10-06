import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: "Product 1", price: "99.99", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "89.99", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "79.99", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: "69.99", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
