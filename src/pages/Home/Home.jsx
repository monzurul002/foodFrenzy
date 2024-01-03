import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import OurServices from "./OurServices/OurServices";
import SpecialDishes from "./SpecialDishes/SpecialDishes";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <SpecialDishes />
            <Testimonial></Testimonial>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;