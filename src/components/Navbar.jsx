import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import Modal from "./Modal";
import { AuthContext } from "../Contexts/AuthProviders";
import Profile from "./Profile";
import useCart from "../hooks/useCart";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false)
    const { user, } = useContext(AuthContext);
    const { cart } = useCart()
    console.log(cart);
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true)
            }
            else {
                setIsSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, [])


    const navitems = <>
        <li><Link to="/" >Home</Link ></li>
        <li>
            <details>
                <summary>Menu</summary>
                <ul className="p-2">
                    <li ><Link to="/menu" >All</Link></li>
                    <li><a>Pizza</a></li>
                    <li><a>Burger</a></li>
                    <li><a>Salad</a></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>Services</summary>
                <ul className="p-1">
                    <li><a>Online Order</a></li>
                    <li><a>Table Booking</a></li>
                    <li><a>Order Traking</a></li>

                </ul>
            </details>
        </li>
        <li><a>Offers</a></li>
        <li><a>New Food</a></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
    </>
    return (
        <header className="max-w-screen-2xl fixed top-0 z-20 right-0 left-0 transition-all duration-300 ease-in-out">
            <div className={`navbar lg:px-12 ${isSticky ? "shadow-xl bg-base-100 transition-all duration-300 ease-in-out" : ""}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navitems
                            }
                        </ul>
                    </div>
                    <Link to="/" className=""><img src={logo} className="h-12 w-40" alt="" ></img> </Link >
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitems}

                    </ul>
                </div>
                <div className="navbar-end flex flex-row gap-1 md:gap-3">

                    {/* search btn */}
                    <div className="btn btn-ghost btn-circle hidden lg:flex">
                        <p><IoSearchSharp className="text-xl" /></p>
                    </div>

                    <div className="dropdown dropdown-end ">

                        <Link to="/cart"><div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </div>
                        </div></Link>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>

                    </div>


                    <button className="btn bg-green rounded-full  text-white "><LuPhoneCall className="inline-block" />Contact
                    </button>
                    {/* login  */}

                    {
                        user ? <Profile user={user} /> : <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn bg-green rounded-full	 text-white "><FaRegUser className="inline-block" />Login
                        </button>
                    }


                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <Modal />

                </div>
            </div>


        </header>
    );
};

export default Navbar;