import React from 'react';
import { CiLocationOn } from 'react-icons/Ci';
// icons
import Area from '../assets/images/area.png';
import User from '../assets/images/user.png';
import Seat from '../assets/images/seat.png';
import { Link } from 'react-router-dom';
const BoatCards = ({ boat }) => {
    const { _id, name, image, location, des, area, people, seat, price } = boat;
    return (
        <>
            {/* single card */}
            <div className=' shadow-sm bg-white rounded-lg'>
                {/* img */}
                <div className=''>
                    <img className='' src={image} alt="" />
                </div>
                {/* details */}
                <div className='flex justify-around p-4'>
                    <h6 className='text-sm font-medium text-[#000000] '>{name}</h6>
                    <p className='text-[#13518E] text-xs font-normal flex items-center gap-1'> <span className='text-base'><CiLocationOn /></span>{location}</p>

                </div>
                <p className='text-justify p-4 text-[#486786] text-xs font-light'>{des}</p>
                <div className='text-center pb-4 '>
                    {/* boat bottom area */}
                    <div className="py-3">
                        <div className="px-8 flex items-center justify-center gap-10 md:gap-14 font-light">
                            <p className="flex items-center gap-3">
                                <img src={Area} alt="" />
                                {area} M
                            </p>
                            <p className="flex items-center gap-3">
                                <img src={User} alt="" />
                                {people} M
                            </p>
                            <p className="flex items-center gap-3">
                                <img src={Seat} alt="" />
                                {seat}
                            </p>
                        </div>

                        <div className="px-5 mt-6 flex items-center justify-between">
                            <Link to={`/boat_details/${_id}`}
                                className="font-sm py-[9px] px-4 md:px-14 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                            >Contact Buyer</Link>

                            <p className="text-xl  font-semibold">${price}</p>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default BoatCards;