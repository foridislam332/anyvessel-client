// internals files
import BoatCards from "../components/BoatCards";
import SectionTitle from "../components/SectionTitle";
import useAllBoatSailingPost from "../hooks/useAllBoatSailingPost";

// Import Swiper styles
import "swiper/css";

const BoatSell = () => {
  const { boatSellPost } = useAllBoatSailingPost();

  return (
    <section className="bg-[#F0F6FB] md:py-20 lg:py-28">
      <div className="container">
        {/* Section Title */}
        <SectionTitle title="Boat For Sale" />

        {/* boat Cards   */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {boatSellPost?.map((boat, index) => (
              <BoatCards key={index} boat={boat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoatSell;
