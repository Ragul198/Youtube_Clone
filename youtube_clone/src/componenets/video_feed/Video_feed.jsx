import React, { useEffect, useState } from 'react'
import './Video_feed.css'
import { Link } from 'react-router-dom';
import { API_KEY , view_convertor } from '../../data';
import moment from "moment";


const Video_feed = ({catagory}) => {
  const[data,setdata]=useState([]);

  const fetch_data = async()=>{
    const video_catogory_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${catagory}&key=${API_KEY}`
    await fetch(video_catogory_url)
    .then(res=>res.json())
    .then(data=>setdata(data.items))
  }
  console.log(data)
  useEffect(()=>{
    fetch_data();
  },[catagory])

  return (
    <div className="video_cards">
      {data.map((item,index)=>{
        return(
      <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="card" key={index}>
        <img src={item.snippet.thumbnails.medium.url} alt="thumbnail1" />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{view_convertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
      </Link>

        )
      })}
        
      
        
    </div>
  )
}

export default Video_feed