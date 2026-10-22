import React, { useState } from 'react';
import { X, Star, Check, ShoppingBag, MessageCircle, Ruler, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { companyData } from '../data/reviews';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : '');
  const [customNote, setCustomNote] = useState('');
  const [addedToast, setAddedToast] = useState(false);

  const formatMoney = (val) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const currentTotal = product.startingPrice * quantity;

  const handleAdd = () => {
    // Dispara confetes de comemoração
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // Confetti opcional
    }

    onAddToCart({
      ...product,
      selectedOption,
      customNote,
      quantity,
      itemTotal: currentTotal
    });

    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse no produto *${product.title}*:\n` +
      `- Quantidade: ${quantity}\n` +
      `- Acabamento: ${selectedOption || 'Padrão'}\n` +
      (customNote ? `- Observação/Medida: ${customNote}\n` : '') +
      `- Valor Estimado: ${formatMoney(currentTotal)}\n\n` +
      `Poderiam me informar prazo de entrega para minha região?`
    );
    window.open(`https://wa.me/${companyData.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        {/* Imagem do Produto no Topo do Modal */}
        <div style={{ position: 'relative' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: '100%', height: '240px', objectFit: 'cover' }}
          />
          <button 
            type="button" 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'rgba(0,0,0,0.65)',
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
          {product.badge && (
            <span style={{
              position: 'absolute',
              bottom: '12px',
              left: '16px',
              backgroundColor: 'var(--aco-red)',
              color: '#FFFFFF',
              fontSize: '11px',
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: '4px',
              textTransform: 'uppercase'
            }}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Corpo do Modal */}
        <div style={{ padding: '20px' }}>
          <h2 style={{ fontSize: '20px', color: 'var(--aco-navy)', marginBottom: '4px' }}>
            {product.title}
          </h2>

          {/* Avaliações */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#EAB308" color="#EAB308" />
              ))}
            </div>
            <span style={{ fontSize: '13px', color: 'var(--aco-slate)', fontWeight: 600 }}>
              {product.rating} ({product.reviewCount} avaliações)
            </span>
          </div>

          {/* Preço Unitário e Total */}
          <div style={{
            background: 'var(--aco-bg-light)',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #E2E8F0',
            marginBottom: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>A partir de</div>
              <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--aco-navy)' }}>
                {formatMoney(currentTotal)}
              </div>
              <div style={{ fontSize: '11px', color: '#475569' }}>
                {product.installment}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#10B981', background: '#ECFDF5', padding: '3px 8px', borderRadius: '4px' }}>
                5% OFF no PIX
              </span>
            </div>
          </div>

          {/* Descrição */}
          <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
            {product.description}
          </p>

          {/* Opções de Acabamento / Tipo */}
          {product.options && product.options.length > 0 && (
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--aco-navy)', marginBottom: '8px' }}>
                Selecione o Tipo / Acabamento:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {product.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelectedOption(opt)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 600,
                      border: selectedOption === opt ? '2px solid var(--aco-red)' : '1px solid #CBD5E1',
                      background: selectedOption === opt ? '#FEF2F2' : '#FFFFFF',
                      color: selectedOption === opt ? 'var(--aco-red)' : 'var(--aco-navy)',
                      cursor: 'pointer'
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Campo para Medidas Personalizadas ou Frase */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: 'var(--aco-navy)', marginBottom: '6px' }}>
              Medidas Específicas ou Gravação (Opcional):
            </label>
            <input 
              type="text" 
              placeholder="Ex: 3 barras de 4 metros, ou nome para corte a laser"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '6px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                fontFamily: 'inherit',
                outline: 'none'
              }}
            />
          </div>

          {/* Ficha Técnica / Especificações */}
          {product.specifications && (
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--aco-navy)', marginBottom: '6px' }}>
                Especificações Técnicas:
              </div>
              <div style={{ background: '#F8FAFC', borderRadius: '6px', padding: '8px 12px', border: '1px solid #E2E8F0', fontSize: '12px' }}>
                {product.specifications.map((spec, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: idx < product.specifications.length - 1 ? '1px dashed #E2E8F0' : 'none' }}>
                    <span style={{ color: '#64748B' }}>{spec.label}:</span>
                    <strong style={{ color: 'var(--aco-navy)' }}>{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Controles de Quantidade e Ações */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #CBD5E1', borderRadius: '8px', overflow: 'hidden' }}>
              <button 
                type="button" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{ width: '36px', height: '38px', background: '#F8FAFC', fontSize: '16px', fontWeight: 700 }}
              >
                -
              </button>
              <span style={{ width: '38px', textAlign: 'center', fontSize: '14px', fontWeight: 700 }}>
                {quantity}
              </span>
              <button 
                type="button" 
                onClick={() => setQuantity(quantity + 1)}
                style={{ width: '36px', height: '38px', background: '#F8FAFC', fontSize: '16px', fontWeight: 700 }}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="btn-cta-primary"
              onClick={handleAdd}
              style={{ flex: 1, padding: '12px', fontSize: '13px', borderRadius: '8px' }}
            >
              <ShoppingBag size={16} />
              {addedToast ? 'Adicionado com Sucesso!' : 'Adicionar ao Orçamento'}
            </button>
          </div>

          {/* Botão de WhatsApp Imediato */}
          <button
            type="button"
            onClick={handleWhatsAppInstant}
            style={{
              width: '100%',
              background: '#FFFFFF',
              color: 'var(--aco-whatsapp)',
              border: '1.5px solid var(--aco-whatsapp)',
              padding: '11px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <MessageCircle size={16} />
            Cotar este Item Direto no WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
