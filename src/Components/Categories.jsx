import React from 'react';
import image2 from "../Images/girl.jpg"
import image5 from "../Images/kids.jpg"
import image6 from "../Images/pexels-castorlystock-3829442.jpg"
import image7 from "../Images/men.jpg"
import image8 from "../Images/pexels-pixabay-280250.jpg"
import image9 from "../Images/pexels-joey-nguy-n-1056657-2113994.jpg"
import { useNavigate } from 'react-router-dom';

import image11 from "../Images/star.jpg"
import ThreeDModel from './ThreeD';

export default function Categories() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/productpage');
    };
    return (
        <div className='bg-orange-50'>
            <section className="py-10 sm:py-20 mx-4 sm:mx-10 lg:mx-40 my-10 flex"> {/* Added flex layout to align content and vertical line */}
                {/* Left Vertical Line */}
                <div className="w-1 bg-gray-500 h-full mr-8" /> {/* Vertical line styling */}

                <div className="container px-5 mx-auto text-center flex-1">
                    <h2 className="sm:text-3xl text-2xl font-semibold mb-20 title-font text-gray-900">
                        Search By Filter
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden">
                                <img
                                    src={image7}
                                    alt="Image 1"
                                    className="w-full h-full object-cover"
                                    onClick={handleButtonClick}
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Men</p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden">
                                <img
                                    src={image2}
                                    alt="Image 2"
                                    className="w-full h-full object-cover"
                                    onClick={handleButtonClick}
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Women</p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden">
                                <img
                                    src={image5}
                                    alt="Image 3"
                                    className="w-full h-full object-cover"
                                    onClick={handleButtonClick}
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Kids</p>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden">
                                <img
                                    src={image8}
                                    alt="Image 4"
                                    className="w-full h-full object-cover"
                                    onClick={handleButtonClick}
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Premium</p>
                        </div>

                        {/* Card 5 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden">
                                <img
                                    src={image9}
                                    alt="Image 5"
                                    className="w-full h-full object-cover"
                                    onClick={handleButtonClick}
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Sports</p>
                        </div>

                        {/* Card 6 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 rounded-full overflow-hidden">
                                <img
                                    src={image11}
                                    alt="Image 6"
                                    className="w-full h-full object-cover"
                                    onClick={handleButtonClick}
                                />
                            </div>
                            <p className="text-sm sm:text-lg font-medium text-gray-700">Classic</p>
                        </div>

                    </div>
                    <div className='mt-40'>
                        <div>
                            <p className="sm:text-3xl text-2xl font-semibold mb-20 title-font text-gray-900">Interactive 3D Model</p>
                        </div>
                        <div>
                            <ThreeDModel modelPath="/hand_watch.glb" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
