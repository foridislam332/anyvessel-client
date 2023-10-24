import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// icons image
// icons image
import user2 from "../../assets/images/user-3.png";
import emailIcon from "../../assets/images/email.png";
import phoneIcon from "../../assets/images/phone.png";
import skypeIcon from "../../assets/images/skype.png";
import facebookIcon from "../../assets/images/facebook.png";
import instaIcon from "../../assets/images/insta.png";
import internetIcon from "../../assets/images/internet.png";
// internal file
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Cr_ContactDetails = () => {
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
    const newData = {
      userEmail: user?.email,
      ...data,
    };

    Axios.patch("crew-data-contact", newData)
      .then((res) => {
        navigate("/sign-up-step/crew-service", { replace: true });
      })
      .catch((err) => {
        toast.error("Somethings else!");
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
        <img className="max-w-[18px] opacity-70" src={icons} alt={placeholder} />
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
          {inputField("Email", "Email address", "contactEmail", emailIcon)}
          {/* Phone number */}
          {inputField("number", "Phone number", "phoneNumber", phoneIcon)}
          {/* Skype */}
          {inputField("skype", "Skype", "Skype", skypeIcon)}
          {/* Website */}
          {inputField("website", "website", "Website", internetIcon)}
          {/* Facebook */}
          {inputField("facebook", "Facebook", "facebook", facebookIcon)}
          {/* instagram */}
          {inputField("instagram", "Instagram", "instagram", instaIcon)}
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

export default Cr_ContactDetails;
