import React from 'react';
import Image from 'next/image';
import devout from '../../public/devout-logo.png';

const Header = () => {
  return (
    <div>
      <header className="text-white p-3 absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image src={devout} alt="Logo" className="w-28" />
          <nav className="space-x-6 text-[#BA9F3C]">
            <a href="#services" className="hover:text-gray-300">
              Júridico
            </a>
            <a href="#about" className="hover:text-gray-300">
              Serviços
            </a>
            <a href="/sobre" className="hover:text-gray-300">
              Sobre Nós
            </a>
            <a href="/cursos" className="hover:text-gray-300">
              Cursos
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Livros
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 border rounded-full p-2"
            >
              Quero um orçamento
            </a>
          </nav>
        </div>
      </header>
      <section className="bg-fundo bg-no-repeat bg-cover text-white z-10 h-screen flex items-center justify-center text-left w-full">
        <div>
          <h2 className="text-4xl font-extrabold text-[#BA9F3C]">
            O nosso compromisso é <br />
            com o seu sucesso
          </h2>
          <p className="mt-4 text-xl">
            Ética, confidencialidade, responsabilidade, qualidade e segurança{' '}
            <br /> nas informações
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;
