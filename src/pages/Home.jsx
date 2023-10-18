import { Helmet } from "react-helmet";
import HeroBanner from "../sections/HeroBanner";
import BoatSearch from "../sections/BoatSearch";
import AboutAnyvessel from "../sections/AboutAnyvessel";
import FeaturedBoats from "../sections/FeaturedBoats";

// image
import BgImg from "../assets/images/boat-bg.png";
import BoatSell from "../sections/BoatSell";
import MeetCrew from "../sections/MeetCrew";
import Reviews from "../sections/Reviews";
import useAuth from "../hooks/useAuth";
import useCurrentUser from "../hooks/useCurrentUser";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  const { user } = useAuth();
  const { currentUser } = useCurrentUser();
  console.log(currentUser);
  return (
    <>
      <Helmet>
        <title>Home | Anyvessel</title>
      </Helmet>

      {/* sections */}
      <HeroBanner />
      {currentUser && <Dashboard />}
      <BoatSearch />
      <AboutAnyvessel />
      <FeaturedBoats />
      <section className="overflow-hidden">
        <img className="w-full" src={BgImg} alt="" />
      </section>
      <MeetCrew />
      <Reviews />
      <BoatSell />
    </>
  );
};

export default Home;
