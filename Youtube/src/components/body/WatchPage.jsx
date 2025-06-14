import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

import VideoCard from "./VideoCard";
import { YOUTUBE_COMMENTS_API, YOUTUBE_VIDEO_API } from "../../utils/constants";
import { updateVideo } from "../../utils/appSlice";
import CommentsList from "./CommentsList";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const video = useSelector((state) => state.app1.video);
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();
  const formatViews = (num) => {
    if (num >= 1_000_000_000)
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    else if (num >= 1_000_000)
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    else if (num >= 1_000)
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    else return num;
  };

  if (!video) return <div>Loading video...</div>;

  useEffect(() => {
    async function getComments() {
      const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
      const json = await data.json();
      console.log(await json);
    }
    getComments();
  }, []);

  useEffect(() => {
    async function getData() {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      const arr = json.items;
      arr.reverse();
      setVideos(arr);
    }
    getData();
  }, []);

  const channelName = video?.snippet?.channelTitle;
  const videoTitle = video?.snippet?.localized?.title;
  const likeCount = formatViews(video?.statistics?.likeCount);
  const subscriberCount = formatViews(video?.statistics?.viewCount * 5);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-[100vw]">
      {/* Left Half */}
      <div className="w-[75vw] p-4">
        {/* Video */}
        <div className="aspect-video mb-4">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">{videoTitle}</h2>

        {/* Channel Info */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://yt3.ggpht.com/pZQ5JMD4EOI8TcNYAPTzMexe_fC0CKnb_hYlV4rPfIzmDidF239fH1XKmzkeT30XSg7fxNwc_w=s88-c-k-c0x00ffffff-no-rj"
              alt="channel logo"
              className="rounded-full w-10 h-10"
            />
            <div>
              <p className="font-medium">{channelName}</p>
              <p className="text-sm text-gray-500">
                {subscriberCount} subscribers
              </p>
            </div>
          </div>
          <button className="bg-red-600 text-white px-4 py-1 rounded-full font-semibold">
            Subscribe
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 mb-6">
          <button className="flex items-center space-x-1 text-sm bg-gray-100 px-3 py-2 rounded-full">
            <HandThumbUpIcon className="w-5 h-5" />
            <span>{likeCount}</span>
          </button>
          <button className="flex items-center space-x-1 text-sm bg-gray-100 px-3 py-2 rounded-full">
            <HandThumbDownIcon className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-1 text-sm bg-gray-100 px-3 py-2 rounded-full">
            <ShareIcon className="w-5 h-5" />
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 text-sm bg-gray-100 px-3 py-2 rounded-full">
            <BookmarkIcon className="w-5 h-5" />
            <span>Save</span>
          </button>
          <button className="flex items-center space-x-1 text-sm bg-gray-100 px-3 py-2 rounded-full">
            <ArrowDownTrayIcon className="w-5 h-5" />
            <span>Download</span>
          </button>
        </div>

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

          {videos.map((video, index) => (
            <Link
              to={"/watch/?v=" + video.id}
              key={index}
              onClick={() => dispatch(updateVideo(video))}
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
