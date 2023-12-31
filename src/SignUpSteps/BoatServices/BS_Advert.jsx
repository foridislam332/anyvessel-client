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

const BS_Advert = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [Axios] = useAxios();
  const [advertQ, setAdvert] = useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { advert } = data;

    const newData = {
      userEmail: user?.email,
      advert: advertQ,
    };

    Axios.patch("boat-services-data-advert", newData)
      .then((res) => {
        if (res?.status === 200) {
          navigate("/profile", { replace: true });
          toast.success("Boat services location submitted successful!");
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
        <h2 className="text-[#13518E] text-[25px]">Services to provide</h2>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          {/* Advert */}
          <label htmlFor="advert" className="space-y-2">
            <span className="text-[#13518E]">Advert</span>
            <ReactQuill
              id="advert"
              theme="snow"
              rows="7"
              value={advertQ}
              modules={modules}
              {...register(`advert`)}
              placeholder="In few words describe the services you provide activities for your profile advert…"
              onChange={setAdvert}
              className="h-60 placeholder:text-[#13518E66] "
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

export default BS_Advert;
