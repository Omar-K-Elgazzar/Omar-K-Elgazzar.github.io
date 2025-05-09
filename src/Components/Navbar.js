import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar navbar-transparent'>
            <h1>Omar Elgazzar</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/work-experience">Work Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/bio">Bio</Link>
            </div>
        </nav>
    );
}

export default Navbar;
