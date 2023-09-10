import React, { useEffect, useState } from 'react';
import BootCard from '../components/BootCard';

import { Swiper, SwiperSlide } from 'swiper/react';

import BoatCards from '../components/BoatCards';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SectionTitle from '../components/SectionTitle';

const BoatSell = () => {

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
        <section className="bg-[#F0F6FB]">
            <div className='py-6'>
                {/* Section Title */}
                <SectionTitle title='Boat For Sale' />

                {/* boat Cards   */}
                <div className='mx-5 md:mx-[530px]  py-16' >
                    <Swiper

                        spaceBetween={50}
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
                        <div className='grid grid-cols-2  gap-4 py-5'>
                            {/* Fixed Swiper Container */}
                            <div className='swiper-container fixed top-0 right-0 bottom-0 left-0'>
                                {boats.map((boat) => (
                                    <SwiperSlide key={boat._id} >
                                        <BoatCards boat={boat} />

                                    </SwiperSlide>
                                ))}

                            </div>
                        </div>
                    </Swiper>
                </div>



            </div>
        </section>
    );
};

export default BoatSell;