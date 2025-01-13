import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  YOUTUBE_MOST_POPULAR_API,
  YOUTUBE_QUERY_VIDEOS_API,
} from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const searchKeyword = useSelector(
    (store) => store.searchResults.searchKeyword
  );

  useEffect(() => {
    getVideos();
  }, [searchKeyword]);

  const getVideos = async () => {
    const fetchAPI = searchKeyword
      ? YOUTUBE_QUERY_VIDEOS_API.replace("{{query_string}}", searchKeyword)
      : YOUTUBE_MOST_POPULAR_API;
    const data = await fetch(fetchAPI);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => {
        const videoId = video.id.videoId ?? video.id;
        return (
          <Link key={videoId} to={"/watch?v=" + videoId}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
