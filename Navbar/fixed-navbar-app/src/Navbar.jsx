import React from "react";
import './Navbar.css'

function Navbar (){

            return (
                    <nav className="navbar">
                        <div className="navbar-container">
                            <a href="index.html" className="navbar-logo">Saditha</a>
                            <button className="navbar-toggle">
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </button>
                            <ul className="navbar-menu">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="members.html">Top Board</a></li>
                                <li><a href="events.html">Events</a></li>
                                <li><a href="join.html">Join Us</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
            </nav>
);
}

export default Navbar