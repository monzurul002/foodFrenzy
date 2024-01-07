import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Shop/Menu";
import Signup from "../components/Signup";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/Dashboard/updateProfile";
import Cart from "../pages/Shop/Cart";

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