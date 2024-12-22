import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero from '../../assets/hero_banner.jpg'
import title from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import Titlecard from '../../Components/TitleCard/Titlecard'
import Footer from '../../Components/Footer/Footer'
function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
          <img src={hero} alt="" className='hero-banner' />
          <div className="hero-caption">
          <img src={title} alt="" className='caption-img' />
          <p>The Protector is a Turkish fantasy series where Hakan discovers his destiny as Istanbul's guardian, battling immortals to protect the city’s past and future.</p>
          <div className="button">
            <button className="btn"><img src={play} alt="" />Play</button>
            <button className="btn btn-dark"><img src={info} alt="" />More Info</button>
          </div >

             <div className="titlecard" >
               <Titlecard title={"Upcoming"} category={"upcoming"}/>
             </div>
          </div>
        </div>
        <div className="morecards">
        <Titlecard className="cardsinmore" title={"Now Playing"} category={"now_playing"}/>
        <Titlecard className="cardsinmore" title={"Popular"} category={"popular"}/>
        <Titlecard className="cardsinmore" title={"Top Rated"}  category={"top_rated"}/>
        <Titlecard className="cardsinmore" title={"Upcoming"} category={"upcoming"}/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
    </div>
  )
}

export default Home