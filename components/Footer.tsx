"use client"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8">
        <div>
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-sm text-gray-400">
            We are committed to providing the best service for our customers.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/categories" className="hover:text-gray-300">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-400 text-center py-4">
        &copy; {new Date().getFullYear()} MyBrand. All Rights Reserved.
      </div>
    </footer>
  );
}
