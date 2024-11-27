// Productpage.js
import React from 'react';

import image1 from "../Images/mech.jpg"
import image2 from "../Images/gold.jpg"
import image3 from "../Images/star.jpg"
import image5 from "../Images/pexels-quang-viet-nguyen-107013384-13257109.jpg"
import image6 from "../Images/pexels-joey-nguy-n-1056657-2113994.jpg"
import image7 from "../Images/pexels-gullywabbit-3638006-7749381.jpg"
import image4 from "../Images/pexels-jatin-anand-33853-125779.jpg"
import image9 from "../Images/pexels-joey-nguy-n-1056657-2113994.jpg"
import image8 from "../Images/alvaro-bernal-RgIKRYhmG2k-unsplash.jpg"

const Productpage = () => {
    return (
        <>
        <div className='bg-white'>
            <section class="text-gray-600 body-font">
            <h2 className="text-start text-gray-700 text-3xl sm:text-4xl font-semibold pt-32 px-10 uppercase">PRODUCTS</h2>
                <div class="container px-5 py-8 mx-auto">
                    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image1} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Titan Edge</h2>
                                <p class="mt-1">₹5499.00</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image2} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Xylys Gold</h2>
                                <p class="mt-1">₹3999</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image3} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Titan Automatice</h2>
                                <p class="mt-1">₹2499.00</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p class="mt-1">₹2999</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image5} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Omega</h2>
                                <p class="mt-1">₹5499.00</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image6} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Fastrack Amaze</h2>
                                <p class="mt-1">₹3999</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image7} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Sonata Classic</h2>
                                <p class="mt-1">₹2499.00</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image8} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p class="mt-1">₹2999</p>
                            </div>
                        </div>



                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image1} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Titan Series</h2>
                                <p class="mt-1">₹5499.00</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image2} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Xylys Gold</h2>
                                <p class="mt-1">₹3999</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image3} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Titan Automatice</h2>
                                <p class="mt-1">₹2499.00</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p class="mt-1">₹2999</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image5} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Titan Series</h2>
                                <p class="mt-1">₹5499.00</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image6} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Xylys Gold</h2>
                                <p class="mt-1">₹3999</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image7} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Titan Automatice</h2>
                                <p class="mt-1">₹2499.00</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image8} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p class="mt-1">₹2999</p>
                            </div>
                        </div>

                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image2} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Xylys Gold</h2>
                                <p class="mt-1">₹3999</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image3} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Titan Automatice</h2>
                                <p class="mt-1">₹2499.00</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image4} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p class="mt-1">₹2999</p>
                            </div>
                        </div>
                        <div class="mb-10 px-4">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={image5} />
                            </a>
                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">Titan Series</h2>
                                <p class="mt-1">₹5499.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default Productpage;
