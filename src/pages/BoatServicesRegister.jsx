import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

// icons image
import user from '../assets/images/user2.png';
import user2 from '../assets/images/user-3.png';
import email from '../assets/images/email.png';
import phone from '../assets/images/phone.png';
import angle from '../assets/images/angle-down.png';


const BoatServicesRegister = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="bg-white bg-opacity-90 px-5 sm:px-10 py-10 md:px-[93px] md:py-[30px] mt-6 rounded-[10px]">
            <div className="max-w-[715px] mx-auto text-center mb-6">
                <h2 className="text-lightBlue text-[19px]">Register a Boat profile to find a crew member:</h2>
                <p className="text-lightBlue font-light">A Boat profile is to find a crew member for a boat, yacht, or ship that you own or represent.</p>
            </div>

            {/* form */}

        </div>
    );
};

export default BoatServicesRegister;