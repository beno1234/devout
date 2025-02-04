import React from 'react';
import Image from 'next/image';
import section1 from '/public/imagem-home1.jpg';

const SectionWelcome = () => {
  return (
    <section
      id="services"
      className="py-12 px-4 sm:px-6 lg:px-8 mx-auto container"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="text-left space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 uppercase leading-tight">
            Bem-vindo ao <br />
            <span className="text-[#BA9F3C]">Nosso Site</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg lg:text-xl leading-relaxed">
            A <strong>Devout Auditoria e Contabilidade Ltda.</strong> oferece
            aos seus clientes um conjunto de prestação de serviços, que a
            diferencia no mercado. Com as mais modernas técnicas de
            administração empresarial, coloca à disposição de seus clientes
            serviços da mais alta qualidade, que agregam valores...
          </p>
          <button className="w-full sm:w-auto bg-[#141e28] text-white rounded-md font-serif text-lg md:text-xl px-6 py-3">
            Saiba mais
          </button>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <Image
            src={section1}
            alt="Atender bem, atender sempre"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionWelcome;
