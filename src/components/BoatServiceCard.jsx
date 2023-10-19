import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const BoatServiceCard = ({ service }) => {
  const {
    _id,
    advert,
    contact,
    establishment,
    location,
    services,
    userEmail,
    userId,
  } = service;

  let description =
    advert?.advert?.length > 99
      ? advert?.advert?.slice(0, 100) + "...."
      : advert?.advert;

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
        <div className="flex justify-between p-4">
          <h1 className="text-base lg:text-xl xl:text-2xl font-medium flex items-center gap-2 justify-start">
            {establishment?.ownerName}
          </h1>

          <p className="text-darkBlue flex items-center gap-1">
            <span className="text-base">
              <HiOutlineLocationMarker />
            </span>
            {location?.country}
          </p>
        </div>

        <article className="px-4 pb-5 mb-3 border-b border-blue">
          {advert && (
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></p>
          )}
        </article>

        <div className="text-center py-5">
          <Link
            to={`/boat-service/${_id}`}
            className="font-sm py-[9px] px-14 bg-yellow rounded-[50px] hover:bg-blue shadow-md hover:shadow-3xl hover:text-white duration-300"
          >
            Boat Service Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default BoatServiceCard;
