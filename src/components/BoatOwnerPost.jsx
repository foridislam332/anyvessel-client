import { AiFillHeart } from "react-icons/ai";

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
  console.log("userId -> ", userId);

  const handleAddNewPost = () => {
    if (userId) {
      const newData = {
        userId,
        ownerName,
        ownerImage,
        ownerAge,
        role,
        description,
        numberOfLoveReact,
      };

      console.log("newData ", newData);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between my-2">
        <p className="font-light">Posts</p>
        <button
          onClick={handleAddNewPost}
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
    </>
  );
}
