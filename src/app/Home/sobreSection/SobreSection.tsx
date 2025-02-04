import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const SobreSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-9">Sobre Nós</h2>
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
              Oferecemos serviços especializados de consultoria e auditoria nas
              áreas contábil, tributária, trabalhista e societária e prestamos
              serviços como:
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
              impostos emitidos pelo seu negócio de forma a reduzir ao máximo a
              carga tributária da sua empresa.
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
              ajudar o seu negócio a manter o crescimento de forma sustentável.
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
  );
};

export default SobreSection;
