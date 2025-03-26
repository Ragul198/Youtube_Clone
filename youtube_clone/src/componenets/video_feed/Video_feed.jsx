import React from 'react'
import './Video_feed.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';

const Video_feed = () => {
  return (
    <div className="video_cards">
        <Link to={"/video/52/3456"} className="card">
        <img src={thumbnail1} alt="thumbnail1" />
        <h2>Final Destination Bloodlines | Official Trailer</h2>
        <h3>Warner Bros</h3>
        <p>4m views · 18 hours ago</p>
      </Link>
      <div className="card">
        <img src={thumbnail2} alt="thumbnail2" />
        <h2>Another Exciting Movie | Official Trailer</h2>
        <h3>Universal Pictures</h3>
        <p>2m views · 1 day ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="thumbnail3" />
        <h2>Adventure Awaits | Teaser</h2>
        <h3>Paramount Pictures</h3>
        <p>1.5m views · 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="thumbnail4" />
        <h2>Comedy Night | Stand-up Special</h2>
        <h3>Netflix</h3>
        <p>3m views · 3 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="thumbnail5" />
        <h2>Documentary: The Untold Story</h2>
        <h3>National Geographic</h3>
        <p>500k views · 4 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="thumbnail6" />
        <h2>Music Video | Top Hits</h2>
        <h3>Vevo</h3>
        <p>10m views · 5 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="thumbnail7" />
        <h2>Cooking Show | Episode 1</h2>
        <h3>Food Network</h3>
        <p>800k views · 6 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="thumbnail8" />
        <h2>Travel Vlog | Exploring the World</h2>
        <h3>Travel Channel</h3>
        <p>1m views · 1 week ago</p>
      </div>
      <div className="card">
        <img src={thumbnail1} alt="thumbnail1" />
        <h2>Final Destination Bloodlines | Official Trailer</h2>
        <h3>Warner Bros</h3>
        <p>4m views · 18 hours ago</p>
      </div>
      <div className="card">
        <img src={thumbnail2} alt="thumbnail2" />
        <h2>Another Exciting Movie | Official Trailer</h2>
        <h3>Universal Pictures</h3>
        <p>2m views · 1 day ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="thumbnail3" />
        <h2>Adventure Awaits | Teaser</h2>
        <h3>Paramount Pictures</h3>
        <p>1.5m views · 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="thumbnail4" />
        <h2>Comedy Night | Stand-up Special</h2>
        <h3>Netflix</h3>
        <p>3m views · 3 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="thumbnail5" />
        <h2>Documentary: The Untold Story</h2>
        <h3>National Geographic</h3>
        <p>500k views · 4 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="thumbnail6" />
        <h2>Music Video | Top Hits</h2>
        <h3>Vevo</h3>
        <p>10m views · 5 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="thumbnail7" />
        <h2>Cooking Show | Episode 1</h2>
        <h3>Food Network</h3>
        <p>800k views · 6 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="thumbnail8" />
        <h2>Travel Vlog | Exploring the World</h2>
        <h3>Travel Channel</h3>
        <p>1m views · 1 week ago</p>
      </div>
        
    </div>
  )
}

export default Video_feed