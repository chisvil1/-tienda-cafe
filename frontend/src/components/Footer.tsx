import { HashLink } from 'react-router-hash-link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-col">
            <h4>BERBELETA</h4>
            <p>Apasionados por el café, comprometidos con la calidad desde el grano hasta tu taza.</p>
          </div>
          <div className="col-md-4 footer-col">
            <h4>ENLACES RÁPIDOS</h4>
            <ul className="list-unstyled">
              <li><HashLink smooth to="/#hero">Inicio</HashLink></li>
              <li><HashLink smooth to="/#products">Tienda</HashLink></li>
              <li><HashLink smooth to="/#about-us">Nosotros</HashLink></li>
              <li><HashLink smooth to="/#contact">Contacto</HashLink></li>
            </ul>
          </div>
          <div className="col-md-4 footer-col">
            <h4>SÍGUENOS</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61587303024827" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>

              <a href="https://www.instagram.com/cafeberbeleta" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center footer-bottom-text">
            <p>&copy; {new Date().getFullYear()} Berbeleta. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
