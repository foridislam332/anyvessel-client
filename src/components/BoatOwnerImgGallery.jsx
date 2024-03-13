import axios from "axios";
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import uploadImg from "../assets/images/upload-ico.png";
import useAxios from "../hooks/useAxios";
import { CgSpinner } from "react-icons/cg";
import Swal from "sweetalert2";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const generateImgUrl = (file) => {
    const url = URL.createObjectURL(file);
    return url;
};

export default function BoatOwnerImgGallery({ userId }) {
    const [files, setFiles] = useState([]);
    const [images, setImages] = useState([]);
    const [vesselImages, setVesselImages] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [Axios] = useAxios();
    const [galleryId, setGalleryId] = useState("");
    const [reCall, setReCall] = useState(true);

    useEffect(() => {
        userId &&
            Axios.get(`/gallery/${userId}`)
                .then((res) => {
                    const data = res?.data?.data;
                    setImages(data?.vesselImages || []);
                    setGalleryId(data?._id);
                })
                .catch((err) => {
                    console.log(`Axios.get(/gallery/`, err);
                });
    }, [userId, vesselImages, reCall]);

    // Image hosting
    const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const uploadImages = async (data) => {
        if (data?.length > 0) {
            try {
                // Check if multiple images are selected
                const formData = new FormData();
                for (const { id, file } of data) {
                    // setIsUploading(TbRubberStampOff);
                    formData.append("image", file);
                    const response = await axios.post(image_hosting_url, formData);
                    const imageUrls = response.data.data.url;
                    setVesselImages((prev) => [
                        ...prev,
                        { id, image: imageUrls, loved: false },
                    ]);
                    setFiles([]);
                }

                setIsUploading(false);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const multipleFilesUpload = (e) => {
        setIsUploading(true);
        const selectedFiles = e.target.files;

        for (let index = 0; index < selectedFiles.length; index++) {
            const file = selectedFiles[index];
            const url = generateImgUrl(file);
            let id = "id" + Math.random().toString(16).slice(2);
            setFiles((prevFiles) => [...prevFiles, { id, image: url, file }]);
        }

        setIsUploading(false);
    };

    const handleImageUpload = () => {
        setIsUploading(true);
        uploadImages(files);
    };

    // photo gallery save
    const handleSaveGallery = () => {
        setIsUploading(true);
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
                        setVesselImages([]);
                        setIsUploading(false);
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Gallery has been saved",
                        });
                    })
                    .catch((err) => console.log("gallery image save err", err));
        }
    };

    // upload images
    const handleUploadDelete = (name) => {
        const obj = files?.filter((item) => item?.file?.name != name);
        setFiles(obj);
    };

    // images loved updated
    const handleLoved = (id, value) => {
        if ((galleryId, id)) {
            const updatedLoved = { loved: value };
            Axios.put(`gallery/${galleryId}/${id}`, updatedLoved)
                .then(() => {
                    setReCall(!reCall);
                })
                .catch((err) => console.log("error ", err));
        }
    };

    return (
        <>
            <h2 className="mb-5">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px]">
                {images?.length
                    ? images?.map((item, i) => (
                        <div key={i} className="relative group">
                            <img
                                className="h-44 shadow-md w-full object-cover object-center rounded-lg"
                                src={item?.image}
                                alt=""
                            />
                            <div
                                onClick={() => handleLoved(item?.id, !item?.loved)}
                                className={`cursor-pointer absolute top-2 right-3 border-2 rounded-md h-8 w-9 border-transparent flex items-center justify-center transition duration-300 ${item?.loved ? "bg-red-500 text-white" : "bg-white/50 backdrop-blur-sm text-white group-hover:text-red-500 shadow"
                                    }`}
                                title="Favorite"
                            >
                                {
                                    item?.loved ? <FaHeart
                                        size="20"
                                    /> : <FaRegHeart
                                        size="20"
                                    />
                                }
                            </div>
                        </div>
                    ))
                    : null}

                {vesselImages?.length
                    ? vesselImages?.map((image, i) => (
                        <div key={i} className="relative">
                            <img
                                className="h-44 w-full object-cover object-center rounded-lg"
                                src={image?.image}
                                alt=""
                            />
                        </div>
                    ))
                    : null}

                {files?.length
                    ? files?.map((image, i) => (
                        <div key={i} className="relative">
                            <img
                                className="h-44 w-full object-cover object-center rounded-lg"
                                src={image?.image}
                                alt=""
                            />

                            <span
                                className="cursor-pointer"
                                onClick={() => handleUploadDelete(image?.file?.name)}
                                title="Delete image"
                            >
                                <RxCrossCircled
                                    size="30"
                                    className="absolute top-2 right-3 hover:text-red-400"
                                />
                            </span>
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
                        multiple
                        // onChange={handleVesselPhotoUpload}
                        onChange={multipleFilesUpload}
                        className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                    />
                    <img src={uploadImg} alt="upload img" />
                    <p className="text-center text-darkBlue font-light mt-1">
                        Click to upload image
                    </p>
                </label>
            </div>

            <div className="flex items-center justify-end mt-5">
                <div className="flex gap-4">
                    {files?.length ? (
                        <button
                            onClick={handleImageUpload}
                            disabled={isUploading}
                            className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 "
                        >
                            {isUploading ? (
                                <div className="flex items-center gap-2">
                                    <p>Uploading ...</p> <CgSpinner size='22' className="animate-spin" />
                                </div>
                            ) : (
                                "Upload Now"
                            )}
                        </button>
                    ) : (
                        ""
                    )}

                    {vesselImages?.length ? (
                        <button
                            onClick={handleSaveGallery}
                            disabled={isUploading}
                            className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 "
                        >
                            {isUploading ? (
                                <div className="flex items-center gap-2">
                                    <p>Saving ...</p> <CgSpinner size='22' className="animate-spin" />
                                </div>
                            ) : (
                                "Save Changes"
                            )}
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}
