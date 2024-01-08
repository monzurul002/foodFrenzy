import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Shop/Menu";
import Signup from "../components/Signup";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/Dashboard/updateProfile";
import Cart from "../pages/Shop/Cart";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <PrivateRoute><Menu /></PrivateRoute>
            },
            {
                path: "/menu/single/:id",
                element: <SingleProduct></SingleProduct>
            },
            {
                path: "/updateprofile",
                element: <UpdateProfile />
            },
            {
                path: "/cart",
                element: <Cart />
            },


        ]
    },
    {
        path: "/signup",
        element: <Signup />
    }
])

export default router;