import { Link } from "react-router-dom";

// react icons
import { HiOutlineLocationMarker } from 'react-icons/hi';

// icons
import Area from '../assets/images/area.png';
import User from '../assets/images/user.png';
import Seat from '../assets/images/seat.png';

const BootCard = ({ boat }) => {
    const { _id, name, image, location, des, area, people, seat, price } = boat;
    return (
        <div className="bg-white rounded-[10px] hover:shadow-3xl duration-300">
            {/* boat image */}
            <div className="rounded-t-[10px] overflow-hidden">
                <img
                    className="w-full object-cover object-center"
                    src={image} alt={name} />
            </div>

            {/* boat details */}
            <div className="border-b border-midBlue px-3 pb-4">
                <div className="flex items-center justify-between py-4">
                    <h1 className="text-xl font-medium">{name}</h1>

                    <p className="flex items-center gap-3 text-darkBlue">
                        <HiOutlineLocationMarker />{location}
                    </p>
                </div>

                <p className="text-lightBlue text-sm font-thin leading-[22.5px] line-clamp-3">{des}</p>
            </div>

            {/* boat bottom area */}
            <div className="py-3">
                <div className="px-8 flex items-center justify-between font-light">
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
                        className="font-sm py-[9px] px-14 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                    >See More</Link>

                    <p className="text-xl font-semibold">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default BootCard;