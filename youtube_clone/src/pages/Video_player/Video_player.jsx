import React, { useEffect } from 'react'
import './Video_player.css'
import Play_video from '../../componenets/playvideo/Play_video'
import Recomended from '../../componenets/Recomended/Recomended'
import { useParams } from 'react-router-dom'
const   Video_player = () => {
  const {catagoryID,videoID}=useParams();
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='play-container'>
      <Play_video catagoryID={catagoryID} videoID={videoID}/>
      <Recomended/>
      
    </div>
  )
}

export default Video_player