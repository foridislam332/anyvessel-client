import React from 'react';

import { CiLocationOn, CiRollingSuitcase } from 'react-icons/Ci';
const MeetCrewCards = ({ crewmember }) => {

    console.log(crewmember)
    return (
        <>
            {/* single card */}
            <div className=' shadow-sm bg-white rounded-lg'>
                {/* img */}
                <div className=''>
                    <img className='' src={crewmember.img} alt="" />
                </div>
                {/* details */}
                <div className='flex justify-between p-4'>
                    <h6 className='text-sm font-medium text-[#000000] '>{crewmember.name}</h6>
                    <p className='text-[#13518E]  flex items-center gap-1 text-xs font-normal'> <span className='text-base'><CiRollingSuitcase /></span>  {crewmember.experience}</p>
                    <p className='text-[#13518E] text-xs font-normal flex items-center gap-1'> <span className='text-base'><CiLocationOn /></span>{crewmember.country}</p>

                </div>
                <p className='text-justify p-4 text-[#486786] text-xs font-light'>{crewmember.description}</p>
                <div className='text-center pb-4 '>

                    <button className=' bg-[#FFC700] text-[#15150D] text-xs font-normal  py-2 px-6 rounded-[50px]'>Contact</button>
                </div>
            </div>
        </>
    );
};

export default MeetCrewCards;