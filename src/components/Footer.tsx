import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2025 Contabilidade Pro. Todos os direitos reservados.</p>
        <p className="mt-2">
          Entre em contato:{' '}
          <a href="mailto:contato@contabilidadepro.com" className="underline">
            contato@contabilidadepro.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
