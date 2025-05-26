import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} YourStore. All rights reserved.</p>

        {/* Right Side */}
        <div className="flex space-x-6 text-sm">
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
