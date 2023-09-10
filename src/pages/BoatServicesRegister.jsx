import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

// icons image
import user from '../assets/images/user2.png';
import user2 from '../assets/images/user-3.png';
import email from '../assets/images/email.png';
import phone from '../assets/images/phone.png';
import angle from '../assets/images/angle-down.png';


const BoatServicesRegister = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="bg-white bg-opacity-90 px-5 sm:px-10 py-10 md:px-[93px] md:py-[30px] mt-6 rounded-[10px]">
            <div className="max-w-[715px] mx-auto text-center mb-6">
                <h2 className="text-lightBlue text-[19px]">Register a Boat profile to find a crew member:</h2>
                <p className="text-lightBlue font-light">A Boat profile is to find a crew member for a boat, yacht, or ship that you own or represent.</p>
            </div>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:grid md:grid-cols-2 flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
                    {/* surname */}
                    <label htmlFor="surname"
                        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <input
                            id="surname"
                            placeholder="Surname"
                            {...register("surname")}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={user} alt="surname" />
                    </label>

                    {/* Full name */}
                    <label htmlFor="full_name"
                        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <input
                            id="full_name"
                            placeholder="Full name"
                            {...register("fullName")}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={user2} alt="fullName" />
                    </label>

                    {/* Email address */}
                    <label htmlFor="email"
                        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <input
                            id="email"
                            type="email"
                            placeholder="Email address"
                            {...register("email")}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={email} alt="email" />
                    </label>

                    {/* Phone number */}
                    <label htmlFor="phone"
                        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <input
                            id="phone"
                            type="phone"
                            placeholder="Phone number"
                            {...register("phone")}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={phone} alt="phone" />
                    </label>

                    {/* password */}
                    <label htmlFor="password"
                        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            {...register("password")}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={angle} alt="angle" />
                    </label>

                    {/* Retype password */}
                    <label htmlFor="retypePassword"
                        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <input
                            id="retypePassword"
                            type="password"
                            placeholder="Retype password"
                            {...register("retypePassword")}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={angle} alt="angle" />
                    </label>

                    {/* gender */}
                    <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <span className="text-darkBlue pl-[10px]">Gender</span>
                        <div className="p-[10px] flex items-center gap-[30px]">
                            <label htmlFor="male"
                                className="text-darkBlue flex gap-[19px]"
                            >
                                <input
                                    id="male"
                                    name="gender"
                                    type="radio"
                                    value='male'
                                    {...register("gender")}
                                />
                                Male
                            </label>

                            <label htmlFor="female"
                                className="text-darkBlue flex gap-4"
                            >
                                <input
                                    id="female"
                                    name="gender"
                                    type="radio"
                                    value='female'
                                    {...register("gender")}
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* Birthday */}
                    <div className="flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <span className="text-darkBlue pl-[10px]">Birthday</span>
                        <div className="px-[10px] flex items-center gap-2 sm:gap-[30px]">
                            {/* year */}
                            <div className="sm:px-[3px] py-[7px]">
                                <select {...register("year", { required: true })}
                                    className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]"
                                >
                                    <option value="">Year</option>
                                    <option value="2000">2000</option>
                                    <option value="2001">2001</option>
                                    <option value="2002">2002</option>
                                    <option value="2003">2003</option>
                                </select>
                            </div>

                            {/* month */}
                            <div className="sm:px-[3px] py-[7px]">
                                <select {...register("month", { required: true })}
                                    className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-2 py-[3px]"
                                >
                                    <option value="">Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June	">June	</option>
                                </select>
                            </div>

                            {/* day */}
                            <div className="sm:px-[3px] py-[7px]">
                                <select {...register("day", { required: true })}
                                    className="text-darkBlue border-b border-midBlue focus:outline-none focus:border-b focus:border-midBlue pr-1 sm:pr-3 py-[3px]"
                                >
                                    <option value="">Day</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* nationality */}
                    <label htmlFor="nationality"
                        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <input
                            id="nationality"
                            placeholder="Nationality"
                            {...register("nationality")}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={angle} alt="angle" />
                    </label>

                    {/* languages */}
                    <label htmlFor="languages"
                        className="flex items-center border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <input
                            id="languages"
                            placeholder="Languages spoken on board"
                            {...register("languages")}
                            className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                        />
                        <img src={angle} alt="angle" />
                    </label>

                    {/* romance */}
                    <div className="md:col-span-2 lg:col-span-1 flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2"
                    >
                        <span className="text-darkBlue pl-[10px]">May concider romance with crew</span>
                        <div className="p-[10px] flex items-center gap-[30px]">
                            <label htmlFor="yes"
                                className="text-darkBlue flex gap-[19px]"
                            >
                                <input
                                    id="yes"
                                    name="romance"
                                    type="radio"
                                    value='yes'
                                    {...register("romance")}
                                />
                                Yes
                            </label>

                            <label htmlFor="no"
                                className="text-darkBlue flex gap-4"
                            >
                                <input
                                    id="no"
                                    name="romance"
                                    type="radio"
                                    value='no'
                                    {...register("romance")}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {/* Upload identity photo */}
                    <label htmlFor="identityPhoto" className="md:col-span-2 lg:col-span-1 flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden py-2 lg:py-0 pr-2">
                        <p className="text-darkBlue pl-[10px]">Personal Identity verification <span className="text-lightBlue text-[12px]">(upload a passport photo)</span></p>
                        <Controller
                            name="identityPhoto"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <input
                                        id="identityPhoto"
                                        type="file"
                                        style={{ display: 'none' }} // Hide the input
                                        onChange={(e) => field.onChange(e.target.files[0])}
                                        className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById('identityPhoto').click()}
                                        className="text-white bg-blue px-5 py-1 rounded-[26px] hover:bg-transparent hover:text-blue border border-blue duration-300"
                                    >
                                        Upload
                                    </button>
                                </>
                            )}
                        />
                    </label>

                    {/* Upload your picture */}
                    <div className="md:col-span-2 flex items-center justify-between border-midBlue border rounded-[10px] overflow-hidden pr-2 py-4">
                        <p className="text-darkBlue pl-[10px]">Upload your picture</p>
                        <Controller
                            name="picture"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <input
                                        id="picture"
                                        type="file"
                                        style={{ display: 'none' }} // Hide the input
                                        onChange={(e) => field.onChange(e.target.files[0])}
                                        className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => document.getElementById('picture').click()}
                                        className="text-white bg-blue px-5 py-1 rounded-[26px] hover:bg-transparent hover:text-blue border border-blue duration-300"
                                    >
                                        Upload
                                    </button>
                                </>
                            )}
                        />
                    </div>

                    {/* description */}
                    <textarea
                        rows={3}
                        id="description"
                        placeholder="A small description about you"
                        {...register("description")}
                        className="col-span-2 w-full focus:outline-none p-[10px] text-darkBlue placeholder:text-darkBlue border-midBlue border rounded-[10px]"
                    />
                </div>

                {/* buttons */}
                <div className="mt-6 w-fit mx-auto space-x-4">
                    <button type="submit" className="text-white text-sm font-light bg-blue bg-opacity-90 px-7 md:px-14 py-[9px] rounded-lg hover:bg-transparent hover:text-blue border border-blue duration-300">Register</button>

                    <Link to='/register' className="text-blue text-sm bg-transparent bg-opacity-90 px-[27px] md:px-[55px] py-2 rounded-lg hover:bg-blue hover:text-white border-2 border-blue duration-300">Cancel</Link>
                </div>
            </form>
        </div>
    );
};

export default BoatServicesRegister;