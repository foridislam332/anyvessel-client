import { HiOutlineLocationMarker } from 'react-icons/hi';
// icons
import Area from '../assets/images/area.png';
import User from '../assets/images/user.png';
import Seat from '../assets/images/seat.png';
import { Link } from 'react-router-dom';
import { FaMinus } from 'react-icons/fa6';
import { useState } from 'react';
const BoatCards = ({ boat }) => {
    const { _id, vessel, contact, location } = boat;
    const [modal, setModal] = useState(false);
    return (
        <>
            {/* single card */}
            <div className='shadow-sm bg-white rounded-lg overflow-hidden'>
                {/* img */}
                <div className='h-[316px] overflow-auto'>
                    <img className='w-full h-full object-cover object-center' src={vessel.vesselImage} alt="" />
                </div>
                {/* details */}
                <div className='flex justify-between p-4'>
                    <h6 className='text-xl font-medium'>{vessel.manufacturer}</h6>
                    <p className='text-darkBlue flex items-center gap-3'> <span className='text-base'><HiOutlineLocationMarker /></span>{location.boarding_city}</p>

                </div>
                <p className='p-4 text-lightBlue text-sm font-light'>
                    {vessel.vessel_description}

                </p>
                <div className='text-center border-t border-blue'>
                    {/* boat bottom area */}
                    <div className="py-3">
                        <div className="lg:px-8 flex items-center justify-center gap-10 md:gap-14 font-light">
                            <p className="flex items-center gap-3">
                                <img src={vessel.vessel_length} alt="" />
                                {/* {area} M */}
                            </p>
                            <p className="flex items-center gap-3">
                                <img src={User} alt="" />
                                {/* {people} M */}
                            </p>
                            <p className="flex items-center gap-3">
                                <img src={Seat} alt="" />
                                {vessel.number_crew}
                            </p>
                        </div>

                        <div className="px-5 mt-10 mb-2 flex items-center justify-between">
                            <div>
                                <div >
                                    <div className="text-center">
                                        <button onClick={() => { setModal(true) }} className="font-sm py-2 px-3 bg-yellow rounded-l-full border-l-2 border-white hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300">Contact Owner</button>

                                        <Link to={`/boat_details/${_id}`}
                                            className="font-sm py-2 px-8 bg-yellow rounded-r-full border-l-2 border-white hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                                        >See Details</Link>
                                    </div>

                                    {/* {
                                        modal &&


                                        <div className="absolute top-32 left-1/4 right-1/4 w-2/4 text-center  text-white h-[70vh]  overflow-x-auto bg-black bg-opacity-75 rounded-md ">
                                            <button
                                                onClick={() => { setModal(false) }}
                                                className="absolute top-4 right-6 bg-error p-3 rounded-full">
                                                <FaMinus />
                                            </button>
                                            <div className="mt-16 px-8">
                                                <p>
                                                    Phone : {contact.seller_Number}
                                                </p>
                                                <p> Phone : {contact.sellerEmail}</p>
                                                <p>  Phone : {contact.seller_skype}</p>
                                            </div>

                                        </div>
                                    } */}
                                </div>

                            </div>

                            <p className="text-xl font-semibold">${vessel.vessel_price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoatCards;