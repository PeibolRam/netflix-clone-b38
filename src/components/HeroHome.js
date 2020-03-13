import React from 'react'
import Navbar from './Navbar'
import Story from './Story'
import '../styles/hero.css'

export default function HeroHome() {
    return (
        <>
            <Navbar />
            <div className="hero_home">
                <div className="hero_home_intro">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                </div>
            </div>
            <Story/>
        </>
    )
}
