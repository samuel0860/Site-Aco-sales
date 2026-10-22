import React from 'react';
import { Truck, ShieldCheck, Flame } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <span className="badge">
        <Flame size={12} style={{ display: 'inline', marginRight: 3, verticalAlign: '-1px' }} />
        OFERTAS DE FÁBRICA
      </span>
      <span>
        ENTREGA RÁPIDA EM PONTE NOVA E REGIÃO • PARCELAMENTO EM ATÉ 12X
      </span>
    </div>
  );
}
