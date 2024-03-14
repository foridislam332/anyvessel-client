import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";

// images
import uploadImg from "../../assets/images/upload-ico.png";
import UploadImage from "../../components/UploadImage";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import CommonInput from "../../components/CommonInput";
import CountrySelect from "../../components/CountrySelect";
import CitySelect from "../../components/CitySelect";
import { toast } from "react-toastify";
import useMyVessel from "../../hooks/useMyVessel";
import VesselCard from "../../components/VesselCard";

const Vessel = () => {
    const { myVesselData, loading, refetch } = useMyVessel();

    const { currentUser } = useAuth();
    const [Axios] = useAxios();

    const [vesselImage, setVesselImage] = useState('');
    const [ownerImage, setOwnerImage] = useState('');
    const [boardingCountry, setBoardingCountry] = useState({});
    const [boardingCity, setBoardingCity] = useState('');
    const [sailingCountry, setSailingCountry] = useState({});
    const [sailingCity, setSailingCity] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if (vesselImage === '' || ownerImage === '') {
            return toast.error(`Please ${vesselImage === '' ? 'upload vessel photos' : 'upload owner photo'}!`, {
                position: "top-right",
                autoClose: 2500,
            });
        }

        if (!boardingCountry.label || !sailingCountry.label || boardingCity === '' || sailingCity === '') {
            return toast.warning("Please add location!", {
                position: "top-right",
                autoClose: 2500,
            });
        }

        const newData = {
            userId: currentUser?._id,
            ownerEmail: currentUser?.email,
            vesselImage: vesselImage,
            ownerImage: ownerImage,
            ...data,
            vesselLength: parseInt(data.vesselLength),
            vesselWeight: parseInt(data.vesselWeight),
            numberCrew: parseInt(data.numberCrew),
            boardingCountry: boardingCountry.label,
            boardingCity,
            sailingCountry: sailingCountry.label,
            sailingCity
        };

        Axios.post("vessel", newData)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Vessel Added Successfully!"
                    });
                }
            })
            .catch((err) => {
                console.log(err)
            });
    };

    return (
        <section className="h-full">
            <div className="overflow-y-auto">
                <div className="flex justify-end mb-8">
                    <button className="text-white font-light bg-blue px-4 py-2 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300">
                        Add new Vessel
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {
                        myVesselData.map(boat => <VesselCard key={boat._id} boat={boat} />)
                    }
                </div>

                {
                    !myVesselData.length > 0 &&
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 border-b border-midBlue pb-8 mb-6">
                            {/* photo upload */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-16">
                                {/* Upload vessel Photos */}
                                <div className="h-44">
                                    {
                                        vesselImage === '' ? <UploadImage
                                            id="vessel"
                                            setUrl={setVesselImage}
                                            uploadBtn={false}
                                        >
                                            <div className="h-full">
                                                <p className="font-light mb-2">Upload vessel Photos</p>
                                                <label
                                                    htmlFor="vessel"
                                                    className="h-full p-4 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
                                                >
                                                    <img src={uploadImg} alt="upload img" />
                                                    <p className="text-center text-darkBlue font-light mt-1">
                                                        Click to upload image
                                                    </p>
                                                </label>
                                            </div>
                                        </UploadImage> : <div className="h-full">
                                            <p className="font-light mb-2">Vessel Photos</p>
                                            <img className="rounded-md w-full h-full object-cover" src={vesselImage} alt="upload img" />
                                        </div>
                                    }
                                </div>

                                {/* Upload vessel Photos */}
                                {
                                    ownerImage === '' ? <UploadImage
                                        id="owner_photo"
                                        setUrl={setOwnerImage}
                                        uploadBtn={false}
                                    >
                                        <div>
                                            <p className="font-light mb-2">Upload Owner Photo</p>
                                            <label
                                                htmlFor="owner_photo"
                                                className="p-4 h-44 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
                                            >
                                                <img src={uploadImg} alt="upload img" />
                                                <p className="text-center text-darkBlue font-light mt-1">
                                                    Click to upload image
                                                </p>
                                            </label>
                                        </div>
                                    </UploadImage> : <div className="h-44">
                                        <p className="font-light mb-2">Owner Photo</p>
                                        <img className="rounded-md w-full h-full object-cover" src={ownerImage} alt="upload img" />
                                    </div>
                                }
                            </div>

                            {/* Vessel Category or port */}
                            <div className="md:mt-14 lg:mt-8 flex flex-col justify-between gap-4">
                                <div>
                                    <select
                                        {...register("registry", { required: true })}
                                        className={`text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40 ${errors.registry ? 'border-red-500 focus:border-red-700' : 'focus:border-blue hover:border-blue'}`}
                                    >
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

                            <button type="button" className="cursor-pointer text-blue font-light bg-transparent py-[7px] rounded-[9px] border-2 border-blue hover:bg-blue hover:text-white hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
                                Cancel
                            </button>
                        </div>
                    </form>
                }
            </div>
        </section>
    );
};

export default Vessel;
