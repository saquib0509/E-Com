import React from 'react'

export default function VisitStore() {
  return (
        <>
            <div className='bg-slate-200 px-10' id="contact">
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26148.96740985536!2d77.18023574106198!3d28.57791265255493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d7021a0de89%3A0xdb46d0593f9caa02!2sNational%20Rail%20Museum!5e0!3m2!1sen!2sin!4v1730908277597!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"  // This line ensures it fully covers the div
                            ></iframe>
                            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                    <p className="mt-1">Watch World, Jamia Nagar, Okhla, Delhi, New Delhi, India </p>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                    <a className="text-indigo-500 leading-relaxed">zaid242503@gmail.com</a>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                    <p className="leading-relaxed">977-111-0509</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 bg-slate-200 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            <h1 className="text-gray-900 text-lg mb-1 font-medium title-font">Visit our store or Contact us</h1>
                            <p className="leading-relaxed mb-5 text-gray-600">Email: contact@watchworld.com <br />
                                    Support Email: support@watchworld.com <br />
                                    Telephone: 9104 9029395 <br /> <br />
                                    Phone: +91 977-111-0509 <br />
                                    Address: Jamia Nagar, Okhla, New Delhi, <br /> Delhi, 110025</p>
                            

                            
                            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
  )
}
