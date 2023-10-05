import Header from "../shared/Header";
import RegisterHome from "../pages/RegisterHome";
import Footer from "../shared/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    return (
        <>
            <Header />

            <RegisterHome />

            <Footer />
            <ToastContainer />
        </>
    );
};

export default Register;