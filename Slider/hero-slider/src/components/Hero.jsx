import React from "react";
import "./herostyles.css";
import Image1 from "../assets/1.jpeg";
import Image2 from "../assets/2jpeg.jpeg";
import Image3 from "../assets/3.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Title text will display here soon",
        description:
            "His Life will forever be changed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        buttontext:"Register Now"
    },
    {
        id: 2,
        img: Image2,
        title: "Title text will display here soon",
        description:
            "Who's there? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        buttontext:"Join Now"
    },
    {
        id: 3,
        img: Image3,
        title: "Title text will display here soon",
        description:
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    },
];

const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className="hero-container">
            <div className="hero-background"></div>
            <div className="hero-content">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="hero-grid">
                                <div className="hero-text">
                                    <h1 className="hero-title">{data.title}</h1>
                                    <p className="hero-description">{data.description}</p>
                                    <button
                                        onClick={handleOrderPopup}
                                        className="hero-button"
                                    >
                                        {data.buttontext?.trim() && (
                                            <button
                                                onClick={handleOrderPopup}
                                                className="hero-button"
                                            >
                                                {data.buttontext}
                                            </button>
                                        )}

                                    </button>
                                </div>
                                <div className="hero-image-wrapper">
                                    <img
                                        src={data.img}
                                        alt=""
                                        className="hero-image"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
