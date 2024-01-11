const VesselItem = (props) => {
  const { postDate, postId, userId, vessel } = props?.vessel;

  console.log("props?.vessel ", props?.vessel);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start gap-7">
        <div className="relative w-full h-full">
          <figure>
            <img src={vessel?.vesselImage} alt="" />
          </figure>
          <figure className="absolute -bottom-8 sm:-bottom-4 lg:-top-5 -right-1 md:right-4 lg:-right-5 w-28 lg:w-24 h-28 lg:h-24 rounded-full overflow-hidden border-[6px] lg:border-[4px] border-white">
            <img className="w-full h-full" src={vessel?.ownerImage} />
          </figure>
        </div>

        <article className="w-full">
          <div className="mb-5">
            <h1 className="text-2xl font-medium uppercase">
              {vessel?.vesselName}
            </h1>
            <h3> ownerName </h3>
          </div>

          <div className="flex flex-col gap-5">
            {/* Vessel Info */}
            <div className="grid sm:grid-cols-3 gap-1.5">
              <p className="sm:col-span-2">
                {vessel?.manufacturer
                  ? vesselInfoItem("Boat Manufacturer", vessel?.manufacturer)
                  : null}
              </p>

              {vessel?.category
                ? vesselInfoItem("Category ", vessel?.category)
                : null}
              {vessel?.vessel_price
                ? vesselInfoItem("price ", `$ ${vessel?.vessel_price}`)
                : null}
              {vessel?.registry
                ? vesselInfoItem("Registry ", vessel?.registry)
                : null}
              {vessel?.number_crew
                ? vesselInfoItem("Crew Member", vessel?.number_crew)
                : null}
              {vessel?.sailing_boats
                ? vesselInfoItem("sailing boats", vessel?.sailing_boats)
                : null}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
              <h3 className="col-span-1 sm:col-span-3 text-lg font-semibold">
                Vessel Info :-{" "}
              </h3>
              {vessel?.vessel_area
                ? vesselInfoItem("area", vessel?.vessel_area)
                : null}
              {vessel?.vessel_contact_email
                ? vesselInfoItem("contact email ", vessel?.vessel_contact_email)
                : null}
              {vessel?.vessel_contact_number
                ? vesselInfoItem(
                    "contact number ",
                    vessel?.vessel_contact_number
                  )
                : null}
              {vessel?.vessel_length
                ? vesselInfoItem("length ", vessel?.vessel_length)
                : null}
              {vessel?.vessel_weight
                ? vesselInfoItem("weight ", vessel?.vessel_weight)
                : null}
            </div>

            <div>
              {vessel?.boatForSale
                ? vesselInfoItem("Boat for Sale", vessel?.boatForSale)
                : null}
              {vessel?.forCharter
                ? vesselInfoItem("Charter ", vessel?.forCharter)
                : null}
              <p className="w-full inline-block">
                {vessel?.vessel_description
                  ? vesselInfoItem("Description", vessel?.vessel_description)
                  : null}
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default VesselItem;

function vesselInfoItem(name, data) {
  return (
    <>
      {name && data && (
        <p className="capitalize inline-flex items-start gap-3 w-full">
          <strong className={`${data === true ? "text-darkBlue" : ""}`}>
            {name}{" "}
          </strong>
          {data !== true && (
            <span>
              <strong>: </strong> {data}
            </span>
          )}
        </p>
      )}
    </>
  );
}
