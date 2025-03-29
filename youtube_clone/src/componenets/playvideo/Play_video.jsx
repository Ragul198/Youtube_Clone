import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import './Playvideo.css';
import video from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import save from '../../assets/save.png';
import share from '../../assets/share.png';
import jack from '../../assets/jack.png';
import user from '../../assets/user_profile.jpg';
import { API_KEY } from '../../data';
import { view_convertor } from '../../data';
import moment from 'moment';

const Play_video = () => {
  const { videoID } = useParams(); // Use useParams to get videoID
  const [api, setapi] = useState(null);
  const [channel_data, setchannel_data] = useState(null);
  const [comment_data, setcomment_data] = useState([]);

  const fetch_video_details = async () => {
    const video_data_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${API_KEY}`;
    await fetch(video_data_url)
      .then((res) => res.json())
      .then((data) => setapi(data.items[0]));
  };

  const fetch_channel_details = async () => {
    if (!api) return;
    const channel_data_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${api.snippet.channelId}&key=${API_KEY}`;
    await fetch(channel_data_url)
      .then((res) => res.json())
      .then((data) => setchannel_data(data.items[0]));
  };

  const fetch_comment_details = async () => {
    const comment_data_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=200&videoId=${videoID}&key=${API_KEY}`;
    await fetch(comment_data_url)
      .then((res) => res.json())
      .then((data) => setcomment_data(data.items));
  };

  useEffect(() => {
    fetch_video_details();
  }, [videoID]);

  useEffect(() => {
    if (api) {
      fetch_channel_details();
      fetch_comment_details();
    }
  }, [api]);

  return (
    <div className="video-container">
      <iframe
        width="553"
        height="280"
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
        title="React Projects For Beginners | Master React.js In One Video | React Projects for Resume"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3>{api ? api.snippet.title : "title is not available"}</h3>
      <div className="video_info">
        <p>
          {api ? view_convertor(api.statistics.viewCount) : "no data available"} views &bull;{" "}
          {api ? moment(api.snippet.publishedAt).fromNow() : "no data available"}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {api ? view_convertor(api.statistics.likeCount) : "no data available"}
          </span>
          <span>
            <img src={dislike} alt="" />
            123455
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channel_data ? channel_data.snippet.thumbnails.medium.url : jack} alt="" />
        <div>
          <p>{api ? api.snippet.channelTitle : "title is not available"}</p>
          <span>{channel_data ? view_convertor(channel_data.statistics.subscriberCount) : "102"} Subscribers</span>
        </div>
        <span>
          <button>Subscribe</button>
        </span>
      </div>
      <div className="vid_description">
        <p>Description </p>
        <p>{(api ? api.snippet.description : "title is not available").slice(0, 250)}</p>
        <hr />
        <h4>{api ? view_convertor(api.statistics.commentCount) : "no data available"} Comments</h4>
        {comment_data.map((item, index) => {
          return (
            <div className="comments" key={index}>
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>({moment(item.snippet.topLevelComment.snippet.updatedAt).fromNow()})</span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay} </p>
                <div className="comment_interaction">
                  <span>
                    <img src={like} alt="" />
                    {item.snippet.topLevelComment.snippet.likeCount}
                  </span>
                  <span>
                    <img src={dislike} alt="" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Play_video;
