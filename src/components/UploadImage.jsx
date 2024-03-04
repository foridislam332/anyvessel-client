import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UploadImage = ({
    id,
    placeholder,
    setUrl,
    multipleImages = false,
    children,
    uploadBtn = true,
}) => {
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
        <>
            {uploadLoading ? (
                <span
                    className="loading loading-spinner loading-lg"
                    title="Image uploading"
                ></span>
            ) : (
                <label
                    htmlFor={id}
                    className="md:col-span-2 lg:col-span-1 flex items-center justify-between rounded-[10px] py-2 lg:py-0 pr-2 h-full"
                >
                    {!uploadedPhoto?.length ? (
                        <>{children}</>
                    ) : (
                        <div className="text-darkBlue pl-[10px] flex items-center flex-wrap justify-start">
                            {multipleImages ? (
                                uploadedPhoto?.length &&
                                uploadedPhoto?.map((url, idx) => (
                                    <Link target="_blank" className="hover:underline" to={url}>{url}</Link>
                                ))
                            ) : (
                                <Link target="_blank" className="hover:underline" to={uploadedPhoto}>{uploadedPhoto}</Link>
                            )}
                        </div>
                    )}
                    <>
                        <input
                            id={id}
                            name={id}
                            type="file"
                            accept="image/*"
                            onChange={handleUpload}
                            className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        {uploadBtn && (
                            <label
                                htmlFor={id}
                                className="text-white bg-blue px-5 py-1 rounded-[26px] hover:bg-transparent hover:text-blue border border-blue duration-300"
                            >
                                Upload
                            </label>
                        )}
                    </>
                </label>
            )}
        </>
    );
};

export default UploadImage;
