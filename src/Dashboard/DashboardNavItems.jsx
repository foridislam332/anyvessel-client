import ActiveLink from "../components/ActiveLink";
import useCurrentUser from "../hooks/useCurrentUser";
// react icons
const DashboardNavItems = () => {
  const { currentUser } = useCurrentUser();

  // re useable FC
  const listItemFc = (route, text) => {
    return (
      <li className="w-full">
        <ActiveLink to={`/dashboard/${route}`}>
          <p className="hidden md:inline text-sm"> {text} </p>
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
            {currentUser?.role === "boat" && (
              <>
                <li className="w-full">
                  <ActiveLink to="/dashboard/charter">
                    <p className="hidden md:inline text-sm">CHARTER COMPANY</p>
                  </ActiveLink>
                </li>
                <li className="w-full">
                  <ActiveLink to="/dashboard/vessel">
                    <p className="hidden md:inline text-sm">Vessel</p>
                  </ActiveLink>
                </li>
                <li className="w-full">
                  <ActiveLink to="/dashboard/location">
                    <p className="hidden md:inline text-sm">Location</p>
                  </ActiveLink>
                </li>
                <li className="w-full">
                  <ActiveLink to="/dashboard/contact">
                    <p className="hidden md:inline text-sm">Contact details</p>
                  </ActiveLink>
                </li>
                <li className="w-full">
                  <ActiveLink to="/dashboard/advertised">
                    <p className="hidden md:inline text-sm">
                      Advertised Position
                    </p>
                  </ActiveLink>
                </li>
                <li className="w-full">
                  <ActiveLink to="/dashboard/booking">
                    <p className="hidden md:inline text-sm">Booking calendar</p>
                  </ActiveLink>
                </li>
              </>
            )}

            {/* only crew route */}
            {currentUser?.role === "crew" && (
              <>
                {listItemFc("crew-establishment", "Crew Member")}

                {listItemFc("crew-location", "Location")}

                {listItemFc("crew-contact-details", "Contact details")}

                {listItemFc("crew-service", "Services")}

                {listItemFc("crew-advert", "Advert")}
              </>
            )}

            {/* only crew route */}
            {currentUser?.role === "boatServices" && (
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
