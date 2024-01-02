import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";


const Card = ({ item }) => {

    const [isHeartedFilled, setIsHeartedFilled] = useState(false);
    const handleHeartClick = () => {
        setIsHeartedFilled(!isHeartedFilled)
    }
    return (
        <div className="mx-4">
            <div className="card card-compact bg-base-100 shadow-xl relative">
                <div onClick={handleHeartClick} className={`absolute rating heartIcon text-xl  px-3 py-2 gap-1 right-2 cursor-pointer bg-green ${isHeartedFilled ? "text-rose-500" : "text-white"} `}>
                    <IoIosHeart className="text-xl" />


                </div>
                <Link to={`/menu/${item._id}`}> <figure>
                    <img src={item.image} alt={item.name} className="hover:scale-105 hover:ease-in-out transition-all duration-200 md:h-72" />
                </figure></Link>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <h2 className="card-title font-bold"><span className="text-red">$</span>{item.price}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between items-center">
                        <button className="btn bg-green text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;