import { HiOutlineLocationMarker } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import SectionTitle from "../components/SectionTitle";

const BoatServiceDetails = () => {
  const boatData = useLoaderData();
  const {
    services,
    establishment,
    advert,
    contact,
    location,
    userEmail,
    userId,
  } = boatData;

  const {
    arrangementsAndDeliveries,
    carRentals,
    electrics,
    foodAndBeverage,
    hvacAndPlumbing,
    mechanics,
    musicBands,
    others,
    paining,
    sailMakersRepairs,
  } = services;

  return (
    <section className="py-24">
      <div>
        {/* Section Title */}
        <SectionTitle title="Boat Service Details" />

        <div className="py-12 container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Images */}
            <div className="col-span-6">
              <img
                className="w-full h-[400px] rounded-md shadow-md p-4 border-darkBlue"
                src={establishment?.paperPhoto}
                alt=""
              />
            </div>

            {/* Contents */}
            <div className="col-span-6">
              <div className="flex items-center justify-between flex-col lg:flex-row gap-3 md:gap-5 shadow-md p-4 rounded-md">
                <div className="flex items-center gap-3">
                  <figure>
                    <img
                      className="h-16 w-16 rounded-full"
                      src={establishment?.businessLogo}
                      alt="Business Logo"
                    />
                  </figure>
                  <div>
                    <h2 className="text-3xl font-semibold">
                      {contact?.contactName}
                    </h2>
                    <p className="flex gap-3 items-center">
                      <HiOutlineLocationMarker />
                      {location?.city}, {location?.country}
                    </p>
                  </div>
                </div>

                <div>
                  {/* <Link
                    // to={``}
                    className="font-sm py-[9px] px-4 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                  >
                    {" "}
                    View Profile{" "}
                  </Link> */}
                </div>
              </div>

              {/* services */}
              <div className="p-4 shadow-md rounded-md mt-2">
                <h3 className="text-lg font-semibold"> Services : </h3>

                <ul className="list-disc pl-4">
                  {arrangementsAndDeliveries && (
                    <li>
                      <p>
                        <span> Arrangements And Deliveries </span>
                      </p>
                    </li>
                  )}

                  {carRentals && (
                    <li>
                      <p>
                        <span> car Rentals </span>
                      </p>
                    </li>
                  )}

                  {electrics && (
                    <li>
                      <p>
                        <span> Electrics </span>
                      </p>
                    </li>
                  )}

                  {musicBands && (
                    <li>
                      <p>
                        <span> musicBands </span>
                      </p>
                    </li>
                  )}

                  {foodAndBeverage && (
                    <li>
                      <p>
                        <span> Food And Beverage </span>
                      </p>
                    </li>
                  )}

                  {hvacAndPlumbing && (
                    <li>
                      <p>
                        <span> HVAC And Plumbing </span>
                      </p>
                    </li>
                  )}

                  {mechanics && (
                    <li>
                      <p>
                        <span> mechanics </span>
                      </p>
                    </li>
                  )}

                  {sailMakersRepairs && (
                    <li>
                      <p>
                        <span> Sail Makers Repairs </span>
                      </p>
                    </li>
                  )}

                  {paining && (
                    <li>
                      <p>
                        <span> paining </span>
                      </p>
                    </li>
                  )}

                  {others && (
                    <li>
                      <p>
                        <span className="font-semibold"> others: </span>
                        {others}
                      </p>
                    </li>
                  )}
                </ul>
              </div>

              {/* Description */}
              <div className="p-4 shadow-md rounded-md mt-2">
                <h3 className="text-lg font-bold mb-2"> Description </h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: advert?.advert,
                  }}
                ></p>
              </div>

              {/* Buttons */}
              <div className="p-4 text-center mt-2">
                <button
                  onClick={() => {
                    toast.warn("waiting Coming Soo..");
                  }}
                  className="w-[155px] py-2 px-3 bg-yellow rounded-full lg:rounded-l-full border-l-2 border-white hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
                >
                  Contact Service
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between mr-3"></div>
        </div>
      </div>
    </section>
  );
};

export default BoatServiceDetails;
