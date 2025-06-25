import React from "react";
import './styles.css';
import Image1 from "../assets/friends.jpg";
import Image2 from "../assets/friends.jpg";
import Image3 from "../assets/friends.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Title text will display here soon",
        description:
            "His Life will forever be changed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: Image2,
        title: "Title text will display here soon",
        description:
            "Who's there? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        buttontext: "Join Now",
    },
    {
        id: 3,
        img: Image3,
        title: "Title text will display here soon",
        description:
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        buttontext: "Register Now",
    },
];

const Hero = ({ handleOrderPopup }) => {
    const settings = {
        dots: true,
        arrows: false,
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
            <div className="hero-slider">
                <Slider {...settings}>
                    {ImageList.map(({ id, img, title, description, buttontext }) => (
                        <div key={id} className="slide">
                            <div
                                className="slide-image"
                                style={{
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "80vh",
                                    position: "relative",
                                }}
                            >
                                <div className="slide-content-container">
                                    <div className="slide-content">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        {buttontext && buttontext.trim() !== "" && (
                                            <button onClick={handleOrderPopup}>{buttontext}</button>
                                        )}
                                    </div>
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
