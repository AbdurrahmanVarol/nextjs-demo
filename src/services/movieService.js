const BASE_URL = process.env.BASE_URL
const TOKEN = process.env.API_TOKEN

const fetchMovie = async (path, parameter) => {
    const url = `${BASE_URL}${path}?${parameter}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN}`
        }
    };
    const response = await fetch(url, options)
    return response.json()
}

const getTopRatedMovies = async () => {
    const path = `/movie/top_rated`    
    return fetchMovie(path)
  }
  
  const getPopularMovies = async () => {
    const path = `/movie/popular`    
    return fetchMovie(path)   
  }
  
  const getCategories = async () => {
    const path = `/genre/movie/list`    
    return fetchMovie(path)    
  }
  
  const getMoviesByCategoryId = async (categoryId) => {
    const path = `/discover/movie` 
    const parameter = `with_genres=${categoryId}`
    return fetchMovie(path,parameter)  
  }

  const getMovieById = async (movieId) => {
    const path = `/movie/${movieId}`    
    return fetchMovie(path)
    
  }
  export {
    getTopRatedMovies,
    getPopularMovies,
    getCategories,
    getMoviesByCategoryId,
    getMovieById
  }
  