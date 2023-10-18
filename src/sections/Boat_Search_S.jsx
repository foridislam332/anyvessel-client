import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BoatSearchCard from "../components/BoatSearchCard";
import useAllBoat from "../hooks/useAllBoat";

const Boat_Search_S = () => {
  const { allBoatData } = useAllBoat();
  console.log(allBoatData);
  const [filteredData, setFilteredData] = useState(allBoatData);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const boat_Search = watch("boat_Search");
  useEffect(() => {
    const searching = boat_Search ? boat_Search?.toLowerCase() : "";

    let filter = allBoatData?.boatService?.filter(
      (boat) =>
        !searching ||
        boat?.establishment?.ownerName?.toLowerCase().includes(searching) ||
        boat?.advert?.advert?.toLowerCase().includes(searching)
    );

    setFilteredData(filter);
  }, [boat_Search]);

  useEffect(() => {
    setFilteredData(allBoatData?.boatService);
  }, [allBoatData]);

  return (
    <section className="py-16 bg-[#F0F6FB]">
      <div className="container">
        <div className="mb-10 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-2xl mx-auto">
              <input
                id="boat_Search"
                name="boat_Search"
                placeholder="Search Boat"
                {...register(`boat_Search`)}
                className="!w-full focus:outline-none p-[10px] text-darkBlue placeholder:text-darkBlue rounded-lg border border-sky-400 shadow-lg"
              />
            </div>
          </form>
        </div>

        <div>
          <p className="mb-4">Boat items: {filteredData?.length}</p>
          {filteredData?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredData.map((service, i) => (
                <div key={i}>
                  <BoatSearchCard service={service} />{" "}
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

export default Boat_Search_S;
