import React from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
import { companyData } from '../data/reviews';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem }) {
  if (!isOpen) return null;

  const formatMoney = (val) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const totalEstimated = cartItems.reduce((acc, item) => {
    return acc + (item.startingPrice * item.quantity);
  }, 0);

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    let itemsList = cartItems.map((item, idx) => {
      const opt = item.selectedOption ? ` (${item.selectedOption})` : '';
      const note = item.customNote ? ` [Obs: ${item.customNote}]` : '';
      return `${idx + 1}. *${item.quantity}x ${item.title}*${opt}${note} - ${formatMoney(item.startingPrice * item.quantity)}`;
    }).join('\n');

    const message = 
`Olá equipe Aço Sales! Gostaria de formalizar uma cotação dos seguintes materiais pelo site:

${itemsList}

💰 *Total Estimado:* ${formatMoney(totalEstimated)}

Gostaria de verificar a disponibilidade para pronta entrega e o frete para a minha região. Obrigado!`;

    window.open(`https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>
        {/* Cabeçalho */}
        <div className="cart-drawer-header">
          <h3>
            <ShoppingBag size={20} />
            Sua Cotação ({cartItems.reduce((a, b) => a + b.quantity, 0)} itens)
          </h3>
          <button 
            type="button" 
            onClick={onClose} 
            style={{ color: '#FFFFFF', padding: '4px' }}
            aria-label="Fechar gaveta"
          >
            <X size={22} />
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 16px', color: '#64748B' }}>
              <ShoppingBag size={48} style={{ margin: '0 auto 12px', strokeWidth: 1.5, color: '#CBD5E1' }} />
              <h4 style={{ color: 'var(--aco-navy)', marginBottom: '6px' }}>Sua cotação está vazia</h4>
              <p style={{ fontSize: '13px' }}>Explore nosso catálogo de tubos, vigas, telhas e chapas sob medida.</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item-row">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.title}</div>
                  {item.selectedOption && (
                    <div className="cart-item-spec">Tipo: {item.selectedOption}</div>
                  )}
                  {item.customNote && (
                    <div className="cart-item-spec">Obs: {item.customNote}</div>
                  )}
                  <div className="cart-item-price">
                    {formatMoney(item.startingPrice * item.quantity)}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => onRemoveItem(index)}
                    style={{ color: '#94A3B8', padding: '2px' }}
                    title="Remover item"
                  >
                    <Trash2 size={16} />
                  </button>

                  <div className="cart-qty-ctrl">
                    <button 
                      type="button" 
                      className="cart-qty-btn"
                      onClick={() => onUpdateQty(index, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="cart-qty-val">{item.quantity}</span>
                    <button 
                      type="button" 
                      className="cart-qty-btn"
                      onClick={() => onUpdateQty(index, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé com Total e Botão WhatsApp */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-total-row">
              <span>Total Estimado:</span>
              <span className="cart-total-price">{formatMoney(totalEstimated)}</span>
            </div>
            <p style={{ fontSize: '11px', color: '#64748B', marginBottom: '12px', textAlign: 'center' }}>
              *Valores sujeitos a confirmação de peso e frete pela fábrica
            </p>
            <button
              type="button"
              className="btn-finalize-whatsapp"
              onClick={handleCheckoutWhatsApp}
            >
              <MessageCircle size={20} />
              Enviar Cotação pelo WhatsApp
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
