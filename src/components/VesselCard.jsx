import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import CustomModal from './CustomModal';
import useAxios from '../hooks/useAxios';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

// internal files
import Area from "../assets/images/area.png";
import Seat from "../assets/images/seat.png";
import User from "../assets/images/user.png";

const VesselCard = ({ boat, refetch, setIsEditVessel, setEditedVessel }) => {
    const { _id, vesselName, vesselImage, vesselPrice, boardingCity, numberCrew, boatForSale, charterBoat } = boat;
    const [Axios] = useAxios();
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(vesselPrice ? vesselPrice : '');

    const [menuOpen, setMenuOpen] = useState(false);
    const buttonRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleBasicInfoModal = (e) => {
        if (e == "cancel") setIsOpen(false);
    };

    // sell vessel
    const handleSellVessel = () => {
        if (price === '' || vesselPrice === parseInt(price)) {
            return Swal.fire({
                position: "center",
                icon: "error",
                title: "Please update price!",
            });
        }

        Axios.patch(`vessel/sell/${_id}`, { price: parseInt(price) })
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Marked as sell done!"
                    });
                    refetch();
                    setIsOpen(false)
                }
            })
            .catch((err) => {
                console.log(err)
            });
    }

    // charter boat for rent
    const handleCharterBoat = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, rent it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.patch(`vessel/rent/${_id}`)
                    .then((res) => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Marked as Charter Boat!"
                            });
                            refetch();
                            setIsOpen(false)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }
        });
    }

    // edit vessel
    const handleEditVessel = () => {
        setIsEditVessel(true)
        setEditedVessel(boat)
    }

    // delete vessel
    const handleDeleteVessel = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`vessel/${_id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your vessel has been deleted."
                            });
                            refetch();
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }
        });
    }
    return (
        <div className="shadow-md bg-white rounded-lg overflow-hidden">
            {/* edit | delete button and img */}
            <div className="h-[215px] relative group">
                {/* edit or delete button */}
                <div className="absolute top-1 left-1 z-10">
                    <button
                        ref={buttonRef}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`text-white bg-dark/40 group-hover:bg-dark transition duration-300 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer ${menuOpen && "bg-darkBlue/20"
                            }`}
                    >
                        <BsThreeDotsVertical size='20' />
                    </button>

                    {/* {menuOpen && ( */}
                    <div
                        className={`transition duration-300 ${menuOpen
                            ? "shadow-md min-w-[120px] w-max p-2 bg-white rounded-md"
                            : "shadow-none w-0 h-0 bg-transparent"
                            }`}
                    >
                        {menuOpen && (
                            <ul>
                                <li>
                                    <button
                                        onClick={handleEditVessel}
                                        className="w-full text-left hover:bg-darkBlue/5 px-2 py-1 rounded-md"
                                    >
                                        Edit
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleDeleteVessel(_id)}
                                        className="w-full text-left hover:bg-darkBlue/5 px-2 py-1 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* vessel image */}
                <img
                    className="w-full h-full object-cover object-center"
                    src={vesselImage}
                    alt={vesselName}
                />
            </div>

            {/* details */}
            <div className="flex justify-between p-4">
                <h6 className="text-xl leading-normal font-medium">{vesselName} </h6>
                <p className="text-darkBlue flex items-center gap-2">
                    <HiOutlineLocationMarker />
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

                    <div className="flex flex-wrap items-center justify-between gap-3 mx-4 mt-8">
                        {!charterBoat ? <button onClick={handleCharterBoat} className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">
                            Mark as Charter Boat
                        </button> : null}

                        {
                            !boatForSale ? <button onClick={() => setIsOpen(!isOpen)} className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">
                                Mark as Sell
                            </button> : <p className='font-semibold text-xl'>${vesselPrice}</p>
                        }
                    </div>
                </div>
            </div>

            {isOpen && (
                <CustomModal
                    isModalOpen={isOpen}
                    setIsModalOpen={setIsOpen}
                    handleModal={handleBasicInfoModal}
                >
                    <div className="text-black">
                        <div>
                            <h3 className="font-bold text-xl mb-2">Sell Your Vessel</h3>
                            <p className="border-t border-dark mb-5"></p>

                            {/* Language */}
                            <div className="w-full">
                                <label htmlFor="price" className='text-darkBlue text-sm inline-block mb-2'>Vessel price</label>
                                <input type='number' name="price" id="price"
                                    placeholder="Enter vessel price"
                                    className="text-lg w-full outline-none p-[10px] text-darkBlue focus:border-blue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                    className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 mx-auto cursor-pointer mt-3"
                                    onClick={handleSellVessel}
                                >Submit</button>
                            </div>
                        </div>
                    </div>
                </CustomModal>
            )}
        </div>
    );
};

export default VesselCard;