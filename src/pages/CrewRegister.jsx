import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// icons image
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import user2 from "../assets/images/user-3.png";
import user from "../assets/images/user2.png";

// internal files
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaUserTie } from "react-icons/fa6";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "react-toastify";
import InputNationality from "../components/InputNationality";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const CrewRegister = () => {
    const [Axios] = useAxios();
    const { signUpUser, profileUpdate } = useAuth();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [nationality, setNationality] = useState(null);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        if (data.password !== data.retypePassword) {
            return toast.error("password did not match!", {
                position: "top-right",
                autoClose: 3000,
            });
        }

        if (nationality === '') {
            return toast.warning("Please select nationality!", {
                position: "top-right",
                autoClose: 3000,
            });
        }

        const newData = {
            surname: data?.surname,
            email: data?.email,
            fullName: data?.fullName,
            gender: data?.gender,
            phone: data?.phone,
            experience: data?.experience,
            nationality: nationality,
            role: "crew",
            birthDay: `${data?.day}, ${data?.month} , ${data?.year}`,
        };

        signUpUser(data.email, data.password)
            .then((result) => {
                profileUpdate(result?.user, data?.fullName, data?.pictures).then(
                    (res) => {
                        Axios.post("/users", newData).then((data) => {
                            if (data.status === 200) {
                                navigate("/sign-up-step/crew-establishment", {
                                    replace: true,
                                });
                            }
                        });
                    }
                );
            })
            .catch((err) => {
                toast.error("Something Wrong!");
                console.log(err);
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
        <div className="bg-white bg-opacity-90 px-5 sm:px-10 py-10 md:px-[93px] md:py-[30px] mt-16 rounded-[10px]">
            <Helmet>
                <title> Crew Register | Anyvessel</title>
            </Helmet>

            <div className="max-w-[715px] mx-auto text-center mb-12">
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
                <div className="md:grid md:grid-cols-2 flex flex-col md:gap-x-[37px] gap-y-12 text-sm">
                    {/* surname */}
                    <label
                        htmlFor="surname"
                        className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 ${errors.surname && 'border border-red-500'}`}
                    >
                        <input
                            id="surname"
                            placeholder="Surname"
                            {...register("surname", { required: true })}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={user} alt="surname" />
                    </label>

                    {/* Full name */}
                    <label
                        htmlFor="full_name"
                        className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 ${errors.fullName && 'border border-red-500'}`}
                    >
                        <input
                            id="full_name"
                            placeholder="Full name"
                            {...register("fullName", { required: true })}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={user2} alt="fullName" />
                    </label>

                    {/* Email address */}
                    <label
                        htmlFor="email"
                        className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 ${errors.email && 'border border-red-500'}`}
                    >
                        <input
                            id="email"
                            type="email"
                            placeholder="Email address"
                            {...register("email", { required: true })}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={email} alt="email" />
                    </label>

                    {/* Phone number */}
                    <label
                        htmlFor="phone"
                        className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 ${errors.phone && 'border border-red-500'}`}
                    >
                        <input
                            id="phone"
                            type="number"
                            placeholder="Phone number"
                            {...register("phone", { required: true })}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={phone} alt="phone" />
                    </label>

                    {/* password */}
                    <label
                        htmlFor="password"
                        className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 ${errors.password && 'border border-red-500'}`}
                    >
                        <input
                            id="password"
                            type={`${isShowPassword ? "text" : "password"}`}
                            placeholder="Password"
                            {...register("password", { required: true })}
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
                        className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 ${errors.retypePassword && 'border border-red-500'}`}
                    >
                        <input
                            id="retypePassword"
                            type={`${isShowPassword ? "text" : "password"}`}
                            placeholder="Retype password"
                            {...register("retypePassword", { required: true })}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <span
                            className="cursor-pointer"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <LuEye /> : <LuEyeOff />}
                        </span>
                    </label>

                    {/* Experience */}
                    <label
                        htmlFor="experience"
                        className={`flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2 ${errors.experience && 'border border-red-500'}`}
                    >
                        <input
                            id="experience"
                            type="number"
                            placeholder="User Experience"
                            {...register("experience", { required: true })}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <FaUserTie />
                    </label>

                    {/* nationality */}
                    <InputNationality
                        setNationality={setNationality}
                    />

                    {/* gender */}
                    <div className={`flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 ${errors.gender && 'border border-red-500'}`}>
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
                                    {...register("gender", { required: true })}
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
                                    {...register("gender", { required: true })}
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* Birthday */}
                    <div className={`flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 ${errors.year && 'border border-red-500'} ${errors.month && 'border border-red-500'} ${errors.day && 'border border-red-500'}`}>
                        <span className="text-darkBlue pl-[10px]">Birthday</span>
                        <div className="px-[10px] flex items-center gap-2 sm:gap-[30px]">
                            {/* year */}
                            <div className="sm:px-[3px] py-[7px]">
                                <select
                                    {...register("year", { required: true })}
                                    className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px] cursor-pointer"
                                >
                                    <option value="">Year</option>
                                    {yearsRange &&
                                        yearsRange.map((y) => (
                                            <option className="!cursor-pointer" key={y} value={y}>
                                                {y}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* month */}
                            <div className="sm:px-[3px] py-[7px]">
                                <select
                                    {...register("month", { required: true })}
                                    className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-2 py-[3px] cursor-pointer"
                                >
                                    <option value="">Month</option>
                                    {months &&
                                        months.map((m) => (
                                            <option className="cursor-pointer" key={m} value={m}>
                                                {m}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* day */}
                            <div className="sm:px-[3px] py-[7px]">
                                <select
                                    {...register("day", { required: true })}
                                    className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px] cursor-pointer"
                                >
                                    <option value="">Day</option>
                                    {daysRange &&
                                        daysRange.map((d) => (
                                            <option className="cursor-pointer" key={d} value={d}>
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

export default CrewRegister;
