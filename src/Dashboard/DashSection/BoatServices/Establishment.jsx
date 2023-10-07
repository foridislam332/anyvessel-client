import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// icons image
import user2 from "../../../assets/images/user-3.png";

// internal file
import useAuth from "../../../hooks/useAuth";

const Establishment = () => {
  const { createUser, upDateProfile } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const { day, month, ownerName, paperPhoto, businessLogo, year } = data;

    const newData = {
      ownerName,
      paperPhoto,
      businessLogo,
      date: { day, month, year },
    };

    console.log("newData ", newData);

    //  createUser(email, password)
    //    .then((result) => {
    //      upDateProfile(result.user, data.fullName, data?.pictures).then(
    //        (res) => {
    //          console.log("upDateProfile ", upDateProfile);
    //          axios
    //            .post("http://localhost:5000/boat-service", signUpData)
    //            .then((data) => {
    //              if (data.status === 200) {
    //                console.log(data);
    //                navigate("/", { replace: true });
    //              }
    //            });
    //        }
    //      );
    //    })
    //    .catch((err) => {
    //      console.log(err);
    //    });
    // axios
    //   .post("http://localhost:5000/boat-service", signUpData)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
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

          {/* business Logo */}
          <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 w-full">
            <label className="pl-2 w-full" htmlFor="businessLogo">
              UPLOAD BUSINESS PHOTO OR LOGO
            </label>
            <input
              id="businessLogo"
              type="file"
              placeholder="UPLOAD BUSINESS PHOTO OR LOGO"
              {...register("businessLogo")}
              className="focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
          </div>

          {/* business paper */}
          <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 w-full">
            <label className="pl-2 w-full" htmlFor="paperPhoto">
              Upload wall paper photo
            </label>

            <input
              id="paperPhoto"
              type="file"
              placeholder="UPLOAD BUSINESS PHOTO OR LOGO"
              {...register("paperPhoto")}
              className="focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
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

export default Establishment;
