export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?key=" +
  API_KEY +
  "&videoId=";
// +VIDEO_ID+"&maxResults=100";

export const YOUTUBE_CHANNEL_DP_API =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=";

export const SINGLE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const SUGGESTED_QUERIES_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SUGGESTED_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";

export const SUBSCRIBER_COUNT_API = 
"https://www.googleapis.com/youtube/v3/channels?part=statistics&id=";

