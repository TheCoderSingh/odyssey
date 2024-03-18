import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div>
      <div className="relative w-[80%] md:w-[70%] lg:w-[40%] mt-8 mx-auto">
        <form>
          <input
            placeholder="Search"
            className="w-full h-10 border-b-2 border-gray-300 focus:outline-none"
          />
          <div className="absolute top-0 right-2 pt-2">
            <IoSearchSharp size={20} color="rgb(209 213 219)" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
