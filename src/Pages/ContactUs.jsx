import React from 'react'
import image5 from "../Images/pexels-karolina-grabowska-5239913.jpg"

const ContactUs = () => {
    return (
        <div>
            {/* Main Section */}
            <div className='pt-20'>
                <section className="text-white body-font overflow-hidden">
                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-center">Contact Us</h2>
                    <div className="container px-5 py-14 mx-auto">
                        {/* Flexbox for Text and Image */}
                        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
                            {/* Text Section */}
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-center lg:text-left">
                                <p className="leading-relaxed">
                                    Email: contact@watchworld.com <br />
                                    Support Email: support@watchworld.com <br />
                                    Telephone: 9104 9029395 <br /> <br />
                                    Phone: +91 87890 29399 <br />
                                    Address: Jamia Nagar, Okhla, New Delhi, <br /> Delhi, 110025 <br />
                                </p>
                            </div>
                            {/* Image Section */}
                            <div className="lg:w-1/2 w-full p-6">
                                <img
                                    alt="ecommerce"
                                    className="w-full h-auto object-cover object-center rounded"
                                    src={image5}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ContactUs
