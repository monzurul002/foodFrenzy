import chef from "../../../assets/images/home/testimonials//testimonials.png";
import img1 from "../../../assets/images//home/testimonials/testimonial1.png"
import img2 from "../../../assets/images//home/testimonials/testimonial2.png"
import img3 from "../../../assets/images//home/testimonials/testimonial3.png"
import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
    return (
        <div className="section-container mx-12 ">
            <div className="flex  flex-col md:flex-row justify-between gap-14  items-center ">
                <div className="md:w-1/2">
                    <img className="" src={chef} alt="" />
                </div>
                <div className="md:w-1/2  px-4">
                    <p className="text-red tex-xl font-semibold">Testomonials</p>
                    <div className="">
                        <h1 className="text-4xl py-2 font-extrabold">What Our Customers Say About Us</h1>
                        <p className="text-[#555]">“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                    </div>
                    <div className="flex justify-center gap-3">
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img1} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img2} />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src={img3} />
                                </div>
                            </div>

                        </div>
                        <div>
                            <p className="font-bold">Customer Feedback</p>
                            <p> <FaStar className="inline-block text-yellow-400 mb-1 mr-1" />
                                (4.9k reviews)</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;