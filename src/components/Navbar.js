import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'


export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="Logo" className="logo"/>
            <Link to="/login" class="redButton">Sign In</Link>
        </nav>
    )
}
