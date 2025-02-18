// /data/cursos.ts
export interface Curso {
  slug: string;
  titulo: string;
  cargaHoraria: string;
  instrutor: string;
  modalidade: string;
  objetivo: string;
  aQuemSeDestina: string;
  conteudoProgramatico: {
    modulo: string;
    duracao: string;
    topicos: string[];
  }[];
}
export const Tributario: Curso[] = [
  {
    slug: 'contabilidade-societaria-e-tributaria',
    titulo: 'Contabilidade Societária e Tributária',
    cargaHoraria: '28h',
    instrutor: 'Lourivaldo Lopes da Silva',
    modalidade: 'EAD',
    objetivo: `
        Abordar alguns dos tópicos avançados da contabilidade e de maior complexidade na sua aplicação teórica e prática, com ênfase nos aspectos tributários, sempre que forem pertinentes, decorrentes das convergências ao padrão internacional.
      `,
    aQuemSeDestina: `
        A todos os profissionais que trabalham com empresas tributadas pelo Lucro Real e Presumido que optaram pelo Regime de Caixa. Contadores, Auditores, Administradores, Assistentes Contábeis, Analistas Financeiros, Consultores Tributários, Empresários, e demais profissionais que desejam ampliar seus conhecimentos contábeis.
      `,
    conteudoProgramatico: [
      {
        modulo: 'Módulo I: Demonstrações Contábeis',
        duracao: '4 horas',
        topicos: [
          'Demonstrações Contábeis obrigatórias nas empresas',
          'Adoção das regras para elaboração do Sped Contábil',
          'Balanço Patrimonial, DRE, DRA, DMPL, DFC e Notas Explicativas',
        ],
      },
      {
        modulo: 'Módulo II: Investimentos',
        duracao: '8 horas',
        topicos: [
          'Conceituação e tratamento dos investimentos',
          'Mais e Menos Valia, Goodwill e Compra Vantajosa',
          'Tratamento tributário e avaliação de investimentos',
        ],
      },
      {
        modulo: 'Módulo III: Ajuste de Avaliação Patrimonial',
        duracao: '4 horas',
        topicos: [
          'Reavaliação de Elementos do Ativo e Passivo',
          'Procedimentos de Ajuste de Avaliação Patrimonial',
          'Amortização de Prejuízos fiscais e reavaliação de participações',
        ],
      },
      {
        modulo: 'Módulo IV: Consolidação das Demonstrações Contábeis',
        duracao: '8 horas',
        topicos: [
          'Técnicas e procedimentos de consolidação',
          'Consolidação com participação integral e minoritária',
          'Grupos de sociedades e consolidação com exclusão de controladas',
        ],
      },
      {
        modulo: 'Módulo V: Concentração e Extinção de Sociedades',
        duracao: '4 horas',
        topicos: [
          'Liquidação, dissolução e extinção de sociedades',
          'Avaliação do patrimônio para fins de cisão/fusão/incorporação',
          'Tratamento tributário na cisão/fusão/incorporação',
        ],
      },
    ],
  },
];
