import React from "react";
import { useSelector } from "react-redux";
import SearchPageCard from "./SearchPageCard";
import { Link } from "react-router-dom";

const SearchResultsPage = () => {
  const content = useSelector((store) => store.app3.contents);
  // console.log("content => ",content[0])
  return (  
      <div className="mt-10 w-[100vw] flex flex-col items-center">
      {content[0]?.map((content) => (
        <SearchPageCard
          key={content?.id?.videoId}
          videoId={content?.id?.videoId}
          content={content}
        />
      ))}
    </div>
  );
};

export default SearchResultsPage;
