import { useState } from "react";
import useAxios from "../hooks/useAxios";
import CitySelect from "./CitySelect";
import CommonInput from "./CommonInput";
import CountrySelect from "./CountrySelect";
import UploadImage from "./UploadImage";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

// images
import uploadImg from "../assets/images/upload-ico.png";
import useAuth from "../hooks/useAuth";

const EditVessel = ({ vessel, refetch, setIsEditVessel }) => {
    const { currentUser } = useAuth();
    const [Axios] = useAxios();

    const [vesselImage, setVesselImage] = useState(vessel?.vesselImage);
    const [ownerImage, setOwnerImage] = useState(vessel.ownerImage);

    const [boardingCountry, setBoardingCountry] = useState({ value: "", label: vessel.boardingCountry });
    const [boardingCity, setBoardingCity] = useState(vessel.boardingCity);

    const [sailingCountry, setSailingCountry] = useState({ value: "", label: vessel.sailingCountry });
    const [sailingCity, setSailingCity] = useState(vessel.sailingCity);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (!boardingCountry.label || !sailingCountry.label || boardingCity === '' || sailingCity === '') {
            return toast.warning("Please add location!", {
                position: "top-right",
                autoClose: 2500,
            });
        }

        const newData = {
            userId: currentUser?._id,
            ownerEmail: currentUser?.email,
            vesselImage: vesselImage ? vesselImage : vessel.vesselImage,
            ownerImage: ownerImage ? ownerImage : vessel.ownerImage,
            ...data,
            vesselLength: parseInt(data.vesselLength),
            vesselWeight: parseInt(data.vesselWeight),
            numberCrew: parseInt(data.numberCrew),
            boardingCountry: boardingCountry.label,
            boardingCity,
            sailingCountry: sailingCountry.label,
            sailingCity
        };

        Axios.patch(`vessel/${vessel._id}`, newData)
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Vessel updated Successfully!"
                    });
                    refetch();
                    setIsEditVessel(false);
                }
            })
            .catch((err) => {
                console.log(err)
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 border-b border-midBlue pb-8 mb-6">
                    {/* photo upload */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-16">
                        {/* Upload vessel Photos */}
                        <div className="flex items-end justify-center gap-3">
                            <div className="h-full">
                                <p className="font-light mb-2">Vessel Photos</p>
                                <img className="rounded-md w-full h-48 object-cover" src={vesselImage ? vesselImage : vessel.vesselImage} alt="upload img" />
                            </div>

                            <div className="h-48">
                                <UploadImage
                                    id="vessel"
                                    setUrl={setVesselImage}
                                    uploadBtn={false}
                                    showLink={false}
                                >
                                    <div className="h-full">

                                        <label
                                            htmlFor="vessel"
                                            className="h-full p-3 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
                                        >
                                            <img src={uploadImg} className="w-20" alt="upload img" />
                                        </label>
                                    </div>
                                </UploadImage>
                            </div>
                        </div>

                        {/* Upload vessel Photos */}
                        <div className="flex items-end justify-center gap-3">
                            <div className="h-full">
                                <p className="font-light mb-2">Vessel Photos</p>
                                <img className="rounded-md w-full h-48 object-cover" src={ownerImage ? ownerImage : vessel.ownerImage} alt="upload img" />
                            </div>

                            <div className="h-48">
                                <UploadImage
                                    id="owner_photo"
                                    setUrl={setOwnerImage}
                                    uploadBtn={false}
                                    showLink={false}
                                >
                                    <div className="h-full">

                                        <label
                                            htmlFor="vessel"
                                            className="h-full p-3 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
                                        >
                                            <img src={uploadImg} className="w-20" alt="upload img" />
                                        </label>
                                    </div>
                                </UploadImage>
                            </div>
                        </div>
                    </div>

                    {/* Vessel Category or port */}
                    <div className="md:mt-14 lg:mt-8 flex flex-col justify-between gap-4">
                        <div>
                            <select
                                {...register("registry", { required: true })}
                                className={`text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40 ${errors.registry ? 'border-red-500 focus:border-red-700' : 'focus:border-blue hover:border-blue'}`}
                            >
                                <option value={vessel.registry}>{vessel.registry}</option>
                                <option value="">Home Port of Registry</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                            </select>
                        </div>
                        <div>
                            <select
                                {...register("category", { required: true })}
                                className={`text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40 ${errors.category ? 'border-red-500 focus:border-red-700' : 'focus:border-blue hover:border-blue'}`}
                            >
                                <option value={vessel.category}>{vessel.category}</option>
                                <option value="">Vessel Category</option>
                                <option value="Cruise Ships">Cruise Ships</option>
                                <option value="Ferries">Ferries</option>
                                <option value="Yachts">Yachts</option>
                                <option value="Catamarans">Catamarans</option>
                                <option value="Submarines">Submarines</option>
                                <option value="Frigates">Frigates</option>
                                <option value="Coast Guard Cutters">
                                    Coast Guard Cutters
                                </option>
                                <option value="Patrol Boats">Patrol Boats</option>
                                <option value="Submersibles">Submersibles</option>
                                <option value="Battleships">Battleships</option>
                                <option value="Icebreakers">Icebreakers</option>
                                <option value="Destroyers">Destroyers</option>
                                <option value="Fireboats">Fireboats</option>
                                <option value="Aircraft Carriers">Aircraft Carriers</option>
                            </select>
                        </div>
                        <div>
                            <select
                                {...register("sailingBoats", { required: true })}
                                className={`text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40 ${errors.sailingBoats ? 'border-red-500 focus:border-red-700' : 'focus:border-blue hover:border-blue'}`}
                            >
                                <option value={vessel.sailingBoats}>{vessel.sailingBoats}</option>
                                <option value="">Sailing Boats</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* input field */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-14">
                    <div>
                        <label
                            htmlFor="manufacturer"
                            className="text-darkBlue text-sm inline-block mb-2"
                        >
                            Vessel Name
                        </label>
                        <CommonInput
                            register={register}
                            error={errors}
                            type="text"
                            name="vesselName"
                            defaultValue={vessel.vesselName}
                            placeholder="Your text here"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="manufacturer"
                            className="text-darkBlue text-sm inline-block mb-2"
                        >
                            VESSEL Manufacturer/ MODEL
                        </label>
                        <CommonInput
                            register={register}
                            error={errors}
                            type="text"
                            name="manufacturer"
                            defaultValue={vessel.manufacturer}
                            placeholder="Your text here"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="vesselLength"
                            className="text-darkBlue text-sm inline-block mb-2"
                        >
                            VESSEL Length
                        </label>
                        <CommonInput
                            register={register}
                            error={errors}
                            type="number"
                            name="vesselLength"
                            defaultValue={vessel.vesselLength}
                            placeholder="METERS(ft)"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="vesselWeight"
                            className="text-darkBlue text-sm inline-block mb-2 uppercase"
                        >
                            Vessel weight
                        </label>
                        <CommonInput
                            register={register}
                            error={errors}
                            type="number"
                            name="vesselWeight"
                            defaultValue={vessel.vesselWeight}
                            placeholder="tons (..lb)"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="numberCrew"
                            className="text-darkBlue text-sm inline-block mb-2 uppercase"
                        >
                            Number of crew on board ?
                        </label>
                        <CommonInput
                            register={register}
                            error={errors}
                            type="number"
                            name="numberCrew"
                            defaultValue={vessel.numberCrew}
                            placeholder="Numbers"
                        />
                    </div>
                </div>

                {/* location */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-14">
                    <div>
                        <h2 className="text-darkBlue text-[18.5px] font-medium leading-7">Boarding location</h2>
                        <div className="space-y-4 mt-5 px-1">
                            <CountrySelect setCountry={setBoardingCountry} />

                            <CitySelect setCity={setBoardingCity} country={boardingCountry} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-darkBlue text-[18.5px] font-medium leading-7">Sailing Destination</h2>
                        <div className="space-y-4 mt-5 px-1">
                            <CountrySelect setCountry={setSailingCountry} />

                            <CitySelect setCity={setSailingCity} country={sailingCountry} />
                        </div>
                    </div>
                </div>

                {/* button */}
                <div className="flex items-center justify-center gap-6 mt-20">
                    <button type="submit" className="text-white font-light bg-blue py-[7px] rounded-[9px] border-2 border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
                        Confirm
                    </button>

                    <button onClick={() => setIsEditVessel(false)} type="button" className="cursor-pointer text-blue font-light bg-transparent py-[7px] rounded-[9px] border-2 border-blue hover:bg-blue hover:text-white hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditVessel;