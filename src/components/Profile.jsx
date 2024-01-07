import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProviders";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
    return (
        <div className="w-24 drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button">
                    <div className="avatar">
                        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={`${user?.photoURL ? user.photoURL : "https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png"}`} />
                        </div>
                    </div>
                </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-10 w-80 min-h-full bg-base-200 text-base-content">


                    <h1 className="text-center font-bold text-xl">{user?.displayName}</h1>
                    <li><a>Orders</a></li>
                    <li><Link to="/updateprofile">Profile</Link ></li>

                    {
                        user ? <li><button onClick={() => handleLogOut()} className="bg-red btn py-4 text-white">Logout</button></li> : <li><button className="bg-red btn py-4 text-white">Login</button></li>
                    }


                </ul>
            </div>
        </div>
    );
};

export default Profile;