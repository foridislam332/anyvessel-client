import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import AboutAnyvessel from "../sections/AboutAnyvessel";
import BoatSell from "../sections/BoatSell";
import FeaturedBoats from "../sections/FeaturedBoats";
import MeetCrew from "../sections/MeetCrew";
import Reviews from "../sections/Reviews";

// bg  image
import BgImg from "../assets/images/boat-bg.png";
import RegisterBg from "../assets/images/register-bg.png";

const RegisterHome = () => {
  return (
    <>
      <Helmet>
        <title>Register | Anyvessel</title>
      </Helmet>

      {/* main */}
      <main>
        <section
          style={{ backgroundImage: `url(${RegisterBg})` }}
          className="bg-cover bg-center md:h-[915px] py-16 flex flex-col items-center justify-center relative"
        >
          <div className="container">
            {/* register title */}
            <div className="flex flex-col items-center justify-center text-darkBlue">
              <h1 className="text-[24px] font-semibold leading-[36px] mt-[30px]">
                Welcome to Anyvessel,
              </h1>
              <p className="text-[24px] leading-[36px] text-center">
                the World's largest online Boat & Crew network.
              </p>
            </div>

            {/* register main */}
            <div className="max-h-[550px] overflow-x-auto no-scrollbar rounded-lg">
              <Outlet />
            </div>
          </div>
        </section>
        <AboutAnyvessel />
        <FeaturedBoats />
        <section className="overflow-hidden">
          <img className="w-full" src={BgImg} alt="" />
        </section>
        <MeetCrew />
        <Reviews />
        <BoatSell />
      </main>
    </>
  );
};

export default RegisterHome;
