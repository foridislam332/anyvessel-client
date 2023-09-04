import React from 'react';
import img from './../assets/images/wave.png'
import { FaQuoteRight } from 'react-icons/fa';
import circlepng from './../assets/images/mancircle.png'

const Reviews = () => {
    return (
        <div className=' md:flex md:justify-between py-2 md:py-10'>
            <div className='hidden md:block '>
                <img src={img} alt="" />
            </div>
            <div className='text-center md:py-20'>
                {/* Div Title  */}
                <div className=' '>
                    <h3 className='text-lg md:text-3xl text-[#13518E] gap-5 pb-4 '>What they think about us</h3>
                    <div className='flex justify-center  '>
                        <FaQuoteRight />
                    </div>
                    <p className='text-sm font-light text-justify  md:text-center italic md:w-[550px] md:mx-32 mx-5 py-2'>I love the concept. I can call, video call or message on this platform any crew, boat owner or a service provider without having to use an other App or to share my personal phone number with anyone .
                    </p>
                    <div className='flex justify-center '>
                        <img className='w-28 h-28 rounded-full bg-[#D9D9D9]' src={circlepng} alt="" />
                    </div>
                    <h6 className='text-black text-sm font-medium pt-3 pb-1'>George Morris</h6>
                    <p className='text-sm font-light text-[#A0A0A0]'>Milwaukee.DC</p>
                </div>

            </div>
            <div className='hidden md:block'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Reviews;