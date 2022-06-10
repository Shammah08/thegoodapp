import React from "react";
import {  logos } from '../../resources/database'

const TvHeader = () => {
    
    return (
        <section className="tv-header">
            
                <a href="/" className="tv-logo">
                    <img src={logos.goodBanner} alt="" />
                </a>
            
            <div className="tv-menu">
                <ul>
                    <li>
                        <a href={'/tv'}>Home</a>
                    </li>
                    <li>
                        <a href={'/tv/rewind'}>Rewind</a>
                    </li>
                    <li>
                        <a href={'/tv/favorites'}>Favorites</a>
                    </li>
                    <li>
                        <a href={'/tv/about'}>About</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default TvHeader;
