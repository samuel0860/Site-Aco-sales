import React from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Navbar({ onOpenMenu, onOpenSearch, onOpenCart, cartCount }) {
  return (
    <header className="navbar-header">
      <div className="container">
        <div className="navbar-inner">
          {/* Menu Hambúrguer */}
          <button 
            type="button" 
            className="nav-icon-btn" 
            onClick={onOpenMenu}
            aria-label="Abrir menu de navegação"
          >
            <Menu size={24} />
          </button>

          {/* Logo Centralizado Oficial */}
          <a href="#" className="navbar-logo-link" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="./images/logo.webp" 
              alt="Aço Sales - Ferro e Aço em Ponte Nova" 
              className="navbar-logo-img"
              onError={(e) => {
                // Fallback para CDN oficial se arquivo local demorar
                e.currentTarget.src = "https://acosales.com.br/wp-content/uploads/2024/09/logo.webp";
              }}
            />
          </a>

          {/* Ações Direitas: Busca e Carrinho/Cotação */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button 
              type="button" 
              className="nav-icon-btn" 
              onClick={onOpenSearch}
              aria-label="Pesquisar produtos"
            >
              <Search size={22} />
            </button>

            <button 
              type="button" 
              className="nav-icon-btn" 
              onClick={onOpenCart}
              aria-label="Ver lista de cotação"
            >
              <ShoppingBag size={22} />
              {cartCount > 0 && (
                <span className="nav-cart-badge">{cartCount}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
