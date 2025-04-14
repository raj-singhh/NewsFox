import React from 'react';
import { 
  FaNewspaper,
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="newsfox-footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <FaNewspaper className="footer-logo" />
            <h3>NewsFox</h3>
            <p>Your trusted source for the latest news worldwide</p>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Navigation</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/news">News</a></li>
                
              </ul>
            </div>

            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                
              </ul>
            </div>

            <div className="link-column">
              <h4>Support</h4>
              <ul>
                
                <li><a href="/feedback">Feedback</a></li>
                <li><a href="/report-issue">Report Issue</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="social-links">
            <a target='_blank' href="https://x.com/singhhraj_" aria-label="X"><FaXTwitter /></a>
            <a target='_blank' href="https://www.facebook.com/anjay.rajpaliwal/" aria-label="Facebook"><FaFacebook /></a>
            <a target='_blank' href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a target='_blank' href="https://www.linkedin.com/in/rajsingh-/" aria-label="LinkedIn"><FaLinkedin /></a>
            <a target='_blank' href="https://github.com/raj-singhh" aria-label="GitHub"><FaGithub /></a>
          </div>

          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} NewsFox. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style jsx>{`
          /* Footer Styles */
.newsfox-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 3rem 0 1rem;
  margin-top: 3rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
  border-bottom: 1px solid #34495e;
  padding-bottom: 2rem;
}

.footer-brand {
  flex: 1 1 300px;
  margin-bottom: 2rem;
}

.footer-logo {
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.footer-brand p {
  color: #bdc3c7;
  max-width: 300px;
}

.footer-links {
  display: flex;
  flex: 2 1 600px;
  justify-content: space-around;
  flex-wrap: wrap;
}

.link-column {
  flex: 1 1 200px;
  margin: 0 1rem 2rem;
}

.link-column h4 {
  color: #fff;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.link-column h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: #3498db;
}

.link-column ul {
  list-style: none;
  padding: 0;
}

.link-column li {
  margin-bottom: 0.8rem;
}

.link-column a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.link-column a:hover {
  color: #3498db;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.social-links a {
  color: #bdc3c7;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #3498db;
}

.copyright p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
  }
  
  .footer-links {
    justify-content: flex-start;
  }
  
  .link-column {
    flex: 1 1 100%;
    margin-bottom: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column-reverse;
    text-align: center;
  }
  
  .social-links {
    margin-top: 1rem;
    justify-content: center;
  }
}
      `}</style>
    </footer>
    
    
  );
};

export default Footer;