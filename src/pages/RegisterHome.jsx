import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

// bg  image
import RegisterBg from '../assets/images/register-bg.png';

const RegisterHome = () => {
    return (
        <>
            <Helmet>
                <title>Register | Anyvessel</title>
            </Helmet>

            {/* main */}
            <main>
                <section style={{ backgroundImage: `url(${RegisterBg})` }}
                    className='bg-cover bg-center md:h-[915px] py-16 flex flex-col items-center justify-center relative top-[88px] lg:top-[95px]'>
                    <div className="container">
                        {/* register title */}
                        <div className="flex flex-col items-center justify-center text-darkBlue">
                            <h1 className="text-[24px] font-semibold leading-[36px]">Welcome to Anyvessel,</h1>
                            <p className="text-[24px] leading-[36px] text-center">the World's largest online Boat & Crew network.</p>
                        </div>

                        {/* register main */}
                        <Outlet />
                    </div>
                </section>
            </main>
        </>
    );
};

export default RegisterHome;