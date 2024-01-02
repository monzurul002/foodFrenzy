import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css"
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;