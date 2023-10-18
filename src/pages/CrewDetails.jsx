import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";

const CrewDetails = () => {
  const loadData = useLoaderData();
  console.log("loadData ", loadData);
  const { establishment, contact, location, services ,advert} = loadData;
  let description = advert?.advert && advert?.advert?.slice(0, 100);
  return <section className="gap-4 py-24 border border-midBlue p-4 rounded-md bg-white">
    {/* boat image */}
    <figure className="">
      <img
        className="h-96 w-[800px] mx-auto"
        src={establishment?.paperPhoto}
        alt="Boat Image"
      />
    </figure>

    {/* boat content */}
    <div className="  mt-6">
      {/* Vessel Details */}
      <div className="flex gap-5 shadow-md rounded-lg p-3">

        <div>
          <h1 className="text-2xl font-bold">{establishment?.ownerName}</h1>
          <p className="flex gap-2 items-center">
            <HiOutlineLocationMarker />
            {location?.city},{" "}
            {location?.country}
          </p>
          <p>Specify Address : {location.specify_address}</p>
        </div>
      </div>

      {/* Service */}
      <div >
        <h1 className="text-center py-3 font-semibold">All Service</h1>
        <div className="mt-4 shadow-md rounded-lg p-3 flex justify-between capitalize">
          <div>
            <p> Cleaning: {services?.cleaning === true ? "YES" : "NO"} </p>
            <p> Paining: {services?.paining === true ? "YES" : "NO"} </p>
            <p> Rigging: {services?.rigging === true ? "YES" : "NO"} </p>
            <p> SailMakers Repairs: {services?.sailMakersRepairs === true ? "YES" : "NO"} </p>
          </div>
          <div className="">
            <p> electrics: {services?.electrics === true ? "YES" : "NO"} </p>
            <p> hvac And Plumbing: {services?.hvacAndPlumbing === true ? "YES" : "NO"} </p>
            <p> mechanics: {services?.mechanics === true ? "YES" : "NO"} </p>
            <p> arrangements And Deliveries: {services?.arrangementsAndDeliveries === true ? "YES" : "NO"} </p>
          </div>
          <div className="">
            <p> musicBands: {services?.musicBands === true ? "YES" : "NO"} </p>
            <p> food And Beverage: {services?.foodAndBeverage === true ? "YES" : "NO"} </p>
            <p> carRentals: {services?.carRentals === true ? "YES" : "NO"} </p>
            <p> others: {services?.others === true ? "YES" : "NO"} </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* <p> Registry: {vessel?.registry} </p>
          <p> Sailing: {vessel?.sailing_boats} </p> */}
        </div>
        <div className="flex items-center justify-between">
          {/* <p> Vessel Length: {vessel?.vessel_length} </p>
          <p> Vessel weight: {vessel?.vessel_weight} </p> */}
        </div>
      </div>
      {/* location  */}
      <div className="mt-4 shadow-md rounded-lg p-3">
        <div className="flex items-center justify-between">
          {/* <p> Boating Location: {location?.boarding_city} , {location?.boarding_country} </p>
          <p>Sailing Location: {location?.sailing_city} , {location?.sailing_country} </p> */}
        </div>

      </div>

      {/* Manufacturer */}
      <div className="shadow-md rounded-lg p-3 mt-4 mb-2">
        <p> <span className="text-midBlue">Crew Advert  :</span>   </p>
        {advert && (
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></p>
          )}
      </div>

      <div className="mt-7 mb-3 flex items-center justify-between">
        <Link
          className="font-sm py-[9px] px-14 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
        // to={`/BoatSellDetails/${_id}`}
        >
          {" "}
          Contact With Crew
          {" "}
        </Link>
        {/* <p className="text-xl font-semibold">Price : ${vessel?.vessel_price} <span className="text-midBlue text-xs ">Negotiable</span> </p> */}
      </div>
    </div>
  </section>;
};

export default CrewDetails;
