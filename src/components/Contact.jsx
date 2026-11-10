import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle, MapPin, Clock3, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

const WHATSAPP_NUMBER = '529921162476'; // Reemplaza por tu número con lada de país, sin + ni espacios.

const serviceOptions = [
  'Impresoras y multifuncionales',
  'Computadoras y laptops',
  'Tintas y tóneres',
  'Accesorios de cómputo',
  'Cámaras de videovigilancia',
  'Puntos de venta',
  'Desarrollo de software',
  'Redes e integración',
  'Asesoría tecnológica',
  'Otro servicio'
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    service: serviceOptions[0],
    message: ''
  });

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    const message = [
      '¡Hola!',
      '',
      `Mi nombre es: ${form.name}`,
      `Me interesa: ${form.service}`,
      `Detalles de mi solicitud: ${form.message || 'Me gustaría recibir más información.'}`
    ].join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  
return (
  <section className="section contact-section" id="contacto">
    <div className="container contact-panel contact-panel-whatsapp">
      <form className="contact-form whatsapp-form" onSubmit={submit}>
        <div className="form-heading">
          <div className="whatsapp-form-icon">
            <MessageCircle size={23} />
          </div>
          
          <h3>CONTACTO DIRECTO</h3>
          
        </div>

        <label>
          
          <input
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Escribe tu nombre"
            autoComplete="name"
            required
          />
        </label>

        <label>
          Servicio de interés
          <select
            name="service"
            value={form.service}
            onChange={update}
          >
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <label>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            placeholder="Describe brevemente lo que necesitas..."
            rows={4}
          />
        </label>

        <button type="submit" className="btn btn-whatsapp-submit">
          Continuar en WhatsApp <Send size={17} />
        </button>

        {/* <p className="form-note">
          Revisarás el mensaje en WhatsApp antes de enviarlo.
        </p> */}
      </form>
    </div>
  </section>
);

}
