import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// icons image

// internal file
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const ServiceLocation = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // form handle
  const onSubmit = (data) => {
    const { country, city, specify_address } = data;

    const newData = {
      userEmail: user?.email,
      country,
      city,
      specify_address,
    };

    Axios.patch("boat-services-data-location", newData)
      .then((res) => {
        console.log("response - ", res);

        if (res?.status === 200) {
          toast.success("Boat services location submitted successful!");
        }
      })
      .catch((err) => {
        toast.error("Somethings else!");
        console.log(err);
      });
  };

  return (
    <div className="bg-white bg-opacity-90 px-5 sm:px-10 pb-10 md:px-[93px] md:pb-[30px] mt-6 rounded-[10px]">
      <div className="max-w-[715px] mx-auto text-center mb-6">
        <h2 className="text-lightBlue text-[19px]">Location</h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          {/* Country */}
          <select
            className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]"
            {...register("country")}
            name="country"
            id="country"
          >
            <option value=""> Select Your Country </option>
            <option value="bangladesh"> Bangladesh </option>
            <option value="india"> India </option>
            <option value=""> India </option>
          </select>

          {/* City */}
          <select
            className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]"
            {...register("city")}
            name="city"
            id="city"
          >
            <option value=""> Select Your City </option>
            <option value="pabna"> Pabna </option>
            <option value="rajbari"> Rajbari </option>
            <option value="khulna"> khulna </option>
          </select>

          {/* Specify Address */}
          <label
            htmlFor="specifyAddress"
            className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
          >
            <input
              className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
              {...register("specify_address")}
              type="text"
              id="specifyAddress"
              placeholder="Add your specify address here"
            />
          </label>
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

export default ServiceLocation;