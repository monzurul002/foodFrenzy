import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { AuthContext } from "../Contexts/AuthProviders";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";


const Card = ({ item }) => {
    const { user } = useContext(AuthContext)
    const [isHeartedFilled, setIsHeartedFilled] = useState(false);
    const { _id, name, recipe, image, category, price } = item;
    const { refetch } = useCart()
    const navigate = useNavigate();
    const location = useLocation()
    const handleHeartClick = (item) => {
        setIsHeartedFilled(!isHeartedFilled);

        // Get wishList from localStorage
        const getItemsFromLocalStorage = localStorage.getItem("wishList");

        // Parse the JSON string to get an array
        const wishItems = getItemsFromLocalStorage ? JSON.parse(getItemsFromLocalStorage) : [];

        // Add the new item to the array
        wishItems.push(item);

        // Save the updated array back to localStorage
        localStorage.setItem("wishList", JSON.stringify(wishItems));
    };

    const handldeAddToCart = (item) => {
        if (user && user?.email) {
            const cartItem = { menuItemId: _id, name, image, price, quantity: 1, email: user?.email, recipe, category }
            console.log(cartItem);
            fetch("http://localhost:5000/cart", {
                method: "POST",
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        return Swal.fire({
                            title: "Good job!",
                            text: "Item has been added to cart!",
                            icon: "success"
                        });
                    }
                    else {
                        return Swal.fire({
                            title: "Error",
                            text: "Item has already been added to cart!",
                            icon: "error"
                        });
                    }
                })
        }
        else {
            navigate('/signup', { state: { from: location } })
            return Swal.fire({
                title: "Login first",
                icon: "error"
            });
        }
    }

    return (
        <div className="mx-4">
            <div className="card card-compact bg-base-100 shadow-xl relative">
                <div onClick={() => handleHeartClick(item)} className={`absolute rating heartIcon text-xl  px-3 py-2 gap-1 right-2 cursor-pointer bg-green ${isHeartedFilled ? "text-rose-500" : "text-white"} `}>
                    <IoIosHeart className="text-xl" />


                </div>
                <Link to={`/menu/single/${item._id}`}> <figure>
                    <img src={item.image} alt={item.name} className="hover:scale-105 hover:ease-in-out transition-all duration-200 md:h-72" />
                </figure></Link>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>

                    <p className="font-semibold text-slate-600">{item?.recipe}</p>
                    <div className="card-actions justify-between items-center">
                        <h2 className="card-title font-bold"><span className="text-red">$</span>{item.price}</h2>
                        <button onClick={() => handldeAddToCart(item)} className="btn bg-green text-white">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;