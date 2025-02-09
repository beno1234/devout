import React from 'react';
import auditoria from '../../../public/imagemauditoria.jpg';
import regu from '../../../public/regularizacaotributaria.jpg';
import atelco from '../../../public/assessoriaatelco.jpg';
import trans from '../../../public/transferprices.jpg';
import moeda from '../../../public/moeda.jpg';
import conceito from '../../../public/conceitodeplanejamento.jpg';
import due from '../../../public/oqueeoduediligenceconceitoeaplicacoescover.jpg';
import prot from '../../../public/protagonismonaeducacaocorporativa.png';
import bussines from '../../../public/businessvaluation.jpg';
import pericia from '../../../public/periciacontabil.jpg';
import consult from '../../../public/consultoriafinanceira.jpg';
import org from '../../../public/oqueereorganizacaosocietaria.jpg';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ServicosCard {
  id: number;
  title: string;
  image: StaticImageData;
  subtitle: string;
}

export default function Servicos() {
  const ServicosCard: ServicosCard[] = [
    {
      id: 1,
      title: 'Auditoria das Demonstrações Contábeis',
      image: auditoria,
      subtitle:
        'Auditamos as demonstrações contábeis e financeiras com o objetivo de avaliar se estão representando a real situação patrimonial e se estão de acordo com os princípios fundamentais da nova contabilidade e da legislação fiscal.',
    },
    {
      id: 2,
      title: 'Revisão Contábil e tributária',
      image: regu,
      subtitle:
        'Tem o objetivo principal averiguar se a apuração e recolhimento dos referidos tributos estão de acordo com a legislação. Buscamos sobretudo, encontrar oportunidades para que, se possível, a carga tributária seja reduzida.',
    },
    {
      id: 3,
      title: 'Assessoria Contábil',
      image: atelco,
      subtitle:
        'Contamos com uma equipe de profissionais capazes de regularizar em tempo real, a escrita contábil das empresas dentro dos padrões exigidos pela legislação comercial e fiscal. Sempre voltada para a clareza nas informações contábeis e para a correta economia de tributos.',
    },
    {
      id: 4,
      title: 'Transfer Price - Implantação e revisão',
      image: trans,
      subtitle:
        'No setor, somos considerados uma das empresas mais conceituadas no assunto. Oferecemos por meio de software a melhor gestão nas operações de importação/exportação sujeitas ao Transfer Price.',
    },
    {
      id: 5,
      title: 'Recuperação de tributos',
      image: moeda,
      subtitle:
        'Nossa equipe está preparada para efetuar um levantamento em toda a documentação pertinente aos recolhimentos tributários e fazer os devidos ajustes de compensação, com ou sem ação judicial, oxigenando dessa forma o financeiro das empresas.',
    },
    {
      id: 6,
      title: 'Planejamento Contábil',
      image: conceito,
      subtitle:
        'Através de técnicas específicas, nossos profissionais avaliam de forma legal, a possibilidade de redução da carga tributária da empresas, maximizando os resultados e o retorno de investimento dos sócios.',
    },
    {
      id: 7,
      title: 'Due Diligence',
      image: due,
      subtitle:
        'Estamos capacitados para auxiliar na determinação de preços de negociação de quotas ou ações entre sociedade, bem como na orientação a respeito de fusão, cisão ou incorporação de empresas.',
    },
    {
      id: 8,
      title: 'Educação Corporativa',
      image: prot,
      subtitle:
        'Nossos profissionais além de sólida formação acadêmica, possuem larga experiência prática na aplicação de normas contábeis e tributárias, e portanto traduzem o objetivo de capacitar e atualizar profissionais das mais diversas áreas corporativas como contábil, tributária, administrativa e financeira.',
    },
    {
      id: 9,
      title: 'Valuation',
      image: bussines,
      subtitle:
        'Você sabe qual o valor da sua empresa? Esta pergunta pode ser sanada através de um serviço de Valuation, que possui métodos diversos para se chegar a um valor mais justo do seu negócio.',
    },
    {
      id: 10,
      title: 'Laudo Contábil',
      image: pericia,
      subtitle:
        'Fundamental nos processos, o laudo pericial contábil é um item indispensável nos processos relacionados a perícia contábil. Neste artigo, fazemos uma produção de um laudo pericial contábil. Confira!',
    },
    {
      id: 11,
      title: 'Consultoria Empresarial',
      image: consult,
      subtitle:
        'Realizamos o diagnóstico do cenário atual de maneira criteriosa e detalhada, elaborando um projeto de CONSULTORIA EMPRESARIAL FINANCEIRA, envolvendo a gestão da empresa nas iniciativas de redução de custos e despesas, renegociação de dívidas, processos, controles internos e captação de linhas de crédito.',
    },
    {
      id: 12,
      title: 'Incorporação, Cisão e fusão',
      image: org,
      subtitle:
        'Realizamos as reorganizações societárias da empresa, que podem ser operadas entre sociedades de tipos iguais ou diferentes e necessitarão, dentro do processo, da alteração dos estatutos ou contratos sociais. Garantimos o desempenho econômico das empresas.',
    },
  ];

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-9">
            Alguns de nossos Cursos
          </h2>
        </div>

        <section className="flex flex-wrap justify-center gap-4 my-12">
          {ServicosCard.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              id={card.id}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

const InfoCard = ({ subtitle, image, title }: ServicosCard) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=5511911227079&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20servi%C3%A7o%20de%20${encodeURIComponent(
    title
  )}`;

  return (
    <article className="w-full max-w-sm p-6 border rounded bg-white shadow-lg flex flex-col justify-between min-h-[500px]">
      <div>
        <div className="mb-4">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-48"
          />
        </div>
        <h2 className="text-lg text-[#BA9F3C] font-semibold text-center mb-4 min-h-[48px]">
          {title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base text-justify mb-4">
          {subtitle}
        </p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-transparent text-center py-2 px-4 rounded-lg shadow transition-colors border "
      >
        Orçamento
      </a>
    </article>
  );
};
