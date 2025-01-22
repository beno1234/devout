'use client';
import Head from 'next/head';
import Image from 'next/image';
import devout from '../../public/devout-logo.png';
import section1 from '../../public/imagem-home1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

interface Card {
  id: number;
  title: string;
  pontos: string;
  description: string;
}

export default function Home() {
  const cards: Card[] = [
    {
      id: 1,
      title: 'Card 1',
      pontos: '8 pontos',
      description: 'Descrição do Card 1',
    },
    {
      id: 2,
      title: 'Card 2',
      pontos: '8 pontos',
      description: 'Descrição do Card 2',
    },
    {
      id: 3,
      title: 'Card 3',
      pontos: '8 pontos',
      description: 'Descrição do Card 3',
    },
    {
      id: 4,
      title: 'Card 4',
      pontos: '8 pontos',
      description: 'Descrição do Card 4',
    },
  ];
  return (
    <div>
      <Head>
        <title>Contabilidade - Home</title>
        <meta
          name="description"
          content="Serviços de contabilidade confiáveis"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-white p-3 absolute top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image src={devout} alt="logo" className="w-28" />
          <nav className="space-x-6 text-[#BA9F3C]">
            <a href="#services" className="hover:text-gray-300">
              Júridico
            </a>
            <a href="#about" className="hover:text-gray-300">
              Serviços
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Sobre Nós
            </a>
            <a href="#contact" className="hover:text-gray-300">
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

      <section className="bg-fundo  text-white z-10 h-screen flex items-center justify-center text-left">
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

      <section id="services" className="py-16  mx-auto container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-4">
            <h2 className="text-4xl font-bold text-gray-800 uppercase leading-tight">
              Bem-vindo ao <br />
              <span className="text-[#BA9F3C]">Nosso Site</span>
            </h2>
            <p className="text-gray-400">
              A <strong>Devout Auditoria e Contabilidade Ltda.</strong> oferece
              aos seus clientes um conjunto de prestação de serviços, que a
              diferencia no mercado. Com as mais modernas técnicas de
              administração empresarial, coloca à disposição de seus clientes
              serviços da mais alta qualidade, que agregam valores...
            </p>
            <button className="w-full bg-[#141e28] text-white rounded-md text-left font-serif text-xl pl-10 p-2">
              Saiba mais
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src={section1}
              alt="Atender bem, atender sempre"
              className="w-[32vw] h-[40vh]"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-9">
            Sobre Nós
          </h2>
        </div>

        <div className="bg-parallax bg-cover bg-fixed bg-center p-20">
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faHandshake}
                className="text-[#141e28] w-20 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-[#BA9F3C]">
                Serviços especializados
              </h3>
              <p className="mt-4 text-gray-600 mb-10">
                Oferecemos serviços especializados de consultoria e auditoria
                nas áreas contábil, tributária, trabalhista e societária e
                prestamos serviços como:
              </p>
              <ul className="text-gray-600">
                <li>Planejamento Estratégico;</li>

                <li> Desenvolvimento Organizacional;</li>

                <li> Gestão Financeira;</li>

                <li> Saneamento Financeiro e Tributário;</li>

                <li> Planejamento Tributário;</li>

                <li> Auditoria Financeira e Contábil.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faEdit}
                className="text-[#141e28] w-20 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-[#BA9F3C]">
                Fiscal e Tributário
              </h3>
              <p className="mt-4 text-gray-600 mb-10">
                Estamos preparados para acompanhar e apurar continuamente os
                impostos emitidos pelo seu negócio de forma a reduzir ao máximo
                a carga tributária da sua empresa.
              </p>
              <ul className="text-gray-600">
                <li>Rotinas fiscais e tributárias;</li>

                <li>Apuração de Impostos Federais, Estaduais e Municipais;</li>

                <li>Escrituração de Livros Fiscais;</li>

                <li>Emissão de Guias;</li>

                <li>Acompanhamento de Legislação e Fiscalizações;</li>

                <li>Defesas de Infrações.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon
                icon={faCoins}
                className="text-[#141e28] w-20 mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-[#BA9F3C]">
                Assesoria contábil
              </h3>
              <p className="mt-4 text-gray-600 mb-10">
                Auxiliamos nas tomadas de decisões, análise e interpretação de
                todos os fatos que envolvem a rotina de trabalho da sua empresa
                diariamente. Elaboramos todos os demonstrativos contábeis para
                ajudar o seu negócio a manter o crescimento de forma
                sustentável.
              </p>
              <ul className="text-gray-600">
                <li>Escrituração Contábil;</li>

                <li>Livro Caixa;</li>

                <li>Emissão de Demonstrações Contábeis;</li>

                <li>Livro Diário;</li>

                <li>Livro Razão;</li>

                <li>Cadastros em Geral.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-9">
            Alguns de nossos Cursos
          </h2>
        </div>
        <div className="w-full">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1} // 1 card no mobile
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 }, // 2 cards no desktop
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="bg-[#1e87f0] p-1 absolute right-3 top-3 text-white border rounded-md inline-block align-middle">
                    {card.pontos}
                  </div>
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <p className="text-gray-600 mt-2">{card.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

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
    </div>
  );
}
