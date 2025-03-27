import React from 'react'
import './playvideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import save from '../../assets/save.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import user from '../../assets/user_profile.jpg'
const Play_video = () => {
  return (
    <div className="video-container">
      <video src={video} autoPlay controls className="video"></video>
      <h3>VIdeo title is this guys</h3>
      <div className="video_info">
        <p>124m views &bull; 3 days ago</p>
        <div >
        <span><img src={like} alt="" />123455</span>
          <span><img src={dislike} alt="" />123455</span>
          <span><img src={share} alt="" />share</span>
          <span><img src={save} alt="" />save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        
        <img src={jack} alt="" />
        <div>
          <p>RagulA</p>
          <span>1M subcribers</span>
        </div>
        
        <span><button>Subscribe</button></span>
        
      </div>
      <div className="vid_description">
        <p>This is the description of the video</p>
        <p>its real a good movie alright !</p>
      <hr />
      <h4> 26 Comments</h4>
      <div className="comments">
          
            <img src={user} alt="" />
            <div>
            <h3>@Pew di pie <span>(1 hour ago)</span></h3>
            <p>an we start a new ###??? #bringbackcinema , we need to be at theaters when this drops! just like the good ole days🔥, i can’t wait for this film! i think 2025 overall will have a ton of great movies, hopefully we see an upwards trend</p>
            <div className="comment_interaction">
              <span><img src={like} alt="" />12</span>
              <span><img src={dislike} alt="" />12</span>
              </div>
            </div>
            </div>
            <div className="comments">
          
            <img src={user} alt="" />
            <div>
            <h3>@Pew di pie <span>(1 hour ago)</span></h3>
            <p>an we start a new ###??? #bringbackcinema , we need to be at theaters when this drops! just like the good ole days🔥, i can’t wait for this film! i think 2025 overall will have a ton of great movies, hopefully we see an upwards trend</p>
            <div className="comment_interaction">
              <span><img src={like} alt="" />12</span>
              <span><img src={dislike} alt="" />12</span>
              </div>
            </div>
            </div>
            <div className="comments">
          
            <img src={user} alt="" />
            <div>
            <h3>@Pew di pie <span>(1 hour ago)</span></h3>
            <p>an we start a new ###??? #bringbackcinema , we need to be at theaters when this drops! just like the good ole days🔥, i can’t wait for this film! i think 2025 overall will have a ton of great movies, hopefully we see an upwards trend</p>
            <div className="comment_interaction">
              <span><img src={like} alt="" />12</span>
              <span><img src={dislike} alt="" />12</span>
              </div>
            </div>
            </div>
            <div className="comments">
          
            <img src={user} alt="" />
            <div>
            <h3>@Pew di pie <span>(1 hour ago)</span></h3>
            <p>an we start a new ###??? #bringbackcinema , we need to be at theaters when this drops! just like the good ole days🔥, i can’t wait for this film! i think 2025 overall will have a ton of great movies, hopefully we see an upwards trend</p>
            <div className="comment_interaction">
              <span><img src={like} alt="" />12</span>
              <span><img src={dislike} alt="" />12</span>
              </div>
            </div>
            </div>
            <div className="comments">
          
            <img src={user} alt="" />
            <div>
            <h3>@Pew di pie <span>(1 hour ago)</span></h3>
            <p>an we start a new ###??? #bringbackcinema , we need to be at theaters when this drops! just like the good ole days🔥, i can’t wait for this film! i think 2025 overall will have a ton of great movies, hopefully we see an upwards trend</p>
            <div className="comment_interaction">
              <span><img src={like} alt="" />12</span>
              <span><img src={dislike} alt="" />12</span>
              </div>
            </div>
            </div>
          </div>
          
      </div>
      
        
        
      
    
)}

export default Play_video