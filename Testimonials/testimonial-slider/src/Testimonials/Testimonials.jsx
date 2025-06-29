import React, { useState, useEffect } from 'react';
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import leftarrow from "../assets/leftArrow.png";
import rightarrow from "../assets/rightarrow.jpeg";
import './testimonials.css';

function Testimonials() {
    const testimonialsData = [
        {
            image: image1,
            review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint.Lorem ipsum dolor sit amet " +
                "consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam," +
                " ab itaque nam perferendis impedit sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint. ",
            name: 'Iron Man',
            status: 'Super Hero'
        },
        {
            image: image2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ',
            name: 'Captain America ',
            status: 'Soldier'
        },
        {
            image: image3,
            review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
            name: 'Black Panther',
            status: "King"
        }
    ];

    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setSelected(prev => (prev === tLength - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [tLength]);

    return (
        <div className="Testimonials">

            <div className="left-section">
                <span className="stroke-text">What they</span>
                <span className="testimonial-topic" > say about us</span>


                <span className="testimonial-review">
                    {testimonialsData[selected].review.length > 500
                        ? testimonialsData[selected].review.slice(0, 500) + "..."
                        : testimonialsData[selected].review}
                </span>

                <div className="testimonials-author" >
                    <span style={{ color: 'green' }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    - {testimonialsData[selected].status}
                </div>


                <div className="arrows">
                    <img
                        src={leftarrow}
                        alt="left"
                        onClick={() =>
                            setSelected(selected === 0 ? tLength - 1 : selected - 1)
                        }
                    />
                    <img
                        src={rightarrow}
                        alt="right"
                        onClick={() =>
                            setSelected(selected === tLength - 1 ? 0 : selected + 1)
                        }
                    />
                </div>

            </div>

            <div className="right-section">
                <div className="image-wrapper">
                    <div className="bg-box"></div>
                    <div className="bg-green"></div>
                    <img src={testimonialsData[selected].image} alt="testimonial" />
                </div>

                {/*<div className="arrows">*/}
                {/*    <img*/}
                {/*        src={leftarrow}*/}
                {/*        alt="left"*/}
                {/*        onClick={() =>*/}
                {/*            setSelected(selected === 0 ? tLength - 1 : selected - 1)*/}
                {/*        }*/}
                {/*    />*/}
                {/*    <img*/}
                {/*        src={rightarrow}*/}
                {/*        alt="right"*/}
                {/*        onClick={() =>*/}
                {/*            setSelected(selected === tLength - 1 ? 0 : selected + 1)*/}
                {/*        }*/}
                {/*    />*/}
                {/*</div>*/}


                {/*<div className="image-wrapper">*/}
                {/*    <div className="bg-box"></div>*/}
                {/*    <div className="bg-green"></div>*/}
                {/*    <img src={testimonialsData[selected].image} alt="testimonial" />*/}

                {/*    /!* 🟢 Move arrows into image-wrapper *!/*/}
                {/*    <div className="arrows">*/}
                {/*        <img*/}
                {/*            src={leftarrow}*/}
                {/*            alt="left"*/}
                {/*            onClick={() =>*/}
                {/*                setSelected(selected === 0 ? tLength - 1 : selected - 1)*/}
                {/*            }*/}
                {/*        />*/}
                {/*        <img*/}
                {/*            src={rightarrow}*/}
                {/*            alt="right"*/}
                {/*            onClick={() =>*/}
                {/*                setSelected(selected === tLength - 1 ? 0 : selected + 1)*/}
                {/*            }*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*</div>*/}




            </div>
        </div>
    );
}

export default Testimonials;
