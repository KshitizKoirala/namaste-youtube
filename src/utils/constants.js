export const LIVE_CHAT_OFFSET = 30;
const GOOGLE_API_KEY = "AIzaSyB9OOvDDq-9PTuP_IIjSpJkbniosCt6ZpM";

export const YOUTUBE_MOST_POPULAR_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_AUTOSUGGEST_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_QUERY_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q={{query_string}}&type=video&key=" +
  GOOGLE_API_KEY;
