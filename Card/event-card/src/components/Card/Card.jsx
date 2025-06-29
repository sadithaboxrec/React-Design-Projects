import React from 'react';
import './card.css';
import image from '../../assets/black.png';


function Card() {

    return (

        <div className="container">
            <div className="event-card">

                <div className="left-column">
                    <img src={image} alt="Event" />
                </div>

                <div className="right-column">

                    <div className="event-name">
                        <h1>Training Practical English</h1>
                        <div className="date">23/05/2025</div>
                    </div>

                    <div className="description">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident architecto accusantium
                            quod voluptatum omnis saepe maxime, tenetur eaque reiciendis, excepturi fugiat quibusdam.
                            Deleniti expedita ratione ut eum pariatur tempore voluptas?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, totam! Esse, provident
                            quibusdam maiores rerum earum possimus. Ipsam, veritatis voluptate debitis optio obcaecati
                            recusandae possimus autem tempore nostrum, cumque iste.
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
        </div>
    );
}

export default Card;
