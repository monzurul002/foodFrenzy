import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProviders";
import img1 from "../../assets/images/dashboard/download1.png"
import img2 from "../../assets/images/dashboard/download2.png"
import img3 from "../../assets/images/dashboard/download3.png"
import img4 from "../../assets/images/dashboard/download4.png"
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const AdminDashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="p-4 bg-slate-100 h-screen ">
            <div>
                <h2 className="text-2xl font-bold">Welcome, {user?.displayName}</h2>
                <div className="grid grid-cols-1 space-y-3 space-x-8 mt-4 md:grid-cols-4">
                    {/* chart-1 */}
                    <div className=" h-44 relative bg-white mt-3  ml-2 md:md-7 " >
                        <img src={img1} className="mt-14 w-full" alt="" />
                        <div className="absolute top-3 flex justify-between space-x-5   left-6 pb-4">
                            <div className="">
                                <p className="font-semibold">Sells  Graph</p>
                                <h4 className="font-bold text-red text-xl">$85466</h4>
                            </div>
                            <button className="btn btn-xs bg-black text-white"><FaArrowUpLong />
                                3.2% </button>
                        </div>
                    </div>
                    {/* chart-2 */}
                    <div className=" h-44 relative bg-white ml-2 md:md-7 " >
                        <img src={img2} className="mt-16 w-full" alt="" />
                        <div className="absolute top-2  flex justify-between space-x-5   left-6 ">
                            <div className="">
                                <p className="font-semibold">Total Visitors</p>
                                <h4 className="font-bold text-xl">466</h4>
                            </div>
                            <button className="btn btn-xs bg-black text-white"><FaArrowUpLong className="text-green" />
                                3.2% </button>
                        </div>
                    </div>
                    {/* chart-1 */}
                    <div className=" h-44 relative bg-white ml-2 md:md-7 " >
                        <img src={img3} className="mt-16 w-full" alt="" />
                        <div className="absolute top-3 flex justify-between space-x-5   left-6 py-1">
                            <div className="">
                                <p className="font-semibold">New Users</p>
                                <h4 className="font-bold text-red text-xl">5466</h4>
                            </div>
                            <button className="btn btn-xs bg-black text-white"><FaArrowUpLong className="text-green" />
                                4.2% </button>
                        </div>
                    </div>
                    {/* chart-4 */}
                    <div className=" relative h-44 bg-white ml-2 md:md-7 " >
                        <img src={img4} className="mt-16 w-full" alt="" />
                        <div className="absolute top-3 flex justify-between space-x-5   left-6 py-1">
                            <div className="">
                                <p className="font-semibold">Total Orders
                                </p>
                                <h4 className="font-bold text-red text-xl">466</h4>
                            </div>
                            <button className="btn btn-xs bg-red text-white"><FaArrowDownLong />
                                8.2% </button>
                        </div>
                    </div>


                </div>

                <div className="my-3">
                    <h2 className="text-2xl font-bold">RECENT ORDERS REQUESTED
                    </h2>
                </div>

                <div className="my-2">
                    <h2 className="text-xl ">TRENDING ORDERS
                    </h2>

                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;