import React from 'react'

function VideoCard({info}) {
  const {snippet,statistics}=info
  const {title,channelTitle,thumbnails}=snippet

  return (
    <div className='p-2 m-2 w-72 h-70 shadow-lg cursor-pointer'>
       <img className='rounded-lg' src={thumbnails.medium.url} alt="" />
       <ul>
         <li className='font-bold py-2'>{title}</li>
         <li>{channelTitle}</li>
         <li>{statistics.viewCount} views</li>
       </ul>
    </div>
  )
}

export default VideoCard