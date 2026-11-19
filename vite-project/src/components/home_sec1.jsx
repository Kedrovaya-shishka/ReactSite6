import Header from '../Header/header'
import { Photo } from '../Photo'
import classes from './home_sec1.module.scss'

export default function Home_sec1({ onNavigate }) {
    return (
        <section className={classes.Home_sec1}>
            <Header onNavigate={onNavigate} />

            <div className={classes.container}>
                <div className={classes.left}>
                    <h1>
                        Sweet moments,
                        <br />
                        freshly baked with
                        <br />
                        love
                    </h1>
                    <p className={classes.sub}>
                        Customized cakes, treats and every thing sweet
                        <br />
                        for all your special moments.
                    </p>
                    <button
                        type='button'
                        className={classes.shopBtn}
                    >
                        Shop Now
                    </button>
                    <div className={classes.socials}>
                        <img src={Photo.socialDark} alt='Social links' />
                    </div>
                </div>

                <div className={classes.right}>
                    <img
                        src={Photo.Ponchiki}
                        alt='Ponchiki'
                        className={classes.Ponchiki}
                    />
                </div>
            </div>

            <button
                type='button'
                className={classes.scrollDown}
                onClick={() => onNavigate && onNavigate(1)}
                aria-label='Scroll down'
            >
                <span />
                <span />
                <span />
            </button>
        </section>
    )
}