import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import CustomModal from "./CustomModal";
import BlogPostCart from "./BlogPostCart";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import usePosts from "../hooks/usePosts";
import PageLoading from "./PageLoading";

export default function BoatOwnerPost() {
    const { postData, loading, refetch } = usePosts();
    const { currentUser } = useAuth();
    const [Axios] = useAxios();
    const [postText, setPostText] = useState("");
    const [isPostModalOpen, setPostModalOpen] = useState(false);

    useEffect(() => {
        if (currentUser._id) {
            refetch();
        }
    }, [currentUser?._id])

    const handleBasicInfoModal = (e) => {
        if (e == "cancel") setPostModalOpen(false);
    };

    const handleAddNewPost = () => {
        if (currentUser?._id) {
            const newData = {
                description: postText,
                ownerName: currentUser?.fullName,
                ownerImage: currentUser?.picture,
                ownerAge: currentUser?.birthDay,
                numberOfLoveReact: 0,
                role: currentUser?.role
            };

            Axios.post(`create_posts/${currentUser?._id}`, newData)
                .then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Post created successfully!"
                        });
                        refetch();
                        setPostText("");
                        setPostModalOpen(false);
                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    };

    if (loading) {
        return <PageLoading />
    }
    return (
        <>
            <div className="flex items-center justify-between my-2 pt-4">
                <p className="font-light">Posts</p>
                <button
                    onClick={() => setPostModalOpen(true)}
                    className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20"
                >
                    Add new post
                </button>
            </div>

            <div className="max-h-64 overflow-y-auto">
                {!postData.length > 0 || !currentUser._id ? (
                    <p className="text-center py-4"> No Post Here </p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                        {postData.map((post, index) => (
                            <BlogPostCart
                                key={index}
                                post={post}
                                refetch={refetch}
                            />
                        ))}
                    </div>
                )}
            </div>

            {isPostModalOpen && (
                <CustomModal
                    isModalOpen={isPostModalOpen}
                    setIsModalOpen={setPostModalOpen}
                    handleModal={handleBasicInfoModal}
                >
                    <div className="text-black">
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
                                <button
                                    className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 mx-auto cursor-pointer"
                                    onClick={handleAddNewPost}
                                >Post Now</button>
                            </div>
                        </div>
                    </div>
                </CustomModal>
            )}
        </>
    );
}
