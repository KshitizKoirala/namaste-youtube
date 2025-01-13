import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    // API Polling
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 w-full h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {/* Disclaimer: Don't use index as keys */}
          {chatMessages.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>
      </div>
      <form
        className="m-2 p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Akshay",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-80 pl-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 ml-4 bg-green-100 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
