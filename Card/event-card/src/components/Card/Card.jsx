import React from 'react';
import './card.css';
import image from '../../assets/black.png';


function Card() {

    const eventData = [
        {
            id: 1,
            title: 'Training Practical English',
            date: '23/05/2025',
            description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident architecto accusantium
    quod voluptatum omnis saepe maxime...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident architecto accusantium
    quod voluptatum omnis saepe maxime...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident architecto accusantium
    quod voluptatum omnis saepe maxime...`,
            image: image
        },
        {
            id: 2,
            title: 'Advanced Communication Skills',
            date: '30/06/2025',
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis magni quas...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident architecto accusantium
    quod voluptatum omnis saepe maxime...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident architecto accusantium
    quod voluptatum omnis saepe maxime...Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident architecto accusantium
    quod voluptatum omnis saepe maxime...`,
            image: image
        }
    ];


    return (

        <div className="container">
            {eventData.map(event => (
            <div className="event-card">

                <div className="left-column">
                    <img src={event.image} alt="Event" />
                </div>

                <div className="right-column">

                    <div className="event-name">
                        <h1>{event.title}</h1>
                        <div className="date">{event.date}</div>
                    </div>

                    <div className="description">
                        <p>
                            {event.description}
                        </p>
                    </div>

                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                        <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                    </div>

                </div>
            </div>
            ))}
        </div>
    );
}

export default Card;
