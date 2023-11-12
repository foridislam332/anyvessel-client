import { useState } from "react";
import { useForm } from "react-hook-form";
import RadioBox from "../../components/RadioBox";
import useAxios from "../../hooks/useAxios";
import useCurrentUser from "../../hooks/useCurrentUser";

const Advertised = () => {
  const [Axios] = useAxios();
  const { currentUser } = useCurrentUser();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [radioValue, setRadioValue] = useState({
    expertise_level: null,
    payroll_status: null,
    experience: null,
  });

  // 2023 to 2033
  const yearsRange = Array.from({ length: 10 }, (_, i) => 2023 + i);
  // 1 to 31
  const daysRange = Array.from({ length: 31 }, (_, i) => 1 + i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const onSubmit = (data) => {
    const newData = {
      ownerUserId: currentUser?._id,
      ownerUserEmail: currentUser?.email,
      expertise_level: radioValue?.expertise_level,
      payroll_status: radioValue?.payroll_status,
      experience: radioValue?.experience,
      advertised_Position: data.advertised_Position,
      wage: data.wage,
      gender: data.gender,
      certificate: data.certificate,
      collaborative: data.collaborative,
      jobAdvert: data.jobAdvert,
      job_experience: data.job_experience,
      visa: data.visa,
      to_from_expenses: data.to_from_expenses,
      tattoos: data.tattoos,
      interview: data.interview,
      availability: `${data.availabilityStartDay}, ${data.availabilityStartMonth} , ${data.availabilityStartYear} to ${data.availabilityEndDay}, ${data.availabilityEndMonth} , ${data.availabilityEndYear} `,
    };

    Axios.post("boatOwner-advertised", newData)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Boat Sailing post submit Successful!");
        }

        if (res?.status === 201) {
          toast.success("Boat Sailing post already submitted!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <div
        className="max-h-[650px] overflow-y-scroll no-scrollbar"
        title="Scroll Now"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between flex-col md:flex-row mb-5">
            <div className="w-auto md:w-[750px]">
              <RadioBox
                serial="1"
                idName="expertise_level"
                radioValue={radioValue}
                setRadioValue={setRadioValue}
                labelText1={{ value: "Professional", text: "Professional" }}
                labelText2={{ value: "Recreational", text: "Recreational" }}
              />
              <RadioBox
                serial="2"
                idName="payroll_status"
                radioValue={radioValue}
                setRadioValue={setRadioValue}
                labelText1={{ value: "paid", text: "Paid Position" }}
                labelText2={{ value: "unpaid", text: "Unpaid Position" }}
              />
              <RadioBox
                serial="3"
                radioValue={radioValue}
                setRadioValue={setRadioValue}
                idName="experience"
                labelText1={{ value: "skilled", text: "Skilled Crew" }}
                labelText2={{ value: "fresher", text: "No Experience" }}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300"
              >
                Add new Position
              </button>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 space-y-3 ">
              {/* POSITION */}
              <div>
                <small className="text-darkBlue font-semibold">POSITION </small>
                <label
                  htmlFor="advertisedPosition"
                  className="sm:px-[3px] py-[70px]"
                >
                  <select
                    id="advertisedPosition"
                    {...register("advertised_Position", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                  >
                    <option value="">Position</option>
                    <option value="Captain">Captain</option>
                    <option value="Chief Officer">Chief Officer</option>
                    <option value="Second Officer">Second Officer</option>
                    <option value="Engine Cadet">Engine Cadet</option>
                    <option value="Deck Cadet">Deck Cadet</option>
                    <option value="Fourth Engineer">Fourth Engineer</option>
                    <option value="Third Engineer">Third Engineer</option>
                    <option value="Second Engineer">Second Engineer</option>
                    <option value="Chief Engineer">Chief Engineer</option>
                    <option value="Third Officer">Third Officer</option>
                  </select>
                </label>
              </div>

              {/* WAGE */}
              <div>
                <small className="text-darkBlue font-semibold">WAGE</small>
                <div className="sm:px-[3px] py-[7px]">
                  <select
                    {...register("wage", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                  >
                    <option value="">Will be discussed with the Owner</option>
                    <option value="1000 - 1500">1000 - 1500</option>
                    <option value="1500 - 2000">1500 - 2000</option>
                    <option value="2000 - 2500">2000 - 2500</option>
                    <option value="2500 - 3000">2500 - 3000</option>
                    <option value="3000 - 3500">3000 - 3500</option>
                    <option value="3500 - 4000">3500 - 4000</option>
                    <option value="4000 - 4500">4000 - 4500</option>
                    <option value="4500 - 5000">4500 - 5000</option>
                    <option value="5000 - 5500">5000 - 5500</option>
                    <option value="5500 - 6000">5500 - 6000</option>
                    <option value="6000 - 6500">6000 - 6500</option>
                    <option value="6500 - 7000">6500 - 7000</option>
                    <option value="7000 - 7500">7000 - 7500</option>
                    <option value="7500 - 8000">7500 - 8000</option>
                    <option value="8000 - 8500">8000 - 8500</option>
                    <option value="8500 - 9000">8500 - 9000</option>
                    <option value="9000 - 9500">9000 - 9500</option>
                    <option value="9500 - 10,000">9500 - 10,000</option>
                    <option value="negotiation">Negotiation</option>
                  </select>
                </div>
              </div>

              {/* GENDER WANTED FOR THE JOB */}
              <div>
                <small className="text-darkBlue font-semibold">
                  GENDER WANTED FOR THE JOB
                </small>
                <div className="sm:px-[3px] py-[7px]">
                  <select
                    {...register("gender", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
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
                <small className="text-darkBlue font-semibold">
                  CERTIFICATION NEEDED
                </small>
                <div className="sm:px-[3px] py-[7px]">
                  <select
                    {...register("certificate", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                  >
                    <option value="Captain's License">Captain's License</option>
                    <option value="Engineering License">
                      Engineering License
                    </option>
                    <option value="Safety Training Certificate">
                      Safety Training Certificate
                    </option>
                    <option value="Firefighting Certificate">
                      Firefighting Certificate
                    </option>
                    <option value="Boat Operator's License">
                      Boat Operator's License
                    </option>
                    <option value="Certificate of Competency">
                      Certificate of Competency
                    </option>
                  </select>
                </div>
              </div>

              {/* AVAILABILITY */}

              <div>
                <small className="text-darkBlue font-semibold">
                  AVAILABILITY
                </small>
                <label
                  htmlFor="availability"
                  className="flex items-center py-1 px-4 border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-[#13518E] text-sm pr-5">Day</span>

                    <div className="flex items-center bg-midBlue pl-1 gap-1">
                      {/* day */}
                      <select
                        {...register("availabilityStartDay", {
                          required: true,
                        })}
                        className=" bg-midBlue pl-1 text-sm"
                      >
                        <option value="">Day</option>
                        {daysRange &&
                          daysRange.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                      </select>

                      {/* month */}
                      <select
                        {...register("availabilityStartMonth", {
                          required: true,
                        })}
                        className=" bg-midBlue  text-sm"
                      >
                        <option value="">Month</option>
                        {months &&
                          months.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                      </select>

                      {/* year */}
                      <select
                        {...register("availabilityStartYear", {
                          required: true,
                        })}
                        className=" bg-midBlue pr-1 text-sm"
                      >
                        <option value="">Year</option>
                        {yearsRange &&
                          yearsRange.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                      </select>
                    </div>
                    <span className="text-[#13518E] px-5">to</span>

                    <div className="flex items-center bg-midBlue pl-1 gap-1">
                      {/* day */}
                      <select
                        {...register("availabilityEndDay", { required: true })}
                        className=" bg-midBlue pl-1 text-sm"
                      >
                        <option value="">Day</option>
                        {daysRange &&
                          daysRange.map((d) => (
                            <option key={d} value={d}>
                              {d}
                            </option>
                          ))}
                      </select>

                      {/* month */}
                      <select
                        {...register("availabilityEndMonth", {
                          required: true,
                        })}
                        className=" bg-midBlue  text-sm"
                      >
                        <option value="">Month</option>
                        {months &&
                          months.map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                      </select>

                      {/* year */}
                      <select
                        {...register("availabilityEndYear", { required: true })}
                        className=" bg-midBlue pr-1 text-sm"
                      >
                        <option value="">Year</option>
                        {yearsRange &&
                          yearsRange.map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </label>
              </div>

              {/* EXPENSES ONBOARD */}
              <div>
                <small className="text-darkBlue font-semibold">
                  EXPENSES ONBOARD
                </small>
                <div className="sm:px-[3px] py-[7px]">
                  <select
                    {...register("registry", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                  >
                    <option value="">Paid by </option>
                    <option value="Paid by boat owner">
                      Paid by boat owner
                    </option>
                    <option value="Paid by crew ">Paid by boat crew</option>
                  </select>
                </div>
              </div>

              {/* TEAM OR SOLO  */}
              <div>
                <small className="text-darkBlue font-semibold">
                  TEAM OR SOLO
                </small>
                <div className="sm:px-[3px] py-[7px]">
                  <select
                    {...register("collaborative", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                  >
                    <option value="">Collaborative Crew</option>
                    <option value="not important">Not important</option>
                    <option value="important">Important</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 space-y-3">
              {/* JOB ADVERT   */}

              <div>
                <label
                  htmlFor="Job_advert"
                  className="text-darkBlue text-sm inline-block mb-2"
                >
                  JOB ADVERT
                </label>
                <textarea
                  id="Job_advert"
                  rows={4}
                  type="text"
                  placeholder="In few words describe what you need for your profile advert…"
                  {...register("jobAdvert")}
                  className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                />
              </div>

              {/* EXPERIENCE NEEDED   */}

              <div>
                <label
                  htmlFor="experience"
                  className="text-darkBlue text-sm inline-block mb-2"
                >
                  EXPERIENCE NEEDED
                </label>
                <input
                  id="experience"
                  type="number"
                  placeholder="At least -- Years"
                  {...register("job_experience")}
                  className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                />
              </div>

              {/* VISAS NEEDED */}

              <div>
                <small className="text-darkBlue font-semibold">
                  VISAS NEEDED
                </small>
                <div className="sm:px-[3px] py-[7px]">
                  <select
                    {...register("visa", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                  >
                    <option value="">Yes / No</option>
                    <option value="b1/b2 visa">B1/B2 US VISA</option>
                    <option value="no need ">No Need</option>
                  </select>
                </div>
              </div>

              {/* EXPENSES TO/FROM THE BOAT */}
              <div>
                <small className="text-darkBlue font-semibold">
                  EXPENSES TO/FROM THE BOAT
                </small>
                <div className="sm:px-[3px] py-[7px]">
                  <select
                    {...register("to_from_expenses", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                  >
                    <option value="">Paid by </option>
                    <option value="Paid by crew">Paid by crew</option>
                    <option value="Paid by crew ">Paid by Boat Owner</option>
                  </select>
                </div>
              </div>

              {/* TATTOOS  */}
              <div>
                <small className="text-darkBlue font-semibold">TATTOOS</small>
                <div className="sm:px-[3px] py-[7px]">
                  <select
                    {...register("tattoos", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                  >
                    <option value=""> Tattoos Will</option>
                    <option value="No visible tattoos">
                      No visible tattoos
                    </option>
                    <option value="No visible tattoos">Visible tattoos</option>
                  </select>
                </div>
              </div>

              {/* INTERVIEW */}
              <div>
                <small className="text-darkBlue font-semibold">INTERVIEW</small>
                <div className="sm:px-[3px] py-[7px]">
                  <select
                    {...register("interview", { required: true })}
                    className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                  >
                    <option value="">Interview System</option>
                    <option value="Private messaging">Private messaging</option>
                    <option value="face to face">Face to Face </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" flex justify-center gap-12 mt-8">
            <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300 w-48">
              Confirm
            </button>

            <div className="cursor-pointer text-sm font-light text-center px-8 py-3 rounded-[9px] border border-blue w-48 hover:text-blue shadow-md hover:shadow-3xl duration-300">
              Cancel
            </div>
          </div> */}
        </form>
      </div>
    </section>
  );
};

export default Advertised;
