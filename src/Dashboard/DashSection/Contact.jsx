import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useCurrentUser from "../../hooks/useCurrentUser";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import useAllBoatSailingPost from "../../hooks/useAllBoatSailingPost";

const Contact = () => {
    const { user } = useAuth();
    const [Axios] = useAxios();
    const { boatSellPost } = useAllBoatSailingPost();
    const { currentUser } = useCurrentUser();
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    if (boatSellPost === undefined) {
        return <h2>Loading...</h2>
      }
    const newPostID = boatSellPost[boatSellPost.length -1]?._id
    console.log(newPostID)
    const onSubmit = (data) => {
        const newData = {
            newPostID: newPostID,
            ownerUserId: currentUser?._id,
            ownerUserEmail: currentUser?.email,
            sellerName: data.sellerName,
            sellerEmail: data.sellerEmail,
            seller_Number: data.seller_Number,
            seller_skype: data.seller_skype
        }
        console.log(newData);
        Axios.patch("boatSailing-contact", newData)
            .then((res) => {
                console.log("response - ", res);

                if (res?.status === 200) {
                    toast.success("Boat Sailing location update successful!");
                }
            })
            .catch((err) => {
                toast.error("Somethings else!");
                console.log(err);
            });
    }
    return (
        <section className="p-10">
            <div className="flex justify-end">
                <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">Add new Location</button>
            </div>
            <div className="p-10 w-[700px] mx-auto">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-6 space-y-4">
                        <div>
                            <small className="text-darkBlue ">Name </small>
                            <label htmlFor="name"
                                className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                            >
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    defaultValue={user?.displayName}
                                    {...register("sellerName")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>
                        <div>
                            <small className="text-darkBlue ">Email </small>
                            <label htmlFor="email"
                                className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                            >
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                    defaultValue={user?.email}
                                    {...register("sellerEmail")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>
                        <div>
                            <small className="text-darkBlue ">Phone Number </small>
                            <label htmlFor="phone_number"
                                className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                            >
                                <input
                                    id="phone_number"
                                    type="number"
                                    placeholder="Your Phone Number"
                                    {...register("seller_Number")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>
                        <div>
                            <small className="text-darkBlue ">Skype </small>
                            <label htmlFor="skype"
                                className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                            >
                                <input
                                    id="skype"
                                    type="url"
                                    placeholder="Your Skype Account Link"
                                    {...register("seller_skype")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>

                    </div>
                    <div className=" flex justify-center gap-12 mt-8">
                        <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300 w-48">Confirm</button>

                        <div className="cursor-pointer text-sm font-light text-center px-8 py-3 rounded-[9px] border border-blue w-48 hover:text-blue shadow-md hover:shadow-3xl duration-300">Cancel</div>

                    </div>

                </form>
            </div>


        </section>
    );
};

export default Contact;