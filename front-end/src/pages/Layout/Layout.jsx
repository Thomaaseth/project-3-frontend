import React, { useContext } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Layout = () => {
    const { user, authenticateUser, removeToken } = useContext(AuthContext)
    function handleClick() {
        removeToken()
        authenticateUser()
    }

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/gallery'>Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to='/my-profile'>My Profile</NavLink>
                        </li>
                        {!user ? (
                            <>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup">Signup</NavLink>
                                </li>
                            </>
                        ) : (
                            <button onClick={handleClick}>Logout</button>
                        )}
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet>

                </Outlet>
            </main>

        </>
    )
}

export default Layout