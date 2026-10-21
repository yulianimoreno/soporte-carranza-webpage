import React from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo-horizontal.png';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          {logo ? <img src={logo} alt="Soporte Carranza" /> : <strong>Soporte Carranza</strong>}
          {/* <p>Soluciones en tecnología para que tu negocio siga advancing.</p> */}
        </div>
        <div className="footer-nav">
          <strong>Explora</strong>
          <a href="#soluciones">Soluciones</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
        </div>
        <div className="footer-nav">
          <strong>Contacto</strong>
          <a href="mailto:ayuda@soportecarranza.com.mx"><Phone size={15} /> +52 992 116 24 76</a>
          <a href="#contacto">Solicitar información <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Soporte Carranza. Todos los derechos reservados.</span>
        <span>Soluciones en tecnología.</span>
      </div>
    </footer>
  );
}