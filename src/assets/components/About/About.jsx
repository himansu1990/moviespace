import React from 'react'
import Footer from '../Footer/Footer'

export default function About() {
  return (
    <>
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
        About MovieSpace
      </h1>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          MovieSpace is a movie discovery platform that allows users to search and explore
          information about movies and TV shows in a simple and user-friendly way.
        </p>

        <p>
          This application uses data provided by
          <span className="font-medium"> The Movie Database (TMDb) API </span>
          to fetch up-to-date and accurate movie information.
        </p>

        <p>
          MovieSpace is independently designed and developed by
          <span className="font-medium"> Himansu Kumar Nayak</span>, with a focus on
          clean user experience, performance, and clarity.
        </p>

        <p className="text-sm text-gray-500">
          This product is not affiliated with or endorsed by The Movie Database (TMDb).
        </p>
      </div>

    </main>
    <Footer/>
    </>
  )
}
