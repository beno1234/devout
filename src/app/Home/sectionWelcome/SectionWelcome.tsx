import React from 'react';
import Image from 'next/image';
import section1 from '/public/imagem-home1.jpg';

const SectionWelcome = () => {
  return (
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
  );
};

export default SectionWelcome;
