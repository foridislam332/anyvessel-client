import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import uploadImg from "../assets/images/upload-ico.png";
import useAxios from "../hooks/useAxios";

export default function BoatOwnerImgGallery({ userId }) {
  const [images, setImages] = useState([]);
  const [vesselImages, setVesselImages] = useState([]);
  const [Axios] = useAxios();
  const [galleryId, setGalleryId] = useState("");

  useEffect(() => {
    userId &&
      Axios.get(`/gallery/${userId}`)
        .then((res) => {
          const data = res?.data?.data;
          setImages(data?.vesselImages);
          setGalleryId(data?._id);
        })
        .catch((err) => {
          console.log(`Axios.get(/gallery/`, err);
        });
  }, [userId, vesselImages]);

  // Image hosting
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const handleVesselPhotoUpload = async (event) => {
    const picture = event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);

    try {
      const response = await axios.post(image_hosting_url, formData);
      setVesselImages([
        ...vesselImages,
        { image: response?.data?.data?.display_url },
      ]);
      toast.success("Photo uploaded!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // photo gallery save
  const handleSaveGallery = () => {
    if (userId) {
      const newData = {
        userId: userId,
        galleryId,
        vesselImages: [...images, ...vesselImages],
      };
      newData &&
        Axios.post("/gallery", newData)
          .then((res) => {
            const data = res?.data?.data;
            setImages(data?.vesselImages);
            // setVesselImages([]);
            // setSaved(!saved);
          })
          .catch((err) => console.log("gallery image save err", err));
    }
  };

  return (
    <>
      <div className="flex justify-between gap-2 items-center flex-wrap">
        <p className="text-black font-light mb-2">Photo Gallery</p>

        {vesselImages?.length ? (
          <button
            onClick={handleSaveGallery}
            className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20"
          >
            Save
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px]">
        {images?.length
          ? images?.map((image, i) => (
              <div key={i} className="relative">
                <img
                  className="h-44 w-full object-cover object-center rounded-lg"
                  src={image?.image}
                  alt=""
                />
                <AiFillHeart
                  size="30"
                  className="absolute top-2 right-3 text-white"
                />
              </div>
            ))
          : null}
        <label
          htmlFor="vessel"
          className="p-4 h-44 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
        >
          <input
            id="vessel"
            name="vessel_image"
            type="file"
            accept="image/*"
            onChange={handleVesselPhotoUpload}
            className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
          />
          <img src={uploadImg} alt="upload img" />
          <p className="text-center text-darkBlue font-light mt-1">
            Click to upload image
          </p>
        </label>
      </div>
    </>
  );
}
