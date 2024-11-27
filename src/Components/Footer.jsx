import React from 'react'
import image4 from "../Images/mech.jpg"
import logoImage from '../Images/watchLogo.png';
import { Link } from 'react-router-dom';
import linkedin from "../Images/linkedin (2).png"
import git from "../Images/github.png"
import x from "../Images/twitter (1).png"

export default function Footer() {
    const scrollToSection = (id) => {

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='bg-orange-100'>
            <footer className="text-gray-600 body-font px-6 md:px-10 text-center">
                <div className="container mx-auto flex flex-wrap py-4 md:py-4 gap-y-10">
                    {/* Logo and Name */}
                    <div className="w-full md:w-1/4 flex flex-col items-center md:items-start p-4">
                        <a className="flex items-center justify-center md:justify-start title-font font-medium text-gray-900">
                            <img
                                src={logoImage}
                                alt="TravelBee Logo"
                                className="w-26 h-12 text-white"
                            />

                        </a>
                        <p className="mt-4 text-sm text-gray-500 text-center md:text-left">
                            Bringing the world of watches closer to you with style and precision.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full md:w-1/4 flex flex-col items-center md:items-start p-4">
                        <h2 className=" text-gray-900 tracking-widest text-sm mb-3 font-bold">QUICK LINKS</h2>
                        <nav className="list-none mb-6 space-y-2 text-center md:text-left">
                            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
                            <li><Link to="Products" className="text-gray-600 hover:text-gray-800">Products</Link></li>
                            <li><Link to="AboutUs " className="text-gray-600 hover:text-gray-800">About Us</Link></li>
                            <li><Link to="ContactUs" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full md:w-1/4 flex flex-col items-center md:items-start p-4 ">
                        <h2 className="font-bold text-center text-gray-900 tracking-widest text-sm mb-3">CONTACT</h2>
                        <p className="text-sm text-gray-600 text-start">
                            Email: contact@watchworld.com<br />
                            Phone: +91 87890 29399<br />
                            Address: Jamia Nagar, Okhla, New Delhi, Delhi
                        </p>

                    </div>

                    {/* Social Media */}
                    <div className="w-full md:w-1/4 flex flex-col items-center md:items-start p-4">
                        <h2 className=" text-gray-900 tracking-widest text-sm mb-3 font-bold">FOLLOW US</h2>
                        <div className="flex space-x-2">
                            <img
                                src={linkedin}
                                alt="linkedin"
                                onClick={() => window.open('https://www.linkedin.com', '_blank')}
                                className="cursor-pointer w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            />
                            <img
                                src={git}
                                alt="git"
                                onClick={() => window.open('https://github.com', '_blank')}
                                className="cursor-pointer w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            />
                            <img
                                src={x}
                                alt="x"
                                onClick={() => window.open('https://twitter.com', '_blank')}
                                className="cursor-pointer w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            />
                        </div>
                    </div>
                </div>
                <div className='pb-4'>
                <p >
                        Copyright 2024 | @Watchworld | All Right Reserved.
                    </p>
                </div>
            </footer>
        </div>

    )
}


