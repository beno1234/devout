import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface CardProps {
  title: string;
  description: string;
}

const cards: CardProps[] = [
  {
    title: 'Missão',
    description:
      'Fornecer apoio técnico e competente, por meio de auditorias contábil, societária e tributária, agregando valores ao patrimônio das empresas, garantindo informações corretas em seus relatórios e tornando seus clientes preparados para crescer com estratégia e com uma operação integrada.',
  },
  {
    title: 'Visão',
    description:
      'Ser reconhecida dentre as empresas de auditoria e assessoria contábil, como uma empresa de credibilidade nos negócios, somando à sua ascensão o sucesso do cliente.',
  },
  {
    title: 'Valores',
    description:
      'Ética, confidencialidade, responsabilidade, qualidade e segurança nas informações.',
  },
];

export default function Sobre() {
  return (
    <>
      <Header />

      <main className="py-16 container mx-auto max-w-4xl">
        <section className="text-gray-800 space-y-6">
          <p className="text-lg font-semibold leading-relaxed">
            A Devout Auditoria e Contabilidade Ltda oferece aos seus clientes um
            conjunto de prestação de serviços que a diferencia no mercado.
          </p>
          <p className="text-lg font-semibold leading-relaxed">
            Com as mais modernas técnicas de administração empresarial, coloca à
            disposição de seus clientes serviços da mais alta qualidade, que
            agregam valores, seja via redução de custos administrativos e
            operacionais, ou pela implantação de soluções criativas e de
            vanguarda.
          </p>
          <p className="text-lg font-semibold leading-relaxed">
            Nossa meta consiste na obtenção de economia tributária e fiscal,
            através de planejamento tributário e de recuperação de créditos de
            tributos como ISS, ICMS, PIS/PASEP, COFINS, CSLL, IRPJ, INSS e
            outros.
          </p>
        </section>

        <section className="flex flex-nowrap justify-center gap-4 my-12">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

const InfoCard = ({ title, description }: CardProps) => (
  <article className="w-96 p-6 border rounded bg-white shadow-lg text-center">
    <h2 className="text-lg text-[#BA9F3C] font-semibold">{title}</h2>
    <p className="text-gray-600 text-sm md:text-base">{description}</p>
  </article>
);
