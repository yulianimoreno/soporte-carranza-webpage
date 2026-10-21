import React from 'react';
import { MessageCircle, Search, Settings2, CheckCircle } from 'lucide-react';

const steps = [
  { icon: MessageCircle, n: '01 · PRIMER CONTACTO', title: 'Conocemos tus necesidades', text: 'Escuchamos lo que buscas, ya sea adquirir un equipo, resolver una falla o desarrollar un proyecto tecnológico.' },
  { icon: Search, n: '02 · EVALUACIÓN', title: 'Analizamos las alternativas', text: 'Revisamos las opciones disponibles y te orientamos para elegir la más adecuada según tus requerimientos.' },
  { icon: Settings2, n: '03 · EJECUCIÓN', title: 'Ponemos todo en marcha', text: 'Damos seguimiento a la venta, servicio, instalación o solución.' },
  { icon: CheckCircle, n: '04 · ACOMPAÑAMIENTO', title: 'Seguimos contigo', text: 'Resolvemos dudas para ayudarte a aprovechar tu tecnología.' },
];

export default function Process() {
  return <section className="section process-section" id="proceso"><div className="container">
    <div className="section-heading process-heading"><div><div className="eyebrow">NUESTRO PROCESO DE ATENCIÓN</div><h2>De tu necesidad a la  <span>solución.</span></h2></div><p>Te acompañamos en cada etapa para encontrar los productos y servicios adecuados para ti.</p></div>
    <div className="process-grid">{steps.map(({ icon: Icon, n, title, text }) => <div className="process-step" key={n}><div className="process-top"><span>{n}</span><div className="process-icon"><Icon size={22} /></div></div><h3>{title}</h3><p>{text}</p></div>)}</div>
  </div></section>;
}
