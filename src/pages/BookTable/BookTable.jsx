import { useForm } from "react-hook-form";

const BookTable = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <div className=" mx-12 py-4 bg-base-200">
                <h2 className="text-center text-green font-bold   text-3xl py-3">Book A <span className="text-red">Table</span></h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="date" placeholder="date" className="input input-bordered" {...register("date", { required: true })} />
                            {errors.date?.type === "required" && (
                                <p className="text-red " role="alert">Date is required</p>
                            )}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="time" className="input input-bordered" {...register("time", { required: true })} />
                            {errors.time?.type === "required" && (
                                <p className="text-red " role="alert">Time is required</p>
                            )}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Guest</span>
                            </label>
                            <select  {...register("category", { required: true })} className="select select-bordered w-full " >
                                <option value="">Select one</option>
                                <option>1 Person</option>
                                <option>2 Person</option>
                                <option>3 Person</option>
                                <option>4 Person</option>
                                <option>5 Person</option>
                                <option>More than 10</option>
                                <option>More than 20</option>
                                <option>More than 50</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name?.type === "required" && (
                                <p className="text-red " role="alert">Name is required</p>
                            )}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="phone" placeholder="phone" className="input input-bordered" {...register("phone", { required: true })} />
                            {errors.phone?.type === "required" && (
                                <p className="text-red " role="alert">Phone is required</p>
                            )}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email?.type === "required" && (
                                <p className="text-red " role="alert">Email is required</p>
                            )}

                        </div>

                    </div>
                    <div className=" text-center py-7 ">
                        <input className="bg-green btn text-white px-10 " type="submit" value="Book A Table" />

                    </div>
                </div>
            </form>

        </div>
    );
};

export default BookTable;