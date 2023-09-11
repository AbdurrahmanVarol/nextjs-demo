import React from 'react'
import Styles from './style.module.css'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'
import Image from 'next/image'
const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
    const { poster_path, title, overview } = movie
    return (
        <div className={Styles.movieWrapper}>
            <h1 className={Styles.movieTitle}>{title}</h1>
            <p className={
                `${Styles.overview}
             ${isCompact && Styles.shortOverview}
            `
            }>
                {overview}
            </p>
            <div className={Styles.actionButtons}>
                <Link className={Styles.playButton} href="">
                    Play
                </Link>
                <button className={Styles.addButton}>
                    <FaPlus />
                </button>
            </div>
            <div className={Styles.moviePoster}>
                <div className={Styles.moviePosterOverlay}></div>
                <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    fill
                />
            </div>
        </div>
    )
}

export default FeaturedMovie