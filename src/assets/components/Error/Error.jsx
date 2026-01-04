import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Error() {
  return (
    <>
      <title>Not Found – MovieSpace</title>

      <div className="min-h-screen bg-white flex flex-col justify-center px-4">
        <div className="max-w-xl mx-auto text-center">

          {/* Error Code */}
          <p className="text-sm font-medium text-red-600 mb-2">
            404 ERROR
          </p>

          {/* Main Message */}
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Movie not found
          </h1>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            The movie you are looking for doesn’t exist or may have been removed.
            Please check the URL or return to explore other movies.
          </p>

          {/* Action */}
          <Link
            to="/"
            className="inline-block text-sm font-medium text-white
                       bg-gray-900 hover:bg-gray-700
                       px-6 py-3 rounded-lg transition"
          >
            Go back to Home
          </Link>

        </div>
      </div>

      <Footer />
    </>
  )
}
