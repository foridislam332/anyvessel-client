import { Helmet } from "react-helmet";

// internal files
import AboutAnyvessel from "../sections/AboutAnyvessel";
import BoatSearch from "../sections/BoatSearch";
import FeaturedBoats from "../sections/FeaturedBoats";
import HeroBanner from "../sections/HeroBanner";

// image
import BgImg from "../assets/images/boat-bg.png";
import BoatSell from "../sections/BoatSell";
import MeetCrew from "../sections/MeetCrew";
import Reviews from "../sections/Reviews";
import useCurrentUser from "../hooks/useCurrentUser";
import ProfileMain from "../sections/BoatProfile/ProfileMain";

const Home = () => {
    const { currentUser } = useCurrentUser();
    console.log(currentUser)
    return (
        <>
            <Helmet>
                <title>Home | Anyvessel</title>
            </Helmet>

            {/* sections */}

            {/* <HeroBanner /> */}
            <div className="">
                {currentUser ? <ProfileMain /> : <HeroBanner />}
            </div>
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
