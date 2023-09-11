import HomeContainer from '@/containers/home';
import React from 'react'
import { getPopularMovies, getCategories, getTopRatedMovies,getMoviesByCategoryId } from '@/services/movieService'

const HomePage = async ({ params }) => {

  const [{ results: topRatedMovies }, { results: popularMovies }, { genres: categories }] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories()
  ])

  let selectedCategory;

  if (!!params.category?.length) {
    const { results } = await getMoviesByCategoryId(params.category[0])
    selectedCategory = results
  }
  return (
    <div>
      <HomeContainer
        topRatedMovies={topRatedMovies}
        popularMovies={popularMovies}
        categories={categories}
        selectedCategory={{
          id: params.category?.[0] ?? "",
          movies: selectedCategory ? selectedCategory.slice(0, 7) : []
        }} />
    </div>
  )
}

export default HomePage