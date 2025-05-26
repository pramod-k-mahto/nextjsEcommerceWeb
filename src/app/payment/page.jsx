"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

function Payment() {
  const { cartItems } = useContext(CartContext);

  // Calculate total price
  const amount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = 0;
  const totalAmount = amount;
  const transactionUUID = uuidv4(); // Generate unique transaction ID
  let Message = `total_amount=${totalAmount},transaction_uuid=${transactionUUID},product_code=EPAYTEST`;
  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4">eSewa Payment</h2>

        <input type="hidden" name="amount" value={totalAmount} />
        <input type="hidden" name="tax_amount" value={tax} />
        <input type="hidden" name="product_service_charge" value="0" />
        <input type="hidden" name="product_delivery_charge" value="0" />
        <input type="hidden" name="product_code" value="EPAYTEST" />
        <input
          type="hidden"
          name="success_url"
          value="http://localhost:3000/success"
        />
        <input
          type="hidden"
          name="failure_url"
          value="http://localhost:3000/fail"
        />

        <label className="block text-gray-700 font-medium">Total Amount</label>
        <input
          type="text"
          name="total_amount"
          value={totalAmount}
          readOnly
          className="w-full border p-2 rounded bg-gray-100"
        />

        <input type="hidden" name="transaction_uuid" value={transactionUUID} />

        <input
          type="hidden"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
        />
        <input
          type="hidden"
          name="signature"
          value={hashInBase64} // Normally generated server-side
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Pay with eSewa
        </button>
      </form>
    </div>
  );
}

export default Payment;
