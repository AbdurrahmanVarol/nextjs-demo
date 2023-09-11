import React from 'react'
import Loading from '../loading'
import Styles from './style.module.css'

const LoadingFeaturedMovie = () => {
  return (
    <div style={{height:278}} className={Styles.movieWrapper}>
        <Loading/>
    </div>
  )
}

export default LoadingFeaturedMovie