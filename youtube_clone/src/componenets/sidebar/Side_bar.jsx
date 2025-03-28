import React from 'react';
import './side_bar.css';
import home from '../../assets/home.png';
import gaming from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import technology from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import simon from '../../assets/simon.png'; 
import jack from '../../assets/jack.png';   
import gerard from '../../assets/gerard.png'; 
import megan from '../../assets/megan.png'; 
import tom from '../../assets/tom.png';   

const Side_bar = ({ sidebar, catagory, setcatagory }) => {

  return (
    <div className={`sidebar ${sidebar ? 'active' : ""}`}>
      <div className="catagory">
        <div className={`item ${catagory === 0 ? 'catagory-active' : ''}`} onClick={() => setcatagory(0)}>
          <img src={home} alt="Home" />
          <p>Home</p>
        </div>
        <div className={`item ${catagory === 20 ? 'catagory-active' : ''}`} onClick={() => setcatagory(20)}>
          <img src={gaming} alt="Gaming" />
          <p>Gaming</p>
        </div>
        <div className={`item ${catagory === 10 ? 'catagory-active' : ''}`} onClick={() => setcatagory(10)}>
          <img src={automobiles} alt="Automobiles" />
          <p>Automobiles</p>
        </div>
        <div className={`item ${catagory === 17 ? 'catagory-active' : ''}`} onClick={() => setcatagory(17)}>
          <img src={sports} alt="Sports" />
          <p>Sports</p>
        </div>
        <div className={`item ${catagory === 2 ? 'catagory-active' : ''}`} onClick={() => setcatagory(2)}>
          <img src={entertainment} alt="Entertainment" />
          <p>Entertainment</p>
        </div>
        <div className={`item ${catagory === 22 ? 'catagory-active' : ''}`} onClick={() => setcatagory(22)}>
          <img src={technology} alt="Technology" />
          <p>Technology</p>
        </div>
        <div className={`item ${catagory === 24 ? 'catagory-active' : ''}`} onClick={() => setcatagory(24)}>
          <img src={music} alt="Music" />
          <p>Music</p>
        </div>
        <div className={`item ${catagory === 25 ? 'catagory-active' : ''}`} onClick={() => setcatagory(25)}>
          <img src={blogs} alt="Blogs" />
          <p>Blogs</p>
        </div>
        <div className={`item ${catagory === 26 ? 'catagory-active' : ''}`} onClick={() => setcatagory(26)}>
          <img src={news} alt="News" />
          <p>News</p>
        </div>
      </div>
      <hr />
      <div className="scbcribed">
        <h3>SUBSCRIBED</h3>
        <div className="subcribe-accounts">
          <img src={simon} alt="Simon" />
          <p>PewDiePie</p>
        </div>
        <div className="subcribe-accounts">
          <img src={jack} alt="Jack" />
          <p>MrBeast</p>
        </div>
        <div className="subcribe-accounts">
          <img src={gerard} alt="gerard" />
          <p>Justin Bieber</p>
        </div>
        <div className="subcribe-accounts">
          <img src={megan} alt="Megan" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="subcribe-accounts">
          <img src={tom} alt="Tom" />
          <p>Nas Daily</p>
        </div>
        <div className="subcribe-accounts">
          <img src={simon} alt="Simon" />
          <p>PewDiePie</p>
        </div>
        <div className="subcribe-accounts">
          <img src={jack} alt="Jack" />
          <p>MrBeast</p>
        </div>
        <div className="subcribe-accounts">
          <img src={gerard} alt="gerard" />
          <p>Justin Bieber</p>
        </div>
        <div className="subcribe-accounts">
          <img src={megan} alt="Megan" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="subcribe-accounts">
          <img src={tom} alt="Tom" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
}

export default Side_bar;
