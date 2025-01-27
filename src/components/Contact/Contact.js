import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id='contact' className='contact'>
      <h2>Contacto</h2>
      <div className='contact-container'>
        <div className='contact-info'>
          <h3>Información de Contacto</h3>
          <p>📍 Av. Principal 123, Ciudad</p>
          <p>📞 (123) 456-7890</p>
          <p>✉️ consulta@tuemailaqui.com</p>
          <div className='office-hours'>
            <h4>Horario de Atención</h4>
            <p>Lunes a Viernes: 9:00 - 18:00</p>
            <p>Sábados: 9:00 - 13:00</p>
          </div>
        </div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              placeholder='Nombre completo'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              placeholder='Correo electrónico'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='tel'
              name='phone'
              placeholder='Teléfono'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <textarea
              name='message'
              placeholder='Mensaje'
              value={formData.message}
              onChange={handleChange}
              required></textarea>
          </div>
          <button type='submit'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
