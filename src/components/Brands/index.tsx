import React, { useState } from 'react';

import 'styles/components/brands.sass'
import arrowNext from 'images/Brands/next.png'
import arrowPrev from 'images/Brands/prev.png'

import brand1 from 'images/Brands/Brand.png'
import brand2 from 'images/Brands/Brand.png'
import brand3 from 'images/Brands/Brand.png'
import brand4 from 'images/Brands/Brand.png'
import brand5 from 'images/Brands/Brand.png'
import brand6 from 'images/Brands/Brand.png'
import brand7 from 'images/Brands/Brand.png'
import brand8 from 'images/Brands/Brand.png'
import brand9 from 'images/Brands/Brand.png'
import brand10 from 'images/Brands/Brand.png'

const Brands: React.FC = () => {

    const brands = [
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand6,
        brand7,
        brand8,
        brand9,
        brand10,
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? brands.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === brands.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className='brands'>
            <h3 className='title-brands'>Navegue por marcas</h3>
            <div className='carousel-brand'>
                <div className='images-brand' style={{ transform: `translateX(${-currentIndex * 55}%)` }}>
                    {brands.map((brand, index) => (
                        <img key={index} src={brand} alt={`Brand ${index + 1}`} />
                    ))}
                </div>
                {currentIndex === 0 ? "" : <button className='button-prev' onClick={prevSlide}><img src={arrowPrev} alt="Arrow" /></button>}
                {currentIndex === brands.length - 9 ? "" : <button className='button-next' onClick={nextSlide}><img src={arrowNext} alt="Arrow" /></button>}
            </div>
        </section>
    )
}

export default Brands;
