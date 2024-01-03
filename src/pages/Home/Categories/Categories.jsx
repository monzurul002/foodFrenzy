
const Categories = () => {
    const catagories = [
        {
            _id: 1, title: "Main Dish", des: "(86 dishes)", image: "/src/assets/images/home/category/img1.png"
        },
        {
            _id: 2,
            title: "Breakfast",
            des: "(226 dishes)",
            image: "/src/assets/images/home/category/img2.png"
        },
        {
            _id: 3,
            title: "Dessert",
            des: "(106 dishes)",
            image: "/src/assets/images/home/category/img3.png"
        },
        {
            _id: 4,
            title: "Browse All",
            des: "(585+ dishes)",
            image: "/src/assets/images/home/category/img4.png"
        },
    ]
    return (
        <div className="section-container py-5">
            <div className="text-center py-8">
                <h2 className=" text-red tex-xl font-semibold">Custom Favourites</h2>
                <h1 className="font-bold text-4xl">
                    Popular Catagories
                </h1>
            </div>
            {/* Catagories cards */}
            <div className="flex flex-col md:flex-row flex-wrap justify-around items-center mt-5 gap-8 text-center px-10">
                {
                    catagories.map((catagory) => {
                        return <div key={catagory._id} className="rounded-xl shadow-2xl px-7 py-6 text-center w-64 mx-auto  cursor-pointer hover:translate-y-4 duration-300 ease-linear sha ">

                            <div className="flex justify-center">
                                <img src={catagory.image} className="bg-[#C1F1C6] rounded-full w-28 h-28 p-5 hover:bg-zinc-200" alt="" />
                            </div>

                            <div className="space-y-2">
                                <h2>{catagory.title}</h2>
                                <p>{catagory.des}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Categories;