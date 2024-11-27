import React, { useState, useEffect } from 'react';
import image1 from "../Images/mech.jpg";
import image2 from "../Images/gold.jpg";
import image3 from "../Images/star.jpg";
import image4 from "../Images/pngegg_cover.png";
import { useNavigate } from 'react-router-dom';

export default function Features() {
    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleButtonClick = () => {
        navigate('/productpage');
    };

    return (
        <div>
            <section className="text-gray-600 body-font px-4 sm:px-6 lg:px-40 mb-10">
                <h2 className="text-center text-gray-900 text-3xl sm:text-4xl font-semibold mt-20 mb-20 uppercase">New Launches</h2>
                <div className="container mx-auto">
                    {/* Grid layout for images */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="mb-10">
                            <div
                                className="rounded-lg h-48 sm:h-64 overflow-hidden"

                            >
                                <img alt="content" className="object-cover object-center h-full w-full" src={image1} />
                            </div>
                            <h2 className="title-font text-xl sm:text-2xl font-medium text-gray-900 mt-6 mb-3 text-center">Titan Edge Mechanical</h2>
                            <p className="leading-relaxed text-base text-center">Titan Presenting 'The Edge': A mechanical watch</p>
                            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleButtonClick}>
                                View
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="mb-10">
                            <div
                                className="rounded-lg h-48 sm:h-64 overflow-hidden"

                            >
                                <img alt="content" className="object-cover object-center h-full w-full" src={image2} />
                            </div>
                            <h2 className="title-font text-xl sm:text-2xl font-medium text-gray-900 mt-6 mb-3 text-center">Xylus Gold</h2>
                            <p className="leading-relaxed text-base text-center">Gold Series of special watches presented by Xylus</p>
                            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleButtonClick}>
                                View
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="mb-10">
                            <div
                                className="rounded-lg h-48 sm:h-64 overflow-hidden"

                            >
                                <img alt="content" className="object-cover object-center h-full w-full" src={image3} />
                            </div>
                            <h2 className="title-font text-xl sm:text-2xl font-medium text-gray-900 mt-6 mb-3 text-center">Titan Automatic</h2>
                            <p className="leading-relaxed text-base text-center">Titan's New series that shows Automatic trend</p>
                            <button className="flex mx-auto mt-6  text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleButtonClick}>
                                View
                            </button>
                        </div>
                    </div>
                </div>

            </section>
            <div className=" overflow-hidden relative pt-40 pb-96"> {/* Prevent overflow */}
                <div
                    className="rounded-lg flex justify-center items-center"
                    style={{
                        transform: `scale(${0.4 + scrollPosition / 1300})`, // Start at 0.8 and grow with scroll
                        transition: "transform 0.3s ease-out",
                        transformOrigin: "center", // Scale from the center
                    }}
                >
                    {/* Image setup */}
                    <img
                        alt="content"
                        className="w-full max-w-xs h-auto" // Responsive size, maintain aspect ratio
                        src={image4}
                    />
                </div>
            </div>

        </div>
    );
}
