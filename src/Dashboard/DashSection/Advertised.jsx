import { useForm } from "react-hook-form";

const Advertised = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    return (
        <section>

            <div className="p-10">
                <form
                // onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <div>
                            Checkbox
                        </div>
                        <div className="flex justify-end">
                            <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">Add new Location</button>
                        </div>

                    </div>

                    <div className="mb-6 grid grid-cols-12 gap-8">

                        <div className="col-span-6 ">

                            {/* POSITION */}
                            <div>
                                <small className="text-darkBlue ">POSITION </small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("registry", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="">Captain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="india">India</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Dubai">Dubai</option>
                                    </select>
                                </div>
                            </div>

                            {/* WAGE */}
                            <div>
                                <small className="text-darkBlue ">WAGE</small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("registry", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="">Will be discussed with the Owner</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="india">India</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Dubai">Dubai</option>
                                    </select>
                                </div>
                            </div>

                            {/* GENDER WANTED FOR THE JOB */}
                            <div>
                                <small className="text-darkBlue ">GENDER WANTED FOR THE JOB</small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("registry", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="">Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                            </div>

                            {/* CERTIFICATION */}

                            <div>
                                <small className="text-darkBlue ">CERTIFICATION NEEDED</small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("registry", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="ENG1">ENG1</option>
                                        <option value="diploma">Diploma</option>
                                    </select>
                                </div>
                            </div>

                            {/* AVAILABILITY */}

                            <div>
                                <small className="text-darkBlue ">AVAILABILITY</small>
                                <label htmlFor="availability"
                                    className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                                >
                                    <input
                                        id="availability"
                                        type="text"
                                        placeholder="Day 10-02-2023 To 10-03-2023"
                                        {...register("availability")}
                                        className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                    />
                                </label>
                            </div>

                            {/* EXPENSES ONBOARD */}
                            <div>
                                <small className="text-darkBlue ">EXPENSES ONBOARD</small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("registry", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="Paid_by_boat_owner">Paid by boat owner</option>
                                        <option value="Paid_by_crew ">Paid by boat crew</option>

                                    </select>
                                </div>
                            </div>
                            {/* TEAM OR SOLO  */}
                            <div>
                                <small className="text-darkBlue ">TEAM OR SOLO</small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("registry", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="not_important">Not important</option>
                                        <option value="important ">Important</option>

                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-6 space-y-1">
                            {/* JOB ADVERT   */}
                            <div className="">
                                <small className="text-darkBlue ">JOB ADVERT </small>
                                <label htmlFor="Job_advert"
                                    className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                                >
                                    <textarea
                                        id="Job_advert"
                                        rows={5}
                                        type="text"
                                        placeholder="In few words describe what you need for your profile advert…"
                                        {...register("jobAdvert")}
                                        className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray h-"
                                    />
                                </label>
                            </div>
                            {/* EXPERIENCE NEEDED   */}
                            <div>
                                <small className="text-darkBlue ">EXPERIENCE NEEDED </small>
                                <label htmlFor="experience"
                                    className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                                >
                                    <input
                                        id="experience"
                                        type="number"
                                        placeholder="At least -- Years"
                                        {...register("experience")}
                                        className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                    />
                                </label>
                            </div>

                            {/* VISAS NEEDED */}
                            <div>
                                <small className="text-darkBlue ">VISAS NEEDED</small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("visa", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="b1/b2 visa">B1/B2 US VISA</option>
                                        <option value="important ">Important</option>

                                    </select>
                                </div>
                            </div>

                            {/* EXPENSES TO/FROM THE BOAT */}
                            <div>
                                <small className="text-darkBlue ">EXPENSES TO/FROM THE BOAT</small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("visa", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="Paid by crew">Paid by crew</option>
                                        <option value="Paid by crew ">Paid by Boat Owner</option>

                                    </select>
                                </div>
                            </div>
                            {/* TATTOOS  */}
                            <div>
                                <small className="text-darkBlue ">TATTOOS</small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("visa", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="No visible tattoos">No visible tattoos</option>
                                        <option value="No visible tattoos">Visible tattoos</option>

                                    </select>
                                </div>
                            </div>
                            {/* INTERVIEW */}
                            <div>
                                <small className="text-darkBlue ">INTERVIEW</small>
                                <div className="sm:px-[3px] py-[7px]">
                                    <select {...register("visa", { required: true })}
                                        className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                                    >
                                        <option value="Private messaging">Private messaging</option>
                                        <option value="face to face">Face to Face </option>

                                    </select>
                                </div>
                            </div>

                        </div>



                    </div>

                </form>
            </div>


        </section>
    );
};

export default Advertised;