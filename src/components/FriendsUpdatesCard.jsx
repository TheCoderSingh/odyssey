import { FaHeart } from "react-icons/fa";

const FriendsUpdatesCard = () => {
  return (
    <div className="flex border border-l-4 border-l-primary p-2 gap-3 rounded">
      <div>
        <img src="https://placehold.co/50x50" className="rounded-full" />
      </div>
      <div>
        <p className="text-sm">
          <span className="font-bold">John Smith</span>{" "}
          <br className="md:hidden" />
          <span className="font-bold text-secondary">Biking</span> with friends
          to <span className="font-bold text-primary">Groundhog Café</span>.
        </p>
        <div className="flex items-center gap-1 mt-2">
          <FaHeart color="rgb(156 163 175)" size={20} />
          <span className="text-xs text-primary">
            67 people loved this
            <time className="md:hidden text-xs text-gray-400">
              {" "}
              | Yesterday, 8:43 AM
            </time>
          </span>
        </div>
      </div>
      <div className="ml-auto">
        <time className="hidden md:block text-xs text-gray-400">
          Yesterday, 8:43 AM
        </time>
      </div>
    </div>
  );
};

export default FriendsUpdatesCard;
