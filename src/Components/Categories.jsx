import React from 'react';
import image2 from "../Images/girl.jpg"
import image5 from "../Images/kids.jpg"
import image6 from "../Images/pexels-castorlystock-3829442.jpg"
import image7 from "../Images/men.jpg"
import image8 from "../Images/pexels-pixabay-280250.jpg"
import image9 from "../Images/pexels-joey-nguy-n-1056657-2113994.jpg"

import image11 from "../Images/star.jpg"

export default function Categories() {
    return (
        <div className='bg-orange-50'>
            <section className="py-10 sm:py-20 mx-4 sm:mx-10 lg:mx-40 my-10 "> {/* Adjusted padding and margins for responsiveness */}
                <div className="container px-5 mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-20"> {/* Responsive text sizes */}
                        THE BEST WAY TO BUY THE PRODUCTS YOU LOVE
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8"> {/* Adjusted grid and gap for responsiveness */}

                        {/* Card 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden"> {/* Responsive image size */}
                                <img
                                    src={image7}
                                    alt="Image 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Men</p> {/* Responsive text size */}
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden"> {/* Responsive image size */}
                                <img
                                    src={image2}
                                    alt="Image 2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Women</p> {/* Responsive text size */}
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden"> {/* Responsive image size */}
                                <img
                                    src={image5}
                                    alt="Image 3"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Kids</p> {/* Responsive text size */}
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden"> {/* Responsive image size */}
                                <img
                                    src={image8}
                                    alt="Image 4"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Premium</p> {/* Responsive text size */}
                        </div>

                        {/* Card 5 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden"> {/* Responsive image size */}
                                <img
                                    src={image9}
                                    alt="Image 5"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Sports</p> {/* Responsive text size */}
                        </div>

                        {/* Card 6 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden"> {/* Responsive image size */}
                                <img
                                    src={image11}
                                    alt="Image 6"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Classic</p> {/* Responsive text size */}
                        </div>

                    </div>
                </div>
            </section>
        </div>

    );
}
