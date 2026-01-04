import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6
                      flex flex-col sm:flex-row items-center
                      justify-between gap-4 text-sm text-gray-600">

        {/* Left */}
        <p>
          © {new Date().getFullYear()} MovieSpace. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-gray-900 transition">
            About
          </Link>
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            TMDb
          </a>
        </div>

      </div>
    </footer>
  )
}
