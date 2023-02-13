import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Trending from './Components/MoviesSection/Movies'
import Series from './Components/SeriesSection/Series'
import Footer from './Components/Footer/Footer'


const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Trending/>
      <Series/>
      <Footer/>
    </>
  )
}

export default Homepage
