import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">
            <img src="/logo.png" alt="Logo" />
            </Link>
        </div>
        <div className="navbar-menu">
            <div className="navbar-start">
            <Link to="./" className="navbar-item">Home</Link>
            <Link to="./posts" className="navbar-item">Posts</Link>
            <Link to="./About" className="navbar-item">About</Link>
            <Link to="./Contact" className="navbar-item">Contact</Link>
            </div>
        </div>
        </nav>
    );
};

export default NavBar;