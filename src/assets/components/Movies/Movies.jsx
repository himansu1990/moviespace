import React, { useEffect, useState } from 'react'
import { fetchMovies } from './movies'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Movies() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    movie_display()
  }, [])

  const movie_display = async function () {
    const display_data = await fetchMovies()
    setMovie(display_data)
  }

  const changeDate = (date) =>
    date
      ? new Date(date).toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })
      : 'NA'

  return (
    <>
      <title>Latest Releases – MovieSpace</title>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
            Latest Releases
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Discover what’s new in cinemas and streaming
          </p>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
          {movie.map((item) => (
            <div key={item.id} className="group">
              {/* Poster */}
              <Link to={`/singlemovie/${item.id}`} className="block overflow-hidden rounded-lg">
                <img
                  src={`https://media.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`}
                  alt={item.title}
                  className="w-full transform transition duration-300
                             group-hover:scale-[1.03]
                             group-hover:contrast-105
                             group-hover:saturate-105"
                />
              </Link>

              {/* Text */}
              <div className="mt-3 space-y-1">
                <h3 className="text-sm font-medium text-gray-900 leading-snug tracking-tight">
                  <Link
                    to={`/singlemovie/${item.id}`}
                    className="hover:underline"
                  >
                    {item.title}
                  </Link>
                </h3>

                <p className="text-xs text-gray-500">
                  {changeDate(item.release_date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  )
}
