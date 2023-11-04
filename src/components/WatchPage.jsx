import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import CommentsContainers from "./CommentsContainers";
import LiveChat from "./LiveChat";
import SuggestionVideo from "./SuggesationVideo";

import { Link, useSearchParams } from "react-router-dom";
import {
  FETCH_API,
  SEARCH_RESULT_API,
  YOUTUBE_SEARCH_API,
} from "../utils/constant";
import WatchPageShimmer from "./WatchPageShimmer";
import { searchResultsSlice } from "../utils/resultsSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function WatchPage() {
  const [suggVideos, setSuggVideos] = useState([]);
  const [Vinfo, setVinfo] = useState();
  const [isDesOpen, setIsDesOpen] = useState(false);
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  
    
  useEffect(() => {
    dispatch(closeSidebar());
    getSuggestedVideos();
    getDetails();
  }, []);

let handleClick=(vid)=>{

  toast.success("subscribe added");
      dispatch(

        searchResultsSlice(
    
          
          vid.items
    
      ))}


  const getSuggestedVideos = async () => {
    const result = await fetch(
      SEARCH_RESULT_API + searchParams.get("sq_ch") + "&maxResults=10"
    );
    const data = await result.json();
    // console.log(data.items);
    setSuggVideos(data.items);
  };
  const handleDes = () => {
    setIsDesOpen(!isDesOpen);
  };

  const getDetails = async () => {
    try {
      // console.log(FETCH_API);
      const response = await fetch(FETCH_API + "&id=" + searchParams.get("v"));
      const dataInbox = await response.json();
      // console.log(dataInbox);
      setVinfo(dataInbox);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return !Vinfo ? (
    <WatchPageShimmer />
  ) : (
    <div className="flex flex-col w-full">
      <div className="mx-4 my-4 flex w-full">
        <div className="">
          <iframe
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="pt-2 ml-2 shadow-lg bg-gray-100 rounded-lg mt-2 mb-2">
            {Vinfo && Vinfo.items && Vinfo.items.length > 0 && (
              <div className="mt-2 mb-2">
                <p className="ml-5 font-bold text-xl ">
                  {Vinfo.items[0].snippet.localized.title}
                </p>

                <div className="flex flex-row mt-3">
                  <img
                    className=" mx-2 h-10 w-10 rounded-full"
                    src={Vinfo.items[0].snippet.thumbnails.default.url}
                    alt="thumbnil"
                  />
                  <p className="font-bold ml-5 text-xl  bg-gray-300 px-2 py-1 rounded-full">
                    {Vinfo.items[0].snippet.channelTitle}
                  </p>
                  <p className="m-1 text-green-600 ml-4 font-bold ml-24">
                    {Vinfo.items[0].statistics.viewCount / 1000} views
                  </p>
                  <p className="text-green-600 m-1 ml-8 font-bold">
                    {Vinfo.items[0].statistics.likeCount} Likes
                  </p>
                  <button onClick={()=>handleClick(Vinfo)} className="bg-red-600 font-bold text-white tracking-widest p-1 rounded-full px-10 ml-[50px]">
                    subscribe
                  </button>
                  <ToastContainer />
                </div>

                <div
                  onClick={() => handleDes()}
                  className="bg-gray-300 px-3 mx-2 mt-3 rounded-lg py-2"
                >
                  <p>
                    {" "}
                    <span className="font-bold">Description :</span> Click here
                    to open ⬇
                  </p>
                  {isDesOpen && (
                    <p className="text-sm">
                      {Vinfo.items[0].snippet.description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="xl:w-96">
          <LiveChat />
        </div>
      </div>
      <div className="flex gap-80 justify-start">
        <div className="xl:w-auto mx-4">
          <CommentsContainers />
        </div>
        <div className="xl:pl-25">
          <h2 className="underline font-bold mb-8 text-2xl">
            Suggested For You
          </h2>
          {suggVideos && suggVideos.length > 0 ? (
            suggVideos.map((s, index) => (
              <Link
                key={index}
                to={
                  "/watch?v=" + s.id.videoId + "&sq_ch=" + s.snippet.channelId
                }
              >
                <SuggestionVideo info={s} />
              </Link>
            ))
          ) : (
            <p>No suggested videos available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WatchPage;
