import React from 'react'
import image4 from "../Images/mech.jpg"

export default function Footer() {
    const scrollToSection = (id) => {

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className='bg-orange-50'>
    <footer className="text-gray-600 body-font px-6 md:px-10">
        <div className="container mx-auto flex flex-wrap py-16 md:py-24 gap-y-10">
            {/* Logo and Name */}
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
                <a className="flex items-center justify-center md:justify-start title-font font-medium text-gray-900">
                    <img 
                        src={image4} 
                        alt="TravelBee Logo" 
                        className="w-12 h-12 text-white rounded-full"
                    />
                    <span className="ml-3 text-lg md:text-xl">Watch World</span>
                </a>
                <p className="mt-4 text-sm text-gray-500 text-center md:text-left">
                    Bringing the world of watches closer to you with style and precision.
                </p>
            </div>

            {/* Navigation Links */}
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
                <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">QUICK LINKS</h2>
                <nav className="list-none mb-6 space-y-2 text-center md:text-left">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Products</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                </nav>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
                <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT</h2>
                <p className="text-sm text-gray-600">
                    Email: contact@watchworld.com<br />
                    Phone: +123 456 7890<br />
                    Address: 123 Watch St., Time City
                </p>
            </div>

            {/* Social Media */}
            <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
                <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">FOLLOW US</h2>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22,12A10,10,0,1,0,12,22,10,10,0,1,0,22,12Zm-8,4H10v-4H8V10h2V8a3,3,0,0,1,3-3h2v2H13a1,1,0,0,0-1,1v2h2l-.5,2H12v4h2Z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22,12A10,10,0,1,0,12,22,10,10,0,1,0,22,12ZM18,12a6,6,0,1,1-6-6A6,6,0,0,1,18,12Z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12,2C6.477,2,2,6.478,2,12c0,4.85,3.657,8.879,8.437,9.735c0.618,0.114,0.843-0.27,0.843-0.596c0-0.294-0.01-1.07-0.016-2.099c-3.429,0.744-4.15-1.656-4.15-1.656c-0.562-1.43-1.374-1.811-1.374-1.811c-1.124-0.77,0.084-0.754,0.084-0.754c1.244,0.087,1.899,1.278,1.899,1.278c1.107,1.898,2.906,1.35,3.616,1.032c0.112-0.802,0.43-1.35,0.783-1.659c-2.736-0.313-5.616-1.368-5.616-6.09c0-1.345,0.482-2.444,1.274-3.306c-0.128-0.314-0.553-1.578,0.12-3.289c0,0,1.046-0.336,3.426,1.283c0.996-0.277,2.064-0.416,3.126-0.42c1.062,0.004,2.13,0.143,3.126,0.42c2.38-1.619,3.426-1.283,3.426-1.283c0.673,1.711,0.248,2.975,0.12,3.289c0.792,0.862,1.274,1.961,1.274,3.306c0,4.735-2.885,5.769-5.635,6.071c0.443,0.382,0.838,1.14,0.838,2.296c0,1.659-0.015,3-0.015,3.407c0,0.329,0.222,0.717,0.85,0.593c4.778-0.857,8.431-4.885,8.431-9.735C22,6.478,17.523,2,12,2z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</div>

    )
}


