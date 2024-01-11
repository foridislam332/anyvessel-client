import { useState } from "react";

// images
import useVessel from "../../hooks/useVessel";
import AddVessel from "./Components/AddVessel";
import ShowVessels from "./Components/ShowVessels";

const Vessel = () => {
  const { vessels, vesselLoading, refetch } = useVessel();
  const [tabs, setTabs] = useState("showVessel");

  return (
    <section className="h-full">
      <div
        title="Scroll now"
        className="max-h-[650px] no-scrollbar overflow-y-scroll"
      >
        <div className="flex justify-end mb-8">
          {tabs === "addVessel" ? (
            <button
              onClick={() => setTabs("showVessel")}
              className="text-white font-light bg-blue px-4 py-2 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300"
            >
              Show Vessel
            </button>
          ) : (
            <button
              onClick={() => setTabs("addVessel")}
              className="text-white font-light bg-blue px-4 py-2 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300"
            >
              Add new Vessel
            </button>
          )}
        </div>

        {/* form */}
        {tabs === "addVessel" ? <AddVessel /> : <ShowVessels />}
      </div>
    </section>
  );
};

export default Vessel;
