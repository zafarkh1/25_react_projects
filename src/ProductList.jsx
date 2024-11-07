import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1", description: "Description 1", price: "$10" },
  { id: 2, name: "Product 2", description: "Description 2", price: "$20" },
  { id: 3, name: "Product 3", description: "Description 3", price: "$30" },
  { id: 4, name: "Product 4", description: "Description 4", price: "$40" },
  { id: 5, name: "Product 5", description: "Description 5", price: "$50" },
  { id: 6, name: "Product 6", description: "Description 6", price: "$60" },
  { id: 7, name: "Product 7", description: "Description 7", price: "$70" },
  { id: 8, name: "Product 8", description: "Description 8", price: "$80" },
  { id: 9, name: "Product 9", description: "Description 9", price: "$90" },
  { id: 10, name: "Product 10", description: "Description 10", price: "$100" },
  { id: 11, name: "Product 11", description: "Description 11", price: "$110" },
  { id: 12, name: "Product 12", description: "Description 12", price: "$120" },
  { id: 13, name: "Product 13", description: "Description 13", price: "$130" },
  { id: 14, name: "Product 14", description: "Description 14", price: "$140" },
  { id: 15, name: "Product 15", description: "Description 15", price: "$150" },
  { id: 16, name: "Product 16", description: "Description 16", price: "$160" },
];

const ProductList = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [loading, setLoading] = useState(false);

  const loadMoreProducts = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
      setLoading(false);
    }, 1000);
  };

  const showLessProducts = () => {
    setVisibleProducts(4);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-indigo-500 font-semibold">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        {visibleProducts < products.length ? (
          <button
            onClick={loadMoreProducts}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-500 text-white hover:bg-indigo-600"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More Products"}
          </button>
        ) : (
          <button
            onClick={showLessProducts}
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
          >
            Show Less Products
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
