import { Navigate, Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import useAuth from "../hooks/useAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="h-screen flex items-center justify-center"><h1 className="text-3xl text-blue font-medium">Loading ...</h1></div>
    }
    if (user === null) {
        return < Navigate to='/register' replace={true} />
    }
    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
            <ToastContainer />
        </>
    );
};

export default Main;