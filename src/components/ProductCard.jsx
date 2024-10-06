import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-700">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
