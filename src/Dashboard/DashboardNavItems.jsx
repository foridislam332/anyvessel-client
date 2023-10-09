import ActiveLink from "../components/ActiveLink";
// react icons
const DashboardNavItems = () => {
    const role = "boat";
  //   const role = "crew";
  // const role = "boatServices";

  // re useable FC
  const listItemFc = (route, text) => {
    return (
      <li className="w-full">
        <ActiveLink to={`/dashboard/${route}`}>
          <p className="hidden md:inline"> {text} </p>
        </ActiveLink>
      </li>
    );
  };

  return (
    <section>
      <div className="bg-white p-2">
        <div className="col-span-8">
          <ul className="flex justify-evenly items-center gap-1 ">
            {/* only boat route */}
            {role === "boat" && (
              <>
                <li className="w-full">
                  <ActiveLink to="/dashboard/charter">
                    <p className="hidden md:inline">CHARTER COMPANY</p>
                  </ActiveLink>
                </li>
                <li className="w-full">
                  <ActiveLink to="/dashboard/vessel">
                    <p className="hidden md:inline">Vessel</p>
                  </ActiveLink>
                </li>
                <li className="w-full">
                  <ActiveLink to="/dashboard/location">
                    <p className="hidden md:inline">Location</p>
                  </ActiveLink>
                </li>
                <li className="w-full">
                  <ActiveLink to="/dashboard/contact">
                    <p className="hidden md:inline">Contact details</p>
                  </ActiveLink>
                </li>
                <li className="w-full">
                  <ActiveLink to="/dashboard/advertised">
                    <p className="hidden md:inline">Advertised Position</p>
                  </ActiveLink>
                </li>
              </>
            )}

            {/* only crew route */}
            {role === "crew" && (
              <>
                <li className="w-full">
                  <ActiveLink to="/dashboard/charter">
                    <p className="hidden md:inline">CHARTER COMPANY</p>
                  </ActiveLink>
                </li>
              </>
            )}

            {/* only crew route */}
            {role === "boatServices" && (
              <>
                {listItemFc(
                  "boat-services-establishment",
                  "Boat services establishment"
                )}

                {listItemFc("service-location", "Location")}

                {listItemFc("contact-details", "Contact details")}

                {listItemFc("service", "Service")}

                {listItemFc("advert", "Advert")}
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DashboardNavItems;
