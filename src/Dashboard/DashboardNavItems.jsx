import BannerBg from '../assets/images/hero-bg.png';
import ActiveLink from '../components/ActiveLink';
// react icons
import { LiaHomeSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiLogOutCircle, BiMessageRoundedDetail } from "react-icons/bi";
import { TbLockCog } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
const DashboardNavItems = () => {

    return (
        <section>
            <div className='bg-white p-2'>
                <div className='col-span-8'>
                    <ul className="flex justify-evenly items-center gap-1 ">
                        <li className="w-full">
                            <ActiveLink to="/dashboard/charter">
                                <p className="hidden md:inline">CHARTER COMPANY</p>
                            </ActiveLink>
                        </li>
                        <li className="w-full">
                            <ActiveLink to="/dashboard/vessel">
                                <p className="hidden md:inline">Vessel</p>
                            </ActiveLink>
                        </li>
                        <li className="w-full">
                            <ActiveLink to="/dashboard/location">
                                <p className="hidden md:inline">Location</p>
                            </ActiveLink>
                        </li>
                        <li className="w-full">
                            <ActiveLink to="/dashboard/contact">
                                <p className="hidden md:inline">Contact details</p>
                            </ActiveLink>
                        </li>
                        <li className="w-full">
                            <ActiveLink to="/dashboard/advertised">
                                <p className="hidden md:inline">Advertised Position</p>
                            </ActiveLink>
                        </li>



                    </ul>
                </div>
               
            </div>
        </section>
    );
};

export default DashboardNavItems;