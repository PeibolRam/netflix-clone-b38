import React from 'react'
import '../styles/story.css'

export default function Story() {
    return (
        <>
            <div className="story-card">
                <div className="story-card-text">
                    <h1 id="" class="our-story-card-title" >Enjoy on your TV.</h1>
                    <h2 id="" class="our-story-card-subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                </div>
                <div className="story-card-img">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
                </div>
            </div>
            <div className="story-card">
                <div className="story-card-img">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""/>
                </div>
                <div className="story-card-text">
                    <h1 id="" class="our-story-card-title" >Download your shows to watch on the go.</h1>
                    <h2 id="" class="our-story-card-subtitle">Save your data and watch all your favorites offline.</h2>
                </div>
            </div>
            <div className="story-card">
                <div className="story-card-text">
                    <h1 id="" class="our-story-card-title" >Watch everywhere.</h1>
                    <h2 id="" class="our-story-card-subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
                </div>
                <div className="story-card-img">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt=""/>
                </div>
            </div>
        </>
    )
}
