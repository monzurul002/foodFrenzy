import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css"
import Footer from "../components/Footer";
const Main = () => {
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