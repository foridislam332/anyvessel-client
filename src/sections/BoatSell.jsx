import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import BoatCards from '../components/BoatCards';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SectionTitle from '../components/SectionTitle';
import useAllBoatSailingPost from '../hooks/useAllBoatSailingPost';

const BoatSell = () => {
    const { boatSellPost } = useAllBoatSailingPost();
 
    console.log( boatSellPost)
    const [boats, setBoats] = useState([]);
    useEffect(() => {
        fetch('/boats.json')
            .then(res => res.json())
            .then(data => setBoats(data))
    }, [])


    return (
        <section className="bg-[#F0F6FB] py-28">
            <div className='container'>
                {/* Section Title */}
                <SectionTitle title='Boat For Sale' />

                {/* boat Cards   */}
                <div className='py-12' >

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {boatSellPost?.map((boat, index) => (
                            <BoatCards key={index} boat={boat} />
                        ))}

                    </div>
                </div>



            </div>
        </section>
    );
};

export default BoatSell;