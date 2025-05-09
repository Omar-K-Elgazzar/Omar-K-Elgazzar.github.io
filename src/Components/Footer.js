import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><strong>Phone:</strong> +1 (416)-540-6024</li>
            <li><strong>Email:</strong> <a href="mailto:omar.k.elgazzar@gmail.com">omar.k.elgazzar@gmail.com</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Socials</h3>
          <div className="contact-icons">
            <a href="mailto:omar.k.elgazzar@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={40} />
            </a>
            <a href="https://www.linkedin.com/in/omar-elgazzar-331b55310/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/Omar-K-Elgazzar" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Copyright 2025 Omar Elgazzar</span>
        <span className="designer">• Designed by Omar Elgazzar</span>
      </div>
    </div>
  );
};

export default Footer;
