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
    <section className="p-5">
      <div className="flex justify-end">
        <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">
          Add more Vessel
        </button>
      </div>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="md:grid md:grid-cols-12 ">
            <div className="md:col-span-6 flex justify-center gap-5">
              <div className="">
                <small>Upload vessel Photos</small>
                <label
                  htmlFor="vessel"
                  className="h-32 p-4 w-32 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-blue/20"
                >
                  <input
                    id="vessel"
                    name="vessel_image"
                    type="file"
                    accept="image/*"
                    onChange={handleVesselPhotoUpload}
                    className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                  />
                  <LuUploadCloud className="text-3xl " />
                  <p className="text-xs text-center">Click to upload image</p>
                </label>
              </div>
              <div className="md:col-span-6">
                <small>Upload Owner Photo</small>
                <label
                  htmlFor="owner_photo"
                  className="h-32 p-4 w-32 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-blue/20"
                >
                  <input
                    id="owner_photo"
                    name="owner_photo"
                    type="file"
                    accept="image/*"
                    onChange={handleOwnerPhotoUpload}
                    className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                  />
                  <LuUploadCloud className="text-3xl " />
                  <p className="text-xs text-center">Click to upload image</p>
                </label>
              </div>
            </div>
            <div className="md:col-span-6 ">
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("registry", { required: true })}
                  className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                >
                  <option value="">Home Port of Registry</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                </select>
              </div>
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("category", { required: true })}
                  className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
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
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("sailing_boats", { required: true })}
                  className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
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
          <Divider />

          <div className="md:grid md:grid-cols-12 mt-3 gap-6">
            <div className="md:col-span-6 space-y-2">
              <div>
                <small className="text-darkBlue ">
                  VESSEL Manufacturer/ MODEL
                </small>
                <label
                  htmlFor="manufacturer"
                  className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <input
                    id="manufacturer"
                    type="text"
                    placeholder="Your text here"
                    {...register("manufacturer")}
                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                  />
                </label>
              </div>
              <div>
                <small className="text-darkBlue ">VESSEL Length</small>
                <label
                  htmlFor="vessel_length"
                  className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <input
                    id="vessel_length"
                    type="number"
                    placeholder="METERS(ft)"
                    {...register("vessel_length")}
                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                  />
                </label>
              </div>
              <div>
                <small className="text-darkBlue ">VESSEL Area</small>
                <label
                  htmlFor="vessel_area"
                  className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <input
                    id="vessel_area"
                    type="number"
                    placeholder="METERS(ft)"
                    {...register("vessel_area")}
                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                  />
                </label>
              </div>
              <div>
                <small className="text-darkBlue ">
                  Number of crew on board ?
                </small>
                <label
                  htmlFor="number_crew"
                  className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <input
                    id="number_crew"
                    type="number"
                    placeholder="Numbers"
                    {...register("number_crew")}
                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                  />
                </label>
              </div>
            </div>

            <div className="md:col-span-6 space-y-2">
              <div>
                <small className="text-darkBlue ">Vessel Name</small>
                <label
                  htmlFor="text"
                  className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <input
                    id="text"
                    type="text"
                    placeholder="Your text here"
                    {...register("vesselName")}
                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                  />
                </label>
              </div>
              <div>
                <small className="text-darkBlue ">Vessel weight</small>
                <label
                  htmlFor="vessel_weight"
                  className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <input
                    id="vessel_weight"
                    type="number"
                    placeholder="tons (..lb)"
                    {...register("vessel_weight")}
                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                  />
                </label>
              </div>
              <div>
                <small className="text-darkBlue ">Vessel Price ($)</small>
                <label
                  htmlFor="vessel_price"
                  className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <input
                    id="vessel_price"
                    type="number"
                    placeholder="Price ($)"
                    {...register("vessel_price")}
                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                  />
                </label>
              </div>
              <div>
                <small className="text-darkBlue ">Vessel Description</small>
                <label
                  htmlFor="vessel_description"
                  className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <input
                    id="vessel_description"
                    type="text"
                    placeholder="description "
                    {...register("vessel_description")}
                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className=" flex justify-center gap-12 mt-8">
            <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300 w-48">
              Confirm
            </button>

            <div className="cursor-pointer text-sm font-light text-center px-8 py-3 rounded-[9px] border border-blue w-48 hover:text-blue shadow-md hover:shadow-3xl duration-300">
              Cancel
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Vessel;
