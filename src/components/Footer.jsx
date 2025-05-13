import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './css/Footer.css'; // Correct path to the CSS file

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section logo-section">
          <h1 className="footer-logo-text">AI Blog</h1>
          <p className="footer-description">
            Your go-to resource for all things AI. Stay updated with the latest trends and developments in the world of Artificial Intelligence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/advantages" className="footer-link">Advantages</a></li>
            <li><a href="/uses" className="footer-link">Uses</a></li>
            <li><a href="/info" className="footer-link">Information</a></li>
            <li><a href="/future" className="footer-link">Future</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section social-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://twitter.com" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section newsletter-section">
          <h3>Stay Updated</h3>
          <p className="footer-description">Subscribe to our newsletter to get the latest updates on AI trends and news.</p>
          <form className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email"
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 AI Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
