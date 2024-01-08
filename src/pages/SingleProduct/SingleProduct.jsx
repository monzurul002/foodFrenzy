import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cover from '../../assets//images//single/cover.jpg'
import SpecialDishes from "../Home/SpecialDishes/SpecialDishes";
const SingleProduct = () => {
    const [product, setProduct] = useState("")
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/menu/single/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    console.log(product);

    return (
        <div className="section-container pt-16">
            <div className="relative">
                <img src={cover} className="w-full brightness-50" alt="" />
                <div className="flex items-center justify-center h-full absolute top-0 left-0 right-0 bottom-0">
                    <h1 className="text-3xl border-b-4 border-su md:text-6xl text-white font-bold"> Items Details</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4  w-full justify-between my-7">
                <div className="w-full md:w-1/2">
                    <img className="w-8/12 md:9/12  mx-auto" src={product?.image} alt="" />
                </div>
                <div className="w-full md:w-1/2 pt-12 space-y-5 mx-auto px-10">
                    <h2 className="font-bold text-3xl text-green">{product.name}</h2>
                    <p className="font-extrabold text-3xl text-red ">$ {product?.price}</p>
                    <div className="flex gap-2 md:gap-4 ">
                        <p>Category: <span className="font-bold text-xl">{product.category}</span> </p>
                        <p >Tag: <span className="font-bold text-xl">Vegitables , Natural</span>  </p>
                    </div>
                    <hr />
                    <p className="border-b-4 border-green  inline-block">About the recipe</p>
                    <p className="text-slate-600 ">{product.recipe}</p>

                    <div className="flex items-center">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />


                        </div>
                        <p className=" mx-2" > (10 Customer Review)</p>

                    </div>
                    <button className="bg-green text-white btn">Add To Cart</button>
                </div>

            </div>


        </div>
    );
};

export default SingleProduct;