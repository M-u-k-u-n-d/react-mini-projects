import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HandThumbUpIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import {
  API_KEY,
  SINGLE_VIDEO_API,
  SUBSCRIBER_COUNT_API,
  YOUTUBE_CHANNEL_DP_API,
} from "../../utils/constants";
import { updateVideo } from "../../utils/redux/appSlice";
import CommentsList from "./CommentsList";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [singleVideo, setSingleVideo] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [dpUrl, setDpUrl] = useState(null);
  const dispatch = useDispatch();
  const content = useSelector((store) => store.app3.contents);
  const mainContent = useSelector((store) => store.app1.video);
  const [allVideo, setAllVideo] = useState(null);
  const [channelName, setChannelName] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [likeCount, setLikeCount] = useState(null);


  const formatViews = (num) => {
    if (num >= 1_000_000_000)
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    else if (num >= 1_000_000)
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    else if (num >= 1_000)
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    else return num;
  };

  const singleVideoURL = SINGLE_VIDEO_API + videoId + "&key=" + API_KEY;

  useEffect(() => {
    async function getData() {
      const data = await fetch(singleVideoURL);
      const json = await data.json();
      const arr = json.items;
      setSingleVideo(arr[0]);
      if(content[0].length > 0){
        setAllVideo(content[0]);
      }
    }
    getData();
  }, [videoId]);


 // fetching channel dp 
  useEffect(() => {
    async function getData() {
      const channelId = singleVideo?.snippet?.channelId;

      if (!channelId) {
        console.warn("No channelId found in singleVideo");
        return;
      }

      try {
        const response = await fetch(
          `${YOUTUBE_CHANNEL_DP_API}${channelId}&key=${API_KEY}`
        );
        const json = await response.json();

        if (json?.items?.length > 0) {
          const thumbnailUrl = json.items[0]?.snippet?.thumbnails?.high?.url;
          setDpUrl(thumbnailUrl);
        } else {
          console.warn("No channel found for given channelId");
          setDpUrl(""); // or fallback image
        }
      } catch (error) {
        console.error("Error fetching channel data:", error);
        setDpUrl(""); // or fallback image
      }
    }

    getData();
  }, [singleVideo,videoId]);

  useEffect(() => {
    async function getData() {
      const channelId = singleVideo?.snippet?.channelId;
      const url = SUBSCRIBER_COUNT_API + channelId + "&key=" + API_KEY;
      const data = await fetch(url);
      const json = await data.json();
      // Extract subscriber count
      const count = json?.items?.[0]?.statistics?.subscriberCount;
      setSubscriberCount(formatViews(count));
      setChannelName(singleVideo?.snippet?.channelTitle);
      setLikeCount(formatViews(singleVideo?.statistics?.likeCount));
      setVideoTitle(singleVideo?.snippet?.localized?.title);
    }
    if (singleVideo) getData();
  }, [singleVideo,videoId]);

  
  
  if (!singleVideo) return <div>Loading video...</div>;
  console.log("all videos");
  
  console.log(allVideo?.length);
  
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-[100vw]">
      {/* Left Half */}
      <div className="w-[75vw] p-4">
        {/* Video */}
        <div className="aspect-video mb-4">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{videoTitle}</h2>

        {/* Channel Info */}
        <div className="flex justify-between items-center flex-wrap mb-4 gap-2">
          <div className="flex items-center space-x-3">
            <img
              src={dpUrl}
              alt="channel logo"
              className="rounded-full w-10 h-10"
            />
            <div>
              <p className="font-medium">{channelName}</p>
              <p className="text-sm text-gray-500">
                {subscriberCount} subscribers
              </p>
            </div>
            <button className="bg-red-600 text-white px-4 py-1 rounded-full font-semibold">
              Subscribe
            </button>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center space-x-1 text-sm bg-gray-100 px-3 py-2 rounded-full">
              <HandThumbUpIcon className="w-5 h-5" />
              <span>{likeCount}</span>
            </button>

            <button className="flex items-center space-x-1 text-sm bg-gray-100 px-3 py-2 rounded-full">
              <ShareIcon className="w-5 h-5" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-1 text-sm bg-gray-100 px-3 py-2 rounded-full">
              <BookmarkIcon className="w-5 h-5" />
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Action Buttons
        <div className="flex items-center space-x-4 mb-6">
          
        </div> */}

        {/* Comments Section */}
        <div className="mt-6">
          <CommentsList videoId={videoId} />
        </div>
      </div>

      {/* Right Half */}
      <div className="w-[35vw] p-4 ">
        {/* Add suggested videos here */}
        <div className="p-4 bg-white overflow-y-auto min-h-screen">
          <h3 className="text-lg font-semibold mb-4">Suggested Videos</h3>

          {allVideo && allVideo?.map((video, index) => (
            <Link
              to={"/watch/?v=" + video?.id?.videoId}
              key={index}
              // onClick={() =>{
              //   setAllVideo(allVideo.filter((num)=>num?.id?.videoId != video?.id?.videoId));
              //   //  dispatch(updateVideo(allVideo))
              // }}
            >
              <div className="mb-4">
                <VideoCard video={video} />
              </div>
            </Link>
          ))}
          {!allVideo && mainContent?.map((video, index) => (
            <Link
              to={"/watch/?v=" + video?.id}
              key={index}
              // onClick={() =>{
              //   setAllVideo(allVideo.filter((num)=>num?.id != video?.id));
              //   //  dispatch(updateVideo(allVideo))
              // }}
            >
              <div className="mb-4">
                <VideoCard video={video} />
              </div>
            </Link>
          ))}
         
          
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
