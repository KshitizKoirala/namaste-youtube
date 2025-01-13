import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonItems = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Valentines",
    "Music",
    "Namaste React",
    "Akshay Saini",
    "Web Series",
    "Playlist",
    "Skills",
    "Podcast",
  ];

  return (
    <div className="flex">
      {buttonItems.map((btnName) => (
        <Button key={btnName} name={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
