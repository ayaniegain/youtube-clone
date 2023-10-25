import React from 'react'

const ResultVideoCard = ({info}) => {
    if (!info) {
        return <div>Loading...</div>;
      }
      const {videoId} = info.id;
    const {snippet}= info;
    const {channelTitle,title,thumbnails,publishTime
    }= snippet;
  return (
    <div className='flex w-4/7 h-[200px] shadow-md ml-[70px] m-3'>
      <img alt="thumbnail" src={thumbnails.high.url} className='rounded-md w-[300px]'/>
      <div className='flex flex-col justify-center px-3'>
        <p className='font-semibold mb-1 mt-1'>{title}</p>
        <p className='font-bold mt-1 mb-1'>{channelTitle}</p>
        <p className='mt-1 mb-1'>{publishTime}</p>
        <p>500K views</p>
      </div>

    </div>
  )
}

export default ResultVideoCard