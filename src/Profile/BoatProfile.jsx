import { MdAccountCircle } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import useProfileData from "../hooks/useProfileData";
const BoatProfile = ({ user }) => {
    const { profileData }=useProfileData();

    console.log(profileData)
    const { identityPhoto, picture, fullName, gender, birthDay } = user;
    return (
        <section>
            <div>
                <img className="w-full h-[400px]" src={identityPhoto} alt="" />
                <div className="flex justify-between mr-3">
                    <div className="flex gap-2">
                        <div>
                            <img src={picture} className="w-10 h-10 rounded-full" alt="" />
                        </div>
                        <div>
                            <div className="flex gap-2">
                                <h2 className="text-2xl font-semibold">{fullName}</h2>
                                <div className="mt-2 text-sm flex gap-1">
                                    <p>65</p>,
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
                    <img className="w-40 h-40 border-2 border-red-700  -mt-24" src={picture} alt="" />
                </div>

                <p className="flex items-center gap-1"><BiCalendar /> <span className="uppercase">Available</span> <span className="">currently unavailable</span> <span className="text-xs">since {birthDay}</span> </p>
                <p className="ml-11">Unavailable - Found a Crew</p>
                <p className="ml-11  flex items-center">SY - Sailing Yacht (Sloop) , 12.2m(40 ft) , sail , catamarna , <span className="font-semibold flex items-center">Catana <BsBoxArrowUpRight /> 40</span></p>
                <p>Owner & Captain/Skipper - always or often abroad</p>

                <h3>Location</h3>
            </div>
        </section>
    );
};

export default BoatProfile;