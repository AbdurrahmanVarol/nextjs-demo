import React from 'react'
import Skeleton from '../skeleton'
import Styles from './style.module.css'

const LoadingMoviesSection = () => {
  return (
    <div className={Styles.moviesSection}>
    <Skeleton width={128} height={36} />
    <div className={Styles.movies}>
      {
         [...Array(7).keys()].map(p=>(
            <Skeleton key={p} />
        ))}
    </div>
  </div>
  )
}

export default LoadingMoviesSection