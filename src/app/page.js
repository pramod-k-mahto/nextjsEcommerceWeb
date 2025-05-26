"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-600 text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg max-w-xl mx-auto">
          Discover the best products at unbeatable prices. Your one-stop shop for quality and affordability.
        </p>
        <div className="mt-6">
          <Link
            href="/menu"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Featured Product */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
          Featured Product
        </h2>
        <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center p-6 gap-8">
          <img
            src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80"
            alt="Headphones"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Awesome Headphones</h3>
            <p className="text-gray-600 mb-4">
              Experience immersive sound quality with our best-selling headphones. Designed for music lovers and professionals alike.
            </p>
            <Link
              href="/menu"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Electronics", "Clothing", "Home Appliances"].map((category) => (
            <div key={category} className="bg-gray-100 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <p className="text-gray-600 mb-4">Explore top-rated {category.toLowerCase()} today.</p>
              <Link
                href="/menu"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Items
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-600">"Fantastic service and fast delivery! The quality of the products is amazing."</p>
            <h4 className="mt-4 font-semibold text-gray-800">— Sarah T.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="italic text-gray-600">"User-friendly website and excellent support. I’ll definitely shop again."</p>
            <h4 className="mt-4 font-semibold text-gray-800">— James K.</h4>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white py-12 text-center px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Get the latest updates and exclusive offers straight to your inbox.</p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded border border-gray-300"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Subscribe
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-100 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Don&apos;t Miss Out!
        </h2>
        <p className="text-gray-700 mb-4">
          Sign up now and get <span className="font-bold">10% off</span> on your first purchase.
        </p>
        <button
          onClick={() => router.push("/register")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          Register Now
        </button>
      </section>

    </div>
  );
}

export default Page;
