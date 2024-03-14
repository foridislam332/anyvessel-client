// internals files
import SectionTitle from "../components/SectionTitle";

// Import Swiper styles
import "swiper/css";
import useVessel from "../hooks/useVessel";
import VesselCard from "../components/VesselCard";

const BoatSell = () => {
    const { vesselData } = useVessel();

    return (
        <section className="bg-[#F0F6FB] md:py-20 lg:py-28">
            <div className="container">
                {/* Section Title */}
                <SectionTitle title="Boat For Sale" />

                {/* boat Cards   */}
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {vesselData?.map((boat) => (
                            <VesselCard key={boat._id} boat={boat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoatSell;
