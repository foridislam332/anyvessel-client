import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import { BsCamera, BsFillFlagFill, BsTelephoneOutbound } from "react-icons/bs";
import { LuLanguages } from "react-icons/lu";
import { MdAccountCircle, MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
import CustomModal from "../components/CustomModal";
import useAxios from "../hooks/useAxios";

const BoatProfile = ({ user, currentUserLoading, refetch }) => {
  console.log("user ", user);
  const {
    _id,
    surname,
    email,
    fullName,
    description,
    gender,
    languages,
    nationality,
    phone,
    romance,
    picture,
    role,
    identityPhoto,
    birthDay,
  } = user;

  // console.log(user)
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateArray = birthDate?.split(",");
    const birthMonth = birthDateArray[1].trim();
    const birthDay = parseInt(birthDateArray[0], 10);
    const birthYear = parseInt(birthDateArray[2], 10);

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

    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const birthMonthIndex = months.findIndex(
      (month) => month.toLowerCase() === birthMonth.toLowerCase()
    );

    if (
      currentMonth < birthMonthIndex ||
      (currentMonth === birthMonthIndex && currentDay < birthDay)
    ) {
      return today.getFullYear() - birthYear - 1;
    } else {
      return today.getFullYear() - birthYear;
    }
  };

  const age = calculateAge(birthDay);

  const [Axios] = useAxios();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [profileUpdateLoading, setProfileUpdateLoading] = useState();
  const [isBasicInfoModalOpen, setIsBasicInfoModalOpen] = useState(false);
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const handleCoverPictureUpload = (event) => {
    const picture = event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const image = imageResponse.data.display_url;
          const profile = {
            url: image,
            email: email,
          };
          Axios.patch("/update-boat-cover", profile)
            .then((res) => {
              if (res.status === 200) {
                setProfileUpdateLoading(false);
                refetch();
              }
            })
            .catch((error) => {
              console.log(error);
              toast?.error("Somethings plz Wait");
            });
        }
      });
  };
  const handlePictureUpload = (event) => {
    setProfileUpdateLoading(true);
    const picture = event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const image = imageResponse.data.display_url;
          const profile = {
            url: image,
            email: email,
          };
          Axios.patch("/update-boat-profile", profile)
            .then((res) => {
              if (res.status === 200) {
                setProfileUpdateLoading(false);
                refetch();
              }
            })
            .catch((error) => {
              console.log(error);
              toast?.error("Somethings plz Wait");
            });
        }
      });
  };
  const onBasicInfoSubmit = (data) => {
    const updateData = {
      email: email,
      fullName: data.fullName,
      nationality: data.nationality,
      phone: data.phone,
      languages: data.languages,
      description: data.description,
    };
    Axios.patch("/boat/basic", updateData)
      .then((res) => {
        if (res.status === 200) {
          refetch();
          setIsBasicInfoModalOpen(false);
          // reset()
        }
      })
      .catch((error) => {
        console.log(error);
        toast?.error("Somethings plz Wait");
      });
  };

  return (
    <section>
      <Helmet>
        <title> {fullName} - Profile | Anyvessel</title>
      </Helmet>

      <div>
        <div className="relative">
          <img className="w-full h-[400px]" src={picture} alt="" />
          <label
            htmlFor="coverPhoto"
            className="bg-white rounded-full border border-black bg-lightDark/80 top-1 right-1 hover:bg-lightDark text-2xl p-[5px] z-20 cursor-pointer  duration-300 absolute "
          >
            <input
              id="coverPhoto"
              name="picture"
              type="file"
              style={{ display: "none" }}
              onChange={handleCoverPictureUpload}
            />
            <p className="flex items-center gap-1">
              {" "}
              <span className="text-sm">Upload Photo </span>
              <BsCamera />
            </p>
          </label>
        </div>
        <div className="flex justify-between mr-3 mt-2">
          <div className="flex gap-2">
            <div>
              <img
                src={identityPhoto}
                className="w-10 h-10 rounded-full"
                alt=""
              />
            </div>
            <div>
              <div className="flex gap-2">
                <h2 className="text-2xl font-semibold">{fullName}</h2>
                <div className="mt-2 text-sm flex gap-1">
                  <p>{age}</p>,<p>{gender}</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="flex items-center gap-1 border rounded-full px-1">
                  <MdAccountCircle className="text-xl " />
                  <span className=""> PIV</span>
                </div>
                <p>Personal Identity Verified</p>
              </div>
            </div>
          </div>

          <div className="relative ">
            <div className="">
              {profileUpdateLoading ? (
                // <img src="https://i.ibb.co/qnqQTf2/Getty-Images-871479424-f599f96e1c03466880bfc5be20aeb201.jpg"  className="w-40 h-40 rounded-full hover:scale-105 border-2 border-red-700  -mt-24" alt="" />
                <h3 className="w-40 h-40 mx-auto flex items-center justify-center rounded-full hover:scale-105 border-2 border-red-700 text-2xl text-black animate-pulse -mt-24">
                  Loading...
                </h3>
              ) : (
                <div>
                  {identityPhoto ? (
                    <img
                      className="w-40 h-40 rounded-full hover:scale-105 border-2 border-red-700  -mt-24"
                      src={identityPhoto}
                      // alt={name}
                    />
                  ) : (
                    <img
                      className="w-40 h-40 rounded-full hover:scale-105 border-2 border-red-700  -mt-24"
                      src="https://i.ibb.co/wNJtyRX/image-14.png"
                    />
                  )}
                </div>
              )}
            </div>
            <label
              htmlFor="photo"
              className="bg-white rounded-full border border-black bg-lightDark/80 bottom-2 right-1 hover:bg-lightDark text-2xl p-[5px] z-20 cursor-pointer  duration-300 absolute "
            >
              <input
                id="photo"
                name="picture"
                type="file"
                style={{ display: "none" }}
                onChange={handlePictureUpload}
              />
              <BsCamera />
            </label>
          </div>
        </div>

        <div className="flex gap-3 py-2 items-center">
          <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0">
            <BsFillFlagFill />{" "}
            <span className="text-xs "> {nationality?.name?.common}</span>
          </p>
          <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0">
            <LuLanguages />{" "}
            <span className="text-xs "> {languages?.join(", ")}</span>
          </p>
        </div>
        <div className="flex gap-3 py-2 items-center">
          <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0">
            <MdOutlineEmail /> <span className="text-xs "> {email}</span>
          </p>
          <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0">
            <BsTelephoneOutbound /> <span className="text-xs "> {phone}</span>
          </p>
        </div>
        <div className="mt-4 shadow-md rounded-lg p-5">
          <p className="underline mb-2">About Me :</p>
          {description}
        </div>

        {/* TODO  */}
        <div className="mt-4 shadow-md rounded-lg p-5">
          <p className="flex items-center gap-1">
            <BiCalendar /> <span className="uppercase">Available</span>{" "}
            <span className="">currently unavailable</span>{" "}
            <span className="text-xs">since {birthDay}</span>{" "}
          </p>
        </div>

        <div className="mt-4 shadow-md rounded-lg p-5">
          <p className="">Unavailable - Found a Crew</p>
        </div>
      </div>

      <div className="mt-4 shadow-md rounded-lg p-5 flex justify-center">
        <button
          className="px-5 py-2 border-2 rounded-md border-purple-600 hover:border-red-800 duration-300"
          onClick={() => setIsBasicInfoModalOpen(!isBasicInfoModalOpen)}
        >
          Update Profile Information
        </button>
      </div>

      {isBasicInfoModalOpen && (
        <CustomModal
          isModalOpen={isBasicInfoModalOpen}
          setIsModalOpen={setIsBasicInfoModalOpen}
          // handleModal={handleBasicInfoModal}
        >
          <form
            className="text-black"
            onSubmit={handleSubmit(onBasicInfoSubmit)}
          >
            <h3 className="font-bold text-xl mb-2">
              Update Your Basic Profile Information
            </h3>
            <p className="border-t border-dark mb-5"></p>

            <div className="sm:flex gap-5">
              {/* Name */}
              <div className="w-full">
                <label htmlFor="full_name" className="text-dark text-sm">
                  Name:
                </label>
                <input
                  id="full_name"
                  {...register("fullName")}
                  defaultValue={fullName}
                  placeholder="Your full name"
                  className="w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3"
                />
              </div>
            </div>

            <div className="sm:flex gap-5">
              {/* nationality */}
              <div className="w-full">
                <label htmlFor="nationality" className="text-dark text-sm">
                  Nationality:
                </label>
                <input
                  id="nationality"
                  {...register("nationality")}
                  defaultValue={nationality}
                  placeholder="e.g. Dhaka, Bangladesh"
                  className="w-full border  text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3"
                />
              </div>

              {/* phone */}
              <div className="w-full">
                <label htmlFor="number" className="text-dark text-sm">
                  Contact Number:
                </label>
                <input
                  id="number"
                  {...register("phone")}
                  defaultValue={phone}
                  placeholder="New Phone Number"
                  className="w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3"
                />
              </div>
            </div>
            {/* Language */}
            <div className="w-full">
              <label htmlFor="language" className="text-dark text-sm">
                Language:
              </label>
              <input
                id="language"
                {...register("languages")}
                defaultValue={languages}
                placeholder="Type Language"
                className="w-full border  text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3"
              />
            </div>
            {/* About */}
            <div className="w-full">
              <label htmlFor="about" className="text-dark text-sm">
                About yourself:
              </label>
              <textarea
                id="about"
                {...register("description")}
                defaultValue={description}
                placeholder="Write about your professional life within 250 words"
                className="w-full h-32 border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3"
              />
            </div>

            <input
              className="text-center px-3 md:px-5 py-1 md:py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white mt-2 sm:mt-5 cursor-pointer"
              type="submit"
              value="Save Changes"
            />
          </form>
        </CustomModal>
      )}
    </section>
  );
};

export default BoatProfile;
