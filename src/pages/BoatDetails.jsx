import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { Link, useLoaderData } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const BoatDetails = () => {
    const boatData = useLoaderData();
    const { _id, vesselName, manufacturer, vesselImage, ownerImage, vesselPrice, boardingCountry, boardingCity, sailingCountry, sailingCity, numberCrew, category, registry, sailingBoats, vesselLength, vesselWeight } = boatData;

    return (
        <>
            <section className="bg-[#F0F6FB] md:py-24">
                <div className='container'>
                    {/* Section Title */}
                    <SectionTitle title="Boat Details" />
                    <div className='mt-16'>
                        <h1 className='text-2xl font-medium text-blue'>{`${vesselName} - ${manufacturer}`}</h1>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-8 mt-4'>
                        {/* boat image */}
                        <figure className="w-full lg:w-[800px] shrink-0">
                            <img
                                className="w-full h-full rounded-md"
                                src={vesselImage}
                                alt="Boat Image"
                            />
                        </figure>

                        {/* boat content */}
                        <div className="shadow-md p-5 w-full rounded-md">
                            {/* Vessel Details */}
                            <div className="flex gap-5 rounded-lg p-3">
                                <figure className="">
                                    <img
                                        className="w-16 h-16 object-cover object-top rounded-md shadow-md"
                                        src={ownerImage}
                                        alt="Vessel Owner"
                                    />
                                </figure>
                                <div>
                                    <h1 className="text-2xl font-bold">{'Forid Hossain'}</h1>
                                    <p className="flex gap-2 items-center">
                                        <HiOutlineLocationMarker /> {boardingCity},{" "}
                                        {boardingCountry}
                                    </p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="mt-4 shadow-md rounded-lg p-3">
                                <div className="flex items-center justify-between">
                                    <p> Category: {category} </p>
                                    <p> Crew Number: {numberCrew} </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p> Registry: {registry} </p>
                                    <p> Sailing: {sailingBoats} </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p> Vessel Length: {vesselLength} </p>
                                    <p> Vessel weight: {vesselWeight} </p>
                                </div>
                            </div>

                            {/* location  */}
                            <div className="mt-4 rounded-lg p-3 space-y-3">
                                <div className="flex flex-wrap items-center sm:gap-3">
                                    <h5 className='text-darkBlue font-medium'>Boarding Location: </h5>
                                    <p>{boardingCity} , {boardingCountry} </p>
                                </div>

                                <div className="flex flex-wrap items-center sm:gap-3">
                                    <h5 className='text-darkBlue font-medium'>Sailing Destination: </h5>
                                    <p>{sailingCity} , {sailingCountry} </p>
                                </div>
                            </div>

                            {/* Manufacturer */}
                            {/* <div className="shadow-md rounded-lg p-3 mt-4 mb-2">
                                <p> <span className="text-midBlue">About Our Boat :</span>  {vessel?.vessel_description} </p>
                            </div> */}

                            <div className="mt-7 mb-3 flex items-center justify-between">
                                <Link
                                    className="font-sm py-[9px] px-14 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                                // to={`/BoatSellDetails/${_id}`}
                                >
                                    Contact Boat Owner
                                </Link>
                                <p className="text-xl font-semibold">Price : ${vesselPrice}  </p>
                                {/* <span className="text-midBlue text-xs ">Negotiable</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BoatDetails;