import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex m-2 p-2 bg-gray-100 rounded-lg">
      <img
        alt="user"
        src="https://t4.ftcdn.net/jpg/04/62/63/65/360_F_462636502_9cDAYuyVvBY4qYJlHjW7vqar5HYS8h8x.jpg"
        className="w-8 h-8"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p className="pt-1">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
