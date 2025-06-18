import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closedMenu, updateVideo } from '../../utils/redux/appSlice';
import { YOUTUBE_VIDEO_API } from '../../utils/constants';
import { changeContent } from '../../utils/redux/videoSlice';

const MainContainer = () => {
  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json?.items);
      dispatch(updateVideo(json?.items));
      dispatch(changeContent([]));
    }
    getData();
  }, []);

  // Close the menu globally when main area is clicked
  function handleGlobalClick() {
    dispatch(closedMenu());
  }

  return (
    <div
      className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml-8"
      onClick={handleGlobalClick}
    >
      {videos?.map((video, index) => (
        <Link
          to={"/watch/?v=" + video?.id}
          key={index}
        >
        <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
