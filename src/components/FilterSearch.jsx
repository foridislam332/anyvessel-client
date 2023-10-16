import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FilterSearch = ({ filteredData, setFilteredData, originalData }) => {
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

  const searchText = watch("searchText");
  console.log("searchText ", searchText);

  useEffect(() => {
    const searching = searchText ? searchText?.toLowerCase() : "";

    let filter = originalData?.filter(
      (boat) =>
        !searching ||
        boat?.establishment?.ownerName?.toLowerCase().includes(searching) ||
        boat?.advert?.advert?.toLowerCase().includes(searching)
    );

    setFilteredData(filter);
  }, [searchText]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="max-w-2xl mx-auto">
        <input
          id="boat_Search"
          name="boat_Search"
          placeholder="Search here..."
          {...register(`searchText`)}
          className="!w-full focus:outline-none p-[10px] text-darkBlue placeholder:text-darkBlue rounded-lg border border-sky-400 shadow-lg"
        />
      </div>
    </form>
  );
};

export default FilterSearch;
