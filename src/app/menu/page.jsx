"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Menu() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    let response = await fetch("https://dummyjson.com/products");
    response = await response.json();
    setProducts(response.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Product Menu
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-500 mb-2">${item.price}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <Link href={`/menu/productdescription/${item.id}`}>
                  {" "}
                  View Detail
                </Link>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg">Loading...</div>
      )}
    </div>
  );
}

export default Menu;
