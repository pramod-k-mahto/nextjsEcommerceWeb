import Link from "next/link";

function Header() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex space-x-6">
          <Link href="/">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">Home</span>
          </Link>
          <Link href="/about">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">About</span>
          </Link>
          <Link href="/menu">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">Menu</span>
          </Link>
          <Link href="/contact">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">Contact</span>
          </Link>
          <Link href="/login">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">Login</span>
          </Link>
          <Link href="/cart">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">Cart</span>
          </Link>
          <Link href="/user">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">User</span>
          </Link>
          <Link href="/register">
            <span className="text-white hover:text-yellow-400 cursor-pointer transition">Register</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
