import {
  HomeIcon,
  ClockIcon,
  FilmIcon,
  BookOpenIcon,
  HeartIcon,
  RectangleStackIcon,
  PlayIcon,
  UserIcon,
  Squares2X2Icon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import {useDispatch} from "react-redux";
import {toggleMenu} from '../../utils/appSlice';
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", icon: <HomeIcon className="w-5 h-5" /> },
  { name: "Shorts", icon: <FilmIcon className="w-5 h-5" /> },
  { name: "Subscriptions", icon: <Squares2X2Icon className="w-5 h-5" /> },
  { name: "You", icon: <UserIcon className="w-5 h-5" /> },
  { name: "History", icon: <ClockIcon className="w-5 h-5" /> },
  { name: "Playlists", icon: <RectangleStackIcon className="w-5 h-5" /> },
  { name: "Your videos", icon: <VideoCameraIcon className="w-5 h-5" /> },
  { name: "Your courses", icon: <BookOpenIcon className="w-5 h-5" /> },
  { name: "Watch later", icon: <PlayIcon className="w-5 h-5" /> },
  { name: "Liked videos", icon: <HeartIcon className="w-5 h-5" /> },
];

const Sidebar = () => {
  const dispatch = useDispatch();
  function toggleMenuHandler(){
    dispatch(toggleMenu());
  }


  return (
    <div className="relative z-10 w-60 h-screen bg-white border-r p-4 space-y-2">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-sm text-gray-800"
          onClick={toggleMenuHandler}
        >
          {item.icon}
          {item.name == "Home" && <Link to={'/'} ><span>{item.name}</span></Link>}
          {item.name != "Home" && <span>{item.name}</span>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
