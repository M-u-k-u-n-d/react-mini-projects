import React from "react";
import { Link } from "react-router-dom";

const SearchPageCard = ({ content, videoId }) => {
  // console.log("SearchPageCard content => ")
  // console.log(content);
  
  const { snippet } = content;
  const { title, description, channelTitle, thumbnails } = snippet;

  return (
    <Link to={`/watch?v=${videoId}`} className="block">
      <div className="flex flex-col sm:flex-row w-full sm:w-[90vw] mx-auto my-4 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
        {/* Thumbnail */}
        <img
          className="w-full sm:w-[320px] h-auto object-cover"
          src={thumbnails?.high?.url || "https://via.placeholder.com/320x180"}
          alt={title}
        />

        {/* Video Info */}
        <div className="p-4 flex flex-col justify-start">
          <h2 className="text-lg sm:text-xl font-semibold mb-1 line-clamp-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-1">{channelTitle}</p>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchPageCard;
