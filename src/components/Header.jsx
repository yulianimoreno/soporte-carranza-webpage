import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo-horizontal.png';

const links = [
  ['Soluciones', '#soluciones'],
  ['Servicios', '#servicios'],
  ['Nosotros', '#nosotros'],
  ['Contacto', '#contacto'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#inicio" className="brand" aria-label="Soporte Carranza, inicio">
          {logo ? <img src={logo} alt="Soporte Carranza" /> : <span className="brand-fallback">SC <b>Soporte Carranza</b></span>}
        </a>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contacto" onClick={() => setOpen(false)}>Solicitar cotización <ArrowUpRight size={16} /></a>
        </nav>
      </div>
    </header>
  );
}