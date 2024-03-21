import React from 'react'
import {  Outlet, NavLink } from 'react-router-dom'
import './style.sass'
function Layout() {
    
    return (
        <>
        <header>
            <NavLink className='link' to="/">Home</NavLink>
            <NavLink className='link' to="/about">About</NavLink>
            <NavLink className='link' to="/posts">Blog</NavLink>
        </header>
        <footer>2021</footer>
        <Outlet></Outlet>
        </>
    )
}

export default Layout