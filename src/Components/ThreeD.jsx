import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ThreeDModel = ({ modelPath }) => {
    // Load the 3D model
    const Model = () => {
        const { scene } = useGLTF(modelPath);
        return <primitive object={scene} scale={1.5} />;
    };

    return (
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[500px]"> {/* Adjust for smaller screens with flex-col, and lg:flex-row for larger screens */}
            <div className='w-full lg:w-2/3 h-[300px] lg:h-full'> {/* Responsive width and height for the 3D canvas */}
                <Canvas>
                    {/* Add lighting */}
                    <ambientLight intensity={1} />
                    <directionalLight position={[0, -8, 8]} intensity={3} />
                    <Suspense fallback={null}>
                        {/* Load the model */}
                        <Model />
                    </Suspense>
                    {/* Allow user interaction (zoom, rotate) */}
                    <OrbitControls />
                </Canvas>
            </div>
            <div className='w-full lg:w-1/3 pt-8 lg:pt-28 px-4 lg:px-0'> {/* Adjust padding and width for responsiveness */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Premium Hand Watch</h2> {/* Watch title */}
                <p className="text-base lg:text-lg text-gray-700">
                    A stylish and luxurious hand watch designed for every occasion. The watch features a sleek stainless-steel body, precision movement, and a timeless design that never goes out of style. Ideal for both formal and casual wear, it brings sophistication and elegance to your wrist.
                </p> {/* Short description */}
            </div>
        </div>
    );
};

export default ThreeDModel;
