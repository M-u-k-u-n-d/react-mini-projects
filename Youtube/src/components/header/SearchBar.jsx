import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (

      <div className="flex">
        <input
          type="text"
          placeholder="Search or type URL"
          className="w-[30vw] py-3 px-4 rounded-full bg-gray-300"
        />
        <MagnifyingGlassIcon className="w-5 text-gray-500 relative right-12" />
      </div>
    
  );
};

export default SearchBar;
