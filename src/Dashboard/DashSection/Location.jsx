import { Country, State } from "country-state-city";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import useCurrentUser from "../../hooks/useCurrentUser";

const Location = () => {
  const [Axios] = useAxios();
  const { currentUser } = useCurrentUser();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newData = {
      ownerUserId: currentUser?._id,
      ownerUserEmail: currentUser?.email,
      boarding_country: data.boarding_country,
      sailing_country: data.sailing_country,
      boarding_city: data.boarding_city,
      sailing_city: data.sailing_city,
    };
    console.log(newData);
    Axios.patch("boatSailing-location", newData)
      .then((res) => {
        console.log("response - ", res);

        if (res?.status === 200) {
          toast.success("Boat Sailing location update successful!");
        }
      })
      .catch((err) => {
        toast.error("Somethings else!");
        console.log(err);
      });
  };

  // All Country
  const countryData = Country.getAllCountries();

  //  State
  const selectedBoardingCountry = watch("boarding_country", "");
  const selectedSailingCountry = watch("sailing_country", "");

  // filtered country
  const filteredBoardingCountry = countryData.find(
    (country) => country.name == selectedBoardingCountry
  );
  const filteredSailingCountry = countryData.find(
    (country) => country.name == selectedSailingCountry
  );

  // filtered State
  const BoardingStateData = State.getStatesOfCountry(
    filteredBoardingCountry?.isoCode
  );
  const SailingStateData = State.getStatesOfCountry(
    filteredSailingCountry?.isoCode
  );

  return (
    <section className="p-10">
      <div className="flex justify-end">
        <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300">
          Add new Location
        </button>
      </div>
      <div className="p-10 w-[700px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <h3 className="text-midBlue">Boarding location</h3>

            <div className="sm:px-[3px] py-[7px]">
              <select
                {...register("boarding_country", { required: true })}
                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
              >
                <option value="">Country</option>
                {countryData?.map((country, i) => (
                  <option key={i} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:px-[3px] py-[7px]">
              <select
                {...register("boarding_city", { required: true })}
                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
              >
                <option value="">City</option>
                {BoardingStateData?.map((state, i) => (
                  <option key={i} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <h1 className="text-midBlue">Sailing Destination</h1>

            <div className="sm:px-[3px] py-[7px]">
              <select
                {...register("sailing_country", { required: true })}
                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
              >
                <option value="">Country</option>
                {countryData?.map((state, i) => (
                  <option key={i} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:px-[3px] py-[7px]">
              <select
                {...register("sailing_city", { required: true })}
                className="text-darkBlue w-full border border-midBlue rounded-md focus:outline-none focus:border-b focus:border-midBlue p-2 sm:pr-3 py-[3px]"
              >
                <option value="">City</option>
                {SailingStateData?.map((state, i) => (
                  <option key={i} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" flex justify-center gap-12 mt-8">
              <button className="text-white text-sm font-light bg-blue px-8 py-3 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300 w-48">
                Confirm
              </button>

              <div className="cursor-pointer text-sm font-light text-center px-8 py-3 rounded-[9px] border border-blue w-48 hover:text-blue shadow-md hover:shadow-3xl duration-300">
                Cancel
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Location;
