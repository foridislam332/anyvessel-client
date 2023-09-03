// images
import Fishing from '../assets/images/fishing.png';
import Sailing from '../assets/images/sailing.png';
import WaterSport from '../assets/images/water-sport.png';
import AboutImg from '../assets/images/about.png';
import LineBg from '../assets/images/about-frame.png';

const AboutAnyvessel = () => {
    return (
        <section className='py-20 overflow-hidden'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20'>

                    {/* about content */}
                    <div>
                        <h1 className='text-[40px] text-darkBlue font-medium leading-[62px] p-[10px] border-b border-darkBlue w-[264px]'>Anyvessel </h1>

                        <p className='text-lightBlue font-light mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div className='mt-14 flex justify-between items-center text-darkBlue'>
                            <div className='flex flex-col items-center justify-center gap-7'>
                                <img src={Fishing} alt="Fishing" />
                                <h3>Fishing</h3>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-7'>
                                <img src={Sailing} alt="Sailing" />
                                <h3>Sailing</h3>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-7'>
                                <img src={WaterSport} alt="Water sport" />
                                <h3>Water sport</h3>
                            </div>
                        </div>
                    </div>

                    {/* about image */}
                    <div >
                        <div className='relative'>
                            <img src={AboutImg} alt="anyvessel" className='relative z-30 w-full' />
                            <img
                                className='absolute -right-20 xl:-right-28 -bottom-8 md:-bottom-10 z-0 w-60 md:w-72 xl:w-[387px] xl:h-[372px]'
                                src={LineBg}
                                alt="line bg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAnyvessel;