"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLogin, logoutUser } from "@/actions/loginAction";
import Image from "next/image";
import Logo from '../app/logo-ucb.svg'


import { LogIn, LogOut, User } from 'lucide-react';



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status


  const router = useRouter();
  // const islogincheck=isLogin()

  // console.log("----header----", islogincheck)

  const handleLogout = async () => {
    // Call the logout server action
    await logoutUser();
    setIsAuthenticated(false); // Update state
    // Redirect to the login page
    router.push("/login");
  };


  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await isLogin(); // Fetch login status (e.g., check cookies or session)
      setIsAuthenticated(loggedIn);
    };
    checkLoginStatus();
  }, []);

  return (
    <header className="bg-slate-50 bg-opacity-10 text-gray-800 border-b border-gray-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold">
          <Link href="/"><Image src={Logo} alt="Logo" width={100} height={50} /></Link>
        </div>
        {/* <nav className="hidden md:flex space-x-6">
          <Link href="/categories" className="hover:text-gray-300">
            Categories
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav> */}
        <div className="hidden md:flex space-x-4">
          <Link href="/profile">
              <User size={20} className="mr-2" /> 
          </Link>
          {isAuthenticated ? (<LogOut size={20} onClick={handleLogout} className="mr-2 text-red-800" />) : (<Link href="/login"><LogIn size={20} className="mr-2 text-green-800" /></Link>) }
          
          
          
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
