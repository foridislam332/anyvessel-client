import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";

const BoatSellDetails = () => {
    const BoatData = useLoaderData();
    const { vessel, contact, location } = BoatData;
    
    return (
        <section className="py-24">
            <div>
                {/* Section Title */}
                <SectionTitle title='Boat Details' />
                <div className='py-12 container mx-auto ' >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="col-span-5">
                            <img className="w-full h-[400px]" src={vessel.vesselImage} alt="" />
                        </div>
                        <div className="col-span-7">
                            <div className="flex gap-2">
                                <p className="text-3xl font-semibold">Boat : {vessel.vesselName}</p>
                                {/* <div>
                                    <span className="-mt-2 font-semibold text-blue">{vessel.manufacturer}</span>
                                    <p>{vessel.category}</p>
                                </div> */}

                            </div>
                            <p>Vessel Model : {vessel.manufacturer}</p>
                            <p>Vessel Category : {vessel.category}</p>
                            <p>Home Port of Registry : {vessel.registry}</p>
                            <p>Vessel CATEGORY : {vessel.category}</p>
                            <p>Boat Price : {vessel.vessel_price}$</p>
                            <p>Sailing Boats : {vessel.sailing_boats}</p>
                            <p>Boat Area : {vessel.vessel_area}</p>
                            <p>Vessel Length : {vessel.vessel_length}</p>
                            <p>Vessel Weight : {vessel.vessel_weight}</p>
                            <p>Description : {vessel.vessel_description}</p>
                            {/* <img className="w-full h-[400px]" src={vessel.ownerImage} alt="" /> */}
                        </div>
                    </div>

                    <div className="flex justify-between mr-3">

                    </div>
                </div>
            </div>

        </section>
    );
};

export default BoatSellDetails;