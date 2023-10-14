import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Main = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl text-blue font-medium">Loading ...</h1>
      </div>
    );
  }
  if (user === null) {
    return <Navigate to="/register" replace={true} />;
  }
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      {location.pathname !== "/dashboard" && <Footer />}

      <ToastContainer />
    </>
  );
};

export default Main;
