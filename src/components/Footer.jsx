import React from 'react';
import { Phone, MapPin, Globe, Mail, ArrowUpRight } from 'lucide-react';
import { companyData } from '../data/reviews';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">

          {/* Coluna 1 – Marca e Descrição */}
          <div className="footer-brand">
            <img
              src="./images/logo.webp"
              alt="Logo Aço Sales"
              style={{ height: '40px', marginBottom: '14px', filter: 'brightness(0) invert(1)' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <h4>Grupo Aço Sales</h4>
            <p>
              Soluções completas em ferro e aço para construtoras, serralherias e projetos industriais em Ponte Nova e toda a região da Zona da Mata Mineira.
            </p>
            {/* Botão WhatsApp no Footer */}
            <a
              href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de solicitar um orçamento.')}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#25D366',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '13px',
                padding: '10px 18px',
                borderRadius: '8px',
                marginTop: '4px',
                transition: 'all 0.2s ease'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 3.6C18.2 1.3 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8 1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.6-8.3zm-8.4 18.4c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.6-3.4-1.6-5.4 0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.9 4.4 2.9 7.1 0 5.5-4.5 10-10 10zm5.5-7.5c-.3-.1-1.7-.9-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5 0-.2-.1-.4-.2-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.3 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.1-1.4-.1-.2-.3-.3-.6-.4z"/></svg>
              {companyData.whatsappDisplay}
            </a>
          </div>

          {/* Coluna 2 – Unidades */}
          <div className="footer-units">
            <h4>Nossas Unidades</h4>
            {companyData.units.map((unit, idx) => (
              <div className="footer-unit-item" key={idx}>
                <strong>{unit.title}</strong>
                <span style={{ color: '#94A3B8' }}>{unit.address}</span>
              </div>
            ))}
          </div>

          {/* Coluna 3 – Contato e CNPJ */}
          <div className="footer-contact">
            <h4>Contato & Info</h4>

            <div className="footer-contact-row">
              <Phone size={15} color="var(--aco-red)" />
              <span>{companyData.phone1}</span>
            </div>
            <div className="footer-contact-row">
              <Phone size={15} color="var(--aco-red)" />
              <span>{companyData.phone2} (Beira Rio)</span>
            </div>
            <div className="footer-contact-row">
              <MapPin size={15} color="var(--aco-blue)" />
              <span>{companyData.city}</span>
            </div>
            <div className="footer-contact-row">
              <Globe size={15} color="var(--aco-blue)" />
              <a
                href={companyData.officialUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#E2E8F0', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '3px' }}
              >
                acosales.com.br <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Categorias de Produtos */}
            <div style={{ marginTop: '18px' }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                Produtos
              </p>
              {['Tubos & Metalon', 'Telhas Galvalume', 'Vigas Laminadas', 'Chapas de Aço', 'Ferro Armado', 'Corte CNC a Laser'].map((prod) => (
                <div key={prod} style={{ fontSize: '12.5px', color: '#94A3B8', marginBottom: '5px' }}>
                  › {prod}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="footer-bottom-bar">
          <span>© {year} Grupo Aço Sales — CNPJ: {companyData.cnpj}</span>
          <span style={{ color: '#64748B' }}>
            Ponte Nova / MG • Ferro e Aço de Alta Qualidade
          </span>
          <span>Desenvolvido com ❤️ para o setor siderúrgico brasileiro</span>
        </div>
      </div>
    </footer>
  );
}
