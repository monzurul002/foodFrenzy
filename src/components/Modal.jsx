import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProviders";

const Modal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { user, googleSignIn, signInWithEmailPassword } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState("")
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;

        signInWithEmailPassword(email, password)
            .then(result => {
                const user = result.user;

                if (user) {

                    alert("Successfully login")
                    return navigate(from, { replace: true })
                }
                setErrorMessage("")

            })
            .catch(error => {
                const message = error?.message;
                console.log(error);
                return setErrorMessage("Provide corect email and Password.")
            })

    }


    //handle googleLogin
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                if (user) {
                    alert("Login Successfull")
                    return navigate(from, { replace: true })
                }
            })
            .catch(error => {
                const message = error.message;

            })
    }
    return (
        <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
            <div className="modal-box ">

                <div className=" flex flex-col ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
                        <button htmlFor="my_modal_5" onClick={() => document.getElementById('my_modal_5').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-center text-lg">Login!</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email?.type === "required" && (
                                <p className="text-red " role="alert">Email is required</p>
                            )}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            {errors.password?.type === "required" && (
                                <p className="text-red" role="alert">Password is required</p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {
                                errorMessage && <p className="text-red">{errorMessage}</p>
                            }
                        </div>
                        <div className="form-control mt-1">
                            <input type="submit" className="btn bg-green text-white" value="Login"></input>
                            {/* <button className="btn btn-primary">Login</button> */}
                        </div>


                        <div>
                            <p className="text-center">Don't have an account? <Link to="/signup" className="link">Sign Up</Link></p>
                        </div>
                    </form>

                    {/* social media login  */}
                    <div className="text-center mb-4 space-x-2">
                        <button onClick={() => handleGoogleLogin()} className="btn btn-circle bg-slate-300 hover:bg-green hover:text-white">
                            <FaGoogle />
                        </button>
                        <button className="btn btn-circle bg-slate-300 hover:bg-green hover:text-white">
                            <FaFacebook />
                        </button>
                        <button className="btn btn-circle bg-slate-300 hover:bg-green hover:text-white">
                            <FaGithub />
                        </button>
                    </div>
                </div>

            </div>
        </dialog>
    );
};

export default Modal;