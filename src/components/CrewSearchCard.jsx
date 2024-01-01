import { CiRollingSuitcase } from "react-icons/Ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const CrewSearchCard = ({ service }) => {
  const { _id, establishment, location, services, userId, advert } = service;

  const status = true;
  let description =
    advert?.advert?.length > 99
      ? advert?.advert?.slice(0, 100) + "...."
      : advert?.advert;

  // console.log("service ", service);
  return (
    <>
      <div className="bg-white rounded-[10px] hover:shadow-3xl duration-300">
        {/* img */}
        <div className="rounded-t-[10px] h-60 overflow-hidden">
          <img
            className="w-full min-h-full object-cover object-center"
            src={establishment?.paperPhoto}
            alt=""
          />
        </div>

        {/* details */}
        <div className="p-4">
          <div className="flex justify-between">
            <h1 className="text-base lg:text-xl  font-medium flex items-center gap-2 justify-start">
              {establishment?.ownerName}

              {status ? (
                <span className="w-3 h-3 rounded-full bg-green-500 shadow-md shadow-green-100"></span>
              ) : (
                <span className="w-3 h-3 rounded-full bg-gray shadow-md shadow-gray"></span>
              )}
            </h1>

            <p className="text-darkBlue flex items-center gap-1">
              <span className="text-base">
                <CiRollingSuitcase />
              </span>
              {service?.experience || 0} years
            </p>
            <p className="text-darkBlue flex items-center gap-1">
              <span className="text-base">
                <HiOutlineLocationMarker />
              </span>
              {location?.country}
            </p>
          </div>
        </div>

        <article className="px-4 h-18 md:h-20">
          {advert.advert !== null ? (
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></p>
          ) : (
            "N/A"
          )}
        </article>

        <div className="text-center py-5">
          <Link
            to={`/crew-details/${_id}`}
            className="font-sm py-[9px] px-14 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default CrewSearchCard;
