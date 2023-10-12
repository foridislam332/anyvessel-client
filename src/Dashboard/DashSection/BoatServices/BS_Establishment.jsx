import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// icons image
import user2 from "../../../assets/images/user-3.png";

// internal file
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import useCurrentUser from "../../../hooks/useCurrentUser";

const BS_Establishment = () => {
  const [Axios] = useAxios();
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const { createUser, upDateProfile } = useAuth();
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();
  const [businessLogoUpload, setBusinessLogoUpload] = useState(null);
  const [paperPhoto, setPaperPhotoUpload] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { day, month, ownerName, year } = data;
    const newData = {
      userId: currentUser?._id,
      userEmail: currentUser?.email,
      establishment: {
        ownerName,
        businessLogo: businessLogoUpload,
        paperPhoto: paperPhoto,
        date: { day, month, year },
      },
      location: {
        country: null,
        city: null,
        specify_address: null,
      },
      contact: {
        contactName: null,
        contactEmail: null,
        phoneNumber: null,
        Skype: null,
        Website: null,
        facebook: null,
        instagram: null,
      },
      services: {
        cleaning: null,
        paining: null,
        rigging: null,
        sailMakersRepairs: null,
        electrics: null,
        hvacAndPlumbing: null,
        mechanics: null,
        arrangementsAndDeliveries: null,
        musicBands: null,
        foodAndBeverage: null,
        carRentals: null,
        others: null,
      },
      advert: { advert: null },
    };

    Axios.post("boat-services-data", newData)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Boat services Establishment submit Successful!");
        }

        if (res?.status === 201) {
          toast.success("Boat services Establishment already submitted!");
        }
      })
      .catch((err) => console.log(err));
  };

  //   Picture upload
  const handleBusinessLogoUpload = async (event) => {
    const picture = event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);

    try {
      const response = await axios.post(image_hosting_url, formData);
      setBusinessLogoUpload(response.data.data.display_url);
      toast.success("Photo uploaded!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  //   paper image Photo upload
  const handlePaperPhotoUpload = async (event) => {
    const picture = event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);

    try {
      const response = await axios.post(image_hosting_url, formData);
      setPaperPhotoUpload(response.data.data.display_url);
      toast.success("Photo uploaded!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // 100 years
  const yearsRange = Array.from({ length: 100 }, (_, i) => 1950 + i);

  // 1 to 31 dates
  const daysRange = Array.from({ length: 31 }, (_, i) => 1 + i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-white bg-opacity-90 px-5 sm:px-10 pb-10 md:px-[93px] md:pb-[30px] mt-6 rounded-[10px]">
      <div className="max-w-[715px] mx-auto text-center mb-6">
        <h2 className="text-lightBlue text-[19px]">
          BOAT SERVICES ESTABLISHMENT
        </h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          {/* Name of the owner */}
          <label
            htmlFor="Name_owner"
            className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
          >
            <input
              id="Name_owner"
              placeholder="Name of the owner"
              {...register("ownerName")}
              className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
            <img src={user2} alt="fullName" />
          </label>

          {/* UPLOAD BUSINESS PHOTO OR LOGO */}
          <div className="md:col-span-2 flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 py-4">
            {businessLogoUpload === null ? (
              <label
                htmlFor="businessLogoUpload"
                className="text-darkBlue pl-[10px]"
              >
                UPLOAD BUSINESS PHOTO OR LOGO
              </label>
            ) : (
              <p className="text-darkBlue pl-[10px]">{businessLogoUpload}</p>
            )}
            <>
              <input
                id="businessLogoUpload"
                name="businessLogoUpload"
                type="file"
                accept="image/*"
                onChange={handleBusinessLogoUpload}
                className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
              />
              <button
                type="button"
                onClick={() =>
                  document.getElementById("businessLogoUpload").click()
                }
                className="text-white bg-blue px-5 py-1 rounded-[26px] hover:bg-transparent hover:text-blue border border-blue duration-300"
              >
                Upload
              </button>
            </>
          </div>

          {/* business paper */}
          <div className="md:col-span-2 flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 py-4">
            {paperPhoto === null ? (
              <label htmlFor="paperPhoto" className="text-darkBlue pl-[10px]">
                Upload wall paper photo
              </label>
            ) : (
              <p className="text-darkBlue pl-[10px]">{paperPhoto}</p>
            )}
            <>
              <input
                id="paperPhoto"
                name="paperPhoto"
                type="file"
                accept="image/*"
                onChange={handlePaperPhotoUpload}
                className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
              />
              <button
                type="button"
                onClick={() => document.getElementById("paperPhoto").click()}
                className="text-white bg-blue px-5 py-1 rounded-[26px] hover:bg-transparent hover:text-blue border border-blue duration-300"
              >
                Upload
              </button>
            </>
          </div>

          {/* BUSINESS SINCE */}
          <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2">
            <span className="text-darkBlue pl-[10px]">BUSINESS SINCE : </span>
            <div className="px-[10px] flex items-center gap-2 sm:gap-[30px]">
              {/* year */}
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("year", { required: true })}
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]"
                >
                  <option value="year">Year</option>
                  {yearsRange &&
                    yearsRange.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                </select>
              </div>

              {/* month */}
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("month", { required: true })}
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-2 py-[3px]"
                >
                  {months &&
                    months.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                </select>
              </div>

              {/* day */}
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("day", { required: true })}
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]"
                >
                  <option value="">Day</option>
                  {daysRange &&
                    daysRange.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="mt-12 w-fit mx-auto space-x-4">
          <button
            type="submit"
            className="text-white text-sm font-light bg-blue bg-opacity-90 px-7 md:px-14 py-[9px] rounded-lg hover:bg-transparent hover:text-blue border border-blue duration-300"
          >
            Confirm
          </button>

          <Link
            to="/register"
            className="text-blue text-sm bg-transparent bg-opacity-90 px-[27px] md:px-[55px] py-2 rounded-lg hover:bg-blue hover:text-white border-2 border-blue duration-300"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BS_Establishment;
