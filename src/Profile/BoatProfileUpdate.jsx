import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ButtonPrimary from "../components/Buttons/ButtonPrimary";
import InputNationality from "../components/Inputs/InputNationality";
import LanguagesSelect from "../components/Inputs/LanguagesSelect";
import useAxios from "../hooks/useAxios";

export default function BoatProfileUpdate({ user, refetch }) {
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
    birthDay,
  } = user;
  const [updatedNationality, setUpdatedNationality] = useState(nationality);
  const [selectedLanguages, setSelectedLanguages] = useState(languages || []);
  const [Axios] = useAxios();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onBasicInfoSubmit = (data) => {
    const updateData = {
      email: email,
      fullName: data.fullName,
      nationality: updatedNationality,
      phone: data.phone,
      languages: selectedLanguages,
      description: data.description,
    };
    console.log("updated data ", updateData);
    Axios.patch("/boat/basic", updateData)
      .then((res) => {
        console.log("res ", res);
        if (res.status === 200) {
          refetch();
          toast?.success("Updated Successful?");
          // reset()
        }
      })
      .catch((error) => {
        console.log(error);
        toast?.error("Somethings plz Wait");
      });
  };

  return (
    <>
      <form className="text-black" onSubmit={handleSubmit(onBasicInfoSubmit)}>
        <h3 className="font-bold text-xl mb-2">
          Update Your Basic Profile Information
        </h3>

        <div className="sm:flex gap-5">
          {/* Name */}
          <div className="w-full">
            <label htmlFor="full_name" className="text-dark text-sm">
              Name:
            </label>
            <input
              id="full_name"
              {...register("fullName")}
              defaultValue={fullName}
              placeholder="Your full name"
              className="w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3"
            />
          </div>
        </div>

        <div className="sm:flex gap-5">
          {/* nationality */}
          <div className="w-full">
            <label htmlFor="nationality" className="text-dark text-sm">
              Nationality:
            </label>
            <InputNationality
              nationality={updatedNationality}
              setNationality={setUpdatedNationality}
            />
          </div>

          {/* phone */}
          <div className="w-full">
            <label htmlFor="number" className="text-dark text-sm">
              Contact Number:
            </label>
            <input
              id="number"
              {...register("phone")}
              defaultValue={phone}
              placeholder="New Phone Number"
              className="w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3"
            />
          </div>
        </div>
        {/* languages */}
        <div className="w-full">
          <LanguagesSelect
            selectedLanguages={selectedLanguages}
            setSelectedLanguages={setSelectedLanguages}
          />
        </div>

        {/* About */}
        <div className="w-full">
          <label htmlFor="about" className="text-dark text-sm">
            About yourself:
          </label>
          <textarea
            id="about"
            {...register("description")}
            defaultValue={description}
            placeholder="Write about your professional life within 250 words"
            className="w-full h-32 border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3"
          />
        </div>

        <ButtonPrimary type="submit">
          <span> Save Changes </span>
        </ButtonPrimary>
      </form>
    </>
  );
}
