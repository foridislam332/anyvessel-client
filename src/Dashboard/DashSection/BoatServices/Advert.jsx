import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// icons image

// internal file
import useAuth from "../../../hooks/useAuth";

const Advert = () => {
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

    // console.log("newData ", newData);

    // axios
    //   .post("http://localhost:5000/boat-service", signUpData)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  const inputField = (idName, placeholder, data, icons) => {
    return (
      <label
        htmlFor={idName}
        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
      >
        <input
          id={idName}
          placeholder={placeholder}
          {...register(`${data}`)}
          className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
        />
        <img src={icons} alt={placeholder} />
      </label>
    );
  };

  return (
    <div className="bg-white bg-opacity-90 px-5 sm:px-10 pb-10 md:px-[93px] md:pb-[30px] mt-6 rounded-[10px]">
      <div className="max-w-[715px] mx-auto text-center mb-6">
        <h2 className="text-lightBlue text-[19px]">Services to provide</h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          {/* Advert */}
          <textarea
            rows="7"
            className="border border-blue rounded-lg outline-none p-3"
            placeholder="In few words describe the services you provide activities for your profile advert…"
          ></textarea>
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

export default Advert;
