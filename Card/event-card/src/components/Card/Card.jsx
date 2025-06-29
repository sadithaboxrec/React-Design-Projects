import React from 'react';
import './card.css';
// import image from '../../assets/black.png';
import { eventData } from '../../data/event';


function Card() {




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
