'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';

interface Card {
  id: number;
  title: string;
  pontos: string;
  description: string;
}

const CursoSection = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: 'Contabilidade avançada',
      pontos: '40 pontos',
      description:
        'Abordar alguns dos tópicos avançados da contabilidade e de maior complexidade na sua aplicação teórica e prática, com ênfase aos aspectos tributários, sempre que forem pertinentes, decorrentes das convergências ao padrão internacional.',
    },
    {
      id: 2,
      title: 'Contabilidade de consórcio',
      pontos: '8 pontos',
      description:
        'O objetivo deste curso é orientar os profissionais das áreas contábeis e tributárias sobre os procedimentos que devem ser adotados no caso de consórcios de empresas, informando sobre as obrigações acessórias, registros contábeis e suas demonstrações, bem como aspectos tributários.',
    },
    {
      id: 3,
      title: 'Contabilidade Tributária na Atividade Imobiliária',
      pontos: '8 pontos',
      description:
        'Orientar os participantes sobre a contabilidade voltada para o setor imobiliário. Demonstrar o momento de reconhecimento da receita, custo e despesas. Cálculo dos tributos correntes e diferidos, orientação sobre escrituração das SCP e SPE.',
    },
    {
      id: 4,
      title: 'e-LALUR E e-LACS',
      pontos: '8 pontos',
      description:
        'Orientar os profissionais sobre a obrigatoriedade do e-LALUR / LACS, itens que devem ser ajustados para fins tributários (adições e exclusões), itens com ajustes permanentes e ajustes temporários, aplicar a exata demonstração do lucro real (trimestral ou anual). Demonstrar a exata escrituração do e-LALUR/LACS.',
    },
    {
      id: 5,
      title: 'Tributos Diferidos Lucro Real e Lucro Presumido',
      pontos: '24 pontos',
      description:
        'O regime de Caixa é uma decisão inteligente por parte dos contadores, com o intuito de oxigenar o Fluxo de Caixa das empresas. No entanto, a contabilidade deve ser obrigatoriamente registrada pelo regime de competência.',
    },
    {
      id: 6,
      title: 'Transfer Price',
      pontos: '8 pontos',
      description:
        'Fornecer a conceituação do Transfer Price (Arms Lenght Principle), orientar os participantes sobre os riscos da não elaboração do cálculo do preço de transferência; desenvolvimento dos cálculos para os métodos na importação como na exportação de bens, serviços e direitos; orientação sobre o melhor método a ser utilizado (o que não causa ajustes ou que causa o menor ajuste).',
    },
  ];

  return (
    <section className="p-8 md:p-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-9">
          Alguns de nossos Cursos
        </h2>
      </div>
      <div className="w-full">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },  // 2 cards no mobile maior
            768: { slidesPerView: 3 },  // 3 cards em tablets
            1024: { slidesPerView: 2 }, // 4 cards no desktop
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="flex items-stretch pb-8 sm:pb-16">
              <div className="relative bg-white text-gray-700 shadow-md hover:shadow-lg transition-shadow rounded-xl p-6 border border-gray-200 flex flex-col justify-between min-h-[220px]">
                <div className="flex justify-end w-full">
                  <div className="bg-blue-500 text-white text-center text-sm px-3 py-1 rounded-md shadow-sm md:w-[20%] w-[35%]">
                    {card.pontos}
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl font-semibold">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base line-clamp-3 overflow-hidden">
                  {card.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className='bg-[#141e28] px-3 py-3 rounded-md w-full mx-auto text-center text-white'>
          <Link href="/cursos">
          Saiba mais
          </Link>
        </button>
      </div>
    </section>
  );
};

export default CursoSection;
