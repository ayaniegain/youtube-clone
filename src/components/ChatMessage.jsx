import React from 'react'

function ChatMessage({name,message}) {
  return (
    <div className='flex items-center py-2 px-2 shadow-sm border '>
         <img
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt="user"
        className="w-6 h-6"
      />
      <span className='font-bold w-40 mx-2'>{name}</span>
      <span className='mx-1 '>{message}</span>
    </div>
  )
}

export default ChatMessage