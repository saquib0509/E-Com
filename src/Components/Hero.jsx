import React from 'react'
import hero from "../Images/alvaro-bernal-RgIKRYhmG2k-unsplash.jpg" // Importing the image

export default function Hero() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <img
                src={hero}
                alt="Description of Image"
                className="w-full h-full object-cover object-center"
            />
        </div>
    )
}
