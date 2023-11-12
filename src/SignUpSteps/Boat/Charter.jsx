import { AiFillHeart } from "react-icons/ai";


// images
import uploadImg from '../../assets/images/upload-ico.png';

const Charter = () => {
    const images = [
        "https://i.ibb.co/NnGgxrz/download-8.jpg",
        "https://i.ibb.co/1fqHN1C/download-15.jpg",
        "https://i.ibb.co/LJ0bn87/images-5.jpg",
        "https://i.ibb.co/NnGgxrz/download-8.jpg",
    ];
    const posts = [
        {
            ownerName: "John Doe",
            ownerImage: "https://example.com/john-doe.jpg",
            ownerCountry: "https://example.com/john-doe.jpg",
            ownerAge: 35,
            role: "Boat Owner",
            description:
                "I am passionate about sailing and own a beautiful yacht.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates neque possimus ab quia id esse enim aliquid rerum impedit?",
            numberOfLoveReact: 5500,
        },
        {
            ownerName: "John Doe",
            ownerImage: "https://example.com/john-doe.jpg",
            ownerAge: 35,
            role: "Boat Owner",
            description:
                "I am passionate about sailing and own a beautiful yacht.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates neque possimus ab quia id esse enim aliquid rerum impedit?",
            numberOfLoveReact: 500,
        },
    ];
    posts.map((im) => {
        console.log(im)
    });

    // Image hosting
    const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const handleVesselPhotoUpload = async (event) => {
        const picture = event.target.files[0];
        const formData = new FormData();
        formData.append("image", picture);

        try {
            const response = await axios.post(image_hosting_url, formData);
            setVesselImage(response.data.data.display_url);
            toast.success("Photo uploaded!", {
                position: "top-right",
                autoClose: 2000,
            });
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    return (
        <section>
            <div className="flex gap-8 py-5">
                {/* profile image */}
                <div className="relative shrink-0">
                    <img
                        className="w-28 h-28 object-cover rounded-full"
                        src="https://i.ibb.co/mvCHJrH/p3.jpg"
                        alt=""
                    />
                    <img
                        className="w-[52px] h-[52px] object-cover rounded-full absolute -bottom-1 sm:-bottom-5 -right-1 border-[3px] border-white"
                        src="https://i.ibb.co/NnGgxrz/download-8.jpg"
                        alt=""
                    />
                </div>

                {/* company info */}
                <div className="w-[750px]">
                    <div className="mb-3">
                        <h2 className="text-xl text-[#050F36] font-medium">Jhon Smith <span className="text-lightBlue text-sm sm:text-base block sm:inline">(35 years old)</span></h2>

                        <p className="text-blue font-light">Boat Owner</p>
                    </div>
                    <p className="line-clamp-2 font-light text-black">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>

            {/* Photo Gallery */}
            <div className="mt-8 pb-5 border-b border-blue">
                <p className="text-black font-light mb-2">Photo Gallery</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px]">
                    {images.map((image, i) => (
                        <div key={i} className="relative">
                            <img className="h-44 w-full object-cover object-center rounded-lg" src={image} alt="" />
                            <AiFillHeart size='30' className="absolute top-2 right-3 text-white" />
                        </div>
                    ))}
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
            </div>

            <div className="flex items-center justify-between my-2">
                <p className="font-light">Posts</p>
                <button className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20">Add new post</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="flex gap-5 px-7 py-4 border border-blue rounded-md"
                    >
                        <div className="flex-shrink-0 text-center">
                            <div className="relative">
                                <img
                                    className="w-20 h-20 object-cover rounded-full"
                                    src="https://i.ibb.co/mvCHJrH/p3.jpg"
                                    alt=""
                                />
                                <img
                                    className="w-8 h-8 object-cover rounded-full absolute -bottom-2 -right-0 border-2 border-white"
                                    src="https://i.ibb.co/NnGgxrz/download-8.jpg"
                                    alt=""
                                />
                            </div>

                            <div className="mb-3">
                                <h2 className="text-black font-medium mt-3">{post.ownerName}</h2>
                                <p className="text-gray text-[10px] -mt-[2px]">
                                    ({post.ownerAge} Years Old)
                                </p>
                                <p className="text-blue text-[10px]">{post.role}</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-light text-black line-clamp-4 mb-7">
                                {post.description}
                            </p>

                            <p className="font-medium flex items-center gap-1">
                                {post.numberOfLoveReact > 1000
                                    ? (post.numberOfLoveReact / 1000).toFixed(1) + "k"
                                    : post.numberOfLoveReact}
                                <AiFillHeart className="text-xl text-[#D25269]" />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Charter;
