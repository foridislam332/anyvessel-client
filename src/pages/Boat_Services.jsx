import { useEffect, useState } from "react";
import BoatServiceCard from "../components/BoatServiceCard";
import useAllBoatService from "../hooks/useAllBoatService";

const Boat_Services = () => {
  const { allBoatService } = useAllBoatService();
  const [filteredData, setFilteredData] = useState(allBoatService?.boatService);

  useEffect(() => {
    setFilteredData(allBoatService?.boatService);
  }, []);
  return (
    <section className="py-16 bg-[#F0F6FB]">
      <div className="container">
        <div className="mb-10">
          {/* <FilterSearch
            originalData={allCrewData?.crews}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
          /> */}
        </div>

        <div>
          <p className="mb-4">
            Boat Service items: {allBoatService?.boatService?.length}
          </p>
          {allBoatService?.boatService?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allBoatService?.boatService?.map((service, i) => (
                <div key={i}>
                  <BoatServiceCard service={service} />{" "}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xl ">Boat Not Found!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Boat_Services;
