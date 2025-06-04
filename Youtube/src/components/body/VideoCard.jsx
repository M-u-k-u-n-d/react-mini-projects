import React from 'react';

const VideoCard = ({ video }) => {
  const { thumbnail, title, channel, views, uploaded } = video;

  return (
    <div className="w-72 md:w-60 lg:w-64">
      <img
        src={thumbnail}
        alt="Video Thumbnail"
        className="rounded-lg w-full h-40 object-cover"
      />
      <div className="mt-2">
        <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600">{channel}</p>
        <p className="text-xs text-gray-500">{views} • {uploaded}</p>
      </div>
    </div>
  );
};

export default VideoCard;
