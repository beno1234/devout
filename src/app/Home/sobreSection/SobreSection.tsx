import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { JSX } from 'react/jsx-runtime';

interface CardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  services: string[];
}

const cards: CardProps[] = [
  {
    icon: <FontAwesomeIcon icon={faHandshake} className="text-[#141e28] w-20 mx-auto mb-6" />,
    title: 'Serviços especializados',
    description: 'Oferecemos serviços especializados de consultoria e auditoria nas áreas contábil, tributária, trabalhista e societária e prestamos serviços como:',
    services: [
      'Planejamento Estratégico;',
      'Desenvolvimento Organizacional;',
      'Gestão Financeira;',
      'Saneamento Financeiro e Tributário;',
      'Planejamento Tributário;',
      'Auditoria Financeira e Contábil.',
    ]
  },
  {
    icon: <FontAwesomeIcon icon={faEdit} className="text-[#141e28] w-20 mx-auto mb-6" />,
    title: 'Fiscal e Tributário',
    description: 'Estamos preparados para acompanhar e apurar continuamente os impostos emitidos pelo seu negócio de forma a reduzir ao máximo a carga tributária da sua empresa.',
    services: [
      'Rotinas fiscais e tributárias;',
      'Apuração de Impostos Federais, Estaduais e Municipais;',
      'Escrituração de Livros Fiscais;',
      'Emissão de Guias;',
      'Acompanhamento de Legislação e Fiscalizações;',
      'Defesas de Infrações.'
    ]
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} className="text-[#141e28] w-20 mx-auto mb-6" />,
    title: 'Assesoria contábil',
    description: 'Auxiliamos nas tomadas de decisões, análise e interpretação de todos os fatos que envolvem a rotina de trabalho da sua empresa diariamente. Elaboramos todos os demonstrativos contábeis para ajudar o seu negócio a manter o crescimento de forma sustentável.',
    services: [
      'Escrituração Contábil;',
      'Livro Caixa;',
      'Emissão de Demonstrações Contábeis;',
      'Livro Diário;',
      'Livro Razão;',
      'Cadastros em Geral.'
    ]
  }
];

const SobreSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-9">Sobre Nós</h2>
      </div>

      <div className="bg-parallax bg-cover bg-fixed bg-center p-16 ">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              {card.icon}
              <h3 className="text-xl font-semibold text-[#BA9F3C]">{card.title}</h3>
              <p className="mt-4 text-gray-600 mb-10">{card.description}</p>
              <ul className="text-gray-600">
                {card.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
