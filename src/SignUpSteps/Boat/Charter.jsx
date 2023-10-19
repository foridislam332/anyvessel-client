import { AiFillHeart } from "react-icons/ai";
import { LuUploadCloud } from "react-icons/lu";

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
    // console.log(im)
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
    <section className="p-5">
      <div>
        <div>
          <div className="flex justify-end">
            <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">
              Add new Post's
            </button>
          </div>

          <div className="flex gap-8 py-5">
            <div className="relative">
              <img
                className="w-24 h-24 rounded-full"
                src="https://i.ibb.co/mvCHJrH/p3.jpg"
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full absolute top-16 right-0"
                src="https://i.ibb.co/NnGgxrz/download-8.jpg"
                alt=""
              />
            </div>
            <div className="w-[750px]">
              <div className="mb-3">
                <div className="flex items-center gap-2 -mb-2">
                  <h2 className="text-lg">Radif Khan</h2>
                  <small className="text-gray">(21 years old)</small>
                </div>
                <small className="text-midBlue">Boat Owner</small>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quis repellendus omnis rem corporis at, earum
                quisquam, dolorum temporibus consectetur repudiandae, ducimus
                quasi nulla consequatur unde tenetur voluptatem dolores
                deserunt!.
              </div>
            </div>
          </div>

          <div className="py-5">
            <p>Photo Gallery</p>
            <div className="flex gap-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-auto lg:w-[800px] ">
                {images.map((image) => (
                  <div className="relative">
                    <img className=" h-44 rounded-lg" src={image} alt="" />
                    <AiFillHeart className="text-3xl absolute top-1 right-2 text-white" />
                  </div>
                ))}
              </div>
              <div className="">
                <label
                  htmlFor="vessel"
                  className=" p-4  h-44  flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-blue/20"
                >
                  <input
                    id="vessel"
                    name="vessel_image"
                    type="file"
                    accept="image/*"
                    onChange={handleVesselPhotoUpload}
                    className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                  />
                  <LuUploadCloud className="text-3xl text-blue" />
                  <p className="text-xs text-center text-blue">
                    Click to upload image
                  </p>
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {posts.map((post, index) => (
              <div
                key={index}
                className="flex gap-2 py-5  border border-blue rounded-md p-2"
              >
                <div className="flex-shrink-0 text-center">
                  <div className="relative ">
                    <img
                      className="w-16 h-16 mx-auto rounded-full"
                      src="https://i.ibb.co/mvCHJrH/p3.jpg"
                      alt=""
                    />
                    <img
                      className="w-6 h-6 rounded-full absolute top-10 left-14"
                      src="https://i.ibb.co/NnGgxrz/download-8.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mb-3">
                    <h2 className="text-sm -mb-2 mt-2">{post.ownerName}</h2>
                    <small className="text-gray text-xs">
                      ({post.ownerAge} Years Old)
                    </small>
                    <p className="text-blue text-xs">{post.role}</p>
                  </div>
                </div>
                <div>
                  <p className="font-light text-xs text-justify h-20  mt-2">
                    {post.description}
                  </p>

                  <p className="text-xs flex items-center ml-2">
                    {post.numberOfLoveReact > 1000
                      ? (post.numberOfLoveReact / 1000).toFixed(1) + "k"
                      : post.numberOfLoveReact}
                    <AiFillHeart className="text-xl text-red-600" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charter;
