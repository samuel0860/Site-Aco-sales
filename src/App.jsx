import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import QualityProcess from './components/QualityProcess';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import MenuDrawer from './components/MenuDrawer';
import StoryModal from './components/StoryModal';
import { products } from './data/products';
import './index.css';

export default function App() {
  // Estados dos modais e gavetas
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Estado do carrinho de cotação
  const [cartItems, setCartItems] = useState([]);

  // Abrir modal de detalhe do produto
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  // Adicionar item ao carrinho/cotação
  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      // Se já existe o mesmo produto com mesma opção, aumenta a qtd
      const existingIdx = prev.findIndex(
        (p) => p.id === item.id && p.selectedOption === item.selectedOption
      );
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + item.quantity,
        };
        return updated;
      }
      return [...prev, item];
    });
    setSelectedProduct(null);
    // Abrir a gaveta de cotação após adicionar
    setTimeout(() => setIsCartOpen(true), 300);
  };

  // Atualizar quantidade de um item
  const handleUpdateQty = (index, newQty) => {
    if (newQty < 1) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], quantity: newQty };
      return updated;
    });
  };

  // Remover item do carrinho
  const handleRemoveItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Scroll suave para o catálogo ao clicar no CTA do Hero
  const handleHeroCta = () => {
    const el = document.getElementById('catalogo-produtos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Barra de Anúncios */}
      <AnnouncementBar />

      {/* Navbar Sticky */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => {
          const el = document.getElementById('catalogo-produtos');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Conteúdo Principal */}
      <main>
        {/* Hero – Print 1 */}
        <Hero onCtaClick={handleHeroCta} />

        {/* Grid de Produtos com Filtros – Prints 2 e 3 */}
        <ProductGrid
          products={products}
          onSelectProduct={handleSelectProduct}
          onQuickAdd={handleAddToCart}
        />

        {/* Qualidade & Processo – Print 4 */}
        <QualityProcess />

        {/* Avaliações de Clientes – Print 5 */}
        <section id="avaliacoes" style={{ scrollMarginTop: '80px' }}>
          <ReviewsSection />
        </section>
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Widgets Flutuantes (Story + WhatsApp) */}
      <FloatingWidgets onOpenStory={() => setIsStoryOpen(true)} />

      {/* Modais e Gavetas */}
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onQuoteClick={handleHeroCta}
      />
    </>
  );
}
