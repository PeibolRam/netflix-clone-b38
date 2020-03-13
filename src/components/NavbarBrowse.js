import React from 'react'
import Logo from '../img/logo.svg'
import '../styles/navbar.css'

export default function NavbarBrowse() {
    return (
        <nav className="navigation">
            <img src={Logo} alt="Logo" className="logo"/>
        </nav>
    )
}
