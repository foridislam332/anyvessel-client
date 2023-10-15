import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import useCurrentUser from "../../hooks/useCurrentUser";
import { toast } from "react-toastify";

const Location = () => {
    const [Axios] = useAxios();
    const { currentUser } = useCurrentUser();
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const newData = {
            ownerUserId: currentUser?._id,
            ownerUserEmail: currentUser?.email,
            boarding_country: data.boarding_country,
            sailing_country: data.sailing_country,
            boarding_city: data.boarding_city,
            sailing_city: data.sailing_city
        }
        console.log(newData)
        Axios.patch("boatSailing-location", newData)
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
                    <div className="mb-6">
                        <h3 className="text-midBlue">Boarding location</h3>

                        <div className="sm:px-[3px] py-[7px]">
                            <select {...register("boarding_country", { required: true })}
                                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                            >
                                <option value="">Country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="india">India</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Dubai">Dubai</option>
                            </select>
                        </div>

                        <div className="sm:px-[3px] py-[7px]">
                            <select {...register("boarding_city", { required: true })}
                                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                            >
                                <option value="">City</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Kathmandu">Kathmandu</option>
                                <option value="Abu_dhabi">Abu Dhabi</option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <h1 className="text-midBlue">Sailing Destination</h1>

                        <div className="sm:px-[3px] py-[7px]">
                            <select {...register("sailing_country", { required: true })}
                                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                            >
                                <option value="">Country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="india">India</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Dubai">Dubai</option>
                            </select>
                        </div>

                        <div className="sm:px-[3px] py-[7px]">
                            <select {...register("sailing_city", { required: true })}
                                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                            >
                                <option value="">City</option>
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Kathmandu">Kathmandu</option>
                                <option value="Abu_dhabi">Abu Dhabi</option>
                            </select>
                        </div>
                        <div className=" flex justify-center gap-12 mt-8">
                            <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300 w-48">Confirm</button>

                            <div className="cursor-pointer text-sm font-light text-center px-8 py-3 rounded-[9px] border border-blue w-48 hover:text-blue shadow-md hover:shadow-3xl duration-300">Cancel</div>

                        </div>
                    </div>
                </form>
            </div>


        </section>
    );
};

export default Location;