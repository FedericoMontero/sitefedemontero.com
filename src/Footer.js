import React from 'react' 
import './App.css';

const Footer = () => {
  const footerStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const linkStyle = {
    
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    
    <footer style={footerStyle} className="footer">
      <div className="footer-content">
        <p>This website is developed by me &#128640; from UY &#128205;</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/tu-perfil-de-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/tu-usuario-de-github"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            GitHub
          </a>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;