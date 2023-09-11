import FeaturedMovie from '@/components/featured-movie'
import React from 'react'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

const HomeContainer = ({ topRatedMovies=[], popularMovies=[],categories=[],selectedCategory }) => {
  return (
    <div>
      <FeaturedMovie movie={popularMovies[0]} />
      <Categories categories={categories.slice(0,5)} />
      {
        selectedCategory && (
          <MoviesSection title={categories.find(p=>`${p.id}` === selectedCategory.id)?.name} movies={selectedCategory.movies} />
        )
      }
      <MoviesSection title="Popular Films" movies={popularMovies.slice(0,7)} />
      <MoviesSection title="Top Rated Films" movies={topRatedMovies.slice(0,7)} />
    </div>
  )
}

export default HomeContainer