import React from 'react'
import { useSelector } from 'react-redux'

function SearchResults() {
    const allresults=useSelector((store)=>store.results.allResults)

    console.log(allresults);

  return (
    <div>SearchResults</div>
  )
}

export default SearchResults