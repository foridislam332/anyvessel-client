import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Register from "../layouts/Register";
import RegisterCard from "../sections/RegisterCard";
import BoatRegister from "../pages/BoatRegister";
import CrewRegister from "../pages/CrewRegister";
import BoatServicesRegister from "../pages/BoatServicesRegister";
import Charter from "../Dashboard/DashSection/Charter";
import Dashboard from "../Dashboard/Dashboard";
import Vessel from "../Dashboard/DashSection/Vessel";
import Location from "../Dashboard/DashSection/Location";
import Advertised from "../Dashboard/DashSection/Advertised";
import Contact from "../Dashboard/DashSection/Contact";
import Establishment from "../Dashboard/DashSection/BoatServices/Establishment";
import ServiceLocation from "../Dashboard/DashSection/BoatServices/ServiceLocation";
import ContactDetails from "../Dashboard/DashSection/BoatServices/ContactDetails";
import Services from "../Dashboard/DashSection/BoatServices/Services";
import Advert from "../Dashboard/DashSection/BoatServices/Advert";

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

          //  crew role

          //   boat services role
          {
            path: "/dashboard/boat-services-establishment",
            element: <Establishment />,
          },
          {
            path: "/dashboard/service-location",
            element: <ServiceLocation />,
          },
          {
            path: "/dashboard/contact-details",
            element: <ContactDetails />,
          },
          {
            path: "/dashboard/service",
            element: <Services />,
          },
          {
            path: "/dashboard/advert",
            element: <Advert />,
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
