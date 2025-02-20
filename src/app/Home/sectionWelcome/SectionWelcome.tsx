import Image from 'next/image';
import section1 from '/public/lourivaldo.jpeg';

const SectionWelcome = () => {
  return (
    <section
      id="services"
      className="py-16 container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 uppercase leading-tight">
            Bem-vindo ao <br />
            <span className="text-[#BA9F3C]">Nosso Site</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A <strong>Devout Auditoria e Contabilidade Ltda.</strong> oferece
            aos seus clientes um conjunto de prestação de serviços que a
            diferencia no mercado. Com as mais modernas técnicas de
            administração empresarial, coloca à disposição de seus clientes
            serviços da mais alta qualidade, que agregam valores...
          </p>
          <ActionButton text="Saiba mais" />
        </div>

        <div className="flex justify-center">
  <Image
    src={section1}
    alt="Atender bem, atender sempre"
    className="w-full h-full max-w-sm sm:max-w-md lg:max-w-lg object-cover shadow-lg"
    priority
  />
</div>

      </div>
    </section>
  );
};

const ActionButton = ({ text }: { text: string }) => (
  <button
    className="w-full  bg-[#141e28] text-white rounded-md text-lg px-6 py-3 hover:bg-[#1a2a38] transition"
    aria-label={text}
  >
    {text}
  </button>
);

export default SectionWelcome;
