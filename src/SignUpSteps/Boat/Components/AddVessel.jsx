import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCurrentUser from "../../../hooks/useCurrentUser";

// images
import { toast } from "react-toastify";
import uploadImg from "../../../assets/images/upload-ico.png";
import UploadImage from "../../../components/UploadImage";
import useAxios from "../../../hooks/useAxios";

const AddVessel = () => {
  const { currentUser } = useCurrentUser();
  const [Axios] = useAxios();

  const [vesselImage, setVesselImage] = useState(null);
  const [ownerImage, setOwnerImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const onSubmit = (data) => {
    // const newData = {
    //   ownerUserId: currentUser?._id,
    //   ownerUserEmail: currentUser?.email,
    //   postDate: formattedDate,
    //   postId: Math.floor(1000000000 + Math.random() * 900000),
    //   vessel: {
    //     registry: data.registry,
    //     number_crew: data.number_crew,
    //     vesselImage: vesselImage,
    //     ownerImage: ownerImage,
    //     category: data.category,
    //     sailing_boats: data.sailing_boats,
    //     boatForSale: data.boatForSale,
    //     forCharter: data.forCharter,
    //     manufacturer: data.manufacturer,
    //     vessel_length: data.vessel_length,
    //     vessel_area: data.vessel_area,
    //     vesselName: data.vesselName,
    //     vessel_price: data.vessel_price,
    //     vessel_description: data.vessel_description,
    //     vessel_weight: data.vessel_weight,
    //     owner: currentUser?.email,
    //   },
    //   location: {
    //     boarding_country: null,
    //     sailing_country: null,
    //     boarding_city: null,
    //     sailing_city: null,
    //   },
    //   contact: {
    //     sellerName: null,
    //     sellerEmail: null,
    //     seller_Number: null,
    //     seller_skype: null,
    //   },
    // };

    const newData = {
      userId: currentUser?._id,
      postDate: formattedDate,
      postId: Math.floor(1000000000 + Math.random() * 900000),
      vessel: {
        registry: data.registry,
        number_crew: data.number_crew,
        vesselImage: vesselImage,
        ownerImage: ownerImage,
        category: data.category,
        sailing_boats: data.sailing_boats,
        boatForSale: data.boatForSale,
        forCharter: data.forCharter,
        manufacturer: data.manufacturer,
        vessel_length: data.vessel_length,
        vessel_area: data.vessel_area,
        vesselName: data.vesselName,
        vessel_price: data.vessel_price,
        vessel_description: data.vessel_description,
        vessel_weight: data.vessel_weight,
        vessel_contact_email: data.vessel_contact_email,
        vessel_contact_number: data.vessel_contact_number,
        owner: currentUser?.email,
      },
    };
    console.log("newData ", newData);

    Axios.post("boatSailing", newData)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Vessel Added Successfully!");
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

  const serviceItems = (data, idName, labelText) => {
    return (
      <div className="flex items-center justify-center w-full border border-[#A1C7EC] rounded-xl px-2 py-3">
        <label
          htmlFor={idName}
          className="w-full flex justify-between items-center cursor-pointer  uppercase"
        >
          <p> {labelText} </p>
          <div className="relative">
            <input
              {...register(`${data}`)}
              id={idName}
              name={idName}
              type="checkbox"
              className="sr-only"
            />
            <div className="dot_Bg block bg-[#A1C7EC] w-10 h-5 rounded-full transition"></div>
            <div className="dot absolute left-1 top-[3px] bg-[#486786] w-3.5 h-3.5 rounded-full transition"></div>
          </div>
        </label>
      </div>
    );
  };

  const inputItems = (idName, labelText, error, require = true) => (
    <div>
      <label
        htmlFor={`${idName}`}
        className="text-darkBlue text-sm inline-block mb-2 uppercase"
      >
        {labelText}
      </label>
      <input
        id={`${idName}`}
        type="text"
        placeholder="Your text here"
        {...register(`${idName}`, require && { required: true })}
        className={`text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40 ${
          error && "border-red-600"
        }`}
      />
    </div>
  );

  return (
    <>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 border-b border-midBlue pb-8 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-16">
            {/* Upload vessel Photos */}
            <div className="h-44">
              <UploadImage
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
              </UploadImage>
            </div>

            {/* Upload vessel Photos */}
            <UploadImage
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
            </UploadImage>
          </div>

          {/* Vessel Category or port */}
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
                <option value="Coast Guard Cutters">Coast Guard Cutters</option>
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
            {/* <div>
              <label
                htmlFor="manufacturer"
                className="text-darkBlue text-sm inline-block mb-2 uppercase"
              >
                VESSEL Manufacturer/ MODEL
              </label>
              <input
                id="manufacturer"
                type="text"
                placeholder="Your text here"
                {...register("manufacturer", { required: true })}
                className={`text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40 ${
                  errors?.manufacturer && "border-red-600"
                }`}
              />
            </div> */}
            {/* VESSEL Manufacturer/ MODEL */}
            {inputItems(
              "manufacturer",
              "VESSEL Manufacturer/ MODEL",
              errors?.manufacturer
            )}

            {/* VESSEL Manufacturer/ MODEL */}
            {inputItems(
              "vessel_length",
              "VESSEL Length",
              errors?.vessel_length
            )}

            {/* VESSEL Manufacturer/ MODEL */}
            {inputItems("vessel_area", "VESSEL AREA", errors?.vessel_length)}

            {/* Number of crew on board ? */}
            {inputItems(
              "number_crew",
              "Number of crew on board ?",
              errors?.vessel_length
            )}

            {/* Number of crew on board ? */}
            {inputItems(
              "vessel_contact_email",
              "vessel contact email (optional)",
              errors?.vessel_length,
              false
            )}

            <div>
              {/* Boat For Sale */}
              {serviceItems("boatForSale", "boatForSale", "Boat For Sale")}
            </div>
          </div>

          <div className="md:col-span-6 space-y-4">
            {/* Number of crew on board ? */}
            {inputItems("vesselName", "Vessel Name", errors?.vesselName)}

            {/* Number of crew on board */}
            {inputItems(
              "vessel_weight",
              "Vessel weight",
              errors?.vessel_weight
            )}

            {/* Vessel Price ($) */}
            {inputItems(
              "vessel_price",
              "Vessel Price ($)",
              errors?.vessel_price
            )}

            {/* vessel contact number (optional) */}
            {inputItems(
              "vessel_contact_number",
              "vessel contact number (optional)",
              errors?.vessel_contact_number,
              false
            )}

            {/* Vessel Description */}
            {inputItems(
              "vessel_description",
              "Vessel Description",
              errors?.vessel_description
            )}

            <div>
              {/* For Charter */}
              {serviceItems("forCharter", "forCharter", "For Charter")}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8">
          <button className="text-white font-light bg-blue py-[7px] rounded-[9px] border-2 border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
            Add new Vessel
          </button>

          <div className="cursor-pointer text-blue font-light bg-transparent py-[7px] rounded-[9px] border-2 border-blue hover:bg-blue hover:text-white hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
            Cancel
          </div>
        </div>
      </form>
    </>
  );
};

export default AddVessel;
