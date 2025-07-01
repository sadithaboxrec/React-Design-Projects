import React, { useEffect,useState } from 'react';
import garfield from "../assets/garfield.png";

import './testimonials.css'

function Testimonials() {


    const feedback = [
        {
            image: garfield,
            author: "Garfield  cat",
            job: "Just a Cat",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae et aliquid" +
                " hic optio ducimus, reiciendis qui earum, suscipit quod accusamus ex? Magnam expedita aliquam mollitia possimus!",},
        {
            image: garfield,
            author: "Garfield the cat",
            job: "Cat a just",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae et aliquid" +
                " hic optio ducimus, reiciendis qui earum, suscipit quod accusamus ex? Magnam expedita aliquam mollitia possimus!.                \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae et aliquid\" +\n" +
                "                \" hic optio ducimus, reiciendis qui earum, suscipit quod accusamus ex? Magnam expedita aliquam mollitia possimus!\",  ",
        },
        {
            image: garfield,
            author: "Garfield  cat",
            job: "Just a Cat",
            message: " hic optio ducimus, reiciendis qui earum, suscipit quod accusamus ex? Magnam expedita aliquam mollitia possimus!",  },
        {
            image: garfield,
            author: "Garfield the cat",
            job: "Cat a just",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae et aliquid" +
                " hic optio ducimus, reiciendis qui earum, suscipit quod accusamus ex? Magnam expedita aliquam mollitia possimus!",
        },
        {
            image: garfield,
            author: "Garfield  cat",
            job: "Just a Cat",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae et aliquid" +
                " hic optio ducimus, reiciendis qui earum, suscipit quod accusamus ex? Magnam expedita aliquam mollitia possimus!",
        },
        {
            image: garfield,
            author: "Garfield the cat",
            job: "Cat a just",
            message:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae et aliquid" +
                " hic optio ducimus, reiciendis qui earum, suscipit quod accusamus ex? Magnam expedita aliquam mollitia possimus!",
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % feedback.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [feedback.length]);
    const current = feedback[index];


    return (
        <>
            <div className="testimonialContainer">
                <header>What our Alumni Say</header>
                <div className="feedback">
                    <div className="content">
                        <div  className="review">{current.message}</div>
                        <div  className="name">{current.author}</div>
                        <div id="job">{current.job}</div>
                    </div>
                    <div id="client">
                        {feedback.map((entry, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={i === index ? 'active' : ''}
                            >
                                <img src={entry.image} alt={entry.author} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonials