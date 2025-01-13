import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user"
        src="https://t4.ftcdn.net/jpg/04/62/63/65/360_F_462636502_9cDAYuyVvBY4qYJlHjW7vqar5HYS8h8x.jpg"
      />
      <span className="font-bold px-2 s">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
