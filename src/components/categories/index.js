import React from 'react'
import Styles from './style.module.css'
import Link from 'next/link'
const Categories = ({ categories = [] }) => {   
    return (
        <div className={Styles.categories}>
            {
                categories.map(category => (
                    <Link
                        key={category.id}
                        className={Styles.category}
                        href={`/${category.id}`}
                    >
                        <div className={Styles.name}>{category.name}</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Categories