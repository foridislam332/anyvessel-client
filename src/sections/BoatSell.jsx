import React, { useEffect, useState } from 'react';
import BootCard from '../components/BootCard';

import { Swiper, SwiperSlide } from 'swiper/react';

import BoatCards from '../components/BoatCards';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SectionTitle from '../components/SectionTitle';
import useAllBoatSailingPost from '../hooks/useAllBoatSailingPost';

const BoatSell = () => {
    const { boatSellPost } = useAllBoatSailingPost()
    console.log(boatSellPost)
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
            slidesPerView: 2,
        },
    };


    return (
        <section className="bg-[#F0F6FB] py-28">
            <div className='container'>
                {/* Section Title */}
                <SectionTitle title='Boat For Sale' />

                {/* boat Cards   */}
                <div className='py-12' >
                    <Swiper

                        spaceBetween={40}
                        centeredSlides={false}
                        pagination={{
                            clickable: true,
                        }}

                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}

                        modules={[Autoplay, Pagination, Navigation,]}
                        className="mySwiper"
                        breakpoints={breakpoints}
                    >
                        <div className='swiper-container fixed top-0 right-0 bottom-0 left-0'>
                            {boats.map((boat) => (
                                <SwiperSlide key={boat._id} >
                                    <BoatCards boat={boat} />

                                </SwiperSlide>
                            ))}

                        </div>
                    </Swiper>
                </div>



            </div>
        </section>
    );
};

export default BoatSell;