import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleFetch, movieCredits } from './movies'
import Footer from '../Footer/Footer'
import avatar from '/avatar-placeholder.jpg'
export default function SingleMovie() {
  const [single, setSingle] = useState({})
  const [castDetails, setCastDetails] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    singleMovieDet()
    movieStarCast()
  }, [])

  const singleMovieDet = async function () {
    const singleFilm = await singleFetch(movieId)
    setSingle(singleFilm)
  }

  const movieStarCast = async function () {
    const movie_star_details = await movieCredits(movieId)
    setCastDetails(movie_star_details)
  }

  if (!single.title) {
    return <p className="text-center mt-20">Loading…</p>
  }

  return (
    <>
      <title>{`${single.title} – MovieSpace`}</title>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Movie Header */}
        <div className="flex flex-col sm:flex-row gap-8 mb-10">

          {/* Poster */}
          <img
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${single.poster_path}`}
            alt={single.title}
            className="w-48 sm:w-56 rounded-lg border border-gray-200"
          />

          {/* Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
              {single.title}
            </h1>

            <div className="text-sm text-gray-500 flex flex-wrap gap-3">
              <span>{single.original_language?.toUpperCase()}</span>
              <span>•</span>
              <span>
                {new Date(single.release_date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })}
              </span>
              <span>•</span>
              <span>⭐ {single.vote_average?.toFixed(1)}</span>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-2xl">
              {single.overview}
            </p>

            <div className="flex gap-8 text-sm text-gray-600 mt-2">
              <div>
                <p className="text-gray-400">Popularity</p>
                <p className="font-medium">{single.popularity}</p>
              </div>

              <div>
                <p className="text-gray-400">Votes</p>
                <p className="font-medium">{single.vote_count}</p>
              </div>

              <div>
                <p className="text-gray-400">Status</p>
                <p className="font-medium">{single.status}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cast Section */}
        <section>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Cast
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {castDetails.map((item) => (
              <div key={item.id} className="text-center">
                <img
                  src={
                    item.profile_path
                      ? `https://media.themoviedb.org/t/p/w440_and_h660_face${item.profile_path}`
                      : `${avatar}`
                  }
                  alt={item.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border border-gray-200"
                />

                <h3 className="text-sm font-medium text-gray-900 mt-2">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-500">
                  as {item.character}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
