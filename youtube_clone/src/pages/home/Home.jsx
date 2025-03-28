import React, { useState } from 'react'
import './home.css'
import Navbar from '../../componenets/navbar/Navbar'
import Sidebar from '../../componenets/sidebar/Side_bar'
import Video_feed from '../../componenets/video_feed/Video_feed'
const Home = ({sidebar}) => {
  const [catagory,setcatagory]=useState(0);
  return (
    <>
    
    <Sidebar sidebar={sidebar} catagory={catagory} setcatagory={setcatagory}></Sidebar>
    <div className={`container${sidebar ? " container__active" : ""}`}><Video_feed catagory={catagory}></Video_feed></div>
    

    </>
  )
}

export default Home