import React,{useState} from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

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
                                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                                <li><Link to="/top-board" onClick={() => setMenuOpen(false)}>Top Board</Link></li>
                                <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
                                <li><Link to="/join" onClick={() => setMenuOpen(false)}>Join Us</Link></li>
                                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>

                            </ul>
                        </div>
                    </nav>
);
}

export default Navbar