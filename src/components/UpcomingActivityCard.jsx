import { FaCheckCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const UpcomingActivityCard = () => {
  return (
    <div className="flex border font-roboto">
      <div className="border-r bg-primary text-white">
        <h1 className="uppercase flex flex-col text-center py-7 md:py-3 px-7">
          <div>
            <span className="text-4xl md:text-6xl">07</span>
          </div>
          <div>
            <span className="text-2xl md:text-4xl tracking-tighter">Apr</span>
          </div>
        </h1>
      </div>
      <div className="p-3 flex flex-col justify-between">
        <h3 className="font-notosans text-lg md:text-xl font-bold text-gray-700">
          Cello Lessons with Instructor Hogsworth
        </h3>

        <div className="flex mb-auto text-secondary items-center">
          <div>
            <IoLocationSharp />
          </div>
          <div className="text-sm md:text-md">Granville Island</div>
        </div>

        <div className="text-sm flex items-center gap-1">
          <div>
            <FaCheckCircle color="green" size={15} />
          </div>
          <div className="underline">You are going</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingActivityCard;
