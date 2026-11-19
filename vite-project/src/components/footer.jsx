import { Photo } from '../Photo'
import classes from './footer.module.scss'

const stores = ['SLOVAKIA', 'CZECH REPUBLIC', 'FINLAND', 'POLAND']
const links = ['HOME', 'PRIVACY POLICY', 'TERMS CONDITIONS', 'CONTACT US']

export default function Footer({ onNavigate }) {
    return (
        <footer className={classes.Footer}>
            <div className={classes.divider} />
            <div className={classes.container}>
                <div className={classes.brand}>
                    <img
                        src={Photo.Bakery}
                        alt='Bakery'
                        className={classes.logo}
                        onClick={() => onNavigate && onNavigate(0)}
                    />
                    <p className={classes.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <img
                        src={Photo.socialGray}
                        alt='Socials'
                        className={classes.socials}
                    />
                </div>

                <div className={classes.columns}>
                    <div className={classes.col}>
                        <h3>OUR STORES</h3>
                        <ul>
                            {stores.map((store) => (
                                <li key={store}>{store}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={classes.col}>
                        <h3>USEFUL LINKS</h3>
                        <ul>
                            {links.map((item) => (
                                <li
                                    key={item}
                                    onClick={() =>
                                        item === 'HOME' && onNavigate && onNavigate(0)
                                    }
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
