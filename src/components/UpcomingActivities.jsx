import UpcomingActivityCard from "./UpcomingActivityCard";

const UpcomingActivities = () => {
  return (
    <div className="w-[80%] mx-auto mt-16 font-notosans">
      <div className="gap-5 items-center">
        <div className="md:w-[40%]">
          <div>
            <h1 className="text-3xl md:text-5xl mb-2 md:mb-4 tracking-tight font-extrabold">
              Upcoming Activities
            </h1>
            <h3 className="md:text-xl tracking-tight font-roboto">
              What&apos;s happening next?
            </h3>
          </div>
        </div>

        <div className="mt-7">
          <UpcomingActivityCard />
        </div>

        <div className="mt-7 font-roboto">
          <a href="#" className="underline">
            See all upcoming activities
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcomingActivities;
