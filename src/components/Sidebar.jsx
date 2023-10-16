import React from 'react'
import { useSelector } from 'react-redux'

function Sidebar() {

const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
const value=useSelector((store)=>store.app.value)

if (!isMenuOpen) return null
  return (
    <div>
      <h2>cc{value}</h2>

      <div className='p-5 shadow-lg w-48'>
       <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
    
    </div>
    )
}

export default Sidebar