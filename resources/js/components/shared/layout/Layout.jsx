import React from 'react'
import NavBar from './NavBar'
import { useWindowHeight } from '../hook';

const Layout = ({ children }) => {
    const vh100 = useWindowHeight()

    return (
        <div 
            
        >
            <NavBar/>
            <main>{children}</main>
        </div>
    )
}
export default Layout