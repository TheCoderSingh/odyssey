import FriendsUpdates from "../components/FriendsUpdates";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import UpcomingActivities from "../components/UpcomingActivities";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <UpcomingActivities />
      <FriendsUpdates />
    </div>
  );
};

export default Home;
