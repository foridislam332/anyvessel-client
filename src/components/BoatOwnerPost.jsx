import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import useAxios from "../hooks/useAxios";
import useProfileData from "../hooks/useProfileData";
import CustomModal from "./CustomModal";

function calculateAge(date) {
  const userDateOfBirth = new Date(date);
  const currentDate = new Date();

  // Calculate the age difference
  let ageDifference = currentDate.getFullYear() - userDateOfBirth.getFullYear();

  if (
    currentDate.getMonth() < userDateOfBirth.getMonth() ||
    (currentDate.getMonth() === userDateOfBirth.getMonth() &&
      currentDate.getDate() < userDateOfBirth.getDate())
  ) {
    ageDifference--;
  }

  // Return the age in the specified format
  return `${ageDifference} years old`;
}

export default function BoatOwnerPost() {
  const [Axios] = useAxios();
  const [postText, setPostText] = useState("");
  const { profileData } = useProfileData();
  const [userId, setUserId] = useState(null);
  const [reCall, setReCall] = useState(true);
  const [posts, setPosts] = useState([]);
  const [isPostModalOpen, setPostModalOpen] = useState(false);

  const handleBasicInfoModal = (e) => {
    if (e == "cancel") setPostModalOpen(false);
  };

  useEffect(() => {
    setUserId(profileData?._id);
  }, [profileData]);

  useEffect(() => {
    userId &&
      userId &&
      Axios.get(`/get-posts/${userId}`)
        .then((res) => {
          const data = res?.data?.data;
          setPosts(data);
        })
        .catch((err) => {
          console.log(`Axios.get(/gallery/`, err);
        });
  }, [userId, reCall]);

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
        role: "BoatOwner",
      };

      Axios.post("/post-create", newData)
        .then((res) => {
          const data = res?.data?.data;
          if (data?.insertedId) {
            toast.success("post successful! ");
            setReCall(!reCall);
            setPostText("");
            setPostModalOpen(false);
          }
        })
        .catch((err) => {
          console.log("post-create ", err);
          toast.error("Somethings Wrong");
        });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between my-2">
        <p className="font-light">Posts</p>
        <button
          onClick={() => setPostModalOpen(true)}
          className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20"
        >
          Add new post
        </button>
      </div>

      {!posts?.length ? (
        <p className="text-center py-4"> No Post Here </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex gap-5 px-7 py-4 border border-blue rounded-md"
            >
              <div className="flex-shrink-0 text-center">
                <div className="relative w-20 h-20 mx-auto">
                  <img
                    className="w-20 h-20 object-cover rounded-full"
                    src={post?.ownerImage}
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
                    {post.ownerName?.split(" ", 2).join(" ")}
                  </h2>
                  <p className="text-gray text-[10px] -mt-[2px]">
                    ({calculateAge(post.ownerAge)})
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
      )}

      {isPostModalOpen && (
        <CustomModal
          isModalOpen={isPostModalOpen}
          setIsModalOpen={setPostModalOpen}
          handleModal={handleBasicInfoModal}
        >
          <form className="text-black" onSubmit={handleAddNewPost}>
            <div>
              <h3 className="font-bold text-xl mb-2">Write your Post</h3>
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

              <div>
                <input
                  className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 mx-auto cursor-pointer"
                  type="submit"
                  value="Post Now"
                />
              </div>
            </div>
          </form>
        </CustomModal>
      )}
    </>
  );
}
