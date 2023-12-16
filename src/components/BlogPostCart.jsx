import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function BlogPostCart({ post }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const deleteHandle = (id) => {
    console.log(" id ", id);
  };

  const editHandle = (id) => {
    console.log(" id ", id);
  };

  return (
    <>
      <div className="flex gap-5 px-7 py-4 border border-blue rounded-md relative">
        <div className="absolute top-1 left-1  z-[999]">
          <button
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
                    onClick={() => editHandle(post?._id)}
                    className="w-full text-left hover:bg-darkBlue/5 px-2 py-1 rounded-md"
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => deleteHandle(post?._id)}
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
