import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  // Replace this with the actual phone number
  const phoneNumber = "123457890";
  const message = encodeURIComponent("Hola, me gustaría agendar una cita.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      className='whatsapp-button'
      target='_blank'
      rel='noopener noreferrer'>
      <span className='whatsapp-icon'>💬</span>
      Agendar Cita por WhatsApp
    </a>
  );
};

export default WhatsAppButton;
