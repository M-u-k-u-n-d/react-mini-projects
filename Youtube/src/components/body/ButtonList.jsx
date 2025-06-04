import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const buttonNames = [
  'All', 'Music', 'Live', 'Gaming', 'News', 'Sports', 'Movies',
  'Fashion', 'Learning', 'Cricket', 'Podcasts', 'Tech', 'React',
];

const ButtonList = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white relative shadow-sm">
      {/* Left Arrow Button */}
      <button
        onClick={scrollLeft}
        className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200"
      >
        <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
      </button>

      {/* Scrollable Button List */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {buttonNames.map((name, index) => (
          <button
            key={index}
            className="px-4 py-1 flex-shrink-0 rounded-lg bg-gray-200 hover:bg-gray-300 whitespace-nowrap"
          >
            {name}
          </button>
        ))}
      </div>

      {/* Right Arrow Button */}
      <button
        onClick={scrollRight}
        className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200"
      >
        <ChevronRightIcon className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};

export default ButtonList;
