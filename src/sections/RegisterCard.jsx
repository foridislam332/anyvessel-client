import { Link } from "react-router-dom";

// react icons
import { BiLogInCircle } from 'react-icons/bi';

const RegisterCard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] duration-300 pt-16 lg:pt-20 pb-12 lg:pb-14">

                {/* boat */}
                <div className="h-80 sm:h-[280px] lg:h-[350px] xl:h-[411px] w-full bg-white bg-opacity-90 flex flex-col items-center justify-center gap-5 lg:gap-9 text-center shadow-3xl rounded-[10px] duration-300">
                    <div>
                        <h4 className="text-lightBlue text-[19px] leading-7">Register as</h4>
                        <h1 className="text-lightBlue text-4xl font-medium leading-8">Boat</h1>
                    </div>

                    <div>
                        <p className="text-darkBlue text-[21px] leading-8 font-light">Profile to find</p>
                        <p className="text-darkBlue text-[21px] leading-8 font-light">a crew <Link to='/' className="font-medium" >member</Link></p>
                    </div>

                    <Link to='/boat_register' className="text-white text-sm font-light bg-blue px-10 py-[9px] rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">Register</Link>
                </div>

                {/* crew */}
                <div className="h-80 sm:h-[280px] lg:h-[350px] xl:h-[411px] w-full bg-white bg-opacity-90 flex flex-col items-center justify-center gap-5 lg:gap-9 text-center shadow-3xl rounded-[10px] duration-300">
                    <div>
                        <h4 className="text-lightBlue text-[19px] leading-7">Register as</h4>
                        <h1 className="text-lightBlue text-4xl font-medium leading-8">Crew</h1>
                    </div>

                    <div>
                        <p className="text-darkBlue text-[21px] leading-8 font-light">Profile to find</p>
                        <p className="text-darkBlue text-[21px] leading-8 font-light">a crew <Link to='/' className="font-medium" >position</Link></p>
                    </div>

                    <Link to='/boat_register' className="text-white text-sm font-light bg-blue px-10 py-[9px] rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">Register</Link>
                </div>

                {/* boat services */}
                <div className="h-80 sm:h-[280px] lg:h-[350px] xl:h-[411px] w-full bg-white bg-opacity-90 flex flex-col items-center justify-center gap-5 lg:gap-9 text-center shadow-3xl rounded-[10px] duration-300">
                    <div>
                        <h4 className="text-lightBlue text-[19px] leading-7">Register as</h4>
                        <h1 className="text-lightBlue text-4xl font-medium leading-8">Boat Services</h1>
                    </div>

                    <div>
                        <p className="text-darkBlue text-[21px] leading-8 font-light">Profile to find</p>
                        <p className="text-darkBlue text-[21px] leading-8 font-light">a <Link to='/' className="font-medium" >boat for services</Link></p>
                    </div>

                    <Link to='/boat_register' className="text-white text-sm font-light bg-blue px-10 py-[9px] rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">Register</Link>
                </div>
            </div>

            {/* card bottom */}
            <div className="max-w-[880px] mx-auto bg-white bg-opacity-90 py-6 md:pl-[123px] md:pr-[39px] rounded-[10px] flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-between duration-300">
                <p className="text-darkBlue text-[21px] font-light leading-8">Already a registered member?</p>

                <Link to='/boat_register' className="flex items-center justify-center gap-5 text-white text-sm font-light bg-blue px-10 py-[9px] rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300"><BiLogInCircle size='24' /> Sign In</Link>
            </div>
        </div>
    );
};

export default RegisterCard;