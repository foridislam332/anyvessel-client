import { useForm } from "react-hook-form";
import useCurrentUser from "../../hooks/useCurrentUser";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";

const Advertised = () => {
  const [Axios] = useAxios();
  const { currentUser } = useCurrentUser();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();


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
      expertise_level: data.expertise_level,
      payroll_status: data.payroll_status,
      experience: data.experience,
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
      availability: `${data.availabilityStartDay}, ${data.availabilityStartMonth} , ${data.availabilityStartYear} to ${data.availabilityEndDay}, ${data.availabilityEndMonth} , ${data.availabilityEndYear} `
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
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="flex justify-between flex-col md:flex-row mb-5">
            <div className="w-auto md:w-[750px]">
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("expertise_level", { required: true })}
                  className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                >
                  <option value="">Expertise Level</option>
                  <option value="Professional">Professional</option>
                  <option value="Recreational">Recreational</option>
                </select>
              </div>
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("payroll_status", { required: true })}
                 className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                >
                  <option value="">Payroll Status</option>
                  <option value="paid">Paid Position</option>
                  <option value="unpaid">Unpaid Position</option>
                </select>
              </div>
              <div className="sm:px-[3px] py-[7px]">
                <select
                  {...register("experience", { required: true })}
                 className="text-sm w-full outline-none p-[10px] text-darkBlue border-midBlue border rounded-[10px] placeholder:text-darkBlue/40"
                >
                  <option value=""> Skilled Crew / No Experience</option>
                  <option value="skilled">Skilled Crew</option>
                  <option value="fresher">No Experience</option>
                </select>
              </div>
            </div>
            <div className="">
              <button type="submit" className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">
              Add new Position
              </button>
            </div>
          </div>

          <div className="mb-6 grid grid-cols-12 gap-8">

            <div className="col-span-12 md:col-span-6 space-y-3 ">
              {/* POSITION */}
              <div>
                <small className="text-darkBlue font-semibold">POSITION </small>
                <label htmlFor="advertisedPosition" className="sm:px-[3px] py-[70px]">
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
                    <option value="10k_15k">10,000 - 15,000</option>
                    <option value="15k_20k">15,000 - 20,000</option>
                    <option value="20k_25k">20,000 - 25,000</option>
                    <option value="25k_30k">25,000 - 30,000</option>
                    <option value="30k_35k">30,000 - 35,000</option>
                    <option value="35k_40k">35,000 - 40,000</option>
                    <option value="40k_45k">40,000 - 45,000</option>
                    <option value="45k_50k">45,000 - 50,000</option>
                    <option value="50k_60k">50,000 - 60,000</option>
                    <option value="60k_70k">60,000 - 70,000</option>
                    <option value="70k_80k">70,000 - 80,000</option>
                    <option value="80k_90k">80,000 - 90,000</option>
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
                <small className="text-darkBlue font-semibold">CERTIFICATION NEEDED</small>
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
                <small className="text-darkBlue font-semibold">AVAILABILITY</small>
                <label
                  htmlFor="availability"
                  className="flex items-center py-1 px-4 border-midBlue border rounded-md overflow-hidden pr-2"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-[#13518E] text-sm pr-5">Day</span>

                    <div className="flex items-center bg-midBlue pl-1 gap-1">
                      {/* day */}
                      <select
                        {...register("availabilityStartDay", { required: true })}
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
                        {...register("availabilityStartMonth", { required: true })}
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
                        {...register("availabilityStartYear", { required: true })}
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
                        {...register("availabilityEndMonth", { required: true })}
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
                <small className="text-darkBlue font-semibold">EXPENSES ONBOARD</small>
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
                <small className="text-darkBlue font-semibold">TEAM OR SOLO</small>
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
                <small className="text-darkBlue font-semibold">VISAS NEEDED</small>
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
