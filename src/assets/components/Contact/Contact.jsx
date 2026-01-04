import React from 'react'

export default function Contact() {
  return (
    <>
      <title>Contact – MovieSpace</title>

      <div className="min-h-screen bg-white text-gray-800 px-4 py-14">
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Contact
          </h1>

          <p className="text-gray-600 leading-relaxed mb-10">
            MovieSpace is a personal project built using The Movie Database (TMDb) API,
            focused on providing a clean and distraction-free way to explore movies.
          </p>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">

            <p>
              This website is created and maintained by{' '}
              <span className="font-medium text-gray-900">
                Himansu Kumar Nayak
              </span>.
            </p>

            <p>
              If you have feedback, feature suggestions, or would like to connect,
              feel free to reach out.
            </p>

            <p className="text-sm text-gray-600">
              Email:{' '}
              <a
                href="mailto:your-email@example.com"
                className="text-red-600 hover:underline transition"
              >
                himansukn1990@gmail.com
              </a>
            </p>

            <p className="text-sm text-gray-600">
              Data source:{' '}
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline transition"
              >
                The Movie Database (TMDb)
              </a>
            </p>

          </div>

        </div>
      </div>
    </>
  )
}
