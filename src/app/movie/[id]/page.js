import MovieContainer from '@/containers/movie'
import React from 'react'
import { notFound } from 'next/navigation'
import { getMovieById} from '@/services/movieService'


const MoviePage = async ({ params, searchParams }) => {
  
    const movieDetail = await getMovieById(params.id)

    if (!movieDetail) {
        notFound()
    }

    if (searchParams && searchParams.error && searchParams.error === "true") {
        console.log('111')
        throw new Error("Something went wrong!");
    }

    return <MovieContainer movie={movieDetail} />
}

export default MoviePage