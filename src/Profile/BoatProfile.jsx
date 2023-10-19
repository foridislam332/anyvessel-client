import { MdAccountCircle } from "react-icons/md";
import { BsBoxArrowUpRight, BsFillFlagFill, BsTelephoneOutbound } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { LuLanguages } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import useProfileData from "../hooks/useProfileData";
const BoatProfile = ({ user }) => {
    const { profileData } = useProfileData();
    const { surname,
        email,
        fullName,
        description,
        gender,
        languages,
        nationality,
        phone,
        romance,
        picture,
        role,
        identityPhoto,
        birthDay } = user;

    const calculateAge = (birthDate) => {
        const today = new Date();
        const birthDateArray = birthDate.split(',');
        const birthMonth = birthDateArray[1].trim();
        const birthDay = parseInt(birthDateArray[0], 10);
        const birthYear = parseInt(birthDateArray[2], 10);

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const currentMonth = today.getMonth();
        const currentDay = today.getDate();

        const birthMonthIndex = months.findIndex((month) => month.toLowerCase() === birthMonth.toLowerCase());

        if (currentMonth < birthMonthIndex || (currentMonth === birthMonthIndex && currentDay < birthDay)) {
            return today.getFullYear() - birthYear - 1;
        } else {
            return today.getFullYear() - birthYear;
        }
    }

    const age = calculateAge(birthDay);

    return (
        <section>
            <div>
                <div className="">
                    {/* <p className="absolute top-2 left-2 border-2 border-white text-white bg-midBlue rounded-full px-3">{role} Profile</p> */}
                    <img className="w-full h-[400px]" src={picture} alt="" />
                </div>
                <div className="flex justify-between mr-3">
                    <div className="flex gap-2">
                        <div>
                            <img src={identityPhoto} className="w-10 h-10 rounded-full" alt="" />
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <h2 className="text-2xl font-semibold">{fullName}</h2>
                                <div className="mt-2 text-sm flex gap-1">
                                    <p>{age}</p>,
                                    <p>{gender}</p>
                                </div>

                            </div>
                            <div className="flex gap-1 items-center">
                                <div className="flex items-center gap-1 border rounded-full px-1">
                                    <MdAccountCircle className="text-xl " />
                                    <span className=""> PIV</span>
                                </div>
                                <p>
                                    Personal Identity Verified
                                </p>

                            </div>
                        </div>


                    </div>
                    <img className="w-40 h-40 rounded-full hover:scale-105 border-2 border-red-700  -mt-24" src={identityPhoto} alt="" />
                </div>

                <div className="flex gap-3 py-2 items-center">
                    <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0"><BsFillFlagFill />  <span className="text-xs "> {nationality}</span></p>
                    <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0"><LuLanguages />  <span className="text-xs "> {languages}</span></p>
                </div>
                <div className="flex gap-3 py-2 items-center">
                    <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0"><MdOutlineEmail />  <span className="text-xs "> {email}</span></p>
                    <p className=" flex items-center gap-2 border-2 border-midBlue px-4 py-2 duration-300 rounded-full hover:bg-transparent hover:shadow-lg hover:border-0"><BsTelephoneOutbound />  <span className="text-xs "> {phone}</span></p>
                </div>
                <div className="mt-4 shadow-md rounded-lg p-5">
                    <p className="underline mb-2">About Me :</p>
                    {description}
                </div>

                {/* TODO  */}
                <div className="mt-4 shadow-md rounded-lg p-5">
                    <p className="flex items-center gap-1"><BiCalendar /> <span className="uppercase">Available</span> <span className="">currently unavailable</span> <span className="text-xs">since {birthDay}</span> </p>

                </div>

                <div className="mt-4 shadow-md rounded-lg p-5">
                    <p className="">Unavailable - Found a Crew</p>
                </div>

                {/* <p className="  flex items-center">SY - Sailing Yacht (Sloop) , 12.2m(40 ft) , sail , catamarna , <span className="font-semibold flex items-center">Catana <BsBoxArrowUpRight /> 40</span></p> */}
            </div>
        </section>
    );
};

export default BoatProfile;