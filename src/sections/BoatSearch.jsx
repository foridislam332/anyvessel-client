import { useState } from "react";
import { useForm } from "react-hook-form";
import RangeSlider from "../components/RangeSlider";

// react icons
import { BsSearch } from 'react-icons/bs';

// images
import AngleDown from '../assets/images/angle-down.png';

const BoatSearch = () => {
    const [length, setLength] = useState(0);
    const [price, setPrice] = useState(0);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className='relative -mt-3'>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-[45px] p-10 rounded-[10px] bg-white shadow-3xl"
                >
                    {/* boat type select */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="relative w-full">
                            <select {...register("boatType")}
                                className="w-full text-darkBlue p-[10px] border border-b-midBlue border-transparent appearance-none leading-tight focus:outline-none focus:border focus:border-blue focus:rounded-md"
                            >
                                <option value="">Boat Type</option>
                                <option value="">Boat Type 1</option>
                                <option value="">Boat Type 2</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <img src={AngleDown} alt="Custom Arrow" class="w-5" />
                            </div>
                        </div>

                        {/* boat location select */}
                        <div className="relative w-full">
                            <select {...register("boatLocation")}
                                className="w-full text-darkBlue p-[10px] border border-b-midBlue border-transparent appearance-none leading-tight focus:outline-none focus:border focus:border-blue focus:rounded-md"
                            >
                                <option value="">Boat Location</option>
                                <option value="">Location 1</option>
                                <option value="">Location 2</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <img src={AngleDown} alt="Custom Arrow" class="w-5" />
                            </div>
                        </div>

                        {/* Crew select */}
                        <div className="relative w-full">
                            <select {...register("crew")}
                                className="w-full text-darkBlue p-[10px] border border-b-midBlue border-transparent appearance-none leading-tight focus:outline-none focus:border focus:border-blue focus:rounded-md"
                            >
                                <option value="">#Crew</option>
                                <option value="">#Crew 1</option>
                                <option value="">#Crew 2</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <img src={AngleDown} alt="Custom Arrow" class="w-5" />
                            </div>
                        </div>
                    </div>

                    {/* length & price range */}
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        {/* length range */}
                        <div className="w-full flex flex-col text-darkBlue leading-6 gap-[10px]">
                            <div className="flex items-center justify-between px-[10px]">
                                <h4>Length</h4>
                                <p>{length} - 70 M</p>
                            </div>

                            <RangeSlider maxValue='70' value={length} setValue={setLength} />
                        </div>

                        {/* price range */}
                        <div className="w-full flex flex-col text-darkBlue leading-6 gap-[10px]">
                            <div className="flex items-center justify-between px-[10px]">
                                <h4>Price</h4>
                                <p>{price} - $ 4000 K</p>
                            </div>

                            <RangeSlider maxValue='4000' value={price} setValue={setPrice} />
                        </div>

                        {/* search button */}
                        <div className="w-full">
                            <button type="submit" className="btn__primary w-full flex items-center justify-center">
                                <BsSearch size='20' /> <span className="flex-1">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default BoatSearch;