export const categories = [
  { id: 'todos', label: 'TODOS' },
  { id: 'tubos', label: 'TUBOS & METALON' },
  { id: 'telhas', label: 'TELHAS GALVALUME' },
  { id: 'vigas', label: 'VIGAS & PERFIS' },
  { id: 'chapas', label: 'CHAPAS & CORTES' },
  { id: 'ferragem', label: 'FERRO ARMADO' },
  { id: 'personalizados', label: 'PLACAS PERSONALIZADAS' }
];

export const products = [
  {
    id: 1,
    title: 'Placa de Aço Sobrenome a Laser',
    category: 'personalizados',
    badge: 'Mais Vendido',
    rating: 5.0,
    reviewCount: 342,
    startingPrice: 249.90,
    installment: '12x de R$ 20,82 sem juros',
    image: './images/placa_aco_laser.jpg',
    description: 'Placa comemorativa e decorativa cortada em CNC Laser em chapa de aço carbono de 2.0mm com pintura eletrostática preta fosca e iluminação opcional.',
    specifications: [
      { label: 'Material', value: 'Aço Carbono SAE 1020' },
      { label: 'Espessura', value: '2.0 mm (Chapa 14)' },
      { label: 'Acabamento', value: 'Pintura Eletrostática a Pó' },
      { label: 'Dimensões', value: '60cm x 25cm (sob medida)' }
    ],
    options: ['Preto Fosco', 'Aço Corten', 'Inox Escovado']
  },
  {
    id: 2,
    title: 'Tubo Metalon Quadrado & Retangular',
    category: 'tubos',
    badge: 'Pronta Entrega',
    rating: 4.9,
    reviewCount: 420,
    startingPrice: 48.90,
    installment: '12x de R$ 4,07 sem juros',
    image: './images/tubos_metalon.jpg',
    description: 'Tubos industriais e estruturais com costura, alta precisão geométrica e excelente soldabilidade para serralheria e estruturas metálicas.',
    specifications: [
      { label: 'Padrão', value: 'NBR 6591 / NBR 8261' },
      { label: 'Comprimento', value: 'Barras padrão de 6 metros' },
      { label: 'Bitolas', value: '20x20 até 100x100mm' },
      { label: 'Tratamento', value: 'Preto ou Galvanizado a fogo' }
    ],
    options: ['Galvanizado', 'Preto Industrial']
  },
  {
    id: 3,
    title: 'Telha Trapezoidal Galvalume TP40',
    category: 'telhas',
    badge: 'Oferta Especial',
    rating: 5.0,
    reviewCount: 289,
    startingPrice: 42.50,
    installment: '12x de R$ 3,54 sem juros',
    image: './images/telha_galvalume.jpg',
    description: 'Telhas galvalume com liga de alumínio-zinco que garantem até 4x mais durabilidade que a galvanização tradicional contra corrosão.',
    specifications: [
      { label: 'Espessura', value: '0,43mm / 0,50mm' },
      { label: 'Largura Útil', value: '980 mm' },
      { label: 'Comprimento', value: 'Corte contínuo sob medida até 12m' },
      { label: 'Garantia', value: '10 anos contra corrosão natural' }
    ],
    options: ['Natural Galvalume', 'Pintura Termoacústica Sanduíche']
  },
  {
    id: 4,
    title: 'Viga I & W Laminada Estrutural',
    category: 'vigas',
    badge: 'Alta Resistência',
    rating: 5.0,
    reviewCount: 198,
    startingPrice: 189.00,
    installment: '12x de R$ 15,75 sem juros',
    image: './images/viga_estrutural.jpg',
    description: 'Vigas laminadas padrão ASTM A36 e ASTM A572 Grau 50 para pilares, mezaninos, pontes rolantes e edifícios em geral.',
    specifications: [
      { label: 'Norma', value: 'ASTM A572 Grau 50' },
      { label: 'Comprimento', value: '6m e 12m (cortamos na medida)' },
      { label: 'Aplicações', value: 'Galpões, fundações, mezaninos' }
    ],
    options: ['Viga W 150', 'Viga W 200', 'Viga I Laminada']
  },
  {
    id: 5,
    title: 'Coluna e Viga de Ferro Armado CA-50',
    category: 'ferragem',
    badge: 'Sob Medida',
    rating: 4.9,
    reviewCount: 310,
    startingPrice: 68.00,
    installment: '12x de R$ 5,66 sem juros',
    image: './images/ferro_armado.jpg',
    description: 'Ferragem armada pronta para concretagem. Colunas, vigas e sapatas cortadas, dobradas e amarradas de acordo com o projeto de cálculo estrutural.',
    specifications: [
      { label: 'Aço', value: 'Vergalhão CA-50 Gerdau/Arcelor' },
      { label: 'Estribo', value: 'Aço CA-60 espaçado a cada 15cm ou 20cm' },
      { label: 'Economia', value: 'Zero perda de pontas na obra' }
    ],
    options: ['Coluna 7x14', 'Coluna 7x20', 'Sob Medida do Projeto']
  },
  {
    id: 6,
    title: 'Chapa de Aço Cortada CNC Plasma',
    category: 'chapas',
    badge: 'Corte Preciso',
    rating: 5.0,
    reviewCount: 167,
    startingPrice: 85.00,
    installment: '12x de R$ 7,08 sem juros',
    image: './images/soldador_oficina.jpg',
    description: 'Corte e dobra computadorizados de chapas finas e grossas. Furação, chanfros e desenhos técnicos prontos para montagem imediata.',
    specifications: [
      { label: 'Espessuras', value: 'De 0.8mm até 25.4mm (1 pol)' },
      { label: 'Mesa de Corte', value: 'Até 3000 x 1500 mm' },
      { label: 'Material', value: 'Aço Carbono, XAR e Inox' }
    ],
    options: ['Corte a Plasma HD', 'Dobra Hidráulica']
  },
  {
    id: 7,
    title: 'Perfil U Simples e Enrijecido',
    category: 'vigas',
    badge: 'Estrutural',
    rating: 4.8,
    reviewCount: 154,
    startingPrice: 59.90,
    installment: '12x de R$ 4,99 sem juros',
    image: './images/tubos_metalon.jpg',
    description: 'Perfis conformados a frio para terças de galpões, esquadrias pesadas, portões e travamentos industriais.',
    specifications: [
      { label: 'Norma', value: 'NBR 6355' },
      { label: 'Espessuras', value: 'Chapa 14 (1.95mm) até Chapa 1/4' },
      { label: 'Barra', value: '6 metros' }
    ],
    options: ['U Simples', 'U Enrijecido']
  },
  {
    id: 8,
    title: 'Placa Comercial com Brasão e Logo',
    category: 'personalizados',
    badge: 'Exclusivo',
    rating: 5.0,
    reviewCount: 228,
    startingPrice: 320.00,
    installment: '12x de R$ 26,66 sem juros',
    image: './images/placa_aco_laser.jpg',
    description: 'Painéis corporativos e para fachadas cortados em alta definição. Gravação de logotipos, brasões de fazendas e nomes de sítios.',
    specifications: [
      { label: 'Acabamento', value: 'Pintura Epóxi Industrial' },
      { label: 'Personalização', value: '100% vetorizado' }
    ],
    options: ['Fundo Iluminado LED', 'Fixação Invisível']
  }
];
