import { useState } from "react";

import useMyVessel from "../../hooks/useMyVessel";
import VesselCard from "../../components/VesselCard";
import PageLoading from "../../components/PageLoading";
import EditVessel from "../../components/EditVessel";
import AddVesselForm from "../../sections/AddVesselForm";

const Vessel = () => {
    const { myVesselData, loading, refetch } = useMyVessel();

    const [isEditVessel, setIsEditVessel] = useState(false);
    const [editedVessel, setEditedVessel] = useState({});
    const [addNewVessel, setAddNewVessel] = useState(false);


    if (loading) {
        return <PageLoading />
    }
    return (
        <section className="h-full">
            {
                myVesselData.length > 0 && !addNewVessel ?
                    <div className="overflow-y-auto">
                        {
                            isEditVessel ? <EditVessel vessel={editedVessel} refetch={refetch} setIsEditVessel={setIsEditVessel} /> : <>
                                <div className="flex justify-end mb-8">
                                    <button onClick={() => setAddNewVessel(true)} className="text-white font-light bg-blue px-4 py-2 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300">
                                        Add new Vessel
                                    </button>
                                </div>

                                {/* vessel card */}
                                <div className="grid grid-cols-3 gap-6 py-2 px-1">
                                    {
                                        myVesselData.map(boat => <VesselCard key={boat._id} boat={boat} refetch={refetch} setIsEditVessel={setIsEditVessel} setEditedVessel={setEditedVessel} />)
                                    }
                                </div>
                            </>
                        }

                    </div> : <AddVesselForm myVesselData={myVesselData} refetch={refetch} setAddNewVessel={setAddNewVessel} />
            }
        </section>
    );
};

export default Vessel;
