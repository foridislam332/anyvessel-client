import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const BoatSaleC = ({ boat }) => {
  console.log("saleData ", boat);
  const { _id, ownerUserId, vessel, location, contact } = boat;
  return (
    <div className="gap-4 border border-midBlue p-4 rounded-md bg-white">
      {/* boat image */}
      <figure className="max-h-72">
        <img
          className="w-full h-48 md:h-60 lg:h-72  object-cover object-center"
          src={vessel?.vesselImage}
          alt="Boat Image"
        />
      </figure>

      {/* boat content */}
      <div className="  mt-6">
        {/* Vessel Details */}
        <div className="flex gap-5 shadow-md rounded-lg p-3">
          <figure className="">
            <img
              className="w-16 h-16 object-cover object-center rounded-full shadow-md"
              src={vessel?.ownerImage}
              alt="Vessel Owner"
            />
          </figure>
          <div>
            <h1 className="text-2xl font-bold">{contact?.sellerName}</h1>
            <p className="flex gap-2 items-center">
              <HiOutlineLocationMarker /> {location?.boarding_city},{" "}
              {location?.boarding_country}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-4 shadow-md rounded-lg p-3">
          <div className="flex items-center justify-between">
            <p> Category: {vessel?.category} </p>
            <p> Crew Number: {vessel?.number_crew} </p>
          </div>
          <div className="flex items-center justify-between">
            <p> Registry: {vessel?.registry} </p>
            <p> Sailing: {vessel?.sailing_boats} </p>
          </div>
          <div className="flex items-center justify-between">
            <p> Vessel Length: {vessel?.vessel_length} </p>
            <p> Vessel weight: {vessel?.vessel_weight} </p>
          </div>
        </div>

        {/* Manufacturer */}
        <div className="shadow-md rounded-lg p-3 mt-4 mb-2">
          <p> Manufacturer: {vessel?.manufacturer} </p>
        </div>

        <div className="mt-7 mb-3 flex items-center justify-between">
          <Link
            className="font-sm py-[9px] px-14 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
            to={`#`}
          >
            {" "}
            View Details{" "}
          </Link>
          <p className="text-xl font-semibold">$3450</p>
        </div>
      </div>
    </div>
  );
};

export default BoatSaleC;
