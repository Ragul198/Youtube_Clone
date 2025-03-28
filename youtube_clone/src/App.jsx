import React from 'react'
import Home from './pages/home/Home'
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Navbar from './componenets/navbar/Navbar';
import Sidebar from './componenets/sidebar/Side_bar';
import Video_player from './pages/Video_player/Video_player'

const App = () => {
  const [sidebar,setsidebar]=useState(false);
  return (
  <>
  <Navbar setsidebar={setsidebar}></Navbar >
  
  <Routes>
    <Route path='/' element={<Home sidebar={sidebar} ></Home>}></Route>
    <Route path="/video/:catagoryID/:videoID" element={<Video_player></Video_player>} />

  </Routes>
  
  </>
  )
}

export default App