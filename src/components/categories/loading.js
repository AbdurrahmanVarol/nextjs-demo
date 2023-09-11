import React from 'react'
import Skeleton from '../skeleton'
import styles from "./style.module.css";

const LoadingCategory = () => {
  return (
    <div className={styles.categories}>
      {
        [...Array(5).keys()].map(p => (
          <Skeleton key={p} height={75} />
        ))
      }
    </div>
  )
}

export default LoadingCategory