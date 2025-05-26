'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Success() {
  const search = useSearchParams();
  let data = search.get('data');

  if (data) {
    try {
      data = JSON.parse(atob(data));
    } catch (error) {
      console.error("Invalid data format", error);
      data = null;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful</h1>
        {data ? (
          <>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Transaction Code:</span> {data.transaction_code}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="font-semibold">Total Amount:</span> ${data.total_amount}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Status:</span> {data.status}
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </>
        ) : (
          <p className="text-red-600 font-medium">Payment data not found or invalid.</p>
        )}
      </div>
    </div>
  );
}

export default Success;
