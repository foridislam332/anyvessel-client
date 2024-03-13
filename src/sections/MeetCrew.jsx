import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import MeetCrewCards from "../components/MeetCrewCards";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SectionTitle from "../components/SectionTitle";
import useAllCrew from "../hooks/useAllCrew";
import CrewSearchCard from "../components/CrewSearchCard";

const MeetCrew = () => {
  const [crewMembers, setCrewMembers] = useState([]);
  const { allCrewData } = useAllCrew();
  // console.log(allCrewData?.crews)
  useEffect(() => {
    fetch("/crewmember.json")
      .then((res) => res.json())
      .then((data) => setCrewMembers(data));
  }, []);

  const breakpoints = {
    // small device
    640: {
      slidesPerView: 1,
    },
    // md device
    768: {
      slidesPerView: 2,
    },
    // lg device
    1200: {
      slidesPerView: 3,
    },
  };

  return (
    // Meet Your Crew Section
    <section className="py-16 bg-[#F0F6FB]">
      <div className="container">
        {/* Section Title */}
        <SectionTitle title="Meet Your Crew" />
        {/* Crew Cards */}
        <div className="py-12">
          <Swiper
            spaceBetween={30}
            centeredSlides={false}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={breakpoints}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
              {/* Fixed Swiper Container */}
              <div className="swiper-container">
                {allCrewData?.crews.map((service, i) => (
                  <SwiperSlide key={i}>
                    <CrewSearchCard service={service} />
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
        </div>
        {/* View More Button  */}
        <div className="text-center">
          <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetCrew;
