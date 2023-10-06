import React from 'react';

import { CiRollingSuitcase } from 'react-icons/Ci';
import { HiOutlineLocationMarker } from 'react-icons/hi';
const MeetCrewCards = ({ crewmember }) => {

    // console.log(crewmember)
    return (
        <>
            {/* single card */}
            <div className='bg-white rounded-[10px] hover:shadow-3xl duration-300'>
                {/* img */}
                <div className='rounded-t-[10px] overflow-hidden'>
                    <img className="w-full object-cover object-center" src={crewmember.img} alt="" />
                </div>
                {/* details */}
                <div className='flex justify-between p-4'>
                    <h1 className='text-base lg:text-lg xl:text-xl font-medium'>{crewmember.name}</h1>
                    <p className='text-darkBlue flex items-center gap-1'> <span className='text-base'><CiRollingSuitcase /></span>  {crewmember.experience}</p>
                    <p className='text-darkBlue flex items-center gap-1'> <span className='text-base'><HiOutlineLocationMarker /></span>{crewmember.country}</p>

                </div>
                <p className='px-4 text-lightBlue text-sm font-light line-clamp-3'>{crewmember.description}</p>

                <div className='text-center py-5'>

                    <button className="font-sm py-[9px] px-14 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300">Contact</button>
                </div>
            </div>
        </>
    );
};

export default MeetCrewCards;