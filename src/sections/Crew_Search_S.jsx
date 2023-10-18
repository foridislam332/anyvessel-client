import { useEffect, useState } from "react";
import CrewSearchCard from "../components/CrewSearchCard";
import FilterSearch from "../components/FilterSearch";
import useAllCrew from "../hooks/useAllCrew";

const Crew_Search_S = () => {
  const { allCrewData } = useAllCrew();
  const [filteredData, setFilteredData] = useState(allCrewData?.crews);

  useEffect(() => {
    setFilteredData(allCrewData?.crews);
  }, []);

  return (
    <section className="py-16 bg-[#F0F6FB]">
      <div className="container">
        <div className="mb-10">
          <FilterSearch
            originalData={allCrewData?.crews}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
          />
        </div>

        <div>
          <p className="mb-4">Crew items: {filteredData?.length}</p>
          {filteredData?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredData.map((service, i) => (
                <div key={i}>
                  <CrewSearchCard service={service} />{" "}
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

export default Crew_Search_S;
