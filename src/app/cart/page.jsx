"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import Link from "next/link";

function CartPage() {
  const { cartItems, dispatch } = useContext(CartContext);
  console.log(cartItems);

  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.
        <Link  className="underline text-orange-600" href='/menu' >Shop Now </Link>
        
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 shadow rounded"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-500">${item.price} each</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() =>
                          dispatch({ type: "DECREMENT", payload: item.id })
                        }
                        className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch({ type: "INCREMENT", payload: item.id })
                        }
                        className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold">
                    ${item.price * item.quantity}
                  </p>
                  <button
                    onClick={() =>
                      dispatch({ type: "DELETE_ITEM", payload: item.id })
                    }
                    className="text-red-500 hover:underline mt-2 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 shadow rounded h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <hr className="my-4" />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${getTotal()}</span>
            </div>

            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>

            <button className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              <Link   href={'/payment'}  > Proceed to Checkout</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
