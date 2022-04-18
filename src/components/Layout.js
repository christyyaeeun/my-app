import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigator from './Navigator'
// import Header from './Header'
// import AddPost from './AddPost'
import Hero from '../pages/Landing'

const Layout = ({ children }) => {
    return (

        <main className="App">
            <Navigator />
            {children}
            <Outlet />
      
        </main>
    )
}

export default Layout