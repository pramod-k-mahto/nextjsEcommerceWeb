"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

function ProductDescriptionClient({ product }) {
//   console.log(product);
  const {  dispatch } = useContext(CartContext);

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen flex  items-center">
        <div className="bg-white shadow-lg rounded-lg p-6  w-[900px]">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-72 object-cover rounded-md mb-6"
          />
          <p className="text-xl text-gray-900 font-semibold mb-2">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="flex gap-4">
            <button
              onClick={() => {
                dispatch({ type: "ADD_TO_CART",payload:product });
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionClient;
