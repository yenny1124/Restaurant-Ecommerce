import React from 'react'
import Hero from '../components/hero/Hero'
import AboutUs from '../components/aboutus/AboutUs'
// import MenuDisplay from '../components/menudisplay/MenuDisplay'
import Reservation from '../components/reservation/Reservation'

const Home = () => {
    return (
        <div>
            <Hero />
            {/* <MenuDisplay /> */}
            <AboutUs />
            <Reservation />
        </div>
    )
}

export default Home
