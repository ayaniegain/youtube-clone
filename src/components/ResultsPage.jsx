import React, { useEffect, useState } from "react";
import { SEARCH_RESULT_API } from "../utils/constant";
import ResultVideoCard from "./ResultVideoCard";
import { Link, useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [resultsArray, setResultsArray] = useState([]);
  useEffect(() => {
    getResult();
  }, [searchParams.get("q")]);

  const getResult = async () => {
    const result = await fetch(SEARCH_RESULT_API + searchParams.get("q"));
    const data = await result.json();
    console.log(data.items);
    setResultsArray(data.items);
  };
  return (
    <div className="mt-[30px] ">
      {resultsArray.map((r, index) => (
        <Link
          key={index}
          to={"/watch?v=" + r.id.videoId + "&sq_ch=" + r.snippet.channelTitle}
        >
          {resultsArray[0] && <ResultVideoCard info={r} />}
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
