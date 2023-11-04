import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

function Head() {
  let [searchQuery, setSearchQuery] = useState("");
  let [suggestion, setSuggestion] = useState([]);
  let [searchResults, setsearchResults] = useState([]);
  let [showSuggesation, setshowSuggesation] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const subscribeResults = useSelector((store) => store.results.allResults);

  let cc = JSON.parse(localStorage.getItem("item"));

  // console.log(cc);
  // let len
  //   if (cc.allResults[0]?.length!==null) {
  //      len=((cc.allResults[0]?.length))

  //   }

  // const navigate = useNavigate()

  const dispatch = useDispatch();

  const inputRef = useRef("");

  const toggleMenuHandler = (val) => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
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
    setSuggestion(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  // const handleSearchResults=async(e)=>{
  //   e.preventDefault()

  //   const data = await fetch(YouTube_SEARCH_RESULTS_API+name);
  //   const json = await data.json();
  //   console.log(json.items);

  //   dispatch(
  //     searchResultsSlice(
  //       json.items

  //       )
  //       );

  //   // console.log(value);

  //   // const data = await fetch(YouTube_SEARCH_RESULTS_API);
  //   // const json = await data.json();
  //   //    console.log(json.items);

  //   // dispatch(
  //   //   searchResultsSlice(
  //   //     json.items

  //   //   )
  //   // );
  //   // setsearchResults(json.items);

  //   // navigate('/search-results')

  // }

  // const handleref=(name)=>{
  //   console.log(name);
  //   // const value1=refVAlue.current.value;

  //       inputRef.current.value=name

  //   // console.log(value1);

  // }

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-8 cursor-pointe r"
          onClick={toggleMenuHandler}
          src="https://static.thenounproject.com/png/2254163-200.png"
          alt="hamlogo"
        />
        <Link to="/">
          <img
            className="h-6 my-1 mx-2 cursor-pointer hidden sm:block"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube"
          />
        </Link>
      </div>
      <form className="relative col-span-10 px-10">
        <input
          value={searchQuery}
          className="px-5 w-1/2 border border-gray-400 p-1 rounded-l-full"
          type="text"
          ref={inputRef}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setshowSuggesation(true)}
          // onBlur={() => setshowSuggesation(false)}

          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              window.location.href = "/results?q=" + searchQuery;
            }
          }}
        />

        <Link to={"/results?q=" + searchQuery}>
          <button
            // onKeyDown={(e)=>{
            //     if(e.keyCode === 13)
            //     {
            //         window.location.href="/results?q="+searchQuery;
            //     }
            // }}

            className="border border-gray-400 h-9 rounded-r-full p-1 pb-1 bg-gray-400 px-2"
          >
            🔍
          </button>
        </Link>

        {showSuggesation && (
          <div className="absolute scroll-my-2 bg-white mx-2 w-96 shadow-lg rounded">
            <ul>
              {suggestion.map(
                (s, index) =>
                  suggestion[0] && (
                    <li
                      onClick={() => {
                        setSearchQuery(s);
                        setshowSuggesation(false);
                      }}
                      key={index}
                      className="py-2 px-3 shadow-sm hover:bg-gray-200"
                    >
                      <Link to={`/results?q=${s}`}>🔍{s}</Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </form>
      <div className="col-span-1 hidden sm:block">
        <NavLink to="/subscribe">
          <div>
            <button
              data-tooltip-target="tooltip-default"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              subscribe
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Head;
