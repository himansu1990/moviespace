export const BASE_URL = `https://api.themoviedb.org/3`

export const API_KEY = '0a5247d162a6d3455cfaff2ae266f450';

export const fetchMovies = async function() {
     let movieData = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
     let data = await movieData.json()
     let allMovies = data.results
     return allMovies
}

export const singleFetch = async function(id) {
    let singleId = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    let single_movie = await singleId.json()
    return single_movie
}


export const movieCredits = async function(creditId) {
let creditUrl = await fetch(`${BASE_URL}/movie/${creditId}?api_key=${API_KEY}&append_to_response=credits`)
let movie_credit_detail = await creditUrl.json()
let result_credit = movie_credit_detail.credits
let result_cast = result_credit.cast
return result_cast
}


export const searchMovies = async function(searchTerm) {
   let movieSearch = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
   let searchData = await movieSearch.json()
   let searchResults = searchData.results
   return searchResults
}



export const nowPlaying =  async function() {
    let playingMovies = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
    let displayData = await playingMovies.json()
    let displayResults = displayData.results
    return displayResults
}