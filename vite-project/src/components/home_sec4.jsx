import { Photo } from '../Photo'
import classes from './home_sec4.module.scss'

const articles = [
    {
        id: 1,
        image: Photo.article1,
        day: '23',
        month: 'MAR',
        title: 'How to make perfect',
        subtitle: 'cakes at home',
    },
    {
        id: 2,
        image: Photo.article2,
        day: '23',
        month: 'MAR',
        title: 'How to make perfect',
        subtitle: 'cakes at home',
    },
    {
        id: 3,
        image: Photo.article3,
        day: '23',
        month: 'MAR',
        title: 'How to make perfect',
        subtitle: 'cakes at home',
    },
]

export default function Home_sec4() {
    return (
        <section className={classes.Home_sec4}>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <h2>OUR NEW ARTICLES</h2>
                </div>

                <div className={classes.cards}>
                    {articles.map((item) => (
                        <div className={classes.card} key={item.id}>
                            <div className={classes.cardInner}>
                                <img src={item.image} alt={item.title} />
                                <div className={classes.dateBadge}>
                                    <span>{item.day}</span>
                                    <span>{item.month}</span>
                                </div>
                                <p className={classes.cardTitle}>
                                    {item.title}
                                    <br />
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={classes.dots}>
                    <span className={classes.dot} />
                    <span className={classes.dotActive} />
                    <span className={classes.dot} />
                </div>
            </div>
        </section>
    )
}
