import { UserIcon as HeroUserIcon } from "@heroicons/react/24/solid";

const UserIcon = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
      <HeroUserIcon className="w-6 h-6 text-gray-600" />
    </div>
  );
};

export default UserIcon;
