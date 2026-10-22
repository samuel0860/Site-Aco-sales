import React from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onCtaClick }) {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Título Principal */}
        <h1 className="hero-tagline">
          O aço que constrói histórias e sustenta o seu futuro.
        </h1>

        {/* Produto / Moldura em Destaque (Inspirado no print Decorvibes) */}
        <div className="hero-image-wrapper">
          <img 
            src="./images/placa_aco_laser.jpg" 
            alt="Placa Personalizada em Aço Cortada a Laser - Aço Sales" 
          />
          <div className="hero-image-overlay">
            <div>
              <h3>Corte CNC a Laser & Estruturas</h3>
              <p>Precisão milimétrica em chapas, vigas e perfis de aço</p>
            </div>
            <div style={{ background: 'var(--aco-red)', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 800 }}>
              DESDE 2014
            </div>
          </div>
        </div>

        {/* Subtítulo Descritivo */}
        <p className="hero-desc">
          Tubos metalon, vigas laminadas, telhas galvalume e ferragens armadas sob medida direto de fábrica com frota própria para Ponte Nova e região.
        </p>

        {/* Botão de Ação CTA Primário */}
        <div>
          <button 
            type="button" 
            className="btn-cta-primary" 
            onClick={onCtaClick}
          >
            SOLICITAR ORÇAMENTO RÁPIDO
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Prova Social */}
        <div className="hero-rating">
          <Star size={16} className="star" fill="#EAB308" />
          <span><strong>4,9</strong> | +5.000 clientes e serralherias atendidos</span>
        </div>
      </div>
    </section>
  );
}
