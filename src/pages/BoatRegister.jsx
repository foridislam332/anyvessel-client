import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

// icons image
import { LuEye, LuEyeOff } from "react-icons/lu";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import user2 from "../assets/images/user-3.png";
import user from "../assets/images/user2.png";
import InputNationality from "../components/InputNationality";
import LanguagesSelect from "../components/LanguagesSelect";
import UploadImage from "../components/UploadImage";
import useAxios from "../hooks/useAxios";

const BoatRegister = () => {
  const { createUser, upDateProfile } = useAuth();
  const navigate = useNavigate();
  const [Axios] = useAxios();
  const [picture, setPicture] = useState(null);
  const [identityPhoto, setIdentityPhoto] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [nationality, setNationality] = useState(null);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.retypePassword) {
      return toast.error("password did not match!", {
        position: "top-right",
        autoClose: 3000,
      });
    }

    if (picture === null || identityPhoto === null) {
      return toast.warning("Please Upload Photo!", {
        position: "top-right",
        autoClose: 3000,
      });
    }

    const newData = {
      surname: data.surname,
      email: data.email,
      fullName: data.fullName,
      description: data.description,
      gender: data.gender,
      languages: selectedLanguages,
      nationality: nationality,
      phone: data.phone,
      romance: data.romance,
      picture: picture,
      role: "boat",
      identityPhoto: identityPhoto,
      birthDay: `${data?.day}, ${data?.month} , ${data?.year}`,
    };

    createUser(data?.email, data?.password)
      .then((result) => {
        upDateProfile(result?.user, data?.fullName, picture).then((res) => {
          Axios.post("boats", newData).then((data) => {
            if (data.status === 200) {
              navigate("/", { replace: true });
            }
          });
        });
      })
      .catch((err) => {
        toast.error("Something Wrong!");
        // console.log(err);
      });
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
    <div className="bg-white bg-opacity-90 px-5 sm:px-10 py-10 md:px-[93px] md:py-[30px] mt-6 rounded-[10px]">
      <div className="max-w-[715px] mx-auto text-center mb-6">
        <h2 className="text-lightBlue text-[19px]">
          Register a Boat profile to find a crew member:
        </h2>
        <p className="text-lightBlue font-light">
          A Boat profile is to find a crew member for a boat, yacht, or ship
          that you own or represent.
        </p>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid md:grid-cols-2 flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          {/* surname */}
          <label
            htmlFor="surname"
            className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
          >
            <input
              id="surname"
              placeholder="Surname"
              {...register("surname")}
              className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
            <img src={user} alt="surname" />
          </label>

          {/* Full name */}
          <label
            htmlFor="full_name"
            className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
          >
            <input
              id="full_name"
              placeholder="Full name"
              {...register("fullName")}
              className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
            <img src={user2} alt="fullName" />
          </label>

          {/* Email address */}
          <label
            htmlFor="email"
            className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
          >
            <input
              id="email"
              type="email"
              placeholder="Email address"
              {...register("email")}
              className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
            <img src={email} alt="email" />
          </label>

          {/* Phone number */}
          <label
            htmlFor="phone"
            className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
          >
            <input
              id="phone"
              type="phone"
              placeholder="Phone number"
              {...register("phone")}
              className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
            <img src={phone} alt="phone" />
          </label>

          {/* password */}
          <label
            htmlFor="password"
            className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
          >
            <input
              id="password"
              type={`${isShowPassword ? "text" : "password"}`}
              placeholder="Password"
              {...register("password")}
              className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
            <span
              className="cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <LuEye /> : <LuEyeOff />}
            </span>
          </label>

          {/* Retype password */}
          <label
            htmlFor="retypePassword"
            className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
          >
            <input
              id="retypePassword"
              type={`${isShowPassword ? "text" : "password"}`}
              placeholder="Retype password"
              {...register("retypePassword")}
              className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
            <span
              className="cursor-pointer"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <LuEye /> : <LuEyeOff />}
            </span>
          </label>

          {/* gender */}
          <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2">
            <span className="text-darkBlue pl-[10px]">Gender</span>
            <div className="p-[10px] flex items-center gap-[30px]">
              <label
                htmlFor="male"
                className="text-darkBlue flex gap-[19px] cursor-pointer"
              >
                <input
                  id="male"
                  name="gender"
                  type="radio"
                  value="male"
                  {...register("gender")}
                />
                Male
              </label>

              <label
                htmlFor="female"
                className="text-darkBlue flex gap-4 cursor-pointer"
              >
                <input
                  id="female"
                  name="gender"
                  type="radio"
                  value="female"
                  {...register("gender")}
                />
                Female
              </label>
            </div>
          </div>

          {/* Birthday */}
          <div className="flex items-center gap-1 justify-between flex-wrap border-midBlue border rounded-[10px] overflow-hidden pr-2">
            <span className="text-darkBlue pl-[10px]">Birthday: </span>
            <div className="px-[10px] flex items-center flex-wrap gap-2 sm:gap-x-[30px]">
              {/* year */}
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("year", { required: true })}
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]"
                >
                  <option value="">Year</option>
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
                  <option value="">Month</option>
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

          {/* nationality */}
          <InputNationality
            nationality={nationality}
            setNationality={setNationality}
          />

          {/* languages */}
          <LanguagesSelect
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
          />

          {/* romance */}
          <div className="md:col-span-2 lg:col-span-1 flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2">
            <span className="text-darkBlue pl-[10px]">
              May concider romance with crew
            </span>
            <div className="p-[10px] flex items-center gap-[30px]">
              <label
                htmlFor="yes"
                className="text-darkBlue flex gap-[19px] cursor-pointer"
              >
                <input
                  id="yes"
                  name="romance"
                  type="radio"
                  value="yes"
                  {...register("romance")}
                />
                Yes
              </label>

              <label
                htmlFor="no"
                className="text-darkBlue flex gap-4 cursor-pointer"
              >
                <input
                  id="no"
                  name="romance"
                  type="radio"
                  value="no"
                  {...register("romance")}
                />
                No
              </label>
            </div>
          </div>

          {/* Upload identity photo */}
          <UploadImage id="identityPhoto" setUrl={setIdentityPhoto} />

          {/* Upload your picture */}
          <UploadImage id="picture" setUrl={setPicture} />

          {/* description */}
          <textarea
            rows={3}
            id="description"
            placeholder="A small description about you"
            {...register("description")}
            className="col-span-2 w-full focus:outline-none p-[10px] text-darkBlue placeholder:text-darkBlue border-midBlue border rounded-[10px]"
          />
        </div>

        {/* buttons */}
        <div className="mt-6 w-fit mx-auto space-x-4">
          <button
            type="submit"
            className="text-white text-sm font-light bg-blue bg-opacity-90 px-7 md:px-14 py-[9px] rounded-lg hover:bg-transparent hover:text-blue border border-blue duration-300"
          >
            Register
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

export default BoatRegister;
