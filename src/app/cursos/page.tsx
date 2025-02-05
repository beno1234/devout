import React from 'react';
import Image from 'next/image';
import Tributaria from '../../../public/CapaCurso-ContSocietária.jpeg';
import Consorcio from '../../../public/contabilidade de consorcio.jpeg';
import Imobiliaria from '../../../public/ContabilidadeTributarianaAtividadeImobiliaria.jpeg';
import Lalur from '../../../public/eLALUREeLACS.jpeg';
import Diferidos from '../../../public/TributosDiferidosLucroRealeLucroPresumido.jpg';
import Transfer from '../../../public/TransferPrice.jpg';
import Presumido from '../../../public/LucroRealeLucroPresumidoLucroarbitrado.jpg';
import Real from '../../../public/lucroreal.jpeg';
import Rotina from '../../../public/rotinasdeencerramentodebalanço.jpg';
import { StaticImageData } from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
interface CursoCard {
  id: number;
  title: string;
  image: StaticImageData;
  subtitle: string;
  value: string;
}
export default function Curso() {
  const CursoCard: CursoCard[] = [
    {
      id: 1,
      title: 'Contabilidade Societária e Tributária',
      image: Tributaria,
      subtitle:
        'Abordar alguns dos tópicos avançados da contabilidade e de maior complexidade na sua aplicação teórica e prática, com ênfase aos aspectos tributários, sempre que forem pertinentes, decorrentes das convergências ao padrão internacional.',
      value: '1.379,00',
    },
    {
      id: 2,
      title: 'Contabilidade de consórcio',
      image: Consorcio,
      subtitle:
        'O objetivo deste curso é orientar os profissionais das áreas contábeis e tributárias sobre os procedimentos que devem ser adotados no caso de consórcios de empresas, informando sobre as obrigações acessórias, registro contábeis suas demonstrações, bem como aspectos tributários.',
      value: '597,00',
    },
    {
      id: 3,
      title: 'Contabilidade Tributária na Atividade Imobiliaria',
      image: Imobiliaria,
      subtitle:
        'Orientar os participantes sobre a contabilidade voltada para o setor imobiliário. Demonstrar o momento de reconhecimento da receita, custo e despesas. Cálculo dos tributos correntes e diferidos, orientação sobre escrituração das SCP e SPE;',
      value: '497,00',
    },
    {
      id: 4,
      title: 'e-LALUR E e-LACS',
      image: Lalur,
      subtitle:
        'Orientar os profissionais sobre a obrigatoriedade do e-LALUR / LACS, itens que devem ser ajustados para fins tributários (adições e exclusões), itens com ajustes permanentes e ajustes temporários, aplicar a exata demonstração do lucro real (trimestral ou anual). Demonstrar a exata escrituração do e-LALUR/LACS.',
      value: '497,00',
    },
    {
      id: 5,
      title: 'Tributos Diferidos Lucro Real e Lucro Presumido',
      image: Diferidos,
      subtitle:
        'O regime de Caixa é uma decisão inteligente por parte dos contadores, com o intuito de oxigenar o Fluxo de Caixa das empresas. No entanto, a contabilidade deve ser obrigatoriamente registrada pelo regime de competência. O objetivo é orientar os profissionais a efetuar controle seguro das regras contábeis x regras fiscais, utilizando a ferramenta criada pela Devout Educação Corporativa para um controle seguro destas práticas.',
      value: 'EM BREVE',
    },
    {
      id: 6,
      title: 'Transfer Price',
      image: Transfer,
      subtitle:
        'Fornecer a conceituação do Transfer Price (Arms Lenght Principle) orientar os participantes sobre os riscos da não elaboração do cálculo do preço de transferência; desenvolvimento dos cálculos para os métodos na importação como na exportação de bens, serviços e direitos; orientação sobre o melhor método a ser utilizados (o que não causa ajustes ou que causa o menor ajuste), orientação sobre quem está obrigado a efetuar o cálculo do Transfer Price, apresentar as alterações na legislação do transfer price a valer a partir do ano-base de 2019 e discussão sobre pontos polémicos das regras do preço de transferência.',
      value: '597,00',
    },
    {
      id: 7,
      title: 'Lucro real Lucro presumido e Lucro Arbitrado',
      image: Presumido,
      subtitle:
        'Apurar a base de cálculo do imposto de renda das pessoas jurídicas tributadas pelo lucro real, e lucro presumido; Conhecer as principais despesas, custos e provisões que influenciam no cálculo do imposto de renda, visando analisar a dedutibilidade destas na base do IRPJ/CSLL, com abordagem teórica e prática. Avaliar o efeito da existência de prejuízos fiscais operacionais e não operacionais na escolha do regime tributário.',
      value: '797,00',
    },
    {
      id: 8,
      title: 'Lucro Real avançado',
      image: Real,
      subtitle:
        'Apresentar de forma prática a apuração do Imposto de Renda das Pessoas Jurídicas (IRPJ) e da Contribuição Social sobre o Lucro (CSLL) das respectivas empresas tributadas pelo Lucro Real , promovendo o conhecimento necessário com base na Lei n° 12.973/2014 que trouxe alterações na legislação tributária federal a partir de 2015 e suas recentes atualizações IN 1515 e IN 1700, munindo o profissional com ferramentas que possibilitam analisar os riscos fiscais e aplicar um correto planejamento tributário.',
      value: '1.379,00',
    },
    {
      id: 9,
      title: 'Rotina de encerramento de balanço',
      image: Rotina,
      subtitle:
        'O curso visa fornecer ao participante subsídios para o correto fechamento das Demonstrações Contábeis com base nas novas regras contábeis, orientando sobre as regras de avaliação de ativos, passivos, periodicidade do balancete de verificação, amarração sobre as regras contábeis (ECD) x regras fiscais (ECF), incluindo a questão da distribuição de Lucros e Dividendos.',
      value: '497,00',
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
          {CursoCard.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              value={card.value}
              id={card.id}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

const InfoCard = ({ subtitle, value, image, title }: CursoCard) => (
  <article className="w-full max-w-sm p-6 border rounded bg-white shadow-lg flex flex-col justify-between relative min-h-[450px]">
    <div>
      <div className="mb-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-md object-cover w-full h-auto"
        />
      </div>
      <h2 className="text-lg text-[#BA9F3C] font-semibold text-center mb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-sm md:text-base text-justify mb-8">
        {subtitle}
      </p>
    </div>

    {/* Valor centralizado com espaçamento */}
    <div className="mt-auto pt-4 text-center">
      <p className="text-lg font-semibold text-green-600">{value}</p>
    </div>
  </article>
);
