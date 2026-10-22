import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { categories } from '../data/products';

export default function ProductGrid({ products, onSelectProduct, onQuickAdd }) {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredProducts = activeCategory === 'todos'
    ? products
    : products.filter(p => p.category === activeCategory);

  const getCategoryTitle = () => {
    if (activeCategory === 'todos') return 'Mais Vendidos';
    const found = categories.find(c => c.id === activeCategory);
    return found ? found.label : 'Produtos em Destaque';
  };

  return (
    <section id="catalogo-produtos" style={{ scrollMarginTop: '80px' }}>
      {/* Filtro em Pílulas (Pills) */}
      <div className="categories-filter-wrapper">
        <div className="container">
          <div className="category-pills-row">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Título da Seção (Inspirado no print 2 e 3) */}
      <div className="section-header">
        <h2 className="section-title">{getCategoryTitle()}</h2>
        <p className="section-subtitle">
          {filteredProducts.length} itens disponíveis para entrega imediata em Ponte Nova e região
        </p>
      </div>

      {/* Grid de 2 colunas mobile / 4 colunas desktop */}
      <div className="container">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={onSelectProduct}
              onQuickAdd={onQuickAdd}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
