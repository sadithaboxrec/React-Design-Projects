// import React, {useEffect, useState} from "react";
import React, { useState} from "react";
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

    const ImageList = [
        {
            id: 1,
            img: sliderImg1,
            title: "Journey to",
            textspan:"Learn Carousel",
            description:
                "His Life will forever be changed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 2,
            img: sliderImg2,
            title: "Journey to",
            textspan:"Learn Carousel",
            description:
                "Who's there? Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            buttons: [
                { text: "Join Now", link: "/join" },
            ],
        },
        {
            id: 3,
            img: sliderImg3,
            title: "Journey to",
            textspan:"Learn Carousel",
            description:
                "Consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
            buttons: [
                { text: "Join Now", link: "/join" },
            ],
        },
    ];

    //
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % 3);
    //     }, 3000);
    //
    //     return () => clearInterval(timer);
    // }, []);


    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}
                      indicators={true}     // dots
                      controls={true}      // no arrows
                      interval={4000}       // autoplay speed
                      pause={false}         // don't pause on hover
                      wrap={true}           // infinite loop
            >
                {ImageList.map(({ id, img, title,textspan, description, buttons }) => (
                    <Carousel.Item key={id}>
                        <img src={img} className="d-block w-100" alt={`Slide ${id}`} />
                        <Carousel.Caption>
                                   <div className="slider_des">
                                       <h5 className="heading">
                                           {title} <span> {textspan} </span>
                                     </h5>
                                       <p className="sub_text">
                                           {description}
                                       </p>
                                       {buttons && buttons.length > 0 && (
                                           <div className="button-group mt-3">
                                               {buttons.map(({ text, link }, index) => (
                                                   <a
                                                       key={index}
                                                       href={link}
                                                       className="btn btn-light me-2"
                                                   >
                                                       {text}
                                                   </a>
                                               ))}
                                           </div>
                                       )}

                                  </div>


                        </Carousel.Caption>
                    </Carousel.Item>
                ))}

            </Carousel>

        </>
    )
}

export default Myslider;


// <Carousel.Item >
//     <img src={sliderImg1} className="d-block w-100" alt="First slide" />
//     <Carousel.Caption>
//         <div className="slider_des">
//             <h5 className="heading">
//                 JOURNEY TO <span>Learn Carousel</span>
//             </h5>
//             <p className="sub_text">
//                 dummy text here. to add description about the topic or put a button here.
//             </p>
//         </div>
//     </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//     <img src={sliderImg2} className="d-block w-100" alt="First slide" />
//     <Carousel.Caption>
//         <div className="slider_des">
//             <h5 className="heading">
//                 JOURNEY TO <span>Learn Carousel</span>
//             </h5>
//             <p className="sub_text">
//                 dummy text here. to add description about the topic or put a button here.
//             </p>
//         </div>
//     </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//     <img src={sliderImg3} className="d-block w-100" alt="First slide" />
//     <Carousel.Caption>
//         <div className="slider_des">
//             <h5 className="heading">
//                 JOURNEY TO <span>Learn Carousel</span>
//             </h5>
//             <p className="sub_text">
//                 dummy text here. to add description about the topic or put a button here.
//             </p>
//         </div>
//     </Carousel.Caption>
// </Carousel.Item>