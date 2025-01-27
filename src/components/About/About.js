import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id='about' className='about'>
      <h2>Dr. Pablo Francisco Abreu Cornelio</h2>
      <div className='about-content'>
        <div className='about-image'>
          <div className='image-placeholder'></div>
        </div>
        <div className='about-text'>
          <h3>Especialista en Ginecología y Obstetricia</h3>
          <p>
            Con más de 15 años de experiencia en el cuidado de la salud
            femenina, me dedico a proporcionar atención médica integral y
            personalizada a mis pacientes.
          </p>
          <ul className='credentials'>
            <li>
              Especialidad en Ginecología y Obstetricia - Universidad Nacional
            </li>
            <li>Miembro de la Sociedad de Ginecología y Obstetricia</li>
            <li>Certificada en Colposcopía y Laparoscopía</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
