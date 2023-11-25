import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// icons image
import angle from "../assets/images/angle-down.png";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import user2 from "../assets/images/user-3.png";
import user from "../assets/images/user2.png";

// internal file
import { toast } from "react-toastify";
import InputField from "../components/InputField";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { Helmet } from "react-helmet";

const BoatServicesRegister = () => {
  const [Axios] = useAxios();
  const { createUser, upDateProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      day,
      email,
      fullName,
      gender,
      month,
      password,
      phone,
      retypePassword,
      surname,
      year,
    } = data;

    if (password !== retypePassword) {
      return alert("password did not match");
    }

    const signUpData = {
      fullName,
      surName: surname,
      gender,
      phone,
      email,
      password,
      role: "boatService",
      birthDay: `${day} , ${month} , ${year}`,
    };

    createUser(email, password)
      .then((result) => {
        upDateProfile(result.user, data.fullName, data?.pictures).then(
          (res) => {
            Axios.post("boat-service", signUpData)
              .then((data) => {
                if (data.status === 200) {
                  navigate("/sign-up-step/boat-services-establishment", {
                    replace: true,
                  });
                }
              })
              .catch((err) => toast.error("Something Wrong!"));
          }
        );
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Something Wrong!");
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
      <Helmet>
        <title>Boat Services Register | Anyvessel</title>
      </Helmet>

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
        <div className="md:grid md:grid-cols-2 flex flex-col md:gap-x-[37px] gap-y-12 text-sm">
          {/* surname */}
          <InputField
            id="surname"
            placeholder="Surname"
            icons={user}
            {...register("surname")}
          />

          {/* Full name */}
          <InputField
            id="full_name"
            placeholder="Full name"
            icons={user2}
            {...register("fullName")}
          />

          {/* Email address */}
          <InputField
            id="email"
            type="email"
            placeholder="Email address"
            icons={email}
            {...register("email")}
          />

          {/* Phone number */}
          <InputField
            id="phone"
            type="number"
            placeholder="Phone number"
            icons={phone}
            {...register("phone")}
          />

          {/* password */}
          <InputField
            id="password"
            type="password"
            placeholder="Password"
            icons={angle}
            {...register("password")}
          />

          {/* Retype password */}
          <InputField
            id="retypePassword"
            type="password"
            placeholder="Retype password"
            icons={angle}
            {...register("retypePassword")}
          />

          {/* gender */}
          <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:border-blue-500 focus-within:scale-105 focus-within:shadow-md focus-within:shadow-midBlue">
            <span className="text-darkBlue pl-[10px]">Gender</span>
            <div className="p-[10px] flex items-center gap-[30px]">
              <label htmlFor="male" className="text-darkBlue flex gap-[19px]">
                <input
                  id="male"
                  name="gender"
                  type="radio"
                  value="male"
                  {...register("gender")}
                />
                Male
              </label>

              <label htmlFor="female" className="text-darkBlue flex gap-4">
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
          <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 focus-within:scale-105 focus-within:shadow-md focus-within:shadow-midBlue">
            <span className="text-darkBlue pl-[10px]">Birthday : </span>
            <div className="px-[10px] flex items-center gap-2 sm:gap-[30px]">
              {/* year */}
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("year", { required: true })}
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px] focus-within:border-blue-500 focus-within:scale-105 focus-within:shadow-md focus-within:shadow-midBlue"
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
                  {...register("month", { required: true })}
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-2 py-[3px] focus-within:scale-105 focus-within:shadow-md focus-within:shadow-midBlue"
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
                  className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px] focus-within:scale-105 focus-within:shadow-md focus-within:shadow-midBlue"
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

export default BoatServicesRegister;
