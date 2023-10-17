import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';


function Head() { 
  const dispatch=useDispatch()
  
  const toggleMenuHandler=(val)=>{
    dispatch(toggleMenu())
   
  }
  

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'> 
      <div className='flex col-span-1'>
        <img className='h-8 cursor-pointer'  onClick={toggleMenuHandler} src="https://static.thenounproject.com/png/2254163-200.png" alt="hamlogo" />
       <img className='h-6 my-1 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtube" />
     
      </div>
      <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 p-1 rounded-l-full' type="text" />
        <button className='border border-gray-400 p-1 rounded-r-full px-2 bg-slate-300 py-1'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user" />
      </div>
    </div>
  )
}

export default Head