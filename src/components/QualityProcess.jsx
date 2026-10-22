import React from 'react';

export default function QualityProcess() {
  return (
    <section className="quality-section">
      <div className="container">
        {/* Bloco 1: Materiais de Qualidade */}
        <div className="quality-feature-block">
          <div className="quality-feature-img-wrap">
            <img 
              src="./images/warehouse.jpg" 
              alt="Estoque Industrial e Materiais de Qualidade - Aço Sales" 
              loading="lazy"
            />
          </div>
          <h3 className="quality-feature-title">Materiais de Qualidade</h3>
          <p className="quality-feature-desc">
            Aço certificado pelas maiores usinas do Brasil (Gerdau, Usiminas, ArcelorMittal) com garantia de rastreabilidade e resistência estrutural.
          </p>
        </div>

        {/* Bloco 2: Acabamento Preciso */}
        <div className="quality-feature-block">
          <div className="quality-feature-img-wrap">
            <img 
              src="./images/soldador_oficina.jpg" 
              alt="Acabamento Preciso e Solda Especializada - Aço Sales" 
              loading="lazy"
            />
          </div>
          <h3 className="quality-feature-title">Acabamento Preciso</h3>
          <p className="quality-feature-desc">
            Corte computadorizado, dobras com precisão milimétrica e equipe de serralheiros altamente capacitada para entregar sua peça pronta para montagem.
          </p>
        </div>
      </div>
    </section>
  );
}
