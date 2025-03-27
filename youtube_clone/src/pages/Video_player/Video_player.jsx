import React from 'react'
import './Video_player.css'
import Play_video from '../../componenets/playvideo/Play_video'
import Recomended from '../../componenets/Recomended/Recomended'
const Video_player = () => {
  return (
    <div className='play-container'>
      <Play_video/>
      <Recomended/>
      
    </div>
  )
}

export default Video_player