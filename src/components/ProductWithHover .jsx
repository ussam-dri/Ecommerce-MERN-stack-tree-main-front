import React, { useState } from 'react';

const ProductWithHover = ({ imageSrc, title, description, price }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-64">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform-gpu hover:scale-105"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={imageSrc} alt="product" className="w-full h-64 object-cover" />
        <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 text-white p-4 transition-transform transform-gpu ${hovered ? 'translate-x-0' : '-translate-x-full'}`}>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add to Cart</button>
        </div>
      </div>
      <div className={`absolute top-0 right-0 bg-black bg-opacity-75 text-white px-2 py-1 rounded-bl-lg ${hovered ? 'opacity-0' : 'opacity-100'}`}>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default ProductWithHover;
