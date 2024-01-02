import bannerImg from '../../../assets/images/home/banner.png';
import noodles from '../../../assets/images/home/b-food1.png';
import salad from '../../../assets/images/home/salad.png';

const Banner = () => {


    return (
        <div className="section-container  bg-gradient-to-r from-[#FAFAFA ] from-0% to-[#FCFCFC] to-100%">
            <div className="py-16 w-full flex flex-col-reverse items-center justify-center md:flex-row   gap-4">
                {/* text-side */}
                <div className="md:w-1/2 w-full pt-16 px-6 md:px-3  space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-snug">Dive into Delicious Of Impresive <span className="text-green">Food</span></h1>
                    <p className="py-4 text-xl text-[#4A4A4A]">When you eat, your body uses some of the calories you consume for energy. </p>
                    <button className="btn bg-green px-8 text-white rounded-full">Order Now</button>
                </div>
                {/* image side */}
                <div className="md:w-1/2 w-full px-4 ">

                    <div>
                        <img className='mb-20  w-full md:w-9/12 -mt-5 md:mt-[-10px]' src={bannerImg} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row rounded-lg md:justify-between -mt-28  gap-4 mx-5">
                        {/* noodels image */}
                        <div className="flex mr-5  py-2  gap-2 w-full md:w-1/2 bg-white rounded-lg shadow-2xl">
                            <img src={noodles} className='rounded-md w-2/5 h-24' alt="" />
                            <div className=' '>
                                <h4 className='font-bold '>Spicy noodles</h4>
                                <div className="rating rating-xs">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-slate-700" />

                                </div>
                                <h3 className='text-xl font-bold '>$19.00</h3>
                            </div>
                        </div>
                        {/* salad image */}
                        <div className="flex mr-5  w-full py-2  gap-2 mt-5 md:mt-1 md:w-1/2  bg-white rounded-lg shadow-2xl">
                            <img src={salad} className='rounded-md w-2/5 h-24' alt="" />
                            <div className=' '>
                                <h4 className='font-bold '>Vegeterian Salad</h4>
                                <div className="rating rating-xs">
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-500" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-slate-500" />

                                </div>
                                <h3 className='text-xl font-bold '>$10.00</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;