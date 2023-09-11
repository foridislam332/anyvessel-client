import { HiOutlineLocationMarker } from 'react-icons/hi';
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
            <div className='shadow-sm bg-white rounded-lg overflow-hidden'>
                {/* img */}
                <div className='h-[316px] overflow-auto'>
                    <img className='w-full h-full object-cover object-center' src={image} alt="" />
                </div>
                {/* details */}
                <div className='flex justify-between p-4'>
                    <h6 className='text-xl font-medium'>{name}</h6>
                    <p className='text-darkBlue flex items-center gap-3'> <span className='text-base'><HiOutlineLocationMarker /></span>{location}</p>

                </div>
                <p className='p-4 text-lightBlue text-sm font-light'>{des}</p>
                <div className='text-center border-t border-blue'>
                    {/* boat bottom area */}
                    <div className="py-3">
                        <div className="lg:px-8 flex items-center justify-center gap-10 md:gap-14 font-light">
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

                        <div className="px-5 mt-10 mb-2 flex items-center justify-between">
                            <Link to={`/boat_details/${_id}`}
                                className="font-sm py-[9px] px-14 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                            >Contact Buyer</Link>

                            <p className="text-xl font-semibold">${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoatCards;