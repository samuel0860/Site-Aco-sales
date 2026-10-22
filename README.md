# 🔩 Site Aço Sales

> **Site oficial de vendas online do Grupo Aço Sales**  
> Soluções em Ferro e Aço — Ponte Nova, MG

---

## 🚀 Tecnologias

| Tecnologia | Versão | Função |
|:---|:---|:---|
| **React** | 18.3 | Framework de UI |
| **Vite** | 6.4 | Build tool e dev server |
| **Lucide React** | latest | Ícones modernos |
| **Canvas Confetti** | 1.9 | Animação de confirmação de pedido |
| **Vanilla CSS** | — | Design System completo |

---

## 📂 Estrutura do Projeto

```
Site Aco sales/
├── public/
│   └── images/           # Assets (logo, banner, produtos)
│       ├── logo.webp
│       ├── banner_bg.webp
│       ├── favicon.webp
│       ├── warehouse.jpg
│       ├── tubos_metalon.jpg
│       ├── telha_galvalume.jpg
│       ├── viga_estrutural.jpg
│       ├── placa_aco_laser.jpg
│       ├── soldador_oficina.jpg
│       └── ferro_armado.jpg
├── src/
│   ├── components/
│   │   ├── AnnouncementBar.jsx  # Barra de promoções no topo
│   │   ├── Navbar.jsx           # Cabeçalho fixo com carrinho
│   │   ├── Hero.jsx             # Seção principal (CTA)
│   │   ├── ProductGrid.jsx      # Grid + filtros por categoria
│   │   ├── ProductCard.jsx      # Card de produto individual
│   │   ├── ProductModal.jsx     # Modal de detalhe + orçamento
│   │   ├── QualityProcess.jsx   # Materiais e acabamento
│   │   ├── ReviewsSection.jsx   # Depoimentos de clientes
│   │   ├── Footer.jsx           # Rodapé com unidades/contato
│   │   ├── CartDrawer.jsx       # Gaveta de cotação
│   │   ├── MenuDrawer.jsx       # Gaveta de navegação
│   │   ├── FloatingWidgets.jsx  # WhatsApp flutuante + Story
│   │   └── StoryModal.jsx       # Modal de bastidores
│   ├── data/
│   │   ├── products.js          # Catálogo de produtos
│   │   └── reviews.js           # Avaliações e dados da empresa
│   ├── App.jsx                  # Componente raiz
│   ├── main.jsx                 # Ponto de entrada React
│   └── index.css                # Design System (variáveis, estilos)
├── index.html
├── vite.config.js
└── package.json
```

---

## 🎨 Paleta de Cores Oficial

```css
--aco-red:   #DA261F  /* Vermelho Aço Sales (Principal)  */
--aco-blue:  #1188C4  /* Azul Industrial (Secundário)    */
--aco-navy:  #1C3240  /* Grafite Industrial (Cabeçalhos) */
--aco-yellow:#F4E300  /* Amarelo Destaque (Badges)       */
```

---

## ⚡ Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/site-aco-sales.git

# 2. Acesse a pasta
cd site-aco-sales

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev

# Acesse em: http://localhost:5173/
```

---

## 📦 Build para Produção (GitHub Pages)

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `/dist`. Configure o GitHub Pages para servir a partir da branch `gh-pages` ou use o GitHub Actions com o deploy automático.

---

## 🏢 Informações da Empresa

| Campo | Valor |
|:---|:---|
| **Razão Social** | Grupo Aço Sales — Soluções em Ferro e Aço |
| **CNPJ** | 19.824.512/0001-90 |
| **Cidade** | Ponte Nova / MG |
| **Telefone** | (31) 3819-2300 |
| **Loja Beira Rio** | (31) 3819-2323 |
| **Site Oficial** | https://acosales.com.br |

---

*Desenvolvido com React + Vite para o Grupo Aço Sales — Ponte Nova, MG.*
