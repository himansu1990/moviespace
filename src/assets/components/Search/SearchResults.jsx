import React, { useEffect, useState } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import { searchMovies } from '../Movies/movies'
import Footer from '../Footer/Footer'
export default function SearchResults() {
  const [movies, setMovies] = useState([])

  // const location = useLocation()

  // const {showMovies} = location.state || {}

  const {query} = useParams()

 useEffect(() => {
searchResults()
 }, [query])

 const searchResults = async function() {
     const movieResults = await searchMovies(query)
     setMovies(movieResults)
     console.log(movieResults);
     
 }
  
  if(!movies) {
    return <p>No movie is found!</p>
  }

  return (
    <>
    <title>{`${query} - Search Results`}</title>
   <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
    <h2 className="text-xl font-medium text-gray-800 mb-6">
      Search results for <span className="font-semibold">"{query}"</span>
    </h2>

    {movies.length === 0 ? (
      <p className="text-gray-500 mt-10">
        No movies found
      </p>
    ) : (
      <div className="space-y-6">
        {movies.map((items) => (
          <div key={items.id} className="group">
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-medium text-blue-700 leading-snug">
              <Link
                to={`/singlemovie/${items.id}`}
                className="hover:underline"
              >
                {items.title}
              </Link>
            </h3>

            {/* URL-like line (optional but Google-ish) */}
            <p className="text-sm text-gray-500">
               {items.id}
            </p>

            {/* Description */}
            <p className="mt-1 text-sm sm:text-base text-gray-700 leading-relaxed">
              {items.overview
                ? items.overview.slice(0, 100) + '...'
                : 'No description available'}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>

<Footer/>
    </>
  )
}
