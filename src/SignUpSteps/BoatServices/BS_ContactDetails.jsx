import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// icons image
import emailIcon from "../../assets/images/email.png";
import facebookIcon from "../../assets/images/facebook.png";
import instaIcon from "../../assets/images/insta.png";
import internetIcon from "../../assets/images/internet.png";
import phoneIcon from "../../assets/images/phone.png";
import skypeIcon from "../../assets/images/skype.png";
import user2 from "../../assets/images/user-3.png";

// internal file
import { useState } from "react";
import InputField from "../../components/InputField";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

function validateEmail(email) {
  const regex = `/^(([^<>()[\]\\.,;:\s@"]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`;
  return regex.test(email);
}

// number validation
function validatePhoneNumber(phoneNumber) {
  const regex = /^\d{10}$/;
  return regex.test(phoneNumber);
}

// skype validation
function validateSkypeLink(skypeLink) {
  const regex = /^skype:[a-z0-9_.-]+?$/i;
  return regex.test(skypeLink);
}

// website validation
function validateWebsiteLink(websiteLink) {
  const regex =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//\/=]*)$/i;
  return regex.test(websiteLink);
}

// facebook validation
function validateFacebookLink(facebookLink) {
  console.log("facebookLink ", facebookLink);
  const regex = /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9\.]+$/i;
  return regex.test(facebookLink);
}

// Instagram validation
function validateInstagramLink(instagramLink) {
  const regex = /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_.-]+$/i;
  return regex.test(instagramLink);
}

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
  const [error, setError] = useState(null);
  const [inputData, setInputData] = useState({
    Skype: "",
    Website: "",
    contactEmail: "",
    contactName: "",
    facebook: "",
    instagram: "",
    phoneNumber: "",
  });
  const [validation, setValidation] = useState({
    Skype: false,
    Website: false,
    contactEmail: false,
    facebook: false,
    instagram: false,
    phoneNumber: false,
  });

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e?.id]: e?.value,
    });
  };

  const onSubmit = (data) => {
    const newData = {
      Skype: inputData?.Skype,
      Website: inputData?.Website,
      contactEmail: inputData?.contactEmail,
      contactName: inputData?.contactName,
      facebook: inputData?.facebook,
      instagram: inputData?.instagram,
      phoneNumber: inputData?.phoneNumber,
      userEmail: user?.email,
    };

    const {
      Skype,
      Website,
      contactEmail,
      contactName,
      facebook,
      instagram,
      phoneNumber,
      userEmail,
    } = newData;

    console.log("newData - 1 ", newData);

    // error handle
    const errorArr = [];
    for (const key of Object.keys(newData)) {
      if (
        newData[key] == "" ||
        newData[key] == null ||
        newData[key] == undefined
      ) {
        errorArr.push(key);
      }
    }
    if (errorArr.length) return setError(errorArr);
    setError(null);

    // // validation
    // for (const key of Object.keys(newData)) {
    //   // console.log("newData[key] ", { [key]: newData[key] });
    //   switch ([key]) {
    //     case "Skype":
    //       let skypeV = validateSkypeLink(newData[key]);
    //       setValidation({ [key]: skypeV });
    //       break;

    //     case "Website":
    //       setValidation({ [key]: validateWebsiteLink(newData[key]) });
    //       break;

    //     case "contactEmail":
    //       let emailV = validateEmail(newData[key]);
    //       console.log("emailV ", emailV);
    //       setValidation({ [key]: emailV });
    //       break;

    //     case "facebook":
    //       const facebookV = validateFacebookLink(newData[key]);
    //       setValidation({ [key]: facebookV });
    //       break;

    //     case "phoneNumber":
    //       setValidation({ [key]: validatePhoneNumber(newData[key]) });
    //       break;

    //     case "instagram":
    //       setValidation({ [key]: validateInstagramLink(newData[key]) });
    //       break;

    //     case "userEmail":
    //       setValidation({ [key]: validateEmail(newData[key]) });
    //       break;

    //     default:
    //       true;
    //       break;
    //   }
    // }

    // console.log("newData - 2 ", newData);
    // console.log("validation - 2 ", validation);

    Axios.patch("boat-services-data-contact", newData)
      .then((res) => {
        navigate("/sign-up-step/boat-service", {
          replace: true,
        });
        if (res?.status === 200) {
          navigate("/sign-up-step/boat-service", {
            replace: true,
          });
        }
      })
      .catch((err) => {
        toast.error("Somethings else!");
        // console.log(err);
      });
  };

  return (
    <div className="bg-white bg-opacity-90 px-5 sm:px-10 pb-10 md:px-[93px] md:pb-[30px] mt-6 rounded-[10px]">
      <div className="max-w-[715px] mx-auto text-center mb-6">
        <h2 className="text-lightBlue text-[19px]">Contact details</h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          {/* Name  */}
          <InputField
            id="contactName"
            handle={handleInputChange}
            placeholder="Name "
            icons={user2}
          />

          {/* Email address */}
          <InputField
            id="contactEmail"
            handle={handleInputChange}
            placeholder="Email address"
            icons={emailIcon}
          />

          {/* Phone number */}
          <InputField
            id="phoneNumber"
            type="number"
            handle={handleInputChange}
            placeholder="Phone number"
            icons={phoneIcon}
          />

          {/* Skype */}
          <InputField
            id="Skype"
            handle={handleInputChange}
            placeholder="Skype"
            icons={skypeIcon}
          />

          {/* Website */}
          <InputField
            id="Website"
            handle={handleInputChange}
            placeholder="Website"
            icons={internetIcon}
          />

          {/* Facebook */}
          <InputField
            id="facebook"
            handle={handleInputChange}
            placeholder="Facebook"
            icons={facebookIcon}
          />

          {/* instagram */}
          <InputField
            id="instagram"
            handle={handleInputChange}
            placeholder="Instagram"
            icons={instaIcon}
          />
        </div>

        {/* show Error */}
        {error && (
          <p className="text-red-400 text-center mt-5">
            {!error?.message ? (
              <span> {error.join(", ")} - Please provide input </span>
            ) : (
              <span> {error?.message} </span>
            )}
          </p>
        )}

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
