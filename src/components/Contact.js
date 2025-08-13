// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de envío de formulario
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      
      <div className="contact-unified">
        <div className="contact-info">
          <div className="info-item">
            <h3>Dirección</h3>
            <p>Medellín Antioquia</p>
          </div>
          <div className="info-item">
            <h3>Teléfono</h3>
            <p>3017712946</p>
          </div>
          <div className="info-item">
            <h3>Horario</h3>
            <p>Lunes a Sábado: 11:00 AM - 10:00 PM</p>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3>Envíanos un mensaje</h3>
          {submitted && <div className="success-message">¡Mensaje enviado con éxito!</div>}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;