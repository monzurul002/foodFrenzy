import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProviders";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { user, createNewUser } = useContext(AuthContext)


    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;


        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user) {
                    return alert("Successfully crated user")
                }
            })
            .catch(error => {
                const message = error?.message;
            })
    }

    return (
        <div>
            <div className="right-3 absolute top-3"> <button >  <Link to='/'> ✕ </Link></button></div>
            <div className=" flex flex-col my-10 justify-center items-center ">

                <div className="  flex flex-col w-11/12 md:w-2/6 ">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">

                        <h3 className="font-bold text-center text-lg">Create a account</h3>
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
                        </div>
                        <div className="form-control mt-1">
                            <input type="submit" className="btn bg-green text-white" value="Sign Up"></input>
                            {/* <button className="btn btn-primary">Login</button> */}
                        </div>


                        <div>
                            <p className="text-center">Allready have an account? <button onClick={() => document.getElementById('my_modal_5').showModal()} to="/login" className="link">Login</button></p>
                        </div>
                    </form>

                    {/* social media login  */}
                    <div className="text-center mb-4 space-x-2">
                        <button className="btn btn-circle bg-slate-300 hover:bg-green hover:text-white">
                            <FaGoogle />
                        </button>
                        <button className="btn btn-circle bg-slate-300 hover:bg-green hover:text-white">
                            <FaFacebook />
                        </button>
                        <button className="btn btn-circle bg-slate-300 hover:bg-green hover:text-white">
                            <FaGithub />
                        </button>
                    </div>
                    <Modal />
                </div>
            </div>
        </div>
    );
};

export default Signup;