import { MdOutlineLibraryAdd } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { Link } from "react-router-dom";
import placeholderImage from "../../assets/images/dashboard/input.jpg"
import { useForm, } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProviders";
import Swal from "sweetalert2";
const AddItem = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const [image, setImage] = useState(null);
    const { user } = useContext(AuthContext);
    console.log(user);
    const onSubmit = (data, e) => {

        const name = data.name;
        const category = data.category;
        const price = data.price;
        const recipe = data.recipe;

        const formData = new FormData();
        formData.append("name", name)
        formData.append("category", category)
        formData.append("price", price)
        formData.append("recipe", recipe)
        formData.append('image', image)
        formData.append("email", user.email)
        fetch("http://localhost:5000/menu/addItem", {
            method: "POST",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: formData,
        }).then(res => res.json())
            .then(data => {
                e.target.reset()
                setImage(null)
                if (data.insertedId) {
                    return Swal.fire({
                        title: "Good job!",
                        text: "You have been posted",
                        icon: "success"
                    });
                }


            })


    }


    return (
        <div className=" bg-base-200">
            <div className="text-sm px-4 breadcrumbs ">
                <ul>
                    <li>
                        <Link to="/home">
                            <CiHome />
                            Home
                        </Link>
                    </li>

                    <li>
                        <span className="inline-flex gap-2 text-primary  link items-center">
                            <MdOutlineLibraryAdd />
                            Add Document
                        </span>
                    </li>
                </ul>
            </div>
            <div className="p-3 rounded-lg  mx-10 bg-white ">
                <h2 className="text-2xl font-bold text-green">Add Product</h2>
                <p>Add your product for your customer</p>
            </div>

            {/* content */}
            <div className=" rounded-md">

                <h4 className="font-bold  mt-2 ml-12">Basic Information</h4>
                <div className="border rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="card-body">
                        <div className="flex flex-col md:flex-row px-2 md:px-5 md:gap-3 gap-1 ">
                            <div className="md:w-1/2 w-full bg-white p-3 rounded-lg"> <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Product Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="Ex-Roast Duck Breast" className="input w-full input-bordered" />

                            </div>
                                {
                                    errors.name?.type === "required" && (<p className="text-red"> Name is required</p>)
                                }

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Price</span>
                                    </label>
                                    <input type="number" {...register("price", { required: true })} min="10" placeholder="Ex- $70" className="input w-full input-bordered" />
                                    {errors.price?.type === "required" && (
                                        <p className="text-red " role="alert">Price is required</p>
                                    )}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Description</span>
                                    </label>
                                    <textarea  {...register("recipe", { required: true })} placeholder="Write product description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                                </div>
                                {
                                    errors.recipe?.type === "required" && (<p className="text-red"> Description is required</p>)
                                }

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Catagory</span>
                                    </label>
                                    <select  {...register("category", { required: true })} className="select select-bordered w-full " >
                                        <option value="">Select one</option>
                                        <option>drinks</option>
                                        <option>popular</option>
                                        <option>dessert</option>
                                        <option>pizza</option>
                                        <option>salad</option>
                                        <option>soup</option>
                                    </select>

                                </div>
                                {errors.category?.type === "required" && (
                                    <p className="text-red " role="alert">category is required</p>
                                )}

                            </div>

                            <div className=" md:w-1/2 w-full bg-white p-3 rounded-md">

                                {/* //image */}
                                <h2 className="font-bold ">Upload Image</h2>

                                <div class=" w-full py-2  mx-auto ">

                                    <img className=" h-44 w-full p-3 rounded-md mx-auto  border-dashed border-blue-500 border-2 " src={image ? URL.createObjectURL(image) : placeholderImage} alt="" />

                                    <input onChange={(e) => setImage(e.target.files[0])} type="file" className="file-input file-input-bordered   my-1 mx-auto w-full " accept="image/png, image/jpg, image/jpeg" required />

                                </div>



                                <div className="form-control mt-16">
                                    <button className="btn text-white bg-green">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>


            </div>



        </div>
    );
};

export default AddItem;