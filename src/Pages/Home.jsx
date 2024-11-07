import React from 'react'

import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import Banner from '../Components/Banner';
import Categories from '../Components/Categories';
import Carousel from '../Components/Carousel';
import Gallery from '../Components/Gallery';
import Footer from '../Components/Footer';
import Specifications from '../Components/Specifications';

export default function Home() {
    return (
        <>
            <div className='bg-white'>

                
                <Hero />
                <Features />
                <Banner />
                <Categories />
                <Carousel />
                <Gallery />
                <Specifications />
                
            </div>
        </>
    )
}
