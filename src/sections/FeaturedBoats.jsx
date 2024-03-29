import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../components/SectionTitle";

// Import Swiper styles
import { Link } from "react-router-dom";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import useAllBoatSailingPost from "../hooks/useAllBoatSailingPost";
import VesselCard from "../components/VesselCard";

const FeaturedBoats = () => {
    const { boatSellPost } = useAllBoatSailingPost();
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
        1150: {
            slidesPerView: 3,
        },
    };

    return (
        <section className="py-16 bg-[#F0F6FB]">
            <div className="container">
                <SectionTitle title="Featured Boats to work in" />

                {/* boat Cards   */}
                <div className="py-12">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                        breakpoints={breakpoints}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12 px-20">
                            {boatSellPost?.map((boat, index) => (
                                <SwiperSlide key={index}>
                                    <VesselCard boat={boat} />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>

                <Link to="/boat_sale">
                    <div className="text-center">
                        <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">
                            View more
                        </button>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default FeaturedBoats;
