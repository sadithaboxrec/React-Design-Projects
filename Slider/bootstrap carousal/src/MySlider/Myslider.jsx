import React, {useEffect, useState} from "react";
import { Carousel } from "react-bootstrap";
import sliderImg1 from "../assets/1.jpg";
import sliderImg2 from "../assets/2.jpg";
import sliderImg3 from "../assets/3.jpg";
import "./Myslider.css"

function Myslider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);

        return () => clearInterval(timer);
    }, []);


    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >
                    <img src={sliderImg1} className="d-block w-100" alt="First slide" />
                    <Carousel.Caption>
                        <div className="slider_des">
                            <h5 className="heading">
                                JOURNEY TO <span>Learn Carousel</span>
                            </h5>
                            <p className="sub_text">
                                dummy text here. to add description about the topic or put a button here.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImg2} className="d-block w-100" alt="First slide" />
                    <Carousel.Caption>
                        <div className="slider_des">
                            <h5 className="heading">
                                JOURNEY TO <span>Learn Carousel</span>
                            </h5>
                            <p className="sub_text">
                                dummy text here. to add description about the topic or put a button here.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sliderImg3} className="d-block w-100" alt="First slide" />
                    <Carousel.Caption>
                        <div className="slider_des">
                            <h5 className="heading">
                                JOURNEY TO <span>Learn Carousel</span>
                            </h5>
                            <p className="sub_text">
                                dummy text here. to add description about the topic or put a button here.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Myslider;
