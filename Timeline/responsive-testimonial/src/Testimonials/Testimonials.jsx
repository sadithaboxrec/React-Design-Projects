import React from "react";
import './styles.css'
import { timelineData } from './data';



function MyTimeline() {
    return (
        <div className="page-wrapper">
            <div className="section-timeline">
                <div className="timeline_component">
                    <div className="timeline_progress">
                        <div className="timeline_progress-bar"></div>
                    </div>

                    {timelineData.map((item) => (
                        <div className="timeline_item" id={item.id} key={item.id}>
                            <div className="timeline_left">
                                <div className="timeline_date-text">{item.date}</div>
                            </div>
                            <div className="timeline_centre">
                                <div className="timeline_circle"></div>
                            </div>
                            <div className="timeline_right">
                                <div className="margin-bottom-xlarge">
                                    <div className="timeline_text">{item.text}</div>

                                    <div className="social-icons">
                                        <a href={item.socialLinks.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a href={item.socialLinks.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-twitter-x"></i>
                                        </a>
                                        <a href={item.socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                        <a href={item.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="timeline_image-wrapper">
                                    <img src={item.image} alt={item.alt} loading="lazy" width="480" />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="overlay-fade-top"></div>
                    <div className="overlay-fade-bottom"></div>
                </div>
            </div>
        </div>
    );
}

export default MyTimeline;