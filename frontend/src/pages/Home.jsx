import React from 'react'
import Hero from '../components/hero/Hero'
import AboutUs from '../components/aboutus/AboutUs'
import MenuDisplay from '../components/menudisplay/MenuDisplay'


const Home = () => {
    return (
        <div>
            <Hero />
            <MenuDisplay />
            <AboutUs />
        </div>
    )
}

export default Home
