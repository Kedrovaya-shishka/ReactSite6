import { Photo } from '../Photo'
import classes from './header.module.scss'

export default function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <a
                    href='#'
                    className={classes.logo}
                    onClick={(e) => e.preventDefault()}
                >
                    <img src={Photo.Bakery} alt='Bakery' />
                </a>

                <ul className={classes.menu}>
                    <li>
                        <a
                            href='#'
                            className={classes.link}
                            onClick={(e) => e.preventDefault()}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className={classes.link}
                            onClick={(e) => e.preventDefault()}
                        >
                            Shop
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className={classes.link}
                            onClick={(e) => e.preventDefault()}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className={classes.link}
                            onClick={(e) => e.preventDefault()}
                        >
                            Blog
                        </a>
                    </li>
                </ul>

                <div className={classes.actions}>
                    <img
                        src={Photo.likeshop}
                        alt='likeshop'
                        className={classes.icons}
                    />
                </div>
            </nav>
        </header>
    )
}