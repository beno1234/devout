import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface Cards {
  id: number;
  title: string;
  description: string;
}
export default function Sobre() {
  const cards: Cards[] = [
    {
      id: 1,
      title: 'Missão',
      description:
        'Fornecer apoio técnico e competente, por meio de auditorias contábil, societária e tributária, agregando valores ao patrimônio das empresas, garantindo informações corretas em seus relatórios e tornando seus clientes preparados para crescer com estratégia e com uma operação integrada.',
    },
    {
      id: 2,
      title: 'Visão',
      description:
        'Ser reconhecida dentre as empresas de auditoria e assessoria contábil, como uma empresa de credibilidade nos negócios, somando à sua ascensão o sucesso do cliente',
    },
    {
      id: 3,
      title: 'Valores',
      description:
        'Ética, confidencialidade, responsabilidade, qualidade e segurança nas informações.',
    },
  ];
  return (
    <>
      <Header />

      <div className="py-16 container mx-auto max-w-4xl">
        <div>
          {' '}
          <h3 className="text-sm font-semibold text-gray-800 leading-relaxed">
            A Devout Auditoria e Contabilidade Ltda oferece aos seus clientes um
            conjunto de prestação de serviços, que a diferencia no mercado.
          </h3>
          <h3 className="text-sm font-semibold text-gray-800 leading-relaxed mt-4"></h3>
          <h3 className="text-sm font-semibold text-gray-800 leading-relaxed mt-4">
            Com as mais modernas técnicas de administração empresarial, coloca à
            disposição de seus clientes, serviços da mais alta qualidade, que
            agregam valores, quer seja via redução de custos administrativos e
            operacionais, bem como pela implantação de soluções criativas e de
            vanguarda. <br />
            Nossa meta consiste na obtenção de economia tributária e fiscal,
            através de planejamento tributário e de recuperação de créditos
            oriundos dos tributos incidentes sobre a atividade industrial,
            comercial ou de serviços, tais como: ISS, ICMS, PIS/PASEP, COFINS,
            CSLL, IRPJ, INSS e outros.
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-96 p-6 border border-b-2 rounded bg-white shadow-[0px_0px_12px_rgba(0,0,0,0.8)] flex flex-col items-center text-center"
          >
            <h2 className="text-lg text-[#BA9F3C] mb-2">{card.title}</h2>
            <p className="text-gray-600 text-sm md:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
