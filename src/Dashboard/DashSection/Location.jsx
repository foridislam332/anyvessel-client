import { useForm } from "react-hook-form";

const Location = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    return (
        <section className="p-10">
            <div className="flex justify-end">
                <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">Add new Location</button>
            </div>
            <div className="p-10 w-[700px] mx-auto">
               <form
            // onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-6">
                    <h3 className="text-midBlue">Boarding location</h3>

                    <div className="sm:px-[3px] py-[7px]">
                        <select {...register("registry", { required: true })}
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
                        <select {...register("category", { required: true })}
                            className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                        >
                            <option value="">City</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                        </select>
                    </div>

                </div>
                <div>
                    <h1 className="text-midBlue">Sailing Destination</h1>

                    <div className="sm:px-[3px] py-[7px]">
                        <select {...register("registry", { required: true })}
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
                        <select {...register("category", { required: true })}
                            className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                        >
                            <option value="">City</option>
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                        </select>
                    </div>
                </div>
            </form>  
            </div>
           

        </section>
    );
};

export default Location;