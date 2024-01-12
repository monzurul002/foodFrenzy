import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProviders";
import { FaDeleteLeft } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";
const MyItem = () => {
    const { user } = useContext(AuthContext)
    const { data: myItems = [], refetch } = useQuery({
        queryKey: ["myItems", user?.email], queryFn: async () => {
            const res = await fetch(`http://localhost:5000/menu/myitem/${user?.email}`)
            return res.json()
        }
    })
    const handleDelete = (item) => {
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

                axios.delete(`http://localhost:5000/menu/${item._id}`, {
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                    .then(res => {
                        if (res.data.deletedCount > 0) {
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
    console.log(myItems);
    return (
        <div>
            <h2 className="text-3xl text-center text-green font-bold pt-3">My Added <span className="text-red inline-block" >Items</span></h2>
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
                            myItems ? myItems?.map((item, index) => {
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
                                        <button onClick={() => handleDelete(item)} className="text-2xl text-red"><FaDeleteLeft></FaDeleteLeft> </button>
                                    </th>
                                </tr>
                            }) : <h1 className="text-2xl text-green ">"You haven't added item yet."</h1>
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyItem;