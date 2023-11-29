import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import useAxios from "../hooks/useAxios";
import useProfileData from "../hooks/useProfileData";
import CustomModal from "./CustomModal";

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
    numberOfLoveReact: 540,
  },
];

export default function BoatOwnerPost({ userId }) {
  const [Axios] = useAxios();
  const [isBasicInfoModalOpen, setIsBasicInfoModalOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const { profileData } = useProfileData();

  const handleAddNewPost = (e) => {
    e.preventDefault();

    if (userId) {
      const newData = {
        userId,
        description: postText,
        ownerName: profileData?.fullName,
        ownerImage: profileData?.picture,
        ownerAge: profileData?.birthDay,
        numberOfLoveReact: 0,
      };

      console.log("newData ", newData);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between my-2">
        <p className="font-light">Posts</p>
        <button
          onClick={() => setIsBasicInfoModalOpen(true)}
          className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20"
        >
          Add new post
        </button>
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
                <h2 className="text-black font-medium mt-3">
                  {post.ownerName}
                </h2>
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

      {isBasicInfoModalOpen && (
        <CustomModal
          isModalOpen={isBasicInfoModalOpen}
          setIsModalOpen={setIsBasicInfoModalOpen}
          // handleModal={handleBasicInfoModal}
        >
          <form className="text-black" onSubmit={handleAddNewPost}>
            <h3 className="font-bold text-xl mb-2">Your Post Modal</h3>
            <p className="border-t border-dark mb-5"></p>

            {/* Language */}
            <div className="w-full">
              <label htmlFor="postText" className="text-dark text-sm">
                Post Description here:
              </label>
              <textarea
                id="postText"
                name="postText"
                onChange={(e) => setPostText(e.target.value)}
                defaultValue={postText}
                placeholder="Type Language"
                className="w-full border  text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3 line-clamp-8 resize-none"
              ></textarea>
            </div>

            <input
              className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 mx-auto"
              type="submit"
              value="Post Now"
            />
          </form>
        </CustomModal>
      )}
    </>
  );
}
