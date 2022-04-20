import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigator from './Navigator'
// import Header from './Header'
// import AddPost from './AddPost'


const Layout = () => {
    return (

        <main className="App">
            <Navigator />
            <Outlet />
      
        </main>
    )
}

export default Layout