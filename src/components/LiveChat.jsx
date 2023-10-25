import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import { generateRandomText, randomGenerateName } from "../utils/helper";

function LiveChat() {
  const [liveMessage,setLiveMessage]=useState('')
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("api pooling");

      dispatch(
        addmessage({
          name: randomGenerateName(),
          message: generateRandomText(10),
        })
      );
    }, 800);

    return () => {
      clearInterval(i);
    };
  }, []);

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(
      addmessage({
        name: 'Ayan Biswas',
        message:liveMessage,
      })
    );

    setLiveMessage('')



  }

  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {ChatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
    </div>

    <form onSubmit={handleSubmit} className="w-full border border-black rounded-sm p-2 ml-2">
      <input value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} placeholder="type a text" className="px-2 w-60 border border-gray-400 " type="text" name="" id="" />
      <button className="mx-1 px-2  bg-green-400" type="submit">send</button>
    </form>
        </>
  );
}

export default LiveChat;
