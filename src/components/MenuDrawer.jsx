import React from 'react';
import { X, ChevronRight, Package2, Home, Phone, MapPin, Star, Info } from 'lucide-react';
import { companyData } from '../data/reviews';
import { categories } from '../data/products';

const menuLinks = [
  { icon: <Home size={18} />, label: 'Início', href: '#' },
  { icon: <Package2 size={18} />, label: 'Catálogo de Produtos', href: '#catalogo-produtos' },
  { icon: <Star size={18} />, label: 'Avaliações de Clientes', href: '#avaliacoes' },
  { icon: <Info size={18} />, label: 'Sobre a Aço Sales', href: '#sobre' },
  { icon: <MapPin size={18} />, label: 'Nossas Unidades', href: '#unidades' },
  { icon: <Phone size={18} />, label: 'Fale Conosco', href: `https://wa.me/${companyData.whatsappRaw}` },
];

export default function MenuDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside
        className="cart-drawer-panel"
        style={{ left: 0, right: 'auto', maxWidth: '320px', animationName: 'slideInLeft' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Menu */}
        <div className="cart-drawer-header">
          <img
            src="./images/logo.webp"
            alt="Aço Sales"
            style={{ height: '32px', filter: 'brightness(0) invert(1)' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <button type="button" onClick={onClose} style={{ color: '#FFFFFF' }}>
            <X size={22} />
          </button>
        </div>

        {/* Links de Navegação */}
        <div style={{ padding: '8px 0', overflowY: 'auto', flexGrow: 1 }}>
          <p style={{ padding: '12px 20px 6px', fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8' }}>
            Navegação
          </p>
          {menuLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '13px 20px',
                color: 'var(--aco-navy)',
                borderBottom: '1px solid #F1F5F9',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#F8FAFC'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ color: 'var(--aco-red)' }}>{link.icon}</span>
              {link.label}
              <ChevronRight size={16} style={{ marginLeft: 'auto', color: '#CBD5E1' }} />
            </a>
          ))}

          {/* Categorias de Produto */}
          <p style={{ padding: '16px 20px 6px', fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94A3B8' }}>
            Categorias
          </p>
          {categories.slice(1).map((cat) => (
            <a
              key={cat.id}
              href="#catalogo-produtos"
              onClick={onClose}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '11px 20px',
                color: '#475569',
                borderBottom: '1px solid #F1F5F9',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--aco-red)', flexShrink: 0 }} />
              {cat.label}
            </a>
          ))}
        </div>

        {/* Rodapé do Menu com Contato */}
        <div style={{ padding: '16px 20px', background: 'var(--aco-navy)', borderTop: '2px solid var(--aco-red)' }}>
          <p style={{ fontSize: '11px', color: '#94A3B8', marginBottom: '8px', textAlign: 'center' }}>
            Atendimento em Ponte Nova - MG
          </p>
          <a
            href={`tel:${companyData.phone1.replace(/\D/g, '')}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'var(--aco-red)',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '14px',
              padding: '11px',
              borderRadius: '8px',
              letterSpacing: '0.02em',
            }}
          >
            <Phone size={16} />
            {companyData.phone1}
          </a>
        </div>
      </aside>
    </div>
  );
}
