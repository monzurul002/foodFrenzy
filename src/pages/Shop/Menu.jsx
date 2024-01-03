import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])
    const [filteredCatagory, setFilteredCatagory] = useState('all')
    const [sortOption, setSortOption] = useState("default");

    // for load data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/menu.json');
                const data = await res.json();
                setMenu(data)
                setFilteredItems(data)
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchData()
    }, [])

    //catgory item filter
    const filtereItem = (category) => {
        const filtered = category === 'all' ? menu : menu.filter(item => item.category === category)
        setFilteredItems(filtered);
        setFilteredCatagory(category)
    }

    //show all data
    const showAll = () => {
        setFilteredItems(menu);
        setFilteredCatagory("all")
    }
    //sorting based on A-Z ,Z-A, Low-High, pricing, High-Low

    const handleSortChange = (option) => {
        const sortedItems = [...filteredItems];
        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.name.localeCompare(a.name))
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price)
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price)
                break;

            default:
                break;
        }
        setFilteredItems(sortedItems)
    }

    return (
        <div className="section-container mt-44 my-16">
            <div className="flex justify-center items-center  ">
                <div className="space-y-12 text-center">
                    <h2 className="text-6xl font-bold">
                        Dive into Delights Of Delectable <span className="text-green">Food</span>
                    </h2>
                    <p className="text-center text-xl font-bold">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                    <button className="px-7 py-3 shadow-2xl rounded-full font-bold  bg-green text-white">Order Now</button>
                </div>
            </div>

            {/* menu shop container */}
            <div>
                {/* //filter and sorting */}
                <div>
                    {/* button */}
                    <div className=" px-5 py-8 flex flex-row md:gap-8 gap-4 flex-wrap">
                        <button onClick={showAll} className={filteredCatagory === "all" ? "active" : ""}>All</button>
                        <button onClick={() => filtereItem("salad")} className={filteredCatagory === "salad" ? "active" : ""} >Salad</button>
                        <button onClick={() => filtereItem("pizza")} className={filteredCatagory === 'pizza' ? "active" : ""} >Pizza</button>
                        <button onClick={() => filtereItem("soup")} className={filteredCatagory === 'soup' ? "active" : ""} >Soups</button>
                        <button onClick={() => filtereItem("dessert")} className={filteredCatagory === 'dessert' ? "active" : ""} >Desserts</button>
                        <button onClick={() => filtereItem("drinks")} className={filteredCatagory === 'drinks' ? "active" : ""} >Drinks</button>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 my-10 gap-6">
                    {
                        filteredItems.map(item => {
                            return <Card key={item._id} item={item} />
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Menu;