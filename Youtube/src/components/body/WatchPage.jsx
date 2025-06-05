import React from "react";
import { useSearchParams } from "react-router-dom";
import { HandThumbUpIcon, HandThumbDownIcon, ShareIcon, ArrowDownTrayIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const video = useSelector((state) => state.app1.video);

  const formatViews = (num) => {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num;
    }
  };


  if (!video) return <div>Loading video...</div>;

  const channelName = video?.snippet?.channelTitle;
  const videoTitle = video?.snippet?.localized?.title;
  const likeCount = formatViews(video?.statistics?.likeCount);
  const subscriberCount = formatViews(video?.statistics?.viewCount * 5); 
  console.log(video)

  return (
    <div className="p-4 flex flex-col lg:flex-row">
      {/* Left Column - Video Player and Info */}
      <div className="flex-1">
        {/* YouTube Video Player */}
        <div className="w-full aspect-video mb-4">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Title */}
        <h2 className="text-xl font-semibold mb-2">{videoTitle}</h2>

        {/* Channel Info + Subscribe */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <img src="https://yt3.ggpht.com/pZQ5JMD4EOI8TcNYAPTzMexe_fC0CKnb_hYlV4rPfIzmDidF239fH1XKmzkeT30XSg7fxNwc_w=s88-c-k-c0x00ffffff-no-rj" alt="channel logo" className="rounded-full w-10 h-10" />
            <div>
              <p className="font-medium">{channelName}</p>
              <p className="text-sm text-gray-500">{subscriberCount} subscribers</p>
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

        {/* Comment Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Comments</h3>
          <div className="mb-4">
            <input
              className="w-full border p-2 rounded"
              placeholder="Add a public comment..."
            />
          </div>

          {/* Example Comment */}
          <div className="flex items-start space-x-3 mb-4">
            <img src="https://via.placeholder.com/32" className="rounded-full w-8 h-8" />
            <div>
              <p className="font-medium">User123</p>
              <p>Awesome video! Really helpful 🙌</p>
            </div>
          </div>

          {/* More comments can be listed here */}
        </div>
      </div>

      {/* Right Column - (Optional) Suggested Videos */}
      <div className="lg:w-[30%] mt-8 lg:mt-0 lg:ml-6">
        {/* You can render suggested videos here */}
      </div>
    </div>
  );
};

export default WatchPage;
