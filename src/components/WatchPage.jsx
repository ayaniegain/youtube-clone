import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

function WatchPage() {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="mx-4 my-4">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/"+searchParams.get('v')}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default WatchPage;
