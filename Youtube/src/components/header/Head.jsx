import React from 'react';
import Hamburger from './Hamburger';
import SearchBar from './SearchBar';
import Logo from './Logo';
import UserIcon from './UserIcon';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex flex-wrap justify-between items-center bg-gray-200 p-2 shadow-md">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <Hamburger />
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>

      {/* Center: Search */}
      <div className="w-full sm:w-auto flex justify-center sm:flex-grow">
        <SearchBar />
      </div>

      {/* Right: User Icon */}
      <div className="hidden sm:flex">
        <UserIcon />
      </div>
    </div>
  );
};

export default Head;
