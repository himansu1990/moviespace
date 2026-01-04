import React from 'react'
import Search from '../Search/Search'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <>
      <title>MovieSpace - Welcome to Homepage</title>

      <main className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center">
        
        {/* Hero Text */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
          Explore millions of movies
        </h1>

        <p className="text-gray-600 text-sm sm:text-base max-w-xl mb-8">
          Search, discover, and explore detailed information about your favorite movies.
        </p>

        {/* Search Component */}
        <div className="w-full max-w-xl">
          <Search />
        </div>

      </main>
      <Footer/>
    </>
  )
}
