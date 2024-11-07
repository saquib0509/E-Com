import React from 'react'
import image1 from "../Images/mech.jpg"
import image2 from "../Images/gold.jpg"
import image3 from "../Images/star.jpg"
import { useNavigate } from 'react-router-dom';

export default function Features() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/productpage');
    };


    return (
        <div>
            <section className="text-gray-600 body-font px-4 sm:px-6 lg:px-40 mb-10">
                <h2 className="text-center text-gray-400 text-3xl sm:text-4xl font-semibold mt-20 mb-20 uppercase">New Series Launched</h2>
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                        <div className="w-full sm:w-1/2 md:w-1/3 mb-10 px-4">
                            <div className="rounded-lg h-48 sm:h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={image1} />
                            </div>
                            <h2 className="title-font text-xl sm:text-2xl font-medium text-gray-900 mt-6 mb-3">Titan Edge Mechanical</h2>
                            <p className="leading-relaxed text-base">Titan Presenting 'The Edge': A mechanical watch</p>
                            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleButtonClick}>
                                View
                            </button>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-1/3 mb-10 px-4">
                            <div className="rounded-lg h-48 sm:h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={image3} />
                            </div>
                            <h2 className="title-font text-xl sm:text-2xl font-medium text-gray-900 mt-6 mb-3">Titan Automatic</h2>
                            <p className="leading-relaxed text-base">Titan's New series Automatic</p>
                            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleButtonClick}>
                                View
                            </button>
                        </div>

                        <div className="w-full sm:w-1/2 md:w-1/3 mb-10 px-4">
                            <div className="rounded-lg h-48 sm:h-64 overflow-hidden">
                                <img alt="content" className="object-cover object-center h-full w-full" src={image2} />
                            </div>
                            <h2 className="title-font text-xl sm:text-2xl font-medium text-gray-900 mt-6 mb-3">Xylus Gold</h2>
                            <p className="leading-relaxed text-base">Gold Series of watches presented by Xylus</p>
                            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleButtonClick}>
                                View
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
