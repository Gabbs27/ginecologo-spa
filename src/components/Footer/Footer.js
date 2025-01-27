import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h4>Dr. Pablo Francisco Abreu Cornelio</h4>
          <p>Especialista en Ginecología y Obstetricia</p>
        </div>
        <div className='footer-section'>
          <h4>Redes Sociales</h4>
          <div className='social-links'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Facebook
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Instagram
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; 2024 Consultorio Ginecológico Dr. Abreu Cornelio. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
