import { useEffect } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const WishList = () => {


    const items = localStorage.getItem("wishList");

    const wishItems = JSON.parse(items)

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                const restItems = wishItems.filter(item => item._id !== id)
                localStorage.setItem("wishList", JSON.stringify(restItems))
                window.location.reload();

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });


    }


    return (
        <div>
            <h2 className="text-3xl font-bold text-green">My White list</h2>
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

                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            wishItems.map((item, index) => {
                                return <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-24 h-24">
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
                                        $ {item.price}
                                    </td>

                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="text-2xl text-red"><FaDeleteLeft></FaDeleteLeft> </button>
                                    </th>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WishList;