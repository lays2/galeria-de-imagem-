# 📸 Galeria de Fotos

Este projeto consiste em uma **Galeria de Fotos interativa**, desenvolvida com **React + TypeScript** e estilizada com **Tailwind CSS**.  
A aplicação permite visualizar fotos em formato de grid e realizar **pesquisa em tempo real** pelo nome das imagens.

---

## 🧾 Descrição do Projeto

A Galeria de Fotos foi criada com o objetivo de aplicar conceitos de:
- Componentização com React
- Filtragem de dados em tempo real
- Layout responsivo em grid
- Boas práticas de organização de código

O usuário pode pesquisar fotos pelo nome utilizando uma barra de busca, e as imagens são filtradas automaticamente conforme o texto digitado.

---

## ✨ Funcionalidades

- 📂 Exibição de no mínimo 10 fotos em layout **grid responsivo**
- 🔍 **Busca em tempo real** baseada no nome da foto
- 🖱️ Efeito visual ao passar o mouse sobre as imagens (hover)
- ⚠️ Mensagem informativa quando nenhuma foto é encontrada
- 🧩 Arquitetura baseada em **componentes reutilizáveis**
- 📱 Layout adaptável para diferentes tamanhos de tela

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **HTML5**
- **Vite** (para ambiente de desenvolvimento)
- **API pública de imagens (Picsum Photos)**

---

## 📁 Estrutura do Projeto

## 📁 Estrutura do Projeto

```text
GALERIA-DE-FOTOS-MOD...
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PhotoCard.tsx
│   ├── PhotoGrid.tsx
│   └── SearchBar.tsx
├── .env.local
├── .gitignore
├── App.tsx
├── constants.ts
├── index.html
├── index.tsx
├── metadata.json
├── package.json
├── README.md
├── tsconfig.json
├── types.ts
└── vite.config.

## 🚀 Como executar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/lays2/galeria-de-imagem-.git

Instale as dependências:
npm install
Inicie o servidor de desenvolvimento:
npm run dev