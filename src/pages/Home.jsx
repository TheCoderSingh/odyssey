import FriendsUpdates from "../components/FriendsUpdates";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <FriendsUpdates />
    </div>
  );
};

export default Home;
