import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Card from "../../../components/Card";

const SpecialDishes = () => {
    const [recipes, setRecipes] = useState([]);
    const slider = useRef(null)
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const specials = data.filter(item => item.category === "popular");
                setRecipes(specials);
            })
    }, [])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <simpleArrowNext />,
        prevArrow: <simpleArrowPrev />
    };



    return (
        <div className="section-container py-14">
            <p className=" uppercase text-red px-4">Special Dishes</p>
            <div className="flex justify-between px-4">
                <h2 className="font-bold  text-3xl md:text-4xl py-2 ">Standout Dishes From Our Menu</h2>
                {/* icon */}
                <div className="flex justify-between gap-3">
                    <button onClick={() => slider.current.slickPrev()} className="btn hover:bg-green hover:text-white rounded-full"><IoIosArrowBack className="text-xl " /></button>
                    <button onClick={() => slider.current.slickNext()} className="btn rounded-full hover:bg-green hover:text-white">

                        <IoIosArrowForward className="text-xl " /></button>
                </div>
            </div>
            {/* react slick */}
            <Slider ref={slider} {...settings}>
                {

                    recipes.map(item => {
                        return <Card key={item._id} item={item} />

                    })


                }

            </Slider>

        </div>
    );
};

export default SpecialDishes;