import { MdOutlineLibraryAdd } from "react-icons/md";
import { CiHome } from "react-icons/ci";
import { Link } from "react-router-dom";
import placeholderImage from "../../assets/images/dashboard/input.jpg"
const AddItem = () => {
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
                    <form className="card-body">
                        <div className="flex flex-col md:flex-row px-2 md:px-5 md:gap-3 gap-1 ">
                            <div className="md:w-1/2 w-full bg-white p-3 rounded-lg"> <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Product Name</span>
                                </label>
                                <input type="text" placeholder="Ex-Roast Duck Breast" className="input w-full input-bordered" required />
                            </div>



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Price</span>
                                    </label>
                                    <input type="number" placeholder="Ex- $70" className="input w-full input-bordered" required />

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Description</span>
                                    </label>
                                    <textarea placeholder="Write product description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Catagory</span>
                                    </label>
                                    <select className="select select-bordered w-full ">
                                        <option disabled selected>Select one</option>
                                        <option>Game of Thrones</option>
                                        <option>Lost</option>
                                        <option>Breaking Bad</option>
                                        <option>Walking Dead</option>
                                    </select>

                                </div>
                            </div>



                            <div className=" md:w-1/2 w-full bg-white p-3 rounded-md">



                                {/* //image */}
                                <h2 className="font-bold ">Upload Image</h2>

                                <div class=" w-full py-2  mx-auto ">

                                    <img className=" h-44 w-full p-3 rounded-md mx-auto  border-dashed border-blue-500 border-2 " src={placeholderImage} alt="" />

                                    <input type="file" className="file-input file-input-bordered bg-green text-white my-1 mx-auto w-full " required />
                                </div>


                                <div className="form-control mt-6">
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