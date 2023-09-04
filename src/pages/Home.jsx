import { Helmet } from "react-helmet";
import HeroBanner from "../sections/HeroBanner";
import BoatSearch from "../sections/BoatSearch";
import AboutAnyvessel from "../sections/AboutAnyvessel";
import FeaturedBoats from "../sections/FeaturedBoats";

import BgImg from '../assets/images/boat-bg.png';
import MeetCrew from "../sections/MeetCrew";
import Reviews from "../sections/Reviews";
const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Anyvessel</title>
            </Helmet>

            {/* sections */}
            <HeroBanner />
            <BoatSearch />
            <AboutAnyvessel />
            <FeaturedBoats />
            <section className="overflow-hidden">
                <img className="w-full" src={BgImg} alt="" />
            </section>
            <MeetCrew />
            <Reviews />
        </>
    );
};

export default Home;