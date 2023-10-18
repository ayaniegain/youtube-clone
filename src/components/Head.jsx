import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  let [searchQuery, setSearchQuery] = useState("");
  let [suggsearch, setsuggesation] = useState([]);
  let [showSuggesation, setshowSuggesation] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const toggleMenuHandler = (val) => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggesation(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);


  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setsuggesation(json[1]);
//update cache
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };
 
  return ( 
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
          src="https://static.thenounproject.com/png/2254163-200.png"
          alt="hamlogo"
        />
        <img
          className="h-6 my-1 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="youtube"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          value={searchQuery}
          className="px-5 w-1/2 border border-gray-400 p-1 rounded-l-full"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setshowSuggesation(true)}
          onBlur={() => setshowSuggesation(false)}
        />
        <button className="border border-gray-400 p-1 rounded-r-full px-2 bg-slate-300 py-1">
          🔍
        </button>
        {showSuggesation && (
          <div className="absolute scroll-my-2 bg-white mx-2 w-96 shadow-lg rounded">
            <ul>
              {suggsearch.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  ✔ {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Head;
