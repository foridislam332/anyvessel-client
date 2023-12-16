import BannerBg from "../assets/images/hero-bg.png";
const HeroBanner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BannerBg})` }}
      className="relative h-[500px] md:h-[730px] flex items-center justify-center bg-cover bg-center"
    >
      <h1 className="text-center text-[#BCD5EE] opacity-20 text-6xl sm:text-8xl md:text-[150px] lg:text-[230px] xl:text-[300px] font-medium lg:leading-[250px] xl:leading-[450px] overflow-hidden -mt-14 md:-mt-16">
        Anyvessel
      </h1>
    </section>
  );
};

export default HeroBanner;
