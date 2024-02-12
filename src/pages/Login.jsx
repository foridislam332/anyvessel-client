import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn, loading, setLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [hidePass, setHidePass] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        signIn(data.email, data.password)
            .then(() => {
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    text: `${error.code}`,
                });
                setLoading(false);
            });
    };
    return (
        <>
            <Helmet>
                <title> Login | Anyvessel</title>
            </Helmet>

            <section className="h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 shadow-xl w-full md:w-[450px] p-8 rounded-lg">
                    <div className="">
                        <label htmlFor="email" className="ml-[2px]">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Your Email address"
                            className="px-3 py-2 rounded-md border border-gray outline-none focus:border-blue hover:border-blue w-full"
                            {...register("email")}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="pass" className="ml-[2px]">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                id="pass"
                                type={hidePass ? "text" : "password"}
                                placeholder="Your password"
                                className="px-3 py-2 rounded-md border border-gray outline-none focus:border-blue hover:border-blue w-full"
                                {...register("password")}
                                required
                            />

                            <span
                                onClick={() => setHidePass(!hidePass)}
                                className="absolute top-3  right-3 text-gray"
                            >
                                {hidePass ? <FaEyeSlash /> : <FaEye />}{" "}
                            </span>
                        </div>
                        <label className="label">
                            <button className="label-text-alt link link-hover text-blue">
                                Forgot password?
                            </button>
                        </label>
                    </div>

                    <div className="pt-4">
                        <input
                            className="btn w-full bg-slate-700 hover:bg-blue text-white duration-300 "
                            type="submit"
                            value={loading ? "Loading..." : "LOGIN"}
                        />

                        <p className="text-sm mt-3 text-center">
                            Don't have account? please
                            <Link to="/register" className="underline text-blue ml-1">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;