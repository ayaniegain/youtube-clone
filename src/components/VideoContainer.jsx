import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEO_API } from "../utils/constant.js";
import { youtube_sample } from "../utils/constant.js";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer.jsx";

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    // let res = await fetch(YOUTUBE_VIDEO_API);
    // let res = await fetch(youtube_sample);
    // let data = await res.json();

    // setVideos(data.items);
    setVideos(youtube_sample.items);
  };

  useEffect(() => {
    getVideos();
  }, []);



    return (videos.length===0)? <Shimmer /> : 
    (
    <div className="flex flex-wrap">
      {videos.map((videos, index) => (
        <Link key={index} to={`/watch?v=${videos.id}`}>
        <VideoCard  info={videos} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;
