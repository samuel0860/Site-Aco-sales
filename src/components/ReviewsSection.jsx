import React from 'react';
import { Star, CheckCircle, SlidersHorizontal } from 'lucide-react';
import { reviews } from '../data/reviews';

export default function ReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="container">
        {/* Cabeçalho de Avaliações estilo Decorvibes */}
        <div className="reviews-header-summary">
          <div className="reviews-stars-summary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#EAB308" color="#EAB308" />
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="reviews-count-text">904 Avaliações de Clientes</span>
            <SlidersHorizontal size={16} color="var(--aco-slate)" />
          </div>
        </div>

        {/* Grid de Depoimentos */}
        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              {/* Imagem do Projeto do Cliente */}
              <img 
                src={rev.productImage} 
                alt={`Projeto de ${rev.author}`} 
                className="review-card-img"
                loading="lazy"
              />

              {/* Corpo da Avaliação */}
              <div className="review-card-body">
                <div className="review-author-name">
                  {rev.author}
                </div>
                
                <div className="review-verified-badge">
                  <CheckCircle size={12} fill="#10B981" color="#FFFFFF" />
                  <span>Verificado</span>
                </div>

                {/* Estrelas */}
                <div className="review-stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="#EAB308" color="#EAB308" />
                  ))}
                </div>

                {/* Depoimento */}
                <p className="review-text">
                  "{rev.text}"
                </p>

                {/* Tag do Produto Comprado */}
                <div className="review-product-tag">
                  <img src={rev.productImage} alt={rev.productName} />
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {rev.productName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
