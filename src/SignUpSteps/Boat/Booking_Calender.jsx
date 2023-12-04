import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // import the styles


const Booking_Calender = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
    return (
        <section>
            <form
            // onSubmit={handleSubmit(onSubmit)}
            >

                <div className="mb-6 grid grid-cols-12 gap-8">

                    <div className="col-span-6 ">
                        <div>
                            <h2>Date Picker Calendar</h2>
                            <DatePicker selected={selectedDate} onChange={handleDateChange} />
                        </div>

                    </div>
                    <div className="col-span-6 space-y-1">
                        <div>
                            <small className="text-darkBlue ">Name</small>
                            <label htmlFor="bookingPerson"
                                className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                            >
                                <input
                                    id="bookingPerson"
                                    type="text"
                                    placeholder="NAME OF THE PERSON WHO IS BOOKING"
                                    {...register("booking_person")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>
                        <div className="sm:px-[3px] py-[7px]">
                            <small className="text-darkBlue ">Choose Option</small>
                            <select {...register("inclusive", { required: true })}
                                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                            >
                                <option value="">All Inclusive</option>
                                <option value="True">True</option>
                                <option value="False">False</option>
                            </select>
                        </div>

                        <div>
                            <small className="text-darkBlue ">Number Of People</small>
                            <label htmlFor="people"
                                className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                            >
                                <input
                                    id="people"
                                    type="email"
                                    placeholder="Al least"
                                    {...register("number_booking_person")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>

                        <div className="sm:px-[3px] py-[7px]">
                            <select {...register("inclusive", { required: true })}
                                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
                            >
                                <option value="">Select One</option>
                                <option value="True">True</option>
                                <option value="False">False</option>
                            </select>
                        </div>

                        <div>
                            <small className="text-darkBlue ">Advance Payment of 20% by credit card</small>
                            <label htmlFor="booker_email"
                                className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                            >
                                <input
                                    id="booker_email"
                                    type="email"
                                    placeholder="email address"
                                    {...register("booking_person_email")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>


                        <div>
                            <label htmlFor="people"
                                className="flex items-center border-midBlue border rounded-md overflow-hidden pr-2"
                            >
                                <input
                                    id="people"
                                    type="number"
                                    placeholder="Al least"
                                    {...register("number_booking_person")}
                                    className="text-xs w-full focus:outline-none border-none p-2 text-darkBlue placeholder:text-gray"
                                />
                            </label>
                        </div>


                    </div>

                </div>

            </form>
        </section>
    );
};

export default Booking_Calender;