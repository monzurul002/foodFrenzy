import { FaDeleteLeft } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProviders";

const Cart = () => {
    const { cart, refetch } = useCart();
    const { user } = useContext(AuthContext)
    const [cartItems, setCartItems] = useState([])


    //calculate amount
    const calculatePrice = (item) => {
        return item.price * item.quantity
    }




    //increase quantity
    const handleIncrease = (item) => {
        if (item.quantity > 1) {
            fetch(`https://food-frenzy-server-delta.vercel.app/cart/${item._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ quantity: item.quantity + 1 })
            }).then(res => res.json())
                .then(data => {
                    refetch()
                    // const updatedCart = cartItems.map(cartItem => {
                    //     if (cartItem._id === item._id) {
                    //         return {
                    //             ...cartItem, quantity: cartItem.quantity + 1
                    //         }
                    //     }

                    //     return cartItem
                    // })
                    // setCartItems(updatedCart)
                })
        }
        else {
            return Swal.fire({
                title: "Opps",
                text: "Quantity can not be less than 1.",
                icon: "error"
            });
        }

    }
    const handleDecrease = (item) => {


        if (item?.quantity > 1) {

            fetch(`https://food-frenzy-server-delta.vercel.app/cart/${item._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ quantity: item.quantity - 1 })
            }).then(res => res.json())
                .then(data => {
                    refetch()
                    // const updatedCart = cartItems.map(cartItem => {
                    //     if (cartItem._id === item._id) {
                    //         return {
                    //             ...cartItem, quantity: cartItem.quantity - 1
                    //         }
                    //     }

                    //     return cartItem
                    // })
                    // setCartItems(updatedCart)
                })
        } else {
            return Swal.fire({
                title: "Opps",
                text: "Quantity can not be less than 1.",
                icon: "warning"
            });
        }

    }
    //calculate total price
    const totalPrice = cart.reduce((prev, item) => {
        return prev + calculatePrice(item)
    }, 0)



    const handleDelete = (item) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0FFF50",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://food-frenzy-server-delta.vercel.app/cart/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            return Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });


    }
    return (
        <div className="section-container mt-24   ">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold">Items Added To The <span className="text-green">Food Frenzy</span></h1>
            </div>


            {/* tables for the cart */}

            <div className="overflow-x-auto mt-8 px-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-green text-white font-bold text-sm">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Food</th>
                            <th>Item name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            cart.map((item, index) => {
                                return <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button onClick={() => handleDecrease(item)} className="btn btn-xs">-</button>
                                        <input onChange={() => console.log(item?.quantity)} type="number" className="w-10 text-center overflow-hidden" name="" value={item?.quantity} min="0" />
                                        <button onClick={() => handleIncrease(item)} className="btn btn-xs">+</button>
                                    </td>

                                    <th>
                                        <td>${calculatePrice(item).toFixed(2)}</td>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(item)} className="text-2xl text-red"><FaDeleteLeft></FaDeleteLeft> </button>
                                    </th>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>



            {/* customer details */}

            <div className="w-full  md:w-full flex flex-col md:flex-row justify-between	 ">

                <div className="w-full md:w-1/2  mt-8 space-y-2 px-4">
                    <h3 className="text-xl font-bold">Customer Details</h3>
                    <h3>{user?.displayName}</h3>
                    <p>{user?.email}</p>
                </div>

                <div className="w-full md:w-1/2 mt-8 space-y-2 px-4 ">
                    <h3 className="text-xl font-bold">Shiping  Details</h3>
                    <h3>Total Items:{cart?.length}</h3>
                    <p className="text-xl font-bold text-red">{`Total Price: ${totalPrice}`}</p>
                    <button className="btn text-white bg-green">Proceed to checkout</button>
                </div>

            </div>


        </div>
    );

}
export default Cart;