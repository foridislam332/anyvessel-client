import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

// internal files
import Area from "../assets/images/area.png";
import Seat from "../assets/images/seat.png";
import User from "../assets/images/user.png";
import { Link } from 'react-router-dom';

const VesselCard = ({ boat }) => {
    const { _id, vesselImage, manufacturer, boardingCity, numberCrew } = boat;
    return (
        <div className="shadow-sm bg-white rounded-lg overflow-hidden">
            {/* img */}
            <div className="h-[215px]">
                <img
                    className="w-full h-full object-cover object-center"
                    src={vesselImage}
                    alt=""
                />
            </div>
            {/* details */}
            <div className="flex justify-between p-4">
                <h6 className="text-xl font-medium">{manufacturer}</h6>
                <p className="text-darkBlue flex items-center gap-3">
                    <span className="text-base">
                        <HiOutlineLocationMarker />
                    </span>
                    {boardingCity}
                </p>
            </div>
            <div className="px-4 py-2">
                <p className=" text-lightBlue text-sm font-light line-clamp-3">
                    {/* {vessel.vessel_description} */}
                </p>
            </div>

            <div className="text-center border-t mt-3 border-blue">
                {/* boat bottom area */}
                <div className="py-3">
                    <div className="lg:px-8 flex items-center justify-center gap-10 md:gap-14 font-light">
                        <p className="flex items-center gap-3">
                            <img src={Area} alt="" />
                            {20} M{/* {area} M */}
                        </p>
                        <p className="flex items-center gap-3">
                            <img src={User} alt="" />
                            {/* {people} M */}
                            520 M
                        </p>
                        <p className="flex items-center gap-3">
                            <img src={Seat} alt="" />
                            {numberCrew}
                        </p>
                    </div>

                    <div className="px-5 mt-6 mb-2 grid grid-cols-12 items-center justify-between">
                        <div className="col-span-9">
                            <div className="text-center flex flex-wrap gap-3">
                                {/* <button
                    onClick={() => {
                      toast.warn("waiting Coming Soo..");
                      setModal(true);
                    }}
                    className="w-[155px] py-2 px-3 bg-yellow rounded-full lg:rounded-l-full border-l-2 border-white hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                  >
                    Contact buyer
                  </button> */}

                                <Link
                                    to={`/boat_details/${_id}`}
                                    className="w-[155px] font-sm py-2 px-8 bg-yellow rounded-full md:rounded-r-full mt-2 lg:mt-0 border-l-2 border-white hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VesselCard;