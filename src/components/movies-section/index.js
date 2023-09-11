import React from 'react'
import Styles from './style.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MoviesSection = ({ title, movies = [] }) => {
    return (
        <div className={Styles.moviesSection}>
            <h3 className={Styles.title}>{title}</h3>
            <div className={Styles.movies}>
                {
                    movies && movies.map(movie => (
                        <div className={Styles.movie} key={movie.id}>
                            <Link href={`/movie/${movie.id}`}>
                                <Image
                                    fill
                                    unoptimized
                                    alt={movie.title}
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MoviesSection