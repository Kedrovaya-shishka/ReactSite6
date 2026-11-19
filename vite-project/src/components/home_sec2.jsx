import { Photo } from '../Photo'
import classes from './home_sec2.module.scss'

const collectionTexts = [
    'There are some redeming factors in greeking text',
    'There are some redeming factors in greeking text',
    'There are some redeming factors in greeking text',
]

export default function Home_sec2() {
    return (
        <section className={classes.Home_sec2}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <p className={classes.label}>See Collection</p>
                    <h2>
                        OUR FINE HOME
                        <br />
                        MADE CHOCOLATES
                    </h2>
                </div>

                <div className={classes.right}>
                    <img
                        src={Photo.collection}
                        alt='Collection'
                        className={classes.collectionImg}
                    />
                    <ul className={classes.list}>
                        {collectionTexts.map((text, index) => (
                            <li key={index}>{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
