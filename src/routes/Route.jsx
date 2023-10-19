import { createBrowserRouter } from "react-router-dom";
import MainProfile from "../Profile/Profile";
import Charter from "../SignUpSteps/Boat/Charter";
import StepsOutlet from "../SignUpSteps/StepsOutlet";
import BoatSellDetails from "../components/BoatDetails";
import Main from "../layouts/Main";
import Register from "../layouts/Register";
import About_Us from "../pages/About_Us";
import BoatRegister from "../pages/BoatRegister";
import BoatServiceDetails from "../pages/BoatServiceDetails";
import BoatServicesRegister from "../pages/BoatServicesRegister";
import Boat_Search from "../pages/Boat_Search";
import Boat_Services from "../pages/Boat_Services";
import CrewDetails from "../pages/CrewDetails";
import CrewRegister from "../pages/CrewRegister";
import Crew_Search from "../pages/Crew_Search";
import Home from "../pages/Home";
import BoatSell from "../sections/BoatSell";
import RegisterCard from "../sections/RegisterCard";
import Vessel from "../SignUpSteps/Boat/Vessel";
import Location from "../SignUpSteps/Boat/Location";
import Contact from "../SignUpSteps/Boat/Contact";
import Advertised from "../SignUpSteps/Boat/Advertised";
import Booking_Calender from "../SignUpSteps/Boat/Booking_Calender";
import Cr_Establishment from "../SignUpSteps/Crew/Cr_Establishment";
import Cr_ServiceLocation from "../SignUpSteps/Crew/Cr_ServiceLocation";
import Cr_ContactDetails from "../SignUpSteps/Crew/Cr_ContactDetails";
import Cr_Services from "../SignUpSteps/Crew/Cr_Services";
import Cr_Advert from "../SignUpSteps/Crew/Cr_Advert";
import BS_Establishment from "../SignUpSteps/BoatServices/BS_Establishment";
import BS_ServiceLocation from "../SignUpSteps/BoatServices/BS_ServiceLocation";
import BS_ContactDetails from "../SignUpSteps/BoatServices/BS_ContactDetails";
import BS_Services from "../SignUpSteps/BoatServices/BS_Services";
import BS_Advert from "../SignUpSteps/BoatServices/BS_Advert";

const baseURL = "http://localhost:5000";

const Route = createBrowserRouter([
  // Main Route
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about_us",
        element: <About_Us />,
      },
      {
        path: "/crew_search",
        element: <Crew_Search />,
      },
      {
        path: "/crew-details/:id",
        element: <CrewDetails />,
        loader: ({ params }) => fetch(`${baseURL}/crew-data/${params.id}`),
      },
      {
        path: "/boat_search",
        element: <Boat_Search />,
      },
      {
        path: "/boat_search/:id",
        element: <Boat_Search />,
        loader: ({ params }) => fetch(`${baseURL}/boatDetails/${params.id}`),
      },
      {
        path: "/profile",
        element: <MainProfile />,
      },
      {
        path: "/boat_sale",
        element: <BoatSell />,
      },
      {
        path: "/boat_details/:id",
        element: <BoatSellDetails />,
        loader: ({ params }) => fetch(`${baseURL}/boatDetails/${params.id}`),
      },
      {
        path: "/boat_services",
        element: <Boat_Services />,
      },
      {
        path: "/boat-service/:id",
        element: <BoatServiceDetails />,
        loader: ({ params }) => fetch(`${baseURL}/boat-service/${params.id}`),
      },
    ],
  },
  // Registration
  {
    path: "/register",
    element: <Register />,
    children: [
      {
        path: "/register",
        element: <RegisterCard />,
      },
      {
        path: "/register/boat_register",
        element: <BoatRegister />,
      },
      {
        path: "/register/crew_register",
        element: <CrewRegister />,
      },
      {
        path: "/register/boat_services",
        element: <BoatServicesRegister />,
      },
    ],
  },
  {
    path: "sign-up-step",
    element: <StepsOutlet />,
    children: [
      // boat role
      {
        path: "/sign-up-step/charter",
        element: <Charter />,
      },
      {
        path: "/sign-up-step/vessel",
        element: <Vessel />,
      },
      {
        path: "/sign-up-step/location",
        element: <Location />,
      },
      {
        path: "/sign-up-step/contact",
        element: <Contact />,
      },
      {
        path: "/sign-up-step/advertised",
        element: <Advertised />,
      },
      {
        path: "/sign-up-step/booking",
        element: <Booking_Calender />,
      },

      //  crew role
      {
        path: "/sign-up-step/crew-establishment",
        element: <Cr_Establishment />,
      },
      {
        path: "/sign-up-step/crew-location",
        element: <Cr_ServiceLocation />,
      },
      {
        path: "/sign-up-step/crew-contact-details",
        element: <Cr_ContactDetails />,
      },
      {
        path: "/sign-up-step/crew-service",
        element: <Cr_Services />,
      },
      {
        path: "/sign-up-step/crew-advert",
        element: <Cr_Advert />,
      },

      //   boat services role
      {
        path: "/sign-up-step/boat-services-establishment",
        element: <BS_Establishment />,
      },
      {
        path: "/sign-up-step/service-location",
        element: <BS_ServiceLocation />,
      },
      {
        path: "/sign-up-step/contact-details",
        element: <BS_ContactDetails />,
      },
      {
        path: "/sign-up-step/boat-service",
        element: <BS_Services />,
      },
      {
        path: "/sign-up-step/advert",
        element: <BS_Advert />,
      },
    ],
  },
]);

export default Route;
