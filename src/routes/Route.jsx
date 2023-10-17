import { createBrowserRouter } from "react-router-dom";
import Advertised from "../Dashboard/DashSection/Advertised";
import BS_Advert from "../Dashboard/DashSection/BoatServices/BS_Advert";
import BS_ContactDetails from "../Dashboard/DashSection/BoatServices/BS_ContactDetails";
import BS_Establishment from "../Dashboard/DashSection/BoatServices/BS_Establishment";
import BS_ServiceLocation from "../Dashboard/DashSection/BoatServices/BS_ServiceLocation";
import BS_Services from "../Dashboard/DashSection/BoatServices/BS_Services";
import Booking_Calender from "../Dashboard/DashSection/Booking_Calender";
import Charter from "../Dashboard/DashSection/Charter";
import Contact from "../Dashboard/DashSection/Contact";
import Cr_Advert from "../Dashboard/DashSection/Crew/Cr_Advert";
import Cr_ContactDetails from "../Dashboard/DashSection/Crew/Cr_ContactDetails";
import Cr_Establishment from "../Dashboard/DashSection/Crew/Cr_Establishment";
import Cr_ServiceLocation from "../Dashboard/DashSection/Crew/Cr_ServiceLocation";
import Cr_Services from "../Dashboard/DashSection/Crew/Cr_Services";
import Location from "../Dashboard/DashSection/Location";
import Vessel from "../Dashboard/DashSection/Vessel";
import Dashboard from "../Dashboard/Dashboard";
import MainProfile from "../Profile/Profile";
import BoatSellDetails from "../components/BoatDetails";
import Main from "../layouts/Main";
import Register from "../layouts/Register";
import About_Us from "../pages/About_Us";
import BoatRegister from "../pages/BoatRegister";
import BoatServicesRegister from "../pages/BoatServicesRegister";
import Boat_Search from "../pages/Boat_Search";
import Boat_Services from "../pages/Boat_Services";
import CrewDetails from "../pages/CrewDetails";
import CrewRegister from "../pages/CrewRegister";
import Crew_Search from "../pages/Crew_Search";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import BoatSell from "../sections/BoatSell";
import RegisterCard from "../sections/RegisterCard";

const baseURL = "http://localhost:5000";

const Route = createBrowserRouter([
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
        loader: async ({ params }) =>
          await fetch(`${baseURL}/crew-data/${params.id}`),
      },
      {
        path: "/boat_search",
        element: <Boat_Search />,
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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          // boat role
          {
            path: "/dashboard/charter",
            element: <Charter />,
          },
          {
            path: "/dashboard/vessel",
            element: <Vessel />,
          },
          {
            path: "/dashboard/location",
            element: <Location />,
          },
          {
            path: "/dashboard/contact",
            element: <Contact />,
          },
          {
            path: "/dashboard/advertised",
            element: <Advertised />,
          },
          {
            path: "/dashboard/booking",
            element: <Booking_Calender />,
          },

          //  crew role
          {
            path: "/dashboard/crew-establishment",
            element: <Cr_Establishment />,
          },
          {
            path: "/dashboard/crew-location",
            element: <Cr_ServiceLocation />,
          },
          {
            path: "/dashboard/crew-contact-details",
            element: <Cr_ContactDetails />,
          },
          {
            path: "/dashboard/crew-service",
            element: <Cr_Services />,
          },
          {
            path: "/dashboard/crew-advert",
            element: <Cr_Advert />,
          },

          //   boat services role
          {
            path: "/dashboard/boat-services-establishment",
            element: <BS_Establishment />,
          },
          {
            path: "/dashboard/service-location",
            element: <BS_ServiceLocation />,
          },
          {
            path: "/dashboard/contact-details",
            element: <BS_ContactDetails />,
          },
          {
            path: "/dashboard/service",
            element: <BS_Services />,
          },
          {
            path: "/dashboard/advert",
            element: <BS_Advert />,
          },
        ],
      },
    ],
  },
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
]);

export default Route;
