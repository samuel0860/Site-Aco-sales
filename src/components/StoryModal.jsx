import React from 'react';
import { X, CheckCircle2, PhoneCall, MessageCircle } from 'lucide-react';
import { companyData } from '../data/reviews';

export default function StoryModal({ isOpen, onClose, onQuoteClick }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        {/* Header do Story */}
        <div style={{ position: 'relative' }}>
          <img 
            src="./images/soldador_oficina.jpg" 
            alt="Bastidores Aço Sales" 
            style={{ width: '100%', height: '260px', objectFit: 'cover' }}
          />
          <button 
            type="button" 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'rgba(0, 0, 0, 0.65)',
              color: '#FFFFFF',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
          
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '16px',
            color: '#FFFFFF',
            textShadow: '0 2px 8px rgba(0,0,0,0.8)'
          }}>
            <span style={{ 
              background: 'var(--aco-red)', 
              fontSize: '11px', 
              fontWeight: 800, 
              padding: '3px 8px', 
              borderRadius: '4px',
              textTransform: 'uppercase'
            }}>
              Bastidores da Produção
            </span>
            <h3 style={{ color: '#FFFFFF', fontSize: '20px', marginTop: '4px' }}>
              Corte CNC & Acabamento Industrial
            </h3>
          </div>
        </div>

        {/* Conteúdo do Modal */}
        <div style={{ padding: '20px' }}>
          <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
            Na <strong>Aço Sales</strong>, unimos tecnologia de ponta em corte a laser com a tradição dos melhores mestres serralheiros de Ponte Nova e região. Nossas peças passam por rigoroso controle de qualidade para garantir que cheguem na sua obra 100% no esquadro e prontas para montagem.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--aco-navy)' }}>
              <CheckCircle2 size={16} color="var(--aco-red)" />
              <span>Aço certificado pelas principais usinas siderúrgicas</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--aco-navy)' }}>
              <CheckCircle2 size={16} color="var(--aco-red)" />
              <span>Corte sob medida com tolerância milimétrica</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--aco-navy)' }}>
              <CheckCircle2 size={16} color="var(--aco-red)" />
              <span>Frota própria com entrega pontual na sua obra</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              className="btn-cta-primary"
              style={{ flex: 1, padding: '12px', fontSize: '13px' }}
              onClick={() => {
                onClose();
                onQuoteClick();
              }}
            >
              Ver Produtos
            </button>
            <a
              href={`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de conversar com a equipe técnica da fábrica.')}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                background: 'var(--aco-whatsapp)',
                color: '#FFF',
                fontWeight: 700,
                fontSize: '13px',
                padding: '12px 16px',
                borderRadius: '8px'
              }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
