import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { BiCalendar } from "react-icons/bi";
import { BsCamera, BsFillFlagFill, BsTelephoneOutbound } from "react-icons/bs";
import { LuLanguages } from "react-icons/lu";
import { MdAccountCircle, MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
// import CustomModal from "../components/CustomModal";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import useAxios from "../hooks/useAxios";
import BoatProfileUpdate from "./BoatProfileUpdate";

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

  // image uploading function
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const upLoadFC = (event, route, name) => {
    const toastId = toast.loading("Please wait...");
    console.log("cover picture ", event);
    const picture = event?.target?.files[0];
    const formData = new FormData();
    formData.append("image", picture);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          toast.update(toastId, {
            render: `${name} image Upload Success!`,
            type: "loading",
            isLoading: true,
            autoClose: true,
          });
          const image = imageResponse.data.display_url;
          const profile = {
            url: image,
            email: email,
          };
          Axios.patch(`${route}`, profile)
            .then((res) => {
              if (res.status === 200) {
                refetch();
                toast.update(toastId, {
                  render: `${name} photo Update Success!`,
                  type: "success",
                  isLoading: false,
                  autoClose: true,
                });
              }
            })
            .catch((error) => {
              console.log(error);
              toast.update(toastId, {
                render: `${name} photo saving something went wrong"`,
                type: "error",
                isLoading: false,
                autoClose: true,
              });
            });
        }
      })
      .catch((err) => {
        toast.update(toastId, {
          render: `${name} photo uploading something went wrong"`,
          type: "error",
          isLoading: false,
          autoClose: true,
        });
      });
  };

  const handleCoverPictureUpload = (event) => {
    upLoadFC(event, "/update-boat-cover", "Cover");
  };
  const handlePictureUpload = (event) => {
    upLoadFC(event, "/update-boat-profile", "Profile");
  };
  const [isTabs, setIsTabs] = useState("profile");

  return (
    <section>
      <Helmet>
        <title> {fullName} - Profile | Anyvessel</title>
      </Helmet>

      {isTabs === "profile" ? (
        <>
          {/* show profile */}
          <div>
            <div className="relative">
              <img className="w-full h-[400px]" src={picture} alt="" />
              <label
                htmlFor="coverPhoto"
                className="bg-white rounded-full border-2 border-midBlue bg-lightDark/80 top-1 right-1 hover:bg-lightDark text-2xl p-[5px] z-20 cursor-pointer  absolute "
              >
                <input
                  id="coverPhoto"
                  name="picture"
                  type="file"
                  className="hidden"
                  onChange={handleCoverPictureUpload}
                />
                <p className="flex items-center justify-center gap-1 group">
                  <span className="text-sm invisible group-hover:visible w-0 group-hover:w-auto h-0 group-hover:h-auto transition duration-300">
                    update cover photo
                  </span>
                  <span className="inline-block">
                    <BsCamera />
                  </span>
                </p>
              </label>
            </div>
            <div className="flex justify-between mr-3 mt-2">
              <div className="flex gap-2">
                <figure>
                  <img
                    src={identityPhoto}
                    className="w-10 h-10 rounded-full"
                    alt={fullName}
                  />
                </figure>
                <div>
                  <div className="flex gap-2">
                    <h2 className="text-2xl font-semibold">{fullName}</h2>
                    <div className="mt-2 text-sm flex gap-1">
                      <p>{age}</p>,<p>{gender}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="flex items-center gap-1 border-2 border-midBlue rounded-full px-1">
                      <MdAccountCircle className="text-xl " />
                      <span className=""> PIV</span>
                    </div>
                    <p>Personal Identity Verified</p>
                  </div>
                </div>
              </div>

              <div className="relative ">
                <div>
                  {identityPhoto ? (
                    <img
                      className="w-40 h-40 rounded-full border-2 border-midBlue  -mt-24"
                      src={identityPhoto}
                      // alt={name}
                    />
                  ) : (
                    <img
                      className="w-40 h-40 rounded-full border-2 border-midBlue  -mt-24"
                      src="https://i.ibb.co/wNJtyRX/image-14.png"
                    />
                  )}
                </div>
                <label
                  htmlFor="photo"
                  title="Update your profile picture"
                  className="bg-white rounded-full border border-black bg-lightDark/80 bottom-2 right-1 hover:bg-lightDark text-2xl p-[5px] z-20 cursor-pointer  absolute "
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
              <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 rounded-full">
                <BsFillFlagFill />{" "}
                <span className="text-xs "> {nationality?.name?.common}</span>
              </p>
              {languages?.length && (
                <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 rounded-full">
                  <LuLanguages />
                  <span className="text-xs "> {languages?.join(", ")}</span>
                </p>
              )}
            </div>
            <div className="flex gap-3 py-2 items-center">
              <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 rounded-full">
                <MdOutlineEmail /> <span className="text-xs "> {email}</span>
              </p>
              <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 rounded-full">
                <BsTelephoneOutbound />{" "}
                <span className="text-xs "> {phone}</span>
              </p>
            </div>
            <div className="mt-4 shadow-md rounded-lg p-5">
              <p className="underline mb-2">About Me :</p>
              {description}
            </div>

            {/* TODO  */}
            <div className="mt-4 shadow-md rounded-lg p-5">
              <p className="flex items-center gap-1">
                <BiCalendar /> <span className="uppercase">Available</span>
                <span className="">currently unavailable</span>
                <span className="text-xs">since {birthDay}</span>
              </p>
            </div>

            <div className="mt-4 shadow-md rounded-lg p-5">
              <p className="">Unavailable - Found a Crew</p>
            </div>
          </div>
        </>
      ) : isTabs === "infoUpDate" ? (
        <>
          <BoatProfileUpdate user={user} refetch={refetch} />
        </>
      ) : (
        <></>
      )}

      <div className="mt-4 rounded-lg p-5 flex justify-center">
        {isTabs === "profile" ? (
          <ButtonPrimary onClick={() => setIsTabs("infoUpDate")}>
            Update Profile Information
          </ButtonPrimary>
        ) : (
          <ButtonPrimary onClick={() => setIsTabs("profile")}>
            Go To Profile
          </ButtonPrimary>
        )}
      </div>
    </section>
  );
};

export default BoatProfile;
