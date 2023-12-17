import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import useAxios from "../hooks/useAxios";
import useProfileData from "../hooks/useProfileData";
import CustomModal from "./CustomModal";
import { BsThreeDotsVertical } from "react-icons/bs";
import BlogPostCart from "./BlogPostCart";

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
            <BlogPostCart
              key={index}
              post={post}
              setReCall={setReCall}
              reCall={reCall}
            />
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
