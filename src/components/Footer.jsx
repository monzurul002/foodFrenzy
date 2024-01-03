import logo from "../assets/logo.png"
const Footer = () => {
    return (
        <div className="px-12">
            <footer className="footer p-10 bg-base-50 text-base-content my-5">
                <aside>
                    <img src={logo} alt="" />
                    <p>Savor the artistry where every <br /> dish is a culinary masterpiece</p>
                </aside>
                <nav>
                    <header className="footer-title">Usefull Links</header>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Events</a>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">FAQt</a>
                </nav>
                <nav>
                    <header className="footer-title">Main Menu</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Menus</a>
                    <a className="link link-hover">Offers</a>
                    <a className="link link-hover">Reservation</a>
                </nav>
                <nav>
                    <header className="footer-title">Contact Us</header>
                    <a className="link link-hover">foodfrenzy@gmail.com</a>
                    <a className="link link-hover">+880172032852</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;