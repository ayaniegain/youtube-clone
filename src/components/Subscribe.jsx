import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeSubs } from '../utils/resultsSlice';

function Subscribe() {
  const Vinfo = useSelector((store) => store.results.allResults);

  const dispatch = useDispatch();

  
//   let cc=JSON.parse(localStorage.getItem('item'))
// let Vinfo=((cc.allResults))

  
  let handleClick=(vid)=>{


    
    dispatch(
  
      removeSubs(
  
        
        vid
  
    )
    
    )
  }
  


  return (
    <div className='flex flex-col mx-6'>
    <h2 className=' text-3xl mx-2'>All Subscribers</h2>
    <div className="pt-2   shadow-lg bg-gray-100 rounded-lg mt-2 mb-2">
          

            {
             Vinfo.map((items,index)=>
             
             <div key={index} className="flex p-6  flex-row mt-3">
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
    </div>
  )
}

export default Subscribe