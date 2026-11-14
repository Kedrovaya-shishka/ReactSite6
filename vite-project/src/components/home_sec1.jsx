import { useState } from 'react'
import cn from 'classnames'
import { Photo } from '../Photo'
import classes from './home_sec1.module.scss'

export default function Home_sec1() {
    const [searchVal, setSearchVal] = useState('')
    return (
        <section className={classes.Home_sec1}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <h1>
                        Sweet moments, freshly baked with love
                    </h1>
                    <p className={classes.sub}>
                        Customized cakes, treats and every thing sweet <br /> for all your special moments.
                    </p>
                    <div className={classes.search}>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className={classes.right}>
                    <img src={Photo.Ponchiki} alt='Ponchiki' className={classes.Ponchiki} />
                </div>
            </div>
        </section>
    )
}