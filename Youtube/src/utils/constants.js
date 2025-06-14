export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const YOUTUBE_VIDEO_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

export const YOUTUBE_COMMENTS_API =

"https://youtube.googleapis.com/youtube/v3/commentThreads?key="+API_KEY+"&videoId=";
// +VIDEO_ID+"&maxResults=100";