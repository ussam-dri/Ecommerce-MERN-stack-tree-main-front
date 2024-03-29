import React, { useState } from 'react';
import ProductWithHover from './ProductWithHover ';

const ProductsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the selected category
  const filteredProducts = (selectedCategory === 'All') ? 
    [
      {
        imageSrc: "/images/snkrs/5.png",
        title: "Product 1",
        description: "Description of Product 1",
        price: 49.99
      },
      {
        imageSrc: "/images/snkrs/6.png",
        title: "Product 2",
        description: "Description of Product 2",
        price: 59.99
      },
      {
        imageSrc: "/images/snkrs/7.png",
        title: "Product 3",
        description: "Description of Product 3",
        price: 39.99
      }
      // Add more products here if needed
    ]
    : [];

  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 ${selectedCategory === 'All' ? 'bg-blue-700 text-white' : ''}`}
        >
          All categories
        </button>
        <button
          onClick={() => setSelectedCategory('Sneakers')}
          className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800 ${selectedCategory === 'Sneakers' ? 'bg-gray-900 text-white' : ''}`}
        >
          Sneakers
        </button>
        {/* Add more category buttons here */}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <ProductWithHover
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
