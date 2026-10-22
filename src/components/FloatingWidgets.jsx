import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { companyData } from '../data/reviews';

export default function FloatingWidgets({ onOpenStory }) {
  const [showStoryBubble, setShowStoryBubble] = useState(true);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('Olá! Vim pelo site da Aço Sales e gostaria de solicitar um orçamento.');
    window.open(`https://wa.me/${companyData.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Story / Workshop Preview - Canto Inferior Esquerdo */}
      {showStoryBubble && (
        <div className="floating-story-widget">
          <div 
            className="floating-story-circle" 
            onClick={onOpenStory}
            title="Ver bastidores da fábrica"
          >
            <img 
              src="./images/soldador_oficina.jpg" 
              alt="Bastidores Aço Sales" 
            />
            <button 
              type="button" 
              className="floating-story-close"
              onClick={(e) => {
                e.stopPropagation();
                setShowStoryBubble(false);
              }}
              title="Fechar miniatura"
            >
              <X size={12} />
            </button>
          </div>
        </div>
      )}

      {/* Botão Flutuante do WhatsApp - Canto Inferior Direito */}
      <div className="floating-whatsapp-widget">
        <button 
          type="button" 
          className="btn-whatsapp-floating"
          onClick={handleWhatsAppClick}
          aria-label="Falar no WhatsApp da Aço Sales"
          title="Falar no WhatsApp"
        >
          <MessageCircle size={32} />
        </button>
      </div>
    </>
  );
}
