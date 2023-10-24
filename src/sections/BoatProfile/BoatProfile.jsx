// bg  image
import RegisterBg from '../../assets/images/register-bg.png';

const BoatProfile = () => {
    return (
        <section style={{ backgroundImage: `url(${RegisterBg})` }}
            className='bg-cover bg-center md:h-[915px] py-16 flex flex-col items-center justify-center relative top-[88px] lg:top-[92px] mb-28'>
            <div className="container">
                <div className='grid grid-cols-3 gap-4'>
                    <div className='border col-span-2'>

                    </div>
                    <div className='border'>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoatProfile;