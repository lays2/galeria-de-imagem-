
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 py-10 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-sm md:text-base">
          © {currentYear + 2} Galeria de Fotos. Todos os direitos reservados.
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-gray-400 text-xs">
          <span>Av. Ipiranga, 6681 – Prédio 96B – Sala 101</span>
          <span>CEP 90619-900 | Porto Alegre, RS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
