import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Camera,
  Printer,
  Monitor,
  Code2,
  Network,
} from 'lucide-react';
import img1 from '../assets/1.png';
import img2 from '../assets/21.jpg';
import img3 from '../assets/31.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
const slides = [
  {
    image: img1,
    alt: 'Servicio técnico de computadoras',
    title: 'Computadoras y soporte técnico',
    subtitle: 'Mantenimiento, diagnóstico y reparación rápida de laptops y PC.',
    category: 'SOPORTE TÉCNICO',
    icon: Monitor,
  },
  {
    image: img2,
    alt: 'Impresoras y equipos multifuncionales',
    title: 'Impresoras y multifuncionales',
    subtitle: 'Venta de consumibles, tintas, tóner y servicio técnico especializado.',
    category: 'IMPRESIÓN',
    icon: Printer,
  },
  {
    image: img3,
    alt: 'Instalación de cámaras de videovigilancia',
    title: 'Seguridad para tu negocio y hogar',
    subtitle: 'Instalación de sistemas CCTV con monitoreo en tiempo real.',
    category: 'VIDEOVIGILANCIA',
    icon: Camera,
  },
  {
    image: img5,
    alt: 'Instalación de redes y cableado estructurado',
    title: 'Redes y cableado estructurado',
    subtitle: 'Instalación y configuración de redes, cableado estructurado y conexiones para hogares y empresas.',
    category: 'REDES Y CABLEADO',
    icon: Network,
  },
  {
    image: img6,
    alt: 'Soluciones de software y puntos de venta',
    title: 'Software y puntos de venta',
    subtitle: 'Sistemas digitales y hardware POS para agilizar cobros e inventarios.',
    category: 'SOLUCIONES DIGITALES',
    icon: Code2,
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];
  const SlideIcon = slide.icon;

  return (
    <section className="hero hero-full-bg" id="inicio">
      {/* 1. CAPA DE IMÁGENES DE FONDO (FULLSCREEN) */}
      <div className="hero-bg-slider">
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`hero-bg-slide ${index === active ? 'is-active' : ''}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="hero-bg-image"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Capa oscura superpuesta para dar lectura al texto blanco */}
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-grid-pattern" />

      {/* 2. CONTENIDO PRINCIPAL SOBRE EL FONDO */}
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <SlideIcon size={16} style={{ color: '#71d6f2' }} />
            <span>{slide.category}</span>
          </div>

          {/* El título cambia dinámicamente según la diapositiva */}
          <h1 key={slide.title} className="hero-title-animated">
            {slide.title}
          </h1>

          <p key={slide.subtitle} className="hero-lead">
            {slide.subtitle}
          </p>

          <div className="hero-actions">
            <a href="#servicios" className="btn btn-primary">
              Conocer servicios
              <ArrowRight size={18} />
            </a>

            <a href="#contacto" className="btn btn-outline">
              Solicitar cotización
            </a>
          </div>

          {/* <div className="hero-proof">
            <div className="proof-icon">
              <ShieldCheck size={20} />
            </div>

            <div>
              <strong>Soluciones para cada necesidad</strong>
              <span>Hogares · Pymes y Comercios · Corporativo</span>
            </div>
          </div> */}
        </div>

        {/* 3. CONTROLES Y NAVEGACIÓN DEL SLIDER */}
        <div className="hero-controls-panel">
          {/* <div className="gallery-counter">
            <strong>{String(active + 1).padStart(2, '0')}</strong>
            <span className="counter-line" />
            {String(slides.length).padStart(2, '0')}
          </div> */}

          <div className="gallery-controls">
            <button
              type="button"
              className="gallery-arrow"
              onClick={previous}
              aria-label="Ver anterior"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="gallery-dots">
              {slides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  className={`gallery-dot ${index === active ? 'is-active' : ''
                    }`}
                  onClick={() => setActive(index)}
                  aria-label={`Ver diapositiva: ${item.title}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="gallery-arrow"
              onClick={next}
              aria-label="Ver siguiente"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="gallery-caption">
            <span className="caption-line" />

          </div>
        </div>
      </div>
    </section>
  );
}
