import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { LiaFileInvoiceSolid } from "react-icons/lia";

import logo from "../assets/logo.png"

import { Link, Outlet } from "react-router-dom";

import MainDashboard from "../pages/Dashboard/Dashboard";
import AddItem from "../pages/Dashboard/AddItem";
const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <div className="navbar bg-base-100">
                        {/* toggle btn */}
                        <div htmlFor="my-drawer-2" onClick={() => setIsOpen(!isOpen)} className="navbar-start hidden  md:block">
                            <div role="button" className="btn btn-ghost btn-circle">
                                <RiMenu2Line />

                            </div>

                        </div>
                        <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden"><RiMenu2Line />
                        </label>




                        <div className="navbar-center">
                            <a className="btn btn-ghost text-xl">daisyUI</a>
                        </div>
                        <div className="navbar-end">
                            <button className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                        </div>
                    </div>



                    {/* Page content here */}
                    <Outlet />
                </div>
                {
                    isOpen && <div className="drawer-side shadow-2xl">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
                        <ul className="menu p-4 w-80 min-h-full  text-base-content">
                            <div className="m-3">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>

                            {/* Sidebar content here */}
                            <li className="hover:bg-green hover:text-white"><Link to="/dashboard"><MdDashboard /> Dashboard
                            </Link></li>
                            <li className="hover:bg-green hover:text-white"><Link to="/dashboard/additem"> <IoMdAddCircleOutline />
                                Add Item</Link></li>
                            <li className="hover:bg-green hover:text-white"><a>
                                <LiaFileInvoiceSolid />
                                Invoice</a></li>
                        </ul>

                    </div>
                }


            </div>
        </div>
    );
};

export default Dashboard;