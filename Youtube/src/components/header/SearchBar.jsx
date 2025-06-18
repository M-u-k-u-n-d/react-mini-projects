import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../utils/redux/searchSlice";
import { changeContent } from "../../utils/redux/videoSlice";
import { API_KEY, SUGGESTED_QUERIES_API, SUGGESTED_VIDEOS_API } from "../../utils/constants";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const wrapperRef = useRef(null);
  const cachedResult = useSelector((state) => state.app2);
  const dispatch = useDispatch();


  // all useEffects used for suggestions 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedResult[query]) {
        setSuggestions(cachedResult[query]);
      } else if (query.trim() !== "") {
        fetchSuggestions();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(
        `${SUGGESTED_QUERIES_API}${query}`
      );
      const data = await response.json();
      setSuggestions(data[1]);
      dispatch(cacheResults({ [query]: data[1] }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const changeVideos = async () => {
    const data = await fetch(
      `${SUGGESTED_VIDEOS_API}${query}&type=video&key=${API_KEY}`
    );
    const searchedResultsVideos = await data.json();
    // console.log(searchedResultsVideos.items)
    dispatch(changeContent(searchedResultsVideos.items));
  };

  return (
    <div className="relative w-full max-w-xl sm:w-[70vw]" >
      <div className="flex items-center w-full relative" >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="w-full py-2 pl-4 pr-20 rounded-l-full bg-gray-200 text-sm sm:text-base border border-gray-400"
          ref={wrapperRef}
        />

        {query && (
          <XMarkIcon
            className="w-4 h-4 text-gray-500 absolute right-16 cursor-pointer"
            onClick={() => {
              setQuery([]);
              setSuggestions([]);
            }}
          />
        )}
        <Link to="/search-results">
          <div className="cursor-pointer rounded-r-full border border-black bg-gray-200 px-4 flex items-center h-[40px]">
            <MagnifyingGlassIcon
              onClick={changeVideos}
              className="w-5 h-5 text-gray-700"
            />
          </div>
        </Link>
      </div>

      {suggestions?.length > 0 && (
        <ul className="absolute bg-white rounded-md shadow-md w-full mt-2 z-[999] max-h-64 overflow-y-auto">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
              onClick={() => {
                setQuery(s);
                setSuggestions([]);
              }}
            >
              <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
