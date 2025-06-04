import React from 'react';
import VideoCard from './VideoCard';

const dummyVideos = [
  {
    thumbnail: 'https://i.ytimg.com/vi/xyz123/hqdefault.jpg',
    title: 'Learn React in 10 Minutes',
    channel: 'CodeWithMukund',
    views: '1.2M views',
    uploaded: '2 days ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/abc456/hqdefault.jpg',
    title: 'Tailwind CSS Crash Course',
    channel: 'DevSimplified',
    views: '580K views',
    uploaded: '1 week ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/xyz123/hqdefault.jpg',
    title: 'Learn React in 10 Minutes',
    channel: 'CodeWithMukund',
    views: '1.2M views',
    uploaded: '2 days ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/abc456/hqdefault.jpg',
    title: 'Tailwind CSS Crash Course',
    channel: 'DevSimplified',
    views: '580K views',
    uploaded: '1 week ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/xyz123/hqdefault.jpg',
    title: 'Learn React in 10 Minutes',
    channel: 'CodeWithMukund',
    views: '1.2M views',
    uploaded: '2 days ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/abc456/hqdefault.jpg',
    title: 'Tailwind CSS Crash Course',
    channel: 'DevSimplified',
    views: '580K views',
    uploaded: '1 week ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/xyz123/hqdefault.jpg',
    title: 'Learn React in 10 Minutes',
    channel: 'CodeWithMukund',
    views: '1.2M views',
    uploaded: '2 days ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/abc456/hqdefault.jpg',
    title: 'Tailwind CSS Crash Course',
    channel: 'DevSimplified',
    views: '580K views',
    uploaded: '1 week ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/xyz123/hqdefault.jpg',
    title: 'Learn React in 10 Minutes',
    channel: 'CodeWithMukund',
    views: '1.2M views',
    uploaded: '2 days ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/abc456/hqdefault.jpg',
    title: 'Tailwind CSS Crash Course',
    channel: 'DevSimplified',
    views: '580K views',
    uploaded: '1 week ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/xyz123/hqdefault.jpg',
    title: 'Learn React in 10 Minutes',
    channel: 'CodeWithMukund',
    views: '1.2M views',
    uploaded: '2 days ago',
  },
  {
    thumbnail: 'https://i.ytimg.com/vi/abc456/hqdefault.jpg',
    title: 'Tailwind CSS Crash Course',
    channel: 'DevSimplified',
    views: '580K views',
    uploaded: '1 week ago',
  },
  // Add more dummy video objects
];

const MainContainer = () => {
  return (
    <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml-8">
      {dummyVideos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default MainContainer;
