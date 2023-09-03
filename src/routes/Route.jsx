import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Register from "../layouts/Register";
import RegisterCard from "../sections/RegisterCard";

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
            }
        ]
    }
]);

export default Route;