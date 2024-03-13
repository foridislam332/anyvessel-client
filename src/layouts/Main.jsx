import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoading from "../components/PageLoading";

const Main = () => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <PageLoading />
    }

    if (!loading && user === null) {
        return <Navigate to="/register" replace={true} />;
    }

    return (
        <>
            <Header />

            <main className="relative top-[85px] lg:top-[110px]">
                <Outlet />
            </main>

            {location.pathname !== "/dashboard" && <Footer />}

            <ToastContainer />
        </>
    );
};

export default Main;
