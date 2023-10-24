import { useForm } from "react-hook-form";
import { LuUploadCloud } from "react-icons/lu";
import Divider from "../../components/Divider";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useCurrentUser from "../../hooks/useCurrentUser";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

// images
import uploadImg from '../../assets/images/upload-ico.png';

const Vessel = () => {
    const { currentUser } = useCurrentUser();
    const [Axios] = useAxios();
    const navigate = useNavigate();

    const [vesselImage, setVesselImage] = useState(null);
    const [ownerImage, setOwnerImage] = useState(null);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    // Image hosting
    const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    //   identity Photo upload
    const handleVesselPhotoUpload = async (event) => {
        const picture = event.target.files[0];
        const formData = new FormData();
        formData.append("image", picture);

        try {
            const response = await axios.post(image_hosting_url, formData);
            setVesselImage(response.data.data.display_url);
            toast.success("Photo uploaded!", {
                position: "top-right",
                autoClose: 2000,
            });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };
    const handleOwnerPhotoUpload = async (event) => {
        const picture = event.target.files[0];
        const formData = new FormData();
        formData.append("image", picture);

        try {
            const response = await axios.post(image_hosting_url, formData);
            setOwnerImage(response.data.data.display_url);
            toast.success("Photo uploaded!", {
                position: "top-right",
                autoClose: 2000,
            });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    const onSubmit = (data) => {
        const newData = {
            ownerUserId: currentUser?._id,
            ownerUserEmail: currentUser?.email,
            postDate: formattedDate,
            vessel: {
                registry: data.registry,
                number_crew: data.number_crew,
                vesselImage: vesselImage,
                ownerImage: ownerImage,
                category: data.category,
                sailing_boats: data.sailing_boats,
                manufacturer: data.manufacturer,
                vessel_length: data.vessel_length,
                vessel_area: data.vessel_area,
                vesselName: data.vesselName,
                vessel_price: data.vessel_price,
                vessel_description: data.vessel_description,
                vessel_weight: data.vessel_weight,
                owner: currentUser?.email,
            },
            location: {
                boarding_country: null,
                sailing_country: null,
                boarding_city: null,
                sailing_city: null,
            },
            contact: {
                sellerName: null,
                sellerEmail: null,
                seller_Number: null,
                seller_skype: null,
            },
        };

        Axios.post("boatSailing", newData)
            .then((res) => {
                if (res?.data?.insertedId) {
                    toast.success(
                        "Boat Sailing post submit Successful! Now Update the location"
                    );
                }

                if (res?.status === 201) {
                    toast.success("Boat Sailing post already submitted!");
                }
            })
            .catch((err) => {
                toast.error("Something Wrong!");
                // console.log(err)
            });
    };
    return (
        <section>
            <div className="flex justify-end mb-8">
                <button className="text-white font-light bg-blue px-4 py-2 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300">
                    Add new Vessel
                </button>
            </div>
            
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 border-b border-midBlue pb-8 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-16">
                        <div>
                            <p className="font-light mb-2">Upload vessel Photos</p>
                            <label
                                htmlFor="vessel"
                                className="p-4 h-44 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
                            >
                                <input
                                    id="vessel"
                                    name="vessel_image"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleVesselPhotoUpload}
                                    className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                                />
                                <img src={uploadImg} alt="upload img" />
                                <p className="text-center text-darkBlue font-light mt-1">
                                    Click to upload image
                                </p>
                            </label>
                        </div>

                        <div>
                            <p className="font-light mb-2">Upload Owner Photo</p>
                            <label
                                htmlFor="owner_photo"
                                className="p-4 h-44 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
                            >
                                <input
                                    id="owner_photo"
                                    name="owner_photo"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleOwnerPhotoUpload}
                                    className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                                />
                                <img src={uploadImg} alt="upload img" />
                                <p className="text-center text-darkBlue font-light mt-1">
                                    Click to upload image
                                </p>
                            </label>
                        </div>
                    </div>

                    <div className="md:mt-14 lg:mt-8 flex flex-col justify-between gap-4">
                        <div>
                            <select
                                {...register("registry", { required: true })}
                                className="text-darkBlue w-full border border-midBlue rounded-[10px] outline-none focus:border-blue p-2 sm:pr-3"
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
                                className="text-darkBlue w-full border border-midBlue rounded-[10px] outline-none focus:border-blue p-2 sm:pr-3"
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
                                {...register("sailing_boats", { required: true })}
                                className="text-darkBlue w-full border border-midBlue rounded-[10px] outline-none focus:border-blue p-2 sm:pr-3"
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

                <div className="md:grid md:grid-cols-12 mt-3 gap-12">
                    <div className="md:col-span-6 space-y-4">
                        <div>
                            <label
                                htmlFor="manufacturer"
                                className="text-darkBlue text-sm inline-block mb-2"
                            >
                                VESSEL Manufacturer/ MODEL
                            </label>
                            <input
                                id="manufacturer"
                                type="text"
                                placeholder="Your text here"
                                {...register("manufacturer")}
                                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="vessel_length"
                                className="text-darkBlue text-sm inline-block mb-2"
                            >
                                VESSEL Length
                            </label>
                            <input
                                id="vessel_length"
                                type="number"
                                placeholder="METERS(ft)"
                                {...register("vessel_length")}
                                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="vessel_area"
                                className="text-darkBlue text-sm inline-block mb-2"
                            >
                                VESSEL Area
                            </label>
                            <input
                                id="vessel_area"
                                type="number"
                                placeholder="METERS(ft)"
                                {...register("vessel_area")}
                                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="number_crew"
                                className="text-darkBlue text-sm inline-block mb-2"
                            >
                                Number of crew on board ?
                            </label>

                            <input
                                id="number_crew"
                                type="number"
                                placeholder="Numbers"
                                {...register("number_crew")}
                                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-6 space-y-4">
                        <div>
                            <label
                                htmlFor="text"
                                className="text-darkBlue text-sm inline-block mb-2"
                            >
                                Vessel Name
                            </label>
                            <input
                                id="text"
                                type="text"
                                placeholder="Your text here"
                                {...register("vesselName")}
                                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="vessel_weight"
                                className="text-darkBlue text-sm inline-block mb-2"
                            >
                                Vessel weight
                            </label>
                            <input
                                id="vessel_weight"
                                type="number"
                                placeholder="tons (..lb)"
                                {...register("vessel_weight")}
                                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="vessel_price"
                                className="text-darkBlue text-sm inline-block mb-2"
                            >
                                Vessel Price ($)
                            </label>
                            <input
                                id="vessel_price"
                                type="number"
                                placeholder="Price ($)"
                                {...register("vessel_price")}
                                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="vessel_description"
                                className="text-darkBlue text-sm inline-block mb-2"
                            >
                                Vessel Description
                            </label>
                            <input
                                id="vessel_description"
                                type="text"
                                placeholder="description"
                                {...register("vessel_description")}
                                className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-6 mt-8">
                    <button className="text-white font-light bg-blue py-[7px] rounded-[9px] border-2 border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
                        Confirm
                    </button>

                    <div className="cursor-pointer text-blue font-light bg-transparent py-[7px] rounded-[9px] border-2 border-blue hover:bg-blue hover:text-white hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
                        Cancel
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Vessel;
