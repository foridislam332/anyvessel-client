import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import BootCard from "../components/BootCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const FeaturedBoats = () => {
    const [boats, setBoats] = useState([]);
    useEffect(() => {
        fetch('/boats.json')
            .then(res => res.json())
            .then(data => setBoats(data))
    }, [])

    const breakpoints = {
        // small device
        640: {
            slidesPerView: 1,
        },
        // // md,lg device 
        768: {
            slidesPerView: 3,
        },
    };


    return (
        <section className="py-16 bg-[#F0F6FB]">
            <div className="container">
                <SectionTitle title='Featured Boats to work in' />

                {/* boat Cards   */}
                <div className='py-12'>
                    <Swiper

                        spaceBetween={30}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                        }}

                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}

                        loop={true}

                        modules={[Autoplay, Pagination, Navigation,]}
                        className="mySwiper"
                        breakpoints={breakpoints}
                    >

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12 px-20">
                            {boats.length > 0 ? (
                                boats.map((boat , index) => (
                                    
                                    <SwiperSlide key={index}>
                                        <BootCard boat={boat} />
                                    </SwiperSlide>
                                ))
                            ) : (
                                <h1>Loading ...</h1>
                            )}
                        </div>
                    </Swiper>
                </div>



                <div className="text-center">
                    <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">View more</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedBoats;