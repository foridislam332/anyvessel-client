import { useEffect, useRef, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast } from "react-toastify";
import useAxios from "../hooks/useAxios";
import CustomModal from "./CustomModal";

export default function BlogPostCart({ post, setReCall, reCall }) {
  const [Axios] = useAxios();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [postText, setPostText] = useState("");

  const buttonRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleBasicInfoModal = (e) => {
    if (e == "cancel") setPostModalOpen(false);
    if (e == "cancel") setDeleteModalOpen(false);
  };

  const deleteHandle = (data) => {
    if (data) {
      const postId = post?._id;

      if (postId) {
        Axios.delete(`/blog-post-cart-delete/${postId}`)
          .then((res) => {
            const data = res?.data;
            if (data?.deletedCount) {
              toast.success("post delete successful!");
              setReCall(!reCall);
              setDeleteModalOpen(false);
            }
          })
          .catch((err) => {
            console.log("error ", err);
            toast.error("Somethings Wrong");
          });
      }
    } else {
      setDeleteModalOpen(false);
    }
  };

  const editHandle = (e) => {
    e.preventDefault();
    const postId = post?._id;

    if (postId || postText) {
      const newData = {
        postId,
        description: postText,
      };

      Axios.patch("/blog-post-cart-update", newData)
        .then((res) => {
          const data = res?.data?.data;
          if (data) {
            toast.success("post update successful!");
            setReCall(!reCall);
            setPostText("");
            setPostModalOpen(false);
          }
        })
        .catch((err) => {
          toast.error("Somethings Wrong");
        });
    }
  };

  return (
    <>
      <div className="flex gap-5 px-7 py-4 border border-blue rounded-md relative">
        <div className="absolute top-1 left-1  z-[999]">
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`hover:bg-darkBlue/20 transition duration-300 w-7 h-7 rounded-full flex justify-center items-center cursor-pointer ${
              menuOpen && "bg-darkBlue/20"
            }`}
          >
            <BsThreeDotsVertical />
          </button>

          {/* {menuOpen && ( */}
          <div
            className={`transition duration-300 ${
              menuOpen
                ? "shadow-md min-w-[120px] w-max p-2 bg-white rounded-md"
                : "shadow-none w-0 h-0 bg-transparent"
            }`}
          >
            {menuOpen && (
              <ul>
                <li>
                  <button
                    onClick={() => setPostModalOpen(true)}
                    className="w-full text-left hover:bg-darkBlue/5 px-2 py-1 rounded-md"
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setDeleteModalOpen(true)}
                    className="w-full text-left hover:bg-darkBlue/5 px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            )}
          </div>
          {/* )} */}
        </div>
        <div className="flex-shrink-0 text-center z-50">
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

      {isPostModalOpen && (
        <CustomModal
          isModalOpen={isPostModalOpen}
          setIsModalOpen={setPostModalOpen}
          handleModal={handleBasicInfoModal}
        >
          <form
            title="update post data"
            className="text-black"
            onSubmit={editHandle}
          >
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
                  defaultValue={post.description}
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

      {isDeleteModalOpen && (
        <CustomModal
          isModalOpen={isDeleteModalOpen}
          setIsModalOpen={setDeleteModalOpen}
          handleModal={handleBasicInfoModal}
        >
          <div title="Delete post" className="text-black">
            <h3 className="font-bold text-xl mb-2">
              Are Sure Delete Your post
            </h3>
            <p className="border-t border-dark/70 mb-5"></p>

            <div className="flex flex-wrap gap-4 justify-end items-center">
              <button
                onClick={() => deleteHandle(false)}
                className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20"
              >
                cancel
              </button>

              <button
                onClick={() => deleteHandle(true)}
                className="bg-red-500 text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-red-500 border border-red-500 hover:border-red-500 duration-300 hover:shadow-lg hover:shadow-red-500/20"
              >
                Yes Delete Now
              </button>
            </div>
          </div>
        </CustomModal>
      )}
    </>
  );
}

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
