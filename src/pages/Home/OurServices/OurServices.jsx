import img1 from '../../../assets/images/home/services/icon1.png'
import img2 from '../../../assets/images/home/services/icon2.png'
import img3 from '../../../assets/images/home/services/icon3.png'
import img4 from '../../../assets/images/home/services/icon4.png'
const OurServices = () => {
    const services = [
        { id: 1, title: "Catering", des: "Delight your guests with our flavors and  presentation", image: img1 },
        { id: 2, title: "Fast Delivery", des: "We deliver your order promptly to your door", image: img2 },
        { id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering ", image: img3 },
        { id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", image: img4 },
    ]
    return (
        <div className="section-container py-12 px-5">
            <div className="flex justify-between flex-col md:flex-row">
                <div className="md:w-1/2 space-y-4 py-6">
                    <p className="text-red px-2 text-xl font-semibold">Our Story & Services</p>
                    <h1 className="text-5xl font-bold">
                        Our Culinary Journey And Services
                    </h1>
                    <p>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                    <button className="bg-green btn mt-4 px-7 text-white rounded-full">Explore</button>
                </div>
                <div className="md:w-1/2">
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {
                            services.map(service => {
                                console.log(service.image);
                                return <div key={service.id} className='shadow-md text-center hover:border translate-all duration-200 ease-linear p-5 cursor-pointer'>
                                    <img src={service.image} alt="" className='mx-auto' />
                                    <h2 className='text-xl text-slate-600 font-extrabold '>{service.title}</h2>
                                    <p className='text-slate-500'>{service.des}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;