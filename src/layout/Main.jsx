import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css"
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProviders";
const Main = () => {
    const { loading } = useContext(AuthContext);
    // if (loading) {
    //     return <h1>Loading</h1>
    // }
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer />

        </div>
    );
};

export default Main;