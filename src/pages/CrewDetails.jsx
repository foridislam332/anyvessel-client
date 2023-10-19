import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../components/SectionTitle";

const CrewDetails = () => {
  const loadData = useLoaderData();
  const { establishment, contact, location, services, advert } = loadData;

  return (
    <section className="gap-4 py-12 md:py-26 border border-midBlue p-4 rounded-md bg-white">
      <div className="container">
        <SectionTitle title="Crew Details" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {/* boat image */}
          <figure className="">
            <img
              className="h-96 w-[800px] mx-auto border border-darkBlue border-opacity-90 rounded-md p-4"
              src={establishment?.paperPhoto}
              alt="Boat Image"
            />
          </figure>

          {/* boat content */}
          <div className="border border-darkBlue border-opacity-50 rounded-md p-4">
            {/* Vessel Details */}
            <div className="flex gap-5 shadow-md rounded-lg p-3">
              <div>
                <h1 className="text-2xl font-bold">
                  {establishment?.ownerName}
                </h1>
                <p className="flex gap-2 items-center">
                  <HiOutlineLocationMarker />
                  {location?.city}, {location?.country}
                </p>
                <p>Specify Address : {location.specify_address}</p>
              </div>
            </div>

            {/* Service */}
            <div className=" shadow-md rounded-lg p-4 mt-3">
              <h1 className="py-2 text-darkBlue text-lg font-semibold">
                {" "}
                Crew Service List{" "}
              </h1>
              <div className="ml-6 flex justify-between capitalize">
                <ul className="list-disc">
                  {services?.cleaning && (
                    <li>
                      <p>Cleaning</p>
                    </li>
                  )}

                  {services?.paining && (
                    <li>
                      <p>Paining</p>
                    </li>
                  )}

                  {services?.rigging && (
                    <li>
                      <p>Rigging</p>
                    </li>
                  )}

                  {services?.sailMakersRepairs && (
                    <li>
                      <p>SailMakers Repairs</p>
                    </li>
                  )}

                  {services?.electrics && (
                    <li>
                      <p>electrics</p>
                    </li>
                  )}

                  {services?.hvacAndPlumbing && (
                    <li>
                      <p>HVAC And Plumbing</p>
                    </li>
                  )}

                  {services?.mechanics && (
                    <li>
                      <p>mechanics</p>
                    </li>
                  )}

                  {services?.arrangementsAndDeliveries && (
                    <li>
                      <p>Arrangements And Deliveries</p>
                    </li>
                  )}

                  {services?.musicBands && (
                    <li>
                      <p> MusicBands</p>
                    </li>
                  )}

                  {services?.foodAndBeverage && (
                    <li>
                      <p> Food And Beverage </p>
                    </li>
                  )}

                  {services?.carRentals && (
                    <li>
                      <p> Car Rentals </p>
                    </li>
                  )}

                  {services?.others && (
                    <li>
                      <p> Others </p>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Crew Advert */}
            <div className="shadow-md rounded-lg p-3 mt-4 mb-2">
              <h2 className="py-2 text-darkBlue text-lg font-semibold">
                Crew Advert :
              </h2>{" "}
              <p className="ml-4">
                {advert && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: advert?.advert,
                    }}
                  ></p>
                )}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-7 mb-3 flex items-center justify-center">
              <Link
                onClick={() => {
                  toast.warn("Coming Soon...");
                }}
                className="font-sm min-w-[185px] text-center py-[9px] bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                // to={`/BoatSellDetails/${_id}`}
              >
                Contact With Crew
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrewDetails;
