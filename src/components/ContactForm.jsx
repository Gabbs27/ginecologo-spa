import { useState } from "react";
import { site } from "../config/site.js";
import "./ContactForm.css";

const INITIAL = { name: "", email: "", phone: "", message: "" };

/**
 * Formulario de contacto (isla de React, se hidrata al entrar en pantalla).
 *
 * Con `site.contact.formEndpoint` configurado (p. ej. Formspree) envía de
 * verdad; sin configurar funciona en modo demostración y lo dice claramente
 * en lugar de tragarse los mensajes en silencio.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | demo
  const isLive = Boolean(site.contact.formEndpoint);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: si un bot llenó el campo oculto, descartar sin avisar.
    if (e.target.elements._gotcha?.value) return;

    if (!isLive) {
      setStatus("demo");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(site.contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setFormData(INITIAL);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    // action/method son el fallback nativo: si el usuario envía antes de que
    // hidrate React (o sin JS), Formspree recibe un POST clásico igualmente.
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      action={isLive ? site.contact.formEndpoint : undefined}
      method={isLive ? "POST" : undefined}
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="cf-name">Nombre completo</label>
          <input
            id="cf-name"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cf-phone">Teléfono</label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="cf-email">Correo electrónico</label>
        <input
          id="cf-email"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="cf-message">Mensaje</label>
        <textarea
          id="cf-message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          aria-describedby="cf-message-hint"
          required
        />
        <p className="form-hint" id="cf-message-hint">
          Por tu privacidad, no incluyas información médica detallada: los
          temas de salud se conversan directamente en consulta.
        </p>
      </div>

      {/* Honeypot antispam: invisible para personas, irresistible para bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        className="form-gotcha"
      />

      <button type="submit" className="btn btn-primary form-submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="form-status is-success">
            ¡Mensaje enviado! Te contactaremos lo antes posible.
          </p>
        )}
        {status === "error" && (
          <p className="form-status is-error">
            No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos por
            WhatsApp.
          </p>
        )}
        {status === "demo" && (
          <p className="form-status is-demo">
            Este formulario está en modo demostración y aún no envía mensajes.
            (Para activarlo: configura <code>formEndpoint</code> en{" "}
            <code>src/config/site.js</code>.)
          </p>
        )}
      </div>
    </form>
  );
}
