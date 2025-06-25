import React,{useState} from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Navbar (){

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

            return (
                    <nav className="navbar">
                        <div className="navbar-container">
                            {/*<a href="index.html" className="navbar-logo">Saditha</a>*/}
                            <Link to="/" className="navbar-logo">Saditha</Link>
                            <button className={`navbar-toggle ${menuOpen ? "active" : ""}`}
                                    onClick={handleToggle}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </button>
                            <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}   onClick={() => setMenuOpen(false)}>Home</NavLink></li>
                                <li><NavLink to="/top-board" className={({ isActive }) => isActive ? "active" : ""}  onClick={() => setMenuOpen(false)}>Top Board</NavLink></li>
                                <li><NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}  onClick={() => setMenuOpen(false)}>Events</NavLink></li>
                                <li><NavLink to="/join" className={({ isActive }) => isActive ? "active" : ""}  onClick={() => setMenuOpen(false)}>Join Us</NavLink></li>
                                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}  onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>

                            </ul>
                        </div>
                    </nav>
);
}

export default Navbar