import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


const Layout = () => {
  return (
    <>
        <header>
            <nav>
            <ul>
                <p>
                    Hello
                </p>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/gallery'>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to='/my-profile'>My Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/signup'>Signup</NavLink>
                </li>
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