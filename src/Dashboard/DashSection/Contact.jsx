import { useForm } from "react-hook-form";

const Contact = () => {
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
                                    {...register("name")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>
                        <div>
                            <small className="text-darkBlue ">Name </small>
                            <label htmlFor="email"
                                className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                            >
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                    {...register("email")}
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
                                    {...register("name")}
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
                                    {...register("skype")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>

                    </div>

                </form>
            </div>


        </section>
    );
};

export default Contact;