import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='logo'>
          <h1>Dr. Pablo Francisco Abreu Cornelio</h1>
          <p>Ginecología y Obstetricia</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href='#about'>Sobre Mí</a>
            </li>
            <li>
              <a href='#services'>Servicios</a>
            </li>
            <li>
              <a href='#contact'>Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='welcome-message'>
        <h2>Cuidado integral de la salud femenina</h2>
        <p>Atención personalizada y profesional en un ambiente de confianza</p>
      </div>
    </header>
  );
};

export default Header;
