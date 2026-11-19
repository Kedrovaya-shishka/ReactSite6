import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Photo } from '../Photo'
import classes from './header.module.scss'

export default function Header({ onNavigate }) {
    const [activeModal, setActiveModal] = useState(null)

    const getLink = ({ isActive }) =>
        isActive ? `${classes.link} ${classes.active}` : classes.link

    return (
        <>
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <NavLink
                        to='/'
                        className={classes.logo}
                        onClick={() => onNavigate && onNavigate(0)}
                    >
                        <img src={Photo.Bakery} alt='Bakery' />
                    </NavLink>

                    <ul className={classes.menu}>
                        <li>
                            <NavLink
                                to='/Home'
                                className={getLink}
                                onClick={() => onNavigate && onNavigate(0)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Shop'
                                className={getLink}
                                onClick={() => onNavigate && onNavigate(2)}
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Services'
                                className={getLink}
                                onClick={() => onNavigate && onNavigate(1)}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Blog'
                                className={getLink}
                                onClick={() => onNavigate && onNavigate(3)}
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>

                    <div className={classes.actions}>
                        <div className={classes.auth}>
                            <button
                                type='button'
                                onClick={() => setActiveModal('Login')}
                                className={classes.loginBtn}
                            >
                                Login
                            </button>
                            <span className={classes.slash}>/</span>
                            <button
                                type='button'
                                onClick={() => setActiveModal('Register')}
                                className={classes.register}
                            >
                                Register
                            </button>
                        </div>
                        <img
                            src={Photo.likeshop}
                            alt='likeshop'
                            className={classes.icons}
                        />
                    </div>
                </nav>
            </header>

            {activeModal && (
                <div
                    className={classes.overlay}
                    onClick={() => setActiveModal(null)}
                >
                    <div
                        className={classes.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type='button'
                            className={classes.closeBtn}
                            onClick={() => setActiveModal(null)}
                        >
                            ×
                        </button>
                        <h2>{activeModal}</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                setActiveModal(null)
                            }}
                        >
                            {activeModal === 'Register' && (
                                <input type='text' placeholder='Your name' required />
                            )}
                            <input type='email' placeholder='Email' required />
                            <input type='password' placeholder='Password' required />
                            <button type='submit' className={classes.submitBtn}>
                                {activeModal}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}