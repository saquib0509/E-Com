import { useState, useEffect } from "react";
import logo from "../Images/watchLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [visible, setVisible] = useState(false); // For mobile menu
    const [showHeader, setShowHeader] = useState(true); // For header visibility
    const [lastScroll, setLastScroll] = useState(0); // Store last scroll position


    
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > lastScroll && currentScroll > 100) {
                // Hide header when scrolling down
                setShowHeader(false);
            } else {
                // Show header when scrolling up
                setShowHeader(true);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll]);

    return (
        <div
            className={`bg-orange-100 px-10 py-4 flex items-center justify-between font-medium fixed w-full top-0 transition-transform duration-300 z-50 ${
                showHeader ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <Link to="/"><img src={logo} className="w-24" alt="aa" /></Link>

            <ul className="hidden md:flex lg:flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 ">
                <Link to="/" className="text-gray-700 hover:text-black flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] hidden" />
                </Link>

                <Link to="/Productpage" className="text-gray-700 hover:text-black hidden md:flex lg:flex flex-col items-center gap-1">
                    <p>PRODUCT</p>
                    <hr className="w-2/4 border-none h-[1.5px] hidden" />
                </Link>

                <Link to="/AboutUs" className="text-gray-700 hover:text-black hidden md:flex lg:flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] hidden" />
                </Link>

                <Link to="/ContactUs" className="text-gray-700 hover:text-black hidden md:flex lg:flex flex-col items-center gap-1">
                    <p>CONTACT US</p>
                    <hr className="w-2/4 border-none h-[1.5px] hidden" />
                </Link>
            </ul>

            <div className="flex items-center gap-6">
                <div className="w-5 cursor-pointer sm:hidden">
                    <svg
                        onClick={() => setVisible(true)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div
                    className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
                        visible ? "w-full" : "w-0"
                    }`}
                >
                    <div className="flex flex-col text-gray-600 ">
                        <div className="flex items-center gap-4 p-4">
                            <div
                                onClick={() => setVisible(false)}
                                className="flex items-center gap-4 p-2 cursor-pointer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 "
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                                <p>Back</p>
                            </div>
                        </div>

                        <nav className="list-none mb-6 space-y-2 text-center md:text-left ">
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-gray-800">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="Products" className="text-gray-600 hover:text-gray-800">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="AboutUs " className="text-gray-600 hover:text-gray-800">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="ContactUs" className="text-gray-600 hover:text-gray-800">
                                    Contact
                                </Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
