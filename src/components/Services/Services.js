import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Consulta Ginecológica",
      description:
        "Atención integral y seguimiento personalizado de la salud femenina.",
      icon: "🏥",
    },
    {
      title: "Control Prenatal",
      description: "Seguimiento completo durante todo el embarazo.",
      icon: "👶",
    },
    {
      title: "Colposcopía",
      description: "Exámenes preventivos y diagnóstico temprano.",
      icon: "🔬",
    },
    {
      title: "Planificación Familiar",
      description: "Asesoramiento en métodos anticonceptivos.",
      icon: "📋",
    },
  ];

  return (
    <section id='services' className='services'>
      <h2>Nuestros Servicios</h2>
      <div className='services-grid'>
        {services.map((service, index) => (
          <div key={index} className='service-card'>
            <span className='service-icon'>{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
