import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// internal file
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

// text editor module
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
  ],
};

const Cr_Advert = () => {
  const { user } = useAuth();
  const [Axios] = useAxios();
  const [advertQ, setAdvertQ] = useState("");
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
      advert: advertQ,
    };

    Axios.patch("crew-data-advert", newData)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Boat services location submitted successful!");
          navigate("/profile");
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
        <h2 className="text-lightBlue text-[19px]">Crew Member</h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          {/* Advert */}
          <label htmlFor="advert" className="space-y-2">
            <span className="text-[#13518E]">Advert</span>
            <ReactQuill
              theme="snow"
              value={advertQ}
              modules={modules}
              name="advert"
              {...register(`advert`)}
              placeholder="Describe Your Job Advert best ways..."
              onChange={setAdvertQ}
              className="h-60 w-full focus:outline-none border-none p-[10px] placeholder:text-darkBlue"
            />
          </label>
          <div>

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

export default Cr_Advert;
