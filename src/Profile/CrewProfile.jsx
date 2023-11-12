import { BiCalendar } from "react-icons/bi";
import { BsFillFlagFill, BsTelephoneOutbound } from "react-icons/bs";
import { LuLanguages } from "react-icons/lu";
import { MdAccountCircle, MdOutlineEmail } from "react-icons/md";
import CustomModal from "../components/CustomModal";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { useForm } from "react-hook-form";

const CrewProfile = ({ user, currentUserLoading, refetch }) => {
  const { surname, email, fullName, gender, phone, role, birthDay } = user;

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateArray = birthDate.split(",");
    const birthMonth = birthDateArray[1].trim();
    const birthDay = parseInt(birthDateArray[0], 10);
    const birthYear = parseInt(birthDateArray[2], 10);

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

    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    const birthMonthIndex = months.findIndex(
      (month) => month.toLowerCase() === birthMonth.toLowerCase()
    );

    if (
      currentMonth < birthMonthIndex ||
      (currentMonth === birthMonthIndex && currentDay < birthDay)
    ) {
      return today.getFullYear() - birthYear - 1;
    } else {
      return today.getFullYear() - birthYear;
    }
  };

  const age = calculateAge(birthDay);

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm();
  const [Axios] = useAxios();
  const [isBasicInfoModalOpen, setIsBasicInfoModalOpen] = useState(false);



  const handleBasicInfoModal = (e) => {
    if (e == "cancel") setIsBasicInfoModalOpen(false)
  }

  const onBasicInfoSubmit = data => {
    const updateData = {
      email: email,
      fullName: data.fullName,
      // nationality: data.nationality,
      phone: data.phone,
      // languages: data.languages,
      // description: data.description
    }
    console.log(updateData)
    Axios.patch('/crew/basic', updateData)
      .then(res => {
        if (res.status === 200) {
          refetch();
          setIsBasicInfoModalOpen(false)
          // reset()
        }
      })
      .catch(error => {
        console.log(error);
      })


  }
  return (
    <section>
      <div>
        {/* Banner */}
        <img
          className="w-full h-[400px]"
          src={
            user.identityPhoto
              ? identityPhoto
              : "https://i.ibb.co/jZNpRKn/parts-service-header.jpg"
          }
          alt=""
        />

        {/* content */}
        <div className="flex justify-between mr-3 mt-4">
          <div className="flex gap-2">
            {/* Logo */}
            <figure>
              <img
                src={
                  user.picture ? picture : "https://i.ibb.co/P5wMksM/images.jpg"
                }
                className="w-10 h-10 rounded-full"
                alt=""
              />
            </figure>

            <div>
              <div className="flex gap-2">
                <h2 className="text-2xl font-semibold">{fullName}</h2>
                <div className="mt-2 text-sm flex gap-1">
                  <p>{age}</p>,<p>{gender}</p>
                </div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="flex items-center gap-1 border rounded-full px-1">
                  <MdAccountCircle className="text-xl " />
                  <span className=""> PIV</span>
                </div>
                <p>Personal Identity Verified</p>
              </div>
            </div>
          </div>
          <img
            className="w-40 h-40 rounded-full hover:scale-105 border-2 border-red-700  -mt-24"
            src={user.picture ? picture : "https://i.ibb.co/P5wMksM/images.jpg"}
            alt=""
          />
        </div>

        <div className="flex gap-3 py-2 items-center">
          <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0">
            <BsFillFlagFill />{" "}
            <span className="text-xs ">
              {" "}
              {user.nationality ? nationality : "N/A"}
            </span>
          </p>
          <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0">
            <LuLanguages />{" "}
            <span className="text-xs ">
              {" "}
              {user.languages ? languages : "N/A"}
            </span>
          </p>
        </div>
        <div className="flex gap-3 py-2 items-center">
          <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0">
            <MdOutlineEmail /> <span className="text-xs "> {email}</span>
          </p>
          <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0">
            <BsTelephoneOutbound /> <span className="text-xs "> {phone}</span>
          </p>
        </div>
        <div className="mt-4 shadow-md rounded-lg p-5">
          <p className="underline mb-2">About Me :</p>
          {user.description ? description : "N/A"}
        </div>

        {/* TODO  */}
        <div className="mt-4 shadow-md rounded-lg p-5">
          <p className="flex items-center gap-1">
            <BiCalendar /> <span className="uppercase">Available</span>{" "}
            <span className="">currently unavailable</span>{" "}
            <span className="text-xs">since {birthDay}</span>{" "}
          </p>
        </div>

        <div className="mt-4 shadow-md rounded-lg p-5">
          <p className="">Unavailable - Found a Crew</p>
        </div>
        <div className="mt-4 shadow-md rounded-lg p-5 flex justify-center">
          <button className="px-5 py-2 border-2 rounded-md border-purple-600 hover:border-red-800 duration-300" onClick={() => setIsBasicInfoModalOpen(!isBasicInfoModalOpen)}>Update Profile Information</button>
        </div>
        {/* <p className="  flex items-center">SY - Sailing Yacht (Sloop) , 12.2m(40 ft) , sail , catamarna , <span className="font-semibold flex items-center">Catana <BsBoxArrowUpRight /> 40</span></p> */}
      </div>
      {
        isBasicInfoModalOpen &&
        <CustomModal
          isModalOpen={isBasicInfoModalOpen}
          setIsModalOpen={setIsBasicInfoModalOpen}
          handleModal={handleBasicInfoModal}
        >
          <form className='text-black'
            onSubmit={handleSubmit(onBasicInfoSubmit)}
          >
            <h3 className="font-bold text-xl mb-2">Update Your Basic Profile Information</h3>
            <p className='border-t border-dark mb-5'></p>

            <div className='sm:flex gap-5'>
              {/* Name */}
              <div className='w-full'>
                <label htmlFor="full_name" className='text-dark text-sm'>Name:</label>
                <input
                  id="full_name"
                  {...register("fullName")}
                  defaultValue={fullName}
                  placeholder='Your full name'
                  className='w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3'
                />
              </div>
            </div>

            <div className='sm:flex gap-5'>
              {/* nationality */}
              {/* <div className='w-full'>
                <label htmlFor="nationality" className='text-dark text-sm'>Nationality:</label>
                <input
                  id="nationality"
                  {...register("nationality")}
                  defaultValue={nationality}
                  placeholder='e.g. Dhaka, Bangladesh'
                  className='w-full border  text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3'
                />
              </div> */}
          

              {/* phone */}
              <div className='w-full'>
                <label htmlFor="number" className='text-dark text-sm'>Contact Number:</label>
                <input
                  id="number"
                  {...register("phone")}
                  defaultValue={phone}
                  placeholder='New Phone Number'
                  className='w-full border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3'
                />
              </div>
            </div>
            {/* Language */}
            {/* <div className='w-full'>
              <label htmlFor="language" className='text-dark text-sm'>Language:</label>
              <input
                id="language"
                {...register("languages")}
                defaultValue={languages}
                placeholder='Type Language'
                className='w-full border  text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3'
              />
            </div> */}
            {/* About */}
            {/* <div className='w-full'>
              <label htmlFor="about" className='text-dark text-sm'>About yourself:</label>
              <textarea
                id="about"
                {...register("description")}
                defaultValue={description}
                placeholder='Write about your professional life within 250 words'
                className='w-full h-32 border text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3'
              />
            </div> */}

            <input
              className="text-center px-3 md:px-5 py-1 md:py-3 bg-secondary hover:bg-secondary/60 duration-300 rounded-lg text-white mt-2 sm:mt-5 cursor-pointer"
              type="submit"
              value="Save Changes"
            />
          </form>
          <p>There is no more data for Update</p>
        </CustomModal>
      }
    </section>
  );

  return <div></div>;
};

export default CrewProfile;
