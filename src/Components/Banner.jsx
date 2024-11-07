import React from 'react'
import image2 from "../Images/gold.jpg"
import image5 from "../Images/pexels-quang-viet-nguyen-107013384-13257109.jpg"
import image6 from "../Images/pexels-castorlystock-3829442.jpg"
import image7 from "../Images/pexels-gullywabbit-3638006-7749381.jpg"
import image8 from "../Images/pexels-jatin-anand-33853-125779.jpg"
import image9 from "../Images/pexels-joey-nguy-n-1056657-2113994.jpg"

export default function Banner() {
    return (

        <div className="text-gray-600 body-font bg-cover bg-center mx-4 sm:mx-10 lg:mx-40 rounded-md mt-20">

            <section
                className='mx-2 sm:mx-5 rounded-md'
                style={{ backgroundImage: `url(${image5})` }}
            >
                <div className="container px-4 sm:px-5 py-16 sm:py-24 mx-auto">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white text-center mb-4 sm:mb-6">
                        Welcome to Our Exclusive Collection
                    </h1>
                </div>
            </section>

            {/* Square Image Cards Section */}
            <section className="py-8 sm:py-12">
                <div className="container px-4 sm:px-5 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">

                        {/* Card 1 */}
                        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={image6} // Add your image path here
                                alt="Image 1"
                                className="w-full h-32 sm:h-48 object-cover"
                            />
                            {/* Title overlay */}
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 px-2 py-1 text-white text-xs sm:text-sm">
                                Dark Knight
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={image7} // Add your image path here
                                alt="Image 2"
                                className="w-full h-32 sm:h-48 object-cover"
                            />
                            {/* Title overlay */}
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 px-2 py-1 text-white text-xs sm:text-sm">
                                Classic Forever
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={image8} // Add your image path here
                                alt="Image 3"
                                className="w-full h-32 sm:h-48 object-cover"
                            />
                            {/* Title overlay */}
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 px-2 py-1 text-white text-xs sm:text-sm">
                                Titanium Series
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>

    );
}


