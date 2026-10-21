import React from 'react';
import { Printer, Monitor, Camera, Code2, Network } from 'lucide-react';

const items = [
  { icon: Printer, title: 'Impresión', text: 'Equipos y consumibles' },
  { icon: Monitor, title: 'Cómputo', text: 'Venta y reparación' },
  { icon: Camera, title: 'Seguridad', text: 'CCTV y videovigilancia' },
  { icon: Code2, title: 'Software', text: 'Soluciones a medida' },
  { icon: Network, title: 'Redes', text: 'Conectividad e integración' },
];

export default function TrustStrip() {
  return <section className="trust-strip"><div className="container trust-grid">
    {items.map(({ icon: Icon, title, text }) => <div className="trust-item" key={title}><div className="trust-icon"><Icon size={21} /></div><div><strong>{title}</strong><span>{text}</span></div></div>)}
  </div></section>;
}
