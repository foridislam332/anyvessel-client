import ActiveLink from "../components/ActiveLink";
import useCurrentUser from "../hooks/useCurrentUser";
// react icons
const StepNavItems = () => {
  const { currentUser } = useCurrentUser();

  // re useable FC
  const listItemFc = (route, text) => {
    return (
      <li className="w-full">
        <ActiveLink to={`/${route}`}>
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
                {listItemFc("", "CHARTER COMPANY")}

                {listItemFc("vessel", "Vessel")}

                {listItemFc("location", "Location")}

                {listItemFc("contact", "Contact details")}

                {listItemFc("advertised", "Advertised Position")}

                {listItemFc("booking", "Booking calendar")}
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

            {/* only boat service route */}
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

export default StepNavItems;
