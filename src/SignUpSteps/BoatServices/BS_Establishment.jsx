import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// icons image
import user2 from "../../assets/images/user-3.png";

// internal file
import InputField from "../../components/Inputs/InputField";
import useAxios from "../../hooks/useAxios";
import useCurrentUser from "../../hooks/useCurrentUser";

const BS_Establishment = () => {
  const [Axios] = useAxios();
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const { currentUser } = useCurrentUser();
  const navigate = useNavigate();
  const [businessLogoUpload, setBusinessLogoUpload] = useState(null);
  const [paperPhoto, setPaperPhotoUpload] = useState(null);
  const [error, setError] = useState(null);
  const [inputData, setInputData] = useState({
    ownerName: "",
  });

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e?.id]: e?.value,
    });
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { day, month, year } = data;
    const makeData = {
      ownerName: inputData?.ownerName,
      ...data,
    };

    // error handle
    const errorArr = [];
    for (const key of Object.keys(makeData)) {
      if (
        makeData[key] == "" ||
        makeData[key] == null ||
        makeData[key] == undefined
      ) {
        errorArr.push(key);
      }
    }
    if (errorArr.length) return setError(errorArr);
    setError(null);

    const newData = {
      userId: currentUser?._id,
      userEmail: currentUser?.email,
      establishment: {
        ownerName: inputData?.ownerName,
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
          navigate("/sign-up-step/service-location", {
            replace: true,
          });
        }
      })
      .catch((err) => {
        toast.error("Somethings else !");
        // console.log(err);
      });
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

  // 1900 to 2025
  const yearsRange = Array.from({ length: 126 }, (_, i) => 1900 + i).reverse();
  // 1 to 31
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
          <InputField
            id="ownerName"
            handle={handleInputChange}
            placeholder="Name of the owner"
            icons={user2}
          />

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
          <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue">
            <span className="text-darkBlue pl-[10px]">BUSINESS SINCE : </span>
            <div className="px-[10px] flex items-center gap-2 sm:gap-[30px]">
              {/* year */}
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("year")}
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px] focus-within:border-blue-500 focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue"
                >
                  <option className="px-5 block w-24 text-center" value="year">
                    Year
                  </option>
                  {yearsRange &&
                    yearsRange.map((y) => (
                      <option
                        className="px-5 block w-24 text-center"
                        key={y}
                        value={y}
                      >
                        {y}
                      </option>
                    ))}
                </select>
              </div>

              {/* month */}
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("month")}
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-2 py-[3px] focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue"
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
                  {...register("day")}
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px] focus-within:scale-[1.01] focus-within:shadow-sm focus-within:shadow-midBlue"
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

        {/* show Error */}
        {error && (
          <p className="text-red-400 text-center mt-5">
            {!error?.message ? (
              <span> {error.join(", ")} - Please provide input </span>
            ) : (
              <span> {error?.message} </span>
            )}
          </p>
        )}

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
