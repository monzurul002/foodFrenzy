import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProviders";

const UpdateProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { updateProfile, updateUserProfile } = useContext(AuthContext)
    const onSubmit = (data) => {
        const name = data.name;
        const photo = data.photo;

        updateUserProfile(name, photo)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div className="pt-24 flex justify-center items-center">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h2 className="font-bold tex-3xl mt-4 text-center  ">
                    Update Profile
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Upload Photo</span>
                        </label>
                        <input type="text" {...register("photo")} className="input py-2 input-bordered" placeholder="Photo URL" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-green text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;