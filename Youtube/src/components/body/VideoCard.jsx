import React from "react";

const VideoCard = ({ video }) => {
  const thumbnail = video?.snippet?.thumbnails?.high?.url;
  const title = video?.snippet?.title;
  const channel = video?.snippet?.channelTitle;

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diff = Math.floor((now - past) / 1000); // in seconds

    const units = [
      { name: "year", seconds: 31536000 },
      { name: "month", seconds: 2592000 },
      { name: "week", seconds: 604800 },
      { name: "day", seconds: 86400 },
      { name: "hour", seconds: 3600 },
      { name: "minute", seconds: 60 },
      { name: "second", seconds: 1 },
    ];

    for (const unit of units) {
      const interval = Math.floor(diff / unit.seconds);
      if (interval >= 1) {
        return `${interval} ${unit.name}${interval > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  };

  const uploaded = getTimeAgo(video?.snippet?.publishedAt);

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
  const views = formatViews(video?.statistics?.viewCount);

  return (
    <div className="w-72 md:w-60 lg:w-64 hover:bg-gray-300 p-2 rounded-md">
      <img
        src={thumbnail}
        alt="Video Thumbnail"
        className="rounded-lg w-full h-40 object-cover cursor-pointer"
      />
      <div className="mt-2">
        <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600">{channel}</p>
        <p className="text-xs text-gray-500">
          {views} views • {uploaded}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
