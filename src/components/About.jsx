import React from 'react';
import { ShieldCheck, Zap, Headphones, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Atención Ágil y Oportuna',
    text: 'Atendemos tus necesidades tecnológicas con rapidez y eficacia para que tu hogar o negocio siga funcionando sin interrupciones.'
  },
  {
    icon: Headphones,
    title: 'Asesoría Clara y Personalizada',
    text: 'Te escuchamos, entendemos tus necesidades y te recomendamos soluciones prácticas, honestas y adecuadas a tu presupuesto.'
  },
  {
    icon: ShieldCheck,
    title: 'Confianza y Respaldo',
    text: 'Trabajamos con compromiso y responsabilidad, respaldando nuestros servicios para que tengas la tranquilidad de estar en buenas manos.'
  },
];

export default function About() {
  return (
    <section className="section about-section" id="nosotros">
      <div className="container about-layout">
        {/* Columna Izquierda: Bloque visual minimalista y elegante */}
        <div className="about-art">
          <div className="about-art-back" />
          
          <div style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #071a36 0%, #0b2851 100%)',
            borderRadius: '20px',
            padding: '40px 35px',
            color: '#fff',
            boxShadow: '0 20px 40px rgba(7,26,54,0.15)',
            width: '100%',
            maxWidth: '320px',
            zIndex: 2
          }}>
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '2px', color: '#71d6f2', display: 'block', marginBottom: '12px' }}>
              NUESTRA FILOSOFÍA
            </span>
            <h3 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '22px', lineHeight: '1.3', marginBottom: '15px', color: '#fff' }}>
              Hacemos que la tecnología trabaje a tu favor.
            </h3>
            <p style={{ fontSize: '12px', lineHeight: '1.7', color: '#a9c0dc', margin: 0 }}>
              Más de 10 años de experiencia ofreciendo soluciones tecnológicas para personas, comercios y empresas, con atención cercana, asesoría y soporte adaptados a cada necesidad.
            </p>
          </div>

          {/* <div className="about-floating">
            <CheckCircle2 size={20} />
            <span>
              <b>Atención Profesional</b>
              <small>Hogares, Pymes y Corporativos</small>
            </span>
          </div> */}

          <div className="about-small-label">SOPORTE CARRANZA</div>
        </div>

        {/* Columna Derecha: Contenido y pilares */}
        <div className="about-copy">
          <div className="eyebrow eyebrow-dark">SOMOS SOPORTE CARRANZA</div>
          <h2>Conectamos tu día a día con la <br /><span>tecnología ideal.</span></h2>
          <p className="about-intro">
            Entendemos que cada equipo, red o sistema es vital para tus actividades. Por eso, diseñamos soluciones integrales que van desde el suministro de un consumible hasta la infraestructura tecnológica de tu negocio.
          </p>

          <div className="values-list">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="value-row" key={title}>
                <div className="value-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}