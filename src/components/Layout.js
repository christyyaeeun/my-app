import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
// import Header from './Header'
// import AddPost from './AddPost'

const Layout = ({children}) => {
    return (

        <main className="App">
                <Nav />
{children}

                <Outlet />
        </main>
    )
}

export default Layout