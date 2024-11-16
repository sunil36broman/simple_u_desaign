"use client"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/actions/loginAction";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const handleLogout = async () => {
    // Call the logout server action
    await logoutUser();

    // Redirect to the login page
    router.push("/login");
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold">
          <Link href="/">MyBrand</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/categories" className="hover:text-gray-300">
            Categories
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
          >
            Login
          </Link>
          <button
            // href="/signup"
            onClick={handleLogout}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
          >
            Logout
          </button>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            <Link href="/categories" className="hover:text-gray-300">
              Categories
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
