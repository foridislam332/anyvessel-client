import React from 'react';
import img from './../assets/images/wave.png'
import { FaQuoteRight } from 'react-icons/fa';
import circlepng from './../assets/images/mancircle.png'
import SectionTitle from '../components/SectionTitle';

const Reviews = () => {
    return (
        <div className=' md:flex md:justify-between py-2 md:py-10'>
            <div className='hidden md:block '>
                <img src={img} alt="" />
            </div>
            <div className='text-center md:py-20'>
                {/* Div Title  */}
                <div className=' '>
                    {/* Section Title */}
                    <SectionTitle title='What they think about us' />

                    <div className='flex justify-center mt-4 mb-3 text-blue'>
                        <FaQuoteRight />
                    </div>
                    <p className='text-xl font-light leading-[38px] md:text-center italic md:w-[770px] md:mx-32 mx-5 py-2'>I love the concept. I can call, video call or message on this platform any crew, boat owner or a service provider without having to use an other App or to share my personal phone number with anyone .
                    </p>

                    <div className='h-[108px] w-[108px] mx-auto rounded-full overflow-hidden mt-4'>
                        <img className='w-full h-full object-cover object-center' src={circlepng} alt="" />
                    </div>

                    <h6 className='text-black text-[17px] font-medium pt-3'>George Morris</h6>
                    <p className='text-lg font-light text-[#A0A0A0]'>Milwaukee.DC</p>
                </div>

            </div>
            <div className='hidden md:block'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Reviews;