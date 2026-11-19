import { Photo } from '../Photo'
import classes from './home_sec5.module.scss'

const customers = [
    {
        id: 1,
        avatar: Photo.customer1,
        name: 'Bianka P.',
        city: 'Bratislava, Slovakia',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
        id: 2,
        avatar: Photo.customer2,
        name: 'Jakub S.',
        city: 'Bratislava, Slovakia',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
]

export default function Home_sec5() {
    return (
        <section className={classes.Home_sec5}>
            <div className={classes.container}>
                <div className={classes.heading}>
                    <h2>OUR CUSTOMERS</h2>
                </div>

                <div className={classes.cards}>
                    {customers.map((customer) => (
                        <div className={classes.card} key={customer.id}>
                            <div className={classes.profile}>
                                <img
                                    src={customer.avatar}
                                    alt={customer.name}
                                    className={classes.avatar}
                                />
                                <div className={classes.info}>
                                    <h3>{customer.name}</h3>
                                    <p>{customer.city}</p>
                                </div>
                            </div>
                            <p className={classes.review}>{customer.review}</p>
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
