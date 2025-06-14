import React from "react";
import { useSelector } from "react-redux";
import SearchPageCard from "./SearchPageCard";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const content = useSelector((store) => store.app3.contents);
//   console.log(content)
  return (
      <div className="mt-10 w-[100vw] flex flex-col items-center">
      {content[0]?.map((content) => (
        // console.log(content.id)
        <SearchPageCard
          key={content?.id?.videoId}
          videoId={content?.id?.videoId}
          content={content}
        />
        
      ))}
    </div>
  );
};

export default SearchPage;
