import React from 'react';
import { Home, Store, Building2 } from 'lucide-react';

export default function SolutionsFor() {
  const segments = [
    {
      icon: Home,
      title: 'Hogares',
      description: 'Reparación de laptops y PC, venta e instalación de impresoras, redes Wi-Fi residenciales y soporte técnico profesional.',
      badge: 'Uso personal y familiar'
    },
    {
      icon: Store,
      title: 'Comercios',
      description: 'Sistemas de Punto de Venta (POS), consumibles frecuentes de tinta y tóner, mantenimiento de equipos de cobro y videovigilancia.',
      badge: 'Pymes y negocios'
    },
    {
      icon: Building2,
      title: 'Empresas',
      description: 'Infraestructura de redes estables, CCTV avanzado, mantenimiento preventivo de cómputo y desarrollo de software a la medida.',
      badge: 'Soluciones corporativas'
    }
  ];

  return (
    <section className="section" id="soluciones" style={{ background: '#fff', paddingBottom: '40px' }}>
      <div className="container">
        <div className="section-heading" style={{ marginBottom: '30px' }}>
          <div>
            <div className="eyebrow eyebrow-dark">COBERTURA INTEGRAL</div>
            <h2>Soluciones adaptadas a <br /><span>cada necesidad</span></h2>
          </div>
          <p>Ya sea que busques soporte para tu equipo personal o infraestructura tecnológica para tu negocio, tenemos la respuesta exacta.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {segments.map(({ icon: Icon, title, description, badge }) => (
            <div key={title} style={{ background: '#f8fbff', border: '1px solid #e2e9f1', borderRadius: '14px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', background: '#eaf4fc', color: '#1763b1', borderRadius: '12px', display: 'grid', placeItems: 'center' }}>
                  <Icon size={24} />
                </div>
                <span style={{ fontSize: '10px', fontWeight: '800', background: '#e2edf8', color: '#1763b1', padding: '5px 10px', borderRadius: '20px' }}>{badge}</span>
              </div>
              <h3 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '18px', margin: '0', color: '#071a36' }}>{title}</h3>
              <p style={{ fontSize: '13px', lineHeight: '1.7', color: '#66748a', margin: '0' }}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}