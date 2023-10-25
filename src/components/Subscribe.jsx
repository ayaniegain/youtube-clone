import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeSubs } from '../utils/resultsSlice';

function Subscribe() {
  const Vinfo = useSelector((store) => store.results.allResults);
  const dispatch = useDispatch();

  
  let handleClick=(vid)=>{


    
    console.log(vid);
    dispatch(
  
      removeSubs(
  
        
        vid
  
    )
    
    )
  }
  


  return (
    <>
    <div>All Subscribers</div>
    <div className="pt-2 ml-2 shadow-lg bg-gray-100 rounded-lg mt-2 mb-2">
          

            {
             Vinfo.map((items)=>
             
             <div className="flex flex-row mt-3">
             <img
               className=" mx-2 h-10 w-10 rounded-full"
               src={items[0].snippet.thumbnails.default.url}
               alt="thumbnil"
             />
             <p className="font-bold ml-5 text-xl  bg-gray-300 px-2 py-1 rounded-full">
               {items[0].snippet.channelTitle}
             </p>
             <p className="m-1 text-green-600 ml-4 font-bold ml-24">
               {items[0].statistics.viewCount / 1000} views
             </p>
             <p className="text-green-600 m-1 ml-8 font-bold">
               {items[0].statistics.likeCount} Likes
             </p>
             <button   onClick={()=>handleClick(items[0].id)} className="bg-orange-600 font-bold text-white tracking-widest p-1 rounded-full px-10 ml-[50px]">
               unsubscribe
             </button>
           </div>
             
             
             
             
             
             
             
             
             ) 
            }
          </div>
    </>
  )
}

export default Subscribe