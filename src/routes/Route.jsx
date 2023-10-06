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
                children:([
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
                ])
            }
        ],
    },
    {
        path: "/register",
        element: <Register />,
        children: [
            {
                path: '/register',
                element: <RegisterCard />
            },
            {
                path: '/register/boat_register',
                element: <BoatRegister />
            },
            {
                path: '/register/crew_register',
                element: <CrewRegister />
            },
            {
                path: '/register/boat_services',
                element: <BoatServicesRegister />
            }
        ]
    }
]);

export default Route;