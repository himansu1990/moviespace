import React, { useEffect, useState } from 'react'
import { searchMovies } from '../Movies/movies'
import { Link, useNavigate } from 'react-router-dom'
export default function Search() {
     const[searchText, setSearchText] = useState("") //For input value
     const[movies, setMovies] = useState([]) //For showing search result
     const navigation = useNavigate()
   const showMovies = async function(querySearch) {
        const showResults = await searchMovies(querySearch)
        setMovies(showResults)
        console.log(showResults);        
   }

   const handleInput = (e) => {
      const inputText = e.target.value
      setSearchText(inputText)
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    if(searchText === "") {
   return showMovies(searchText)
    }
    if(searchText !== '')
      return navigation('/searchresults/' + searchText)
   }

 // To debounce, we need to use useEffect()
 
 useEffect(() => {
  if(searchText === '') {
    return setMovies([])
  }

  // To delay search suggestions and reduce api usage
  const time_delay = setTimeout(() => {
    showMovies(searchText)
  }, 500)

  // To remove search result once text is removed

  return () => clearTimeout(time_delay)

 }, [searchText])
 
 


  return (
    <>
    <form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row items-stretch sm:items-center
             gap-3 max-w-xl mx-auto mt-6 px-4 sm:px-0"
>
  <input
    type="text"
    placeholder="Search movies..."
    onChange={handleInput}
    value={searchText}
    className="w-full px-4 py-3 sm:py-2 rounded-lg border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-gray-500
               focus:border-gray-500 text-sm"
  />

  <button
    type="submit"
    className="w-full sm:w-auto px-5 py-3 sm:py-2 rounded-lg
               bg-gray-900 text-white text-sm font-medium
               hover:bg-gray-700 transition"
  >
    Search
  </button>
</form>

<div className="max-w-xl mx-auto mt-4 bg-white rounded-lg shadow-sm divide-y
                mx-4 sm:mx-auto">
  {movies.map((items) => (
    <p
      key={items.id}
      className="px-4 py-3 hover:bg-gray-50 transition"
    >
      <Link
        to={`/singlemovie/${items.id}`}
        className="block text-gray-800 hover:text-gray-600 font-medium"
      >
        {items.title}
      </Link>
    </p>
  ))}
</div>


    </>
  )
}
