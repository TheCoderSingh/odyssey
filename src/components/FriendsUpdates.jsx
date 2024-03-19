import FriendsUpdatesCard from "./FriendsUpdatesCard";

const FriendsUpdates = () => {
  return (
    <div className="w-[80%] mx-auto mt-16 font-notosans">
      <div className="gap-5 items-center">
        <div className="md:w-[40%]">
          <div>
            <h1 className="text-3xl md:text-5xl mb-2 md:mb-4 tracking-tight font-extrabold">
              Welcome, Jaskaran!
            </h1>
            <h3 className="md:text-xl tracking-tight font-roboto">
              See what your mates are doing.
            </h3>
          </div>
        </div>

        <div className="mt-7">
          <FriendsUpdatesCard />
          <FriendsUpdatesCard />
        </div>
      </div>
    </div>
  );
};

export default FriendsUpdates;
