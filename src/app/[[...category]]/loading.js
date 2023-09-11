import React from 'react'
import LoadingCategory from '@/components/categories/loading'
import LoadingFeaturedMovie from '@/components/featured-movie/loading'
import LoadingMoviesSection from '@/components/movies-section/loading'

const Loading = () => {
  return (
    <div>
      <LoadingFeaturedMovie />
      <LoadingCategory />
      <LoadingMoviesSection />
      <LoadingMoviesSection />
      <LoadingMoviesSection />
    </div>
  )
}

export default Loading