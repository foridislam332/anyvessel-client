import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UploadImage = ({ id, setUrl, multipleImages = false }) => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState(multipleImages ? [] : "");

  // Image hosting
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  //  handle upload functionality
  const handleUpload = async (event) => {
    setUploadLoading(true);
    const picture = multipleImages ? event.target.files : event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);

    try {
      const response = await axios.post(image_hosting_url, formData);
      console.log("response ", response);

      const url = response.data.data.display_url;
      setUploadedPhoto(multipleImages ? [...uploadedPhoto, url] : url);
      setUploadLoading(false);
      toast.success("Photo uploaded!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      setUploadLoading(false);
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => setUrl(uploadedPhoto), [uploadedPhoto]);

  return (
    <div>
      {uploadLoading ? (
        <span
          className="loading loading-spinner loading-md"
          title="Image uploading"
        ></span>
      ) : (
        <label
          //   htmlFor="identityPhoto"

          htmlFor={id}
          className="md:col-span-2 lg:col-span-1 flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden py-2 lg:py-0 pr-2"
        >
          {!uploadedPhoto?.length ? (
            <p className="text-darkBlue pl-[10px]">
              Personal Identity verification{" "}
              <span className="text-lightBlue text-[12px]">
                (upload a passport photo)
              </span>
            </p>
          ) : (
            <div className="text-darkBlue pl-[10px] flex items-center flex-wrap justify-start">
              {multipleImages ? (
                uploadedPhoto?.length &&
                uploadedPhoto?.map((url, idx) => (
                  <figure className="w-28 h-28 p-1 bg-white shadow">
                    <img className="w-full h-full" src={url} alt="" />
                  </figure>
                ))
              ) : (
                <figure className="w-28 h-28 p-1 bg-white shadow">
                  <img className="w-full h-full" src={uploadedPhoto} alt="" />
                </figure>
              )}
            </div>
          )}
          <>
            <input
              // id="identityPhoto"
              // name="identityPhoto"
              id={id}
              name={id}
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
            />
            <label
              htmlFor={id}
              //   type="button"
              //   onClick={() => document.getElementById({ id }).click()}
              className="text-white bg-blue px-5 py-1 rounded-[26px] hover:bg-transparent hover:text-blue border border-blue duration-300"
            >
              Upload
            </label>
          </>
        </label>
      )}
    </div>
  );
};

export default UploadImage;
