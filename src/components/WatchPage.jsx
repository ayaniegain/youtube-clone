import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainers from "./CommentsContainers";
import LiveChat from "./LiveChat";

function WatchPage() {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="mx-4 my-4 flex w-full">
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="xl:w-96">
          <LiveChat />
        </div>
      </div>
      <div className="xl:w-6/12">

      <CommentsContainers />
      </div>
    </div>
  );
}

export default WatchPage;
