import React from 'react'
import image2 from "../Images/gold.jpg"
import image5 from "../Images/pexels-quang-viet-nguyen-107013384-13257109.jpg"
import image6 from "../Images/pexels-castorlystock-3829442.jpg"
import image7 from "../Images/pexels-gullywabbit-3638006-7749381.jpg"
import image1 from "../Images/pexels-jatin-anand-33853-125779.jpg"
import image3 from "../Images/pexels-joey-nguy-n-1056657-2113994.jpg"
import { useNavigate } from 'react-router-dom';

import image4 from "../Images/mech.jpg"
import image11 from "../Images/star.jpg"

export default function Gallery() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/productpage');
    };
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Discover Our Watch Collection</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our exclusive range of premium watches. Whether you're seeking a timeless classic, a cutting-edge smartwatch, or a luxury timepiece, our curated selection has something for every style and occasion. Browse through our best-sellers and find your next perfect watch.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image1}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Titan</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Luxury Leather Watch</h1>
                                        <p class="leading-relaxed">A sophisticated leather strap watch with a classic design, perfect for formal occasions. Elegant, timeless, and always in style.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image2}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Fastrack</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Elegant Rose Gold Watch</h1>
                                        <p class="leading-relaxed">This stunning rose gold watch adds a touch of luxury to any outfit. Designed for those who appreciate the finer things in life.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image3}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Diesel</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Sporty Digital Watch</h1>
                                        <p class="leading-relaxed">Built for adventure, this digital watch features waterproof technology and a sporty design. Perfect for active lifestyles and outdoor enthusiasts.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image4}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Fastrack</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Minimalist Black Watch</h1>
                                        <p class="leading-relaxed">A minimalist black watch with a sleek design. Perfect for casual wear and those who appreciate simplicity in their accessories.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image5}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Boat</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Smart Fitness Watch</h1>
                                        <p class="leading-relaxed">Track your health with this feature-rich fitness watch. Includes heart rate monitoring, step tracking, and smartphone connectivity.</p>
                                    </div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 sm:w-1/2 p-4">
                            <div class="flex relative">
                                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image6}/>
                                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Titan</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Classic Stainless Steel Watch</h1>
                                        <p class="leading-relaxed">A refined stainless steel watch, ideal for professional wear. Sleek, durable, and crafted for those who demand precision and elegance.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
