import React from "react";

const Card = ({ title, price, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md"/>
      <h2 className="text-xl font-semibold my-2">{title}</h2>
      <p className="text-gray-700">Price: ${price}</p>
      <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
