
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-8 mb-8 sticky top-0 z-50 shadow-sm">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 tracking-tight">
        Galeria de Fotos
      </h1>
    </header>
  );
};

export default Header;
