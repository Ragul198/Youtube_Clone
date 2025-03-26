import React from 'react'
import './home.css'
import Navbar from '../../componenets/navbar/Navbar'
import Sidebar from '../../componenets/sidebar/Side_bar'
import Video_feed from '../../componenets/video_feed/Video_feed'
const Home = ({sidebar}) => {
  return (
    <>
    
    <Sidebar sidebar={sidebar}></Sidebar>
    <div className={`container${sidebar ? " container__active" : ""}`}><Video_feed></Video_feed></div>
    

    </>
  )
}

export default Home