import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Photo } from '../Photo'
import classes from './header.module.scss'

export default function Header() {
    const [activeModal, setActiveModal] = useState(null)

    const getLink = ({ isActive }) =>
        isActive ? `${classes.link} ${classes.active}` : classes.link

    return (
        <>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <NavLink to='/' className={classes.logo}>
                        <img src={Photo.Bakery} alt='Bakery' />
                    </NavLink>

                    <ul className={classes.menu}>
                        <li><NavLink to='/Home'          className={getLink}>Home</NavLink></li>
                        <li><NavLink to='/Shop'          className={getLink}>Shop</NavLink></li>
                        <li><NavLink to='/Services'       className={getLink}>Services</NavLink></li>
                        <li><NavLink to='/Blog'    className={getLink}>Blog</NavLink></li>
                    </ul>

                    <div className={classes.actions}>
                        <button
                            type='button'
                            onClick={() => setActiveModal('Login')}
                            className={classes.loginBtn}
                        >
                            Login
                        </button>
                        <button
                            type='button'
                            onClick={() => setActiveModal('Register')}
                            className={classes.register}
                        >
                            Register
                        </button>
                        <img src={Photo.likeshop} alt='likeshop' />
                    </div>
                </nav>
            </header>
        </>
    )
}