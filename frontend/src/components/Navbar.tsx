import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-center">
            <li className="nav-item">
              {/* Changed to HashLink to scroll to the top */}
              <HashLink className="nav-link" smooth to="/#hero">INICIO</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#about-us">NOSOTROS</HashLink>
            </li>
            <Link className="navbar-brand mx-4" to="/">BERBELETA</Link>
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#products">PRODUCTOS</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" smooth to="/#contact">CONTACTO</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
