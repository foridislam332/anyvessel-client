import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Register from "../layouts/Register";
import RegisterCard from "../sections/RegisterCard";
import BoatRegister from "../pages/BoatRegister";
import CrewRegister from "../pages/CrewRegister";
import BoatServicesRegister from "../pages/BoatServicesRegister";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
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