import { Helmet } from "react-helmet";
import HeroBanner from "../sections/HeroBanner";
import BoatSearch from "../sections/BoatSearch";
import AboutAnyvessel from "../sections/AboutAnyvessel";
import FeaturedBoats from "../sections/FeaturedBoats";

// image
import BgImg from '../assets/images/boat-bg.png';

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
        </>
    );
};

export default Home;