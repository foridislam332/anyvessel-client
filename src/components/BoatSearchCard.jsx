import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const BoatSearchCard = ({ service }) => {
  const { establishment, location, services, userId } = service;

  // console.log({ establishment, location, services, userId });
  const status = true;

  return (
    <div className="flex gap-4 border border-midBlue p-4 rounded-md">
      <figure className="w-56">
        <img src={establishment?.paperPhoto} />
        <Link
          className="bg-[#00A4DE] hover:bg-[#1f88ad] transition text-white w-full text-center py-2 px-4 block"
          to={service?._id}
        >
          View Profile
        </Link>
      </figure>
      <aside className="px-3 pb-4">
        <div className="flex gap-4 items-center">
          <figure className="w-8 h-8 rounded-full overflow-hidden">
            <img className="w-full h-full" src={establishment?.businessLogo} />
          </figure>
          <h2 className="text-xl font-medium">{establishment?.ownerName} </h2>
          {status ? (
            <span className="w-3 h-3 rounded-full bg-green-500 shadow-md shadow-green-100"></span>
          ) : (
            <span className="w-3 h-3 rounded-full bg-gray shadow-md shadow-gray"></span>
          )}
        </div>
        <div>
          <p className="flex items-center gap-3 text-darkBlue mb-3">
            <HiOutlineLocationMarker /> {location?.city}, {location?.country}
          </p>
          <span className="border border-blue px-2 py-1 rounded-md">
            3874685
          </span>
        </div>
      </aside>
    </div>
  );
};

export default BoatSearchCard;
