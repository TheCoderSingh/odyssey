const FriendsUpdates = () => {
  return (
    <div className="w-[80%] mx-auto mt-16">
      <div className="flex gap-5 items-center">
        <div className="w-[40%]">
          <div>
            <h1 className="text-5xl mb-4 tracking-tight font-extrabold">
              Welcome, Jaskaran!
            </h1>
            <h3 className="text-xl tracking-tight font-roboto">
              See what your mates are doing.
            </h3>
          </div>
        </div>
        <div className="w-[60%] font-roboto pl-5">
          <div>
            <div className="mt-10 pb-2 flex items-center gap-2">
              <div className="border">
                <img src="https://placehold.co/50x50" />
              </div>
              <div className="border-b-2 border-primary w-full">
                <h2 className="text-lg tracking-tight font-bold">John Smith</h2>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-gray-50 p-2 flex justify-between items-center my-2 text-sm">
                <div>Hiking with my dog in the mountains.</div>
                <div className="text-gray-700 text-xs">
                  Yesterday, at 4:37 PM
                </div>
              </div>
              <div className="bg-gray-50 p-2 flex justify-between items-center my-2 text-sm">
                <div>Biking with friends to a new coffee shop.</div>
                <div className="text-gray-700 text-xs">
                  Yesterday, at 4:37 PM
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-10 pb-2 flex items-center gap-2">
              <div>
                <img src="https://placehold.co/50x50" />
              </div>
              <div className="border-b-2 border-primary w-full">
                <h2 className="text-lg tracking-tight font-bold">
                  Ashley Johnson
                </h2>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-gray-50 p-2 flex justify-between items-center my-2 text-sm">
                <div>Biking with friends to a new coffee shop.</div>
                <div className="text-gray-700 text-xs">
                  Yesterday, at 4:37 PM
                </div>
              </div>
              <div className="bg-gray-50 p-2 flex justify-between items-center my-2 text-sm">
                <div>Hiking with my dog in the mountains.</div>
                <div className="text-gray-700 text-xs">
                  Yesterday, at 4:37 PM
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <a href="#" className="underline">
              See all updates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsUpdates;
