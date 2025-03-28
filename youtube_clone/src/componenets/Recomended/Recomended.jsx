import React, { useEffect, useState } from 'react'
import './Recomended.css'
import { API_KEY ,view_convertor } from '../../data';
import { Link } from 'react-router-dom';

const Recomended = ({catagoryid , videoID}) => {
 

  const [videos_data ,setvideos_data]=useState([])
  const fetch_data = async()=>{
      const video_catogory_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${catagoryid}&key=${API_KEY}`
      await fetch(video_catogory_url)
      .then(res=>res.json())
      .then(data=>setvideos_data(data.items))
    }

 useEffect(()=>{
  fetch_data()
  },[]);
   
  return (
    <div className="recomended">
      {videos_data.map((item,index)=>{
        return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className={`video ${videoID===item.id?'active_video':'' }`} key={index} >
          <img src={item.snippet.thumbnails.medium.url} alt="thumbnail1" />
          <div className="info">
            <h3>{item.snippet.title}</h3>
            <h4>{item.snippet.channelTitle}</h4>
            <p>{view_convertor(item.statistics.viewCount)} Views</p>
          </div>
          </Link>
        )
      })}
      
      
     
    
    </div>
  )
}

export default Recomended