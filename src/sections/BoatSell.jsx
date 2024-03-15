import useVessel from "../hooks/useVessel";
import PageLoading from "../components/PageLoading";
import SellBoatCard from "../components/SellBoatCard";
import SectionTitle from "../components/SectionTitle";

// Import Swiper styles
import "swiper/css";

const BoatSell = () => {
    const { vesselData, loading } = useVessel();

    if (loading) {
        return <div className="text-4xl h-screen flex items-center justify-center">
            <PageLoading />
        </div>
    }

    const sellBoats = vesselData.filter(boat => boat.boatForSale === true);
    return (
        <section className="bg-[#F0F6FB] md:py-20">
            <div className="container">
                {/* Section Title */}
                <SectionTitle title="Boat For Sale" />

                {/* boat Cards   */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
                    {sellBoats?.map((boat) => (
                        <SellBoatCard key={boat._id} boat={boat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoatSell;
