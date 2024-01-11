import useVessel from "../../../hooks/useVessel";
import VesselItem from "./VesselItem";

const ShowVessels = () => {
  const { vessels, vesselLoading, refetch } = useVessel();
  console.log("vessels ", vessels);

  return (
    <>
      {vesselLoading ? (
        <div className="text-center">
          <p className="text-darkBlue"> Loading... </p>
        </div>
      ) : vessels?.length ? (
        <div className="flex flex-col gap-14 sm:gap-10">
          {vessels.map((vessel, idx) => (
            <VesselItem key={idx} vessel={vessel} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray/70">No Vessel , Add Your Vessel</p>
        </div>
      )}
    </>
  );
};

export default ShowVessels;
