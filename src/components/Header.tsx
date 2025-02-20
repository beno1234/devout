/* eslint-disable @next/next/no-html-link-for-pages */
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import devout from '../../public/devout-logo.png';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="text-white p-4 absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
          <Image src={devout} alt="Logo" className="w-32 md:w-36 lg:w-24" />
          </Link>
          
          {/* Menu de Navegação - Desktop */}
          <div className="hidden md:flex space-x-8 text-[#BA9F3C] font-semibold items-center">
            <a href="https://www.cavalcanteproenca.com.br/" target='_blank' className="hover:text-gray-300 transition-all duration-300">Júridico</a>
            <a href="/servicos" className="hover:text-gray-300 transition-all duration-300">Serviços</a>
            <a href="/sobre" className="hover:text-gray-300 transition-all duration-300">Sobre Nós</a>
            <a href="/cursos" className="hover:text-gray-300 transition-all duration-300">Cursos</a>
            {/* <a href="#contact" className="hover:text-gray-300 transition-all duration-300">Livros</a> */}
            <a
              href="https://api.whatsapp.com/send?phone=5511911227079&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20site!"
              className="hover:text-gray-300 border rounded-full px-6 py-2 transition-all duration-300"
            >
              Quero um orçamento
            </a>
          </div>
          
          {/* Menu de Hambúrguer - Mobile */}
          <button
            className="md:hidden text-[#BA9F3C] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu de Hambúrguer - Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1E1E1E] text-white absolute top-0 left-0 w-full h-screen flex flex-col items-center space-y-6 pt-10">
            <button
              className="absolute top-6 right-6 text-[#BA9F3C] text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a href="#services" className="text-[#BA9F3C] hover:text-gray-300 text-2xl font-semibold">Júridico</a>
            <a href="#about" className="text-[#BA9F3C] hover:text-gray-300 text-2xl font-semibold">Serviços</a>
            <a href="/sobre" className="text-[#BA9F3C] hover:text-gray-300 text-2xl font-semibold">Sobre Nós</a>
            <a href="/cursos" className="text-[#BA9F3C] hover:text-gray-300 text-2xl font-semibold">Cursos</a>
            <a href="#contact" className="text-[#BA9F3C] hover:text-gray-300 text-2xl font-semibold">Livros</a>
            <a
              href="#contact"
              className="text-[#BA9F3C] border rounded-full px-8 py-3 text-xl font-semibold transition-all duration-300"
            >
              Quero um orçamento
            </a>
          </div>
        )}
      </header>

      {/* Seção Principal */}
      <section className="bg-fundo bg-no-repeat bg-cover text-white z-10 h-screen flex items-center justify-center text-left w-full">
        <div className="text-center px-6 md:px-12">
          <h2 className="text-5xl font-extrabold text-[#BA9F3C] sm:text-6xl md:text-5xl leading-tight">
            O nosso compromisso é <br />
            com o seu sucesso
          </h2>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-xl font-light leading-relaxed">
            Ética, confidencialidade, responsabilidade, qualidade e segurança <br /> nas informações
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;
