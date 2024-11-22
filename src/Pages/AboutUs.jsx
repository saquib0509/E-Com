import React from 'react'
import image5 from "../Images/pexels-lum3n-44775-604575.jpg"

const AboutUs = () => {
    return (
        <div>
            < div className='pt-20 bg-orange-50'>
                <section className="text-gray-900 body-font overflow-hidden">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 text-center">About Us</h2>
                    <div className="container px-5 py-14 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={image5} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <p className="leading-relaxed">
                                    Welcome to Watch World, your premier destination for timeless elegance and precision in Delhi. <br /> <br />

                                    At Watch World, we believe a watch is more than just a timepiece—it’s a statement of style, personality, and sophistication. Established in the bustling heart of Delhi, our mission is to offer you a thoughtfully curated collection of premium watches that embody quality, craftsmanship, and durability. <br /> <br />
                                    Born out of a passion for luxury timepieces, Watch World started as a vision to bridge the gap between high-quality watches and discerning customers in Delhi. Over the years, we have grown into a trusted name for watch enthusiasts, collectors, and first-time buyers alike. Every piece in our collection is a testament to our dedication to excellence and attention to detail.
                                    </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div>
    )
}

export default AboutUs






