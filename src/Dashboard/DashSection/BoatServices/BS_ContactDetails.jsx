import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// icons image
import user2 from "../../../assets/images/user-3.png";

// internal file
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const BS_ContactDetails = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const newData = {
      userEmail: user?.email,
      ...data,
    };

    Axios.patch("boat-services-data-contact", newData)
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
        <h2 className="text-lightBlue text-[19px]">Contact details</h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          {/* Name */}
          {inputField("Name", "Name", "contactName", user2)}
          {/* Email address */}
          {inputField("Email", "Email address", "contactEmail", user2)}
          {/* Phone number */}
          {inputField("number", "Phone number", "phoneNumber", user2)}
          {/* Skype */}
          {inputField("skype", "Skype", "Skype", user2)}
          {/* Website */}
          {inputField("website", "website", "Website", user2)}
          {/* Facebook */}
          {inputField("facebook", "Facebook", "facebook", user2)}
          {/* instagram */}
          {inputField("instagram", "Instagram", "instagram", user2)}
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

export default BS_ContactDetails;
