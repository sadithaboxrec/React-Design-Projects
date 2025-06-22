import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar (){

            return (
                    <nav className="navbar">
                        <div className="navbar-container">
                            {/*<a href="index.html" className="navbar-logo">Saditha</a>*/}
                            <Link to="/" className="navbar-logo">Saditha</Link>
                            <button className="navbar-toggle">
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </button>
                            <ul className="navbar-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/top-board">Top Board</Link></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/join">Join Us</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>

                            </ul>
                        </div>
                    </nav>
);
}

export default Navbar