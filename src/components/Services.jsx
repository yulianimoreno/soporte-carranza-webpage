import React from 'react';
import { 
  Printer, 
  MonitorCog, 
  Droplets, 
  Cable, 
  Camera, 
  ShoppingCart, 
  Code2, 
  Network, 
  ArrowUpRight 
} from 'lucide-react';

const services = [
  { 
    n: '01', 
    icon: Printer, 
    title: 'Impresoras y multifuncionales', 
    desc: 'Venta, diagnóstico, reparación y mantenimiento preventivo para mantener tus equipos trabajando.', 
    tags: ['Servicio técnico', 'Mantenimiento'],
    forWho: 'Hogares y Pymes'
  },
  { 
    n: '02', 
    icon: MonitorCog, 
    title: 'Computadoras y laptops', 
    desc: 'Venta de equipos nuevos, actualizaciones de componentes, optimización y soporte técnico.', 
    tags: ['PC y Laptop', 'Soporte'],
    forWho: 'Hogares y Empresas'
  },
  { 
    n: '03', 
    icon: Droplets, 
    title: 'Tintas y tóner', 
    desc: 'Consumibles originales y genéricos de alta calidad para oficina, hogar y negocio.', 
    tags: ['Tintas', 'Tóner'],
    forWho: 'Suministros'
  },
  { 
    n: '04', 
    icon: Cable, 
    title: 'Accesorios de cómputo', 
    desc: 'Periféricos, cables, adaptadores y complementos para equipar tu estación de trabajo.', 
    tags: ['Periféricos', 'Conectividad'],
    forWho: 'Equipamiento'
  },
  { 
    n: '05', 
    icon: Camera, 
    title: 'Cámaras de videovigilancia', 
    desc: 'Venta, instalación y configuración de sistemas CCTV con monitoreo remoto desde tu celular.', 
    tags: ['CCTV', 'Monitoreo HD'],
    forWho: 'Hogares y Negocios'
  },
  { 
    n: '06', 
    icon: ShoppingCart, 
    title: 'Puntos de venta (POS)', 
    desc: 'Hardware y herramientas para agilizar cobros, ventas e inventarios de tu comercio.', 
    tags: ['Hardware', 'Control POS'],
    forWho: 'Comercios'
  },
  { 
    n: '07', 
    icon: Code2, 
    title: 'Desarrollo de software', 
    desc: 'Sistemas y herramientas digitales a la medida diseñados según los procesos de tu empresa.', 
    tags: ['Sistemas', 'A medida'],
    forWho: 'Empresas'
  },
  { 
    n: '08', 
    icon: Network, 
    title: 'Redes e integración', 
    desc: 'Cableado estructurado, Wi-Fi e integración para que tu infraestructura funcione sin caídas.', 
    tags: ['Redes', 'Integración'],
    forWho: 'Pymes y Empresas'
  },
];

export default function Services() {
  return (
    <section className="section services-section" id="servicios">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow eyebrow-dark">CATÁLOGO DE SERVICIOS</div>
            <h2>Todo lo que necesitas.<br /><span>En un solo lugar.</span></h2>
          </div>
          <p>Desde un consumible para tu impresora hasta una solución tecnológica integral para tu empresa.</p>
        </div>

        <div className="services-grid">
          {services.map(({ n, icon: Icon, title, desc, tags, forWho }) => (
            <article className="service-card" key={n}>
              <div className="service-card-top">
                <div className="service-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <span className="service-number">{n}</span>
              </div>

              <h3>{title}</h3>
              <p>{desc}</p>

              <div className="service-tags">
                <span className="service-badge-target" style={{ background: '#e2edf8', color: '#1763b1', fontWeight: '800' }}>
                  {forWho}
                </span>
                {tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a 
                href="#contacto" 
                className="service-link" 
                aria-label={`Solicitar información sobre ${title}`}
              >
                Consultar servicio <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}