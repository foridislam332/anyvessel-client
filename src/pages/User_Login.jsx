import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal, {  } from "sweetalert2";
const User_Login = () => {
    const { signIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [hidePass, setHidePass] = useState(false);
    const [loading, setLoading] = useState();
    // console.log(hidePass)

    const onSubmit = data => {
        setLoading(true)
        signIn(data.email, data.password)
            .then(data => {
                console.log(data.user)
                setLoading(false)
                navigate('/')
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    // title: "Oops...",
                    text: `${error.message}`,
                  });
                setLoading(false)

               
            })
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
               {/*  Animation */}
                <div className="card  p-12  shadow-2xl space-y-5 bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                        <div className="form-control ">
                            <label htmlFor='email' className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input id='email' type="text" placeholder="Your Email" className="text-input px-3 py-2 rounded-full" {...register("email")} required />

                        </div>
                        <div className="form-control space-y-0">
                            <label htmlFor='pass' className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>

                                <input id='pass' type={hidePass ? 'text' : 'password'} placeholder="password" className="text-input w-full px-3 py-2 rounded-full" {...register("password")} required />

                                <span onClick={() => setHidePass(!hidePass)} className='absolute top-3  right-8'>{hidePass ? <FaEyeSlash /> : <FaEye />} </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <input className='btn w-96 bg-slate-700 text-white hover:text-black ' type="submit" value={loading ? "Loading..." : "LOGIN"} />



                            <p className='text-sm mt-3'>Create a Accout <Link to='/' className='underline text-blue-400'>Sign Up</Link></p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User_Login;