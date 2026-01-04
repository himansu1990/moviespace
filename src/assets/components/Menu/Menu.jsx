import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Movies from '../Movies/Movies.jsx'
import Home from '../Home/Home'
import About from '../About/About'
import Login from '../Login/Login'
import SingleMovie from '../Movies/SingleMovie.jsx'
import SearchResults from '../Search/SearchResults.jsx'
import Contact from '../Contact/Contact.jsx'

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="bg-red-700 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-100 tracking-wide"
          >
            MovieSpace
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-100 hover:text-white transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-100 hover:text-white transition">
              About
            </Link>
            <Link to="/movies" className="text-gray-100 hover:text-white transition">
              Movies
            </Link>
          </nav>

          {/* Desktop Login */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-gray-900 hover:bg-gray-600 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden bg-red-800 border-t border-red-600">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-gray-100 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="text-gray-100 hover:text-white"
              >
                About
              </Link>

              <Link
                to="/movies"
                onClick={() => setOpen(false)}
                className="text-gray-100 hover:text-white"
              >
                Movies
              </Link>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-center"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singlemovie" element={<SingleMovie />} />
        <Route path="/singlemovie/:movieId" element={<SingleMovie />} />
        <Route path="/searchresults/" element={<SearchResults/>}/>
        <Route path="/searchresults/:query" element={<SearchResults/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </>
  )
}
