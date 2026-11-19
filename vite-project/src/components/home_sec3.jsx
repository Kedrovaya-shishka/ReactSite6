import { useState } from 'react'
import { Photo } from '../Photo'
import classes from './home_sec3.module.scss'

const products = [
    {
        id: 1,
        image: Photo.best1,
        title: '3-tier red velvet cake',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        price: '45.90 €',
    },
    {
        id: 2,
        image: Photo.best2,
        title: '3-tier red velvet cake',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        price: '45.90 €',
    },
    {
        id: 3,
        image: Photo.best3,
        title: '3-tier red velvet cake',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        price: '45.90 €',
    },
]

export default function Home_sec3() {
    const [liked, setLiked] = useState({})

    const toggleLike = (id) => {
        setLiked((prev) => ({ ...prev, [id]: !prev[id] }))
    }

    return (
        <section className={classes.Home_sec3}>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <h2>OUR BEST SELLERS</h2>
                </div>

                <div className={classes.seeAllRow}>
                    <span>See All</span>
                </div>

                <div className={classes.cards}>
                    {products.map((item) => (
                        <div className={classes.card} key={item.id}>
                            <div className={classes.imgWrap}>
                                <img src={item.image} alt={item.title} />
                                <button
                                    type='button'
                                    className={
                                        liked[item.id]
                                            ? `${classes.heartBtn} ${classes.liked}`
                                            : classes.heartBtn
                                    }
                                    onClick={() => toggleLike(item.id)}
                                >
                                    {liked[item.id] ? '♥' : '♡'}
                                </button>
                            </div>
                            <h3>{item.title}</h3>
                            <p className={classes.desc}>{item.description}</p>
                            <div className={classes.cardFooter}>
                                <span className={classes.price}>{item.price}</span>
                                <button
                                    type='button'
                                    className={classes.cartBtn}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={classes.dots}>
                    <span className={classes.dotActive} />
                    <span className={classes.dot} />
                    <span className={classes.dot} />
                </div>
            </div>
        </section>
    )
}
