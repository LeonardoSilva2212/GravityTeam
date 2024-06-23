import React, { useState } from "react";
import { CarouselData } from "./CarouselData";
import "../assets/css/carousel.css";
import leftArrow from '../assets/images/button-prev.svg'
import rightArrow from '../assets/images/button-next.svg'

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % CarouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + CarouselData.length) % CarouselData.length);
    };

    return (
        <div className="carousel">
            <div className="carousel-content">
                <h1>We are in a good company</h1>
                <h2>Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below</h2>
                <div className="carousel-buttons">
                    <button className="carousel-button prev-button" onClick={prevSlide}>
                        <img src={leftArrow} alt="Previous" />
                    </button>
                    <button className="carousel-button next-button" onClick={nextSlide}>
                        <img src={rightArrow} alt="Next" />
                    </button>
                </div>
                <p>{CarouselData[currentSlide].text}</p>
                <h3>{CarouselData[currentSlide].author}</h3>
                <h4>{CarouselData[currentSlide].company}</h4>
            </div>
        </div>
    );
};

export default Carousel;
