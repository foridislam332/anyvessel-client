import { Country, State } from "country-state-city";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxios from "../../hooks/useAxios";
import useCurrentUser from "../../hooks/useCurrentUser";
import useAllBoatSailingPost from "../../hooks/useAllBoatSailingPost";

const Location = () => {
  const { boatSellPost } = useAllBoatSailingPost();

  const [Axios] = useAxios();
  const { currentUser } = useCurrentUser();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  if (boatSellPost === undefined) {
    return <h2>Loading...</h2>;
  }

  const newPostID = boatSellPost[boatSellPost.length - 1]?._id;

  const onSubmit = (data) => {
    const newData = {
      newPostID: newPostID,
      ownerUserId: currentUser?._id,
      ownerUserEmail: currentUser?.email,
      boarding_country: data?.boarding_country,
      sailing_country: data?.sailing_country,
      boarding_city: data?.boarding_city,
      sailing_city: data?.sailing_city,
    };

    Axios.patch("boatSailing-location", newData)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Boat Sailing location update successful!");
        }
      })
      .catch((err) => {
        toast.error("Somethings else!");
        // console.log(err);
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
    <section>
      <div className="flex justify-end mb-12">
        <button className="text-white font-light bg-blue px-4 py-2 rounded-[9px] border border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300">
          Add new Location
        </button>
      </div>

      <div className="max-w-[677px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-14 space-y-5">
            <h3 className="text-darkBlue text-lg font-medium leading-7">
              Boarding location
            </h3>

            <select
              {...register("boarding_country", { required: true })}
              className="text-darkBlue w-full border border-midBlue rounded-md outline-none focus:border-blue px-2 py-[10px]"
            >
              <option value="">Country</option>
              {countryData?.map((country, i) => (
                <option key={i} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>

            <select
              {...register("boarding_city", { required: true })}
              className="text-darkBlue w-full border border-midBlue rounded-md outline-none focus:border-blue px-2 py-[10px]"
            >
              <option value="">City</option>
              {BoardingStateData?.map((state, i) => (
                <option key={i} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-5">
            <h1 className="text-darkBlue text-lg font-medium leading-7">
              Sailing Destination
            </h1>

            <select
              {...register("sailing_country", { required: true })}
              className="text-darkBlue w-full border border-midBlue rounded-md outline-none focus:border-blue px-2 py-[10px]"
            >
              <option value="">Country</option>
              {countryData?.map((state, i) => (
                <option key={i} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>

            <select
              {...register("sailing_city", { required: true })}
              className="text-darkBlue w-full border border-midBlue rounded-md outline-none focus:border-blue px-2 py-[10px]"
            >
              <option value="">City</option>
              {SailingStateData?.map((state, i) => (
                <option key={i} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center gap-10 my-16">
            <button className="text-white font-light bg-blue py-[7px] rounded-[9px] border-2 border-blue hover:bg-transparent hover:text-blue hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
              Confirm
            </button>

            <div className="cursor-pointer text-blue font-light bg-transparent py-[7px] rounded-[9px] border-2 border-blue hover:bg-blue hover:text-white hover:shadow-lg hover:shadow-blue/20 duration-300 w-48 grid place-items-center">
              Cancel
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Location;
