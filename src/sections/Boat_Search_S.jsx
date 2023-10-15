import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BoatSearchCard from "../components/BoatSearchCard";
import useAllBoat from "../hooks/useAllBoat";

const Boat_Search_S = () => {
  const { allBoatData } = useAllBoat();
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

    // Axios.patch("crew-data-contact", newData)
    //   .then((res) => {
    //     console.log("response - ", res);

    //     if (res?.status === 200) {
    //       toast.success("Boat services location submitted successful!");
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error("Somethings else!");
    //     console.log(err);
    //   });
  };

  const boat_Search = watch("boat_Search");

  console.log(allBoatData);
  console.log(filteredData);

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
        <div className="mb-10 flex  justify-center items-center">
          <form className="max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center">
              <input
                id="boat_Search"
                name="boat_Search"
                placeholder="Search Boat"
                {...register(`boat_Search`)}
                className="w-full focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
              />

              <button
                type="submit"
                className="text-white text-sm font-light bg-blue bg-opacity-90 px-4 md:px-8 py-[10px] hover:bg-transparent hover:text-blue border border-blue duration-300"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>

        <div>
          <p className="mb-4">boat items: {filteredData?.length}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredData &&
              filteredData.map((service, i) => (
                <div key={i}>
                  <BoatSearchCard service={service} />{" "}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boat_Search_S;
