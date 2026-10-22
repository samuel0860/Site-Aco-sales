import React from 'react';
import { Star, Eye, Plus } from 'lucide-react';

export default function ProductCard({ product, onSelect, onQuickAdd }) {
  const formatMoney = (val) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <article className="product-card">
      {/* Imagem do Produto */}
      <div className="product-thumb-container" onClick={() => onSelect(product)} style={{ cursor: 'pointer' }}>
        <img 
          src={product.image} 
          alt={product.title} 
          loading="lazy"
        />
        {product.badge && (
          <span className="product-badge-flag">
            {product.badge}
          </span>
        )}
      </div>

      {/* Detalhes do Produto */}
      <div className="product-details">
        <h3 className="product-title" onClick={() => onSelect(product)} style={{ cursor: 'pointer' }}>
          {product.title}
        </h3>

        {/* 5 Estrelas Douradas */}
        <div className="product-stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} />
          ))}
        </div>

        {/* Preço e Parcelamento */}
        <div className="product-price-label">A partir de</div>
        <div className="product-price-main">
          {formatMoney(product.startingPrice)}
        </div>
        <div className="product-installment">
          {product.installment}
        </div>

        {/* Botão de Ação */}
        <button 
          type="button" 
          className="btn-card-action"
          onClick={() => onSelect(product)}
        >
          <Eye size={14} />
          Ver Detalhes
        </button>
      </div>
    </article>
  );
}
