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
  {
    slug: 'contabilidade-de-consorcio',
    titulo: 'Contabilidade de Consórcio',
    cargaHoraria: '8h',
    instrutor: 'Lourivaldo Lopes da Silva',
    modalidade: 'EAD',
    objetivo: `
        O objetivo deste curso é orientar os profissionais das áreas contábeis e tributárias sobre os procedimentos que devem ser adotados no caso de consórcios de empresas, informando sobre as obrigações acessórias, registros contábeis e suas demonstrações, bem como aspectos tributários.
      `,
    aQuemSeDestina: `
        Contabilistas em geral, administradores de empresas, tributaristas e pessoas envolvidas com as questões contábeis e tributárias de consórcios de empresas.
      `,
    conteudoProgramatico: [
      {
        modulo: 'Módulo I: Legislação',
        duracao: '2 horas',
        topicos: [
          'SC – Cosit 14/21, 62/21, 89/20, 308/18, 528/17, 259/17, 121/18, 77/20, 278/17',
          'Lei 6.404/76',
          'IN-RFB 1.863/2018',
          'IN-RFB 1.199/2011',
          'Outros Atos Normativos',
        ],
      },
      {
        modulo: 'Módulo II: Programa',
        duracao: '6 horas',
        topicos: [
          'Conceituação de Consórcio',
          'Objetivo do Consórcio',
          'CNPJ: Obrigatoriedade?',
          'Contrato de Consórcio',
          'Registro de Contrato de Consórcio – exigências',
          'Empresa Líder – Responsabilidade',
          'Responsabilidade Tributária',
          'CSLL e IRPJ no Consórcio',
          'PIS e Cofins no Consórcio',
          'Formas de tributação nas consorciadas e impacto do resultado do consórcio',
          'Reconhecimento da Receita de Consórcio nas Consorciadas',
          'Responsabilidade pelas Obrigações Acessórias',
          'Tributos na Fonte: Retenções',
          'Tributos na Fonte: Compensações',
          'Consórcio em Operação com o Exterior: Preço de Transferência aplicação',
          'Consórcio Público: Regras Contábeis e Tributárias',
          'Lucro Presumido: Administradora de Grupo de Consórcio',
          'Emissão do Documento Fiscal: Consorciadas ou o Consórcio?',
          'Reconhecimento da Receita do consórcio nas empresas consorciadas',
          'Contabilização das operações de consórcio: no consórcio e consorciadas',
          'Cruzamento das contas das consorciadas x contas do consórcio',
          'Demonstrações contábeis dos consórcios e consorciadas',
          'Outros assuntos relacionados a consórcios',
        ],
      },
    ],
  },
  {
    slug: 'contabilidade-tributaria-na-atividade-imobiliaria',
    titulo: 'Contabilidade Tributária na Atividade Imobiliária',
    cargaHoraria: '8h',
    instrutor: 'Lourivaldo Lopes da Silva',
    modalidade: 'EAD',
    objetivo: `
        Orientar os participantes sobre a contabilidade voltada para o setor imobiliário. Demonstrar o momento de reconhecimento da receita, custo e despesas. Cálculo dos tributos correntes e diferidos, orientação sobre escrituração das SCP e SPE;
      `,
    aQuemSeDestina: `
        Contabilistas em geral, auditores, consultores, administradores, investidores no setor imobiliário e todo o profissional envolvido com empresas da atividade imobiliária.
      `,
    conteudoProgramatico: [
      {
        modulo: 'Módulo I: Regras Contábeis e Reconhecimento da Receita',
        duracao: '4 horas',
        topicos: [
          'As novas Regras Contábeis',
          'IFRS 15 – Reconhecimento da Receita – com o tempo ou em determinado momento',
          'CPC 47 – Reconhecimento da Receita – com o tempo ou em determinado momento',
          'Etapas para o reconhecimento da receita',
          'Transferência de Riscos e Benefícios ao Longo do Tempo',
          'Decreto 9.580/18',
          'IN-RFB 1.700/17 e I911/19',
          'Quando entra em vigor',
          'Princípios de Contabilidade Geralmente Aceitos',
          'PFC – NBC – RES. CFC 963/03 E 1266/09',
        ],
      },
      {
        modulo: 'Módulo II: Aspectos Contábeis e Fiscais no Setor Imobiliário',
        duracao: '4 horas',
        topicos: [
          'Empreendimento Próprio',
          'IN-SRF 84/79 – regime misto',
          'Sociedade em Conta de Participação',
          'Sociedade de Propósito específico',
          'Regime de construção (empreendimento próprio, SCP, Condomínio)',
          'Unidade Imobiliária – conceito',
          'Formação do custo – regime misto e regime de competência',
          'Controle de Estoque',
          'Equiparação da PF à PJ',
          'Permuta de Imóveis – aspectos contábeis e fiscais',
          'Espécie de custos (custo real, orçado, despesas, apropriação)',
          'RET – Regime Especial de Tributação – breves comentários',
          'Patrimônio da Afetação – breves comentários',
          'Dação em pagamento',
          'Novas Regras contábeis – Extinção do REF',
          'Novo regime de reconhecimento da RECEITA',
          'Abordagem das normas do programa MINHA CASA MINHA VIDA',
          'Regime de tributação (Lucro Real, Presumido, RET)',
          'Vendas Unidades Imobiliárias – Concluídas e em Construção',
          'Vendas a Prazo e Vendas a Vista',
          'Reconhecimento da Receita – Regime de Competência',
          'Pagamento dos Tributos – Regime de Caixa (PIS, Cofins, CSLL e IRPJ)',
          'Aplicação do CPC 32 – Tributos Diferidos (CSLL, IRPJ, PIS E Cofins)',
          'Comparação da IN-SRF 84/79 com as novas regras contábeis',
          'A importância do LACS / LALUR com base nas novas regras',
          'Plano de Contas – Modelo (Centro de Custos, contas de Resultado etc.)',
          'Diversos Exemplos Práticos',
        ],
      },
    ],
  },
  {
    slug: 'e-lalur-e-e-lacs',
    titulo: 'e-LALUR e e-LACS',
    cargaHoraria: '8h',
    instrutor: 'Lourivaldo Lopes da Silva',
    modalidade: 'EAD',
    objetivo: `
        Orientar os profissionais sobre a obrigatoriedade do e-LALUR / LACS, itens que devem ser ajustados para fins tributários (adições e exclusões), itens com ajustes permanentes e ajustes temporários, aplicar a exata demonstração do lucro real (trimestral ou anual). Demonstrar a exata escrituração do e-LALUR/LACS.
      `,
    aQuemSeDestina: `
        Contabilistas em geral, administradores de empresas, tributaristas e pessoas envolvidas com as questões tributárias relacionadas aos tributos diretos.
      `,
    conteudoProgramatico: [
      {
        modulo: 'Módulo I: Legislação e Estrutura do e-LALUR / e-LACS',
        duracao: '4 horas',
        topicos: [
          'IN-RFB 2.004/2021',
          'ADE Cofins 01 de 05.01.2022',
          'Obrigatoriedade',
          'Objetivo',
          'Registro do M001 até o M990 – Foco: Bloco M e N',
          'Saldos da Parte B de 31.12.2013 – Transportes',
          'Criação das Contas de Controle da Parte B',
          'Lançamentos na Parte A',
          'Registros e Controles na Parte B',
          'Baixa e Transferência da Parte B',
          'Tributos Correntes e Tributos Diferidos – Reconhecimento',
          'Estrutura do e-LALUR / e-LACS',
          'Nova Estrutura do e-LALUR / e-LACS',
        ],
      },
      {
        modulo: 'Módulo II: Adições, Exclusões e Registros de Apuração',
        duracao: '4 horas',
        topicos: [
          'Adições Permanentes',
          'Adições Temporárias',
          'Exclusões Permanentes',
          'Exclusões Temporárias',
          'Registros com apuração Trimestral',
          'Registros com apuração Anual',
          'Relacionamentos do Lançamento da Parte A:',
          'Com conta da Parte B',
          'Com conta contábil',
          'Com conta da Parte B e Conta Contábil',
          'Sem Relacionamento',
          'Definição de contas com e sem relacionamento com parte A do e-LALUR',
          'Principais Contas de Adições e Exclusões',
          'Registros de Apuração da CSLL e IRPJ por Estimativa',
          'Registros de Balanço de Suspensão e Redução – regras',
          'Compensação de Prejuízos Fiscais',
          'Compensação de Prejuízos Fiscais Não Operacionais',
          'Registro do Bloco N – Cálculos dos Tributos CSLL/IRPJ',
          'Os Controles da Lei 12.973/2014 e IN-RFB 1.700/17',
          'Exemplos Práticos',
        ],
      },
    ],
  },
  {
    slug: 'tributos-diferidos-lucro-real-e-lucro-presumido',
    titulo: 'Tributos Diferidos Lucro Real e Lucro Presumido',
    cargaHoraria: '8h',
    instrutor: 'Lourivaldo Lopes da Silva',
    modalidade: 'EAD',
    objetivo: `
        O regime de Caixa é uma decisão inteligente por parte dos contadores, com o intuito de oxigenar o Fluxo de Caixa das empresas. No entanto, a contabilidade deve ser obrigatoriamente registrada pelo regime de competência. O objetivo é orientar os profissionais a efetuar controle seguro das regras contábeis x regras fiscais, utilizando a ferramenta criada pela Devout Educação Corporativa para um controle seguro destas práticas.
      `,
    aQuemSeDestina: `
        A todos os profissionais que trabalham com empresas tributadas pelo Lucro Real e Presumido que optaram pelo Regime de Caixa.
        Contabilistas em geral, administradores de empresas, tributaristas e pessoas envolvidas com as questões tributárias.
      `,
    conteudoProgramatico: [
      {
        modulo: 'Módulo I: Conceitos e Definições sobre Tributos Diferidos',
        duracao: '4 horas',
        topicos: [
          'Conceituação de Lucro Contábil (DRE)',
          'Segregação de Lucro Contábil x Lucro Fiscal',
          'Conceito de Tributos Correntes e Diferidos',
          'Conceito de Ativos e Passivos Fiscais Diferidos',
          'Diferenças Temporárias Ativas e Passivas',
          'Mensuração de Ativos e Passivos Fiscais Diferidos',
          'Tributação: Opção pelo Regime de Caixa: Lucro Presumido',
          'Tributação: Opção pelo Regime de Caixa: Possibilidade no Lucro Real',
          'Obediência ao Regime de Competência – Aspecto Contábil',
          'Efeitos dos Tributos Diferidos nas empresas tributadas fora do Lucro Real',
        ],
      },
      {
        modulo: 'Módulo II: Tributação pelo Regime de Caixa e Controles Fiscais',
        duracao: '4 horas',
        topicos: [
          'Tributação pelo Regime de Caixa:',
          'a) Lucro Real – Uso do LALUR',
          'b) Lucro Presumido – Uso do LALUP',
          'c) Lucro Arbitrado – Uso do LALUP',
          'd) Simples Nacional: Tributos Diferidos – Uso do LALUP',
          'Tributação pelo Recebimento – Lucro Real',
          'Uso do LALUR: empresas tributadas pelo Lucro Real',
          'Tributos sobre o Prejuízo Fiscal e Base de Cálculo Negativa',
          'Controles Fiscais: Parte B do e-LACS e e-LALUR',
          'Mensuração de Ativos e Passivos Diferidos',
          'Itens geradores de tributos diferidos',
          'Cruzamento dos recebíveis x passivo tributário',
          'Impactos no resultado pelo não reconhecimento dos tributos Diferidos',
          'Quais tributos incluem no rol dos tributos Diferidos',
          'Alíquotas aplicáveis aos tributos Diferidos (Pis Cofins, CSLL e IRPJ)',
          'Classificação contábil dos tributos sobre o Lucro',
          'Registro contábil dos tributos correntes e diferidos',
          'Reversão dos Tributos Diferidos',
          'Itens reconhecidos fora do Resultado',
          'Estudo de Caso',
          'Notas Explicativas nas Demonstrações Contábeis',
        ],
      },
    ],
  },
  {
    slug: 'transfer-price',
    titulo: 'Transfer Price',
    cargaHoraria: '8h',
    instrutor: 'Lourivaldo Lopes da Silva',
    modalidade: 'EAD',
    objetivo: `
        Fornecer a conceituação do Transfer Price (Arms Lenght Principle) orientar os participantes sobre os riscos da não elaboração do cálculo do preço de transferência; desenvolvimento dos cálculos para os métodos na importação como na exportação de bens, serviços e direitos; orientação sobre o melhor método a ser utilizados (o que não causa ajustes ou que causa o menor ajuste), orientação sobre quem está obrigado a efetuar o cálculo do Transfer Price, apresentar as alterações na legislação do transfer price a valer a partir do ano-base de 2019 e discussão sobre pontos polémicos das regras do preço de transferência.
      `,
    aQuemSeDestina: `
        Contabilistas em geral, auditores, consultores, administradores, advogados tributaristas, executivos de empresas importadoras e exportadoras; profissionais envolvidos com importação / exportação de bens, serviços e direitos; profissionais envolvidos com o planejamento tributário / estratégico das empresas.
      `,
    conteudoProgramatico: [
      {
        modulo: 'Módulo I: Conceitos e Legislação sobre Preço de Transferência',
        duracao: '4 horas',
        topicos: [
          'Conceito de Preço de Transferência',
          'Objetivo do Preço de Transferência',
          'BEPS: Criação em 2013 = Maior projeto de reforma tributária',
          'MP Nr. 1.152/22, Lei 14.596/23 e IN-RFB Nr. 2161 – DOU de 29.09.23',
          'Obrigatoriedade de aplicação das regras do Preço de Transferência',
          'O que é uma transação controlada?',
          'Quais tributos serão afetados com o Preço de Transferência?',
          'O que significa o princípio do Arm´s Lenght?',
          'O que muda com a entrada do Brasil na OCDE?',
          'Em quais operações aplica-se as regras do TP?',
        ],
      },
      {
        modulo: 'Módulo II: Métodos e Práticas no Cálculo do Preço de Transferência',
        duracao: '4 horas',
        topicos: [
          'Modalidades de Ajustes Fiscais: 1) Ajuste espontâneo; 2) Ajuste Compensatório e 3) Ajuste Primário',
          'Serviços Intragrupo: Tratamento Fiscal',
          'Compartilhamento de custo: Aplicação das Regras do Preço de Transferência',
          'Operações financeiras em transações controladas: Tratamento Fiscal no Transfer Price',
          'Métodos a serem Utilizados: Casos Práticos',
          'PIC – Preços Independentes Comparados',
          'PRL – Preço de Revenda Menos Lucro',
          'MCL – Custo Mais Lucro',
          'MLT – Margem Líquida de Transação',
          'MDL – Método de Divisão do Lucro',
          'Outros Métodos',
          'Intervalo Interquartil – Uso',
          'Exemplos Práticos para cada método',
          'Os Royalties Importados / Exportados: Aplicação das Normas do Transfer Price',
          'Fontes de Informações: Master File e Local File',
          'Assuntos Diversos sobre Transfer Pricing',
        ],
      },
    ],
  },
  {
    slug: 'lucro-real-lucro-presumido-e-lucro-arbitrado',
    titulo: 'Lucro Real, Lucro Presumido e Lucro Arbitrado',
    cargaHoraria: '16h',
    instrutor: 'Lourivaldo Lopes da Silva',
    modalidade: 'EAD',
    objetivo: `
        Apurar a base de cálculo do imposto de renda das pessoas jurídicas tributadas pelo lucro real, e lucro presumido;
        Conhecer as principais despesas, custos e provisões que influenciam no cálculo do imposto de renda, visando analisar a dedutibilidade destas na base do IRPJ/CSLL, com abordagem teórica e prática. Avaliar o efeito da existência de prejuízos fiscais operacionais e não operacionais na escolha do regime tributário.
        Avaliar os Efeitos da Distribuição de Juros sob Capital Próprio x regime tributário escolhido. Analisar o reconhecimento, contabilização e realização das subcontas conforme previsto na Lei 12.973/14 e IN 1700/17.
        Analisar o efeito das novas normas contábeis controladas na parte B do e-lalur e e-lacs.
        Informar as novas normas contábeis na ECF e ECD, suas subcontas, controle do lado B ou situações de dispensa de controles, sendo seus efeitos anulados através de adições e exclusões na parte A do e-lalur e e-lacs.
      `,
    aQuemSeDestina: `
        Contabilistas em geral, auditores, consultores, administradores, investidores no setor imobiliário e todo o profissional envolvido com empresas da atividade imobiliária.
      `,
    conteudoProgramatico: [
      {
        modulo: 'Módulo I: Lucro Presumido',
        duracao: '4 horas',
        topicos: [
          'Conceito de Lucro Presumido',
          'PJ Impedida do Lucro Presumido',
          'PJ Exclusivamente Prestadora de Serviço',
          'Mudança de Forma de Tributação / Regime Caixa ou Competência',
          'Percentuais de Presunção e Regime Apuração',
          'Base de Cálculo da CSLL e IRPJ',
          'Distribuição de Lucros e Dividendos',
          'Exemplos Práticos',
        ],
      },
      {
        modulo: 'Módulo II: Lucro Arbitrado',
        duracao: '4 horas',
        topicos: [
          'Conceito de Lucro Arbitrado',
          'Hipóteses de Arbitramento',
          'Auto Arbitramento',
          'Arbitramento com RB Conhecida e Não Conhecida',
          'Percentuais de Arbitramento',
          'Base de Cálculo da CSLL, PIS, Cofins e IRPJ',
          'Distribuição de Dividendos',
          'Exemplos Práticos',
        ],
      },
      {
        modulo: 'Módulo III: Lucro Real',
        duracao: '8 horas',
        topicos: [
          'Conceito de Receita Bruta',
          'PIS e Cofins tabela resumo regime não cumulativo',
          'PJ Obrigadas ao Lucro Real',
          'Regime de Apuração: Trimestral / Anual',
          'Regime de Estimativa',
          'Regras para a Estimativa Mensal',
          'Balanço de Redução e Suspensão: Definição e exemplos',
          'Compensação de Prejuízo Fiscal e BCN da CSLL',
          'Controles na Parte B do LACS',
          'Conceituação de Débito / Crédito Parte A e B do Lalur',
          'Cálculo da CSLL e IRPJ',
          'Tratamento do Incentivo Fiscal PAT',
          'Distribuição de Lucros e Dividendos',
          'Exemplos Práticos',
        ],
      },
    ],
  },
  {
    slug: 'lucro-real-avancado',
    titulo: 'Lucro Real Avançado',
    cargaHoraria: '24h',
    instrutor: 'Lourivaldo Lopes da Silva',
    modalidade: 'EAD',
    objetivo: `
        Apresentar de forma prática a apuração do Imposto de Renda das Pessoas Jurídicas (IRPJ) e da Contribuição Social sobre o Lucro (CSLL) das respectivas empresas tributadas pelo Lucro Real, promovendo o conhecimento necessário com base na Lei n° 12.973/2014 que trouxe alterações na legislação tributária federal a partir de 2015 e suas recentes atualizações IN 1515 e IN 1700, munindo o profissional com ferramentas que possibilitam analisar os riscos fiscais e aplicar um correto planejamento tributário.
      `,
    aQuemSeDestina: `
        Contabilistas em geral, auditores, consultores, administradores, analistas e assistentes contábeis e fiscais, gerente da área fiscal, controllers, advogados tributaristas e demais profissionais envolvidos com a matéria.
      `,
    conteudoProgramatico: [
      {
        modulo: 'Módulo I: Contabilidade Societária X Contabilidade Tributária',
        duracao: '4 horas',
        topicos: [
          'Conceito de Contabilidade Societária',
          'Escrituração Contábil Digital',
          'Escrituração Contábil Fiscal',
          'Cruzamento de informações por parte do Fisco',
        ],
      },
      {
        modulo: 'Módulo II: Tributação da Pessoa Jurídica no Brasil',
        duracao: '4 horas',
        topicos: [
          'Opção pela Forma de Tributação',
          'Pessoas Jurídicas Obrigadas ao Lucro Real',
          'Conceito de Lucro Real',
          'Adições, Exclusões e Compensações permitidas e autorizadas pela legislação tributária',
          'Lei 12.973/2014 – Regulamentação do IFRS',
          'Valor Justo e AVP – de acordo com as novas regras contábeis',
          'Ativo Imobilizado – Tratamento pelas novas regras contábeis e fiscais',
          'Exercício de Fixação',
        ],
      },
      {
        modulo: 'Módulo III: Lucro Real Trimestral - Procedimentos',
        duracao: '4 horas',
        topicos: [
          'Apuração do IRPJ e CSLL',
          'Compensação de Prejuízos Fiscais (Operacional e Não Operacional)',
          'Pagamento dos Tributos (CSLL e IRPJ)',
          'Vantagens e Desvantagens do Lucro Real Trimestral',
          'Controles no LACS / LALUR – Periodicidade',
          'Escrituração do LACS / LALUR',
          'Contabilização da CSLL / IRPJ na modalidade',
          'Exemplos Práticos',
          'Exercícios de Fixação',
        ],
      },
      {
        modulo: 'Módulo IV: Lucro Real Anual - Procedimentos',
        duracao: '4 horas',
        topicos: [
          'Regime de Estimativa Mensal',
          'Novo Conceito de Receita Bruta',
          'Percentuais de Presunção',
          'Conceito de suspensão ou redução',
          'Condição para a suspensão ou redução de pagamento',
          'Compensação de prejuízos fiscais',
          'Cálculo do imposto (tributos correntes e diferidos)',
          'Deduções permitidas',
          'Contabilização do IRPJ e da CSLL Sobre a Estimativa / Balanço',
          'Incentivos Fiscais – Aproveitamento (PAT) / Doações e Subvenções',
          'Blocos do e-LACS e e-LALUR – Escrituração (Parte A e Parte B)',
          'Bloco M: Registro de Controles de Valores',
          'Principais Adições e Exclusões para fins tributários',
          'Bloco N: Cálculo da CSLL e IRPJ',
          'Exercício de fixação',
        ],
      },
      {
        modulo: 'Módulo V: Ativo Imobilizado – Contábil, Fiscal e Alienação',
        duracao: '4 horas',
        topicos: [
          'Contabilização (baixa, depreciação e impairment)',
          'Prejuízos Fiscais Não Operacionais – Compensação – Controle',
          'Tributos Diferidos (CPC 32)',
          'Exercícios',
        ],
      },
      {
        modulo: 'Módulo VI: JCP e Dividendos – Cálculos e Comparabilidade',
        duracao: '4 horas',
        topicos: [
          'Dividendos (conceito e distribuição)',
          'JCP – Juros sobre Capital Próprio – regras do planejamento tributário',
          'Cálculos do JCP, contabilização, capitalização e limites',
          'Tratamento do IRF, Registro contábil – Lucro Real e Lucro Presumido',
          'Vantagens do JCP x Pró Labore',
          'Exercícios Práticos',
        ],
      },
    ],
  },
  {
    slug: 'rotina-de-encerramento-de-balanco',
    titulo: 'Rotinas de Encerramento de Balanço',
    cargaHoraria: '8h',
    instrutor: 'Lourivaldo Lopes da Silva',
    modalidade: 'EAD',
    objetivo: `
      O curso visa fornecer ao participante subsídios para o correto fechamento das Demonstrações Contábeis com base nas novas regras contábeis, orientando sobre as regras de avaliação de ativos, passivos, periodicidade do balancete de verificação, amarração sobre as regras contábeis (ECD) x regras fiscais (ECF), incluindo a questão da distribuição de Lucros e Dividendos.
    `,
    aQuemSeDestina: `
      Contadores, Auditores, Técnicos em Contabilidade, Analistas Contábeis e Fiscais, administradores, tributaristas e outros profissionais ligados à área contábil.
    `,
    conteudoProgramatico: [
      {
        modulo: 'Módulo I: Introdução à Escrituração Contábil',
        duracao: '2 horas',
        topicos: [
          'Escrituração Contábil – Exigência que seja eletrônica',
          'Princípios Fundamentais de Contabilidade – IFRS',
          'A ECD – Escrituração Contábil e Digital – quem está obrigado',
          'A ECF – Escrituração Contábil e Fiscal – quem está obrigado',
          'Demonstrações Contábeis que devem constar na ECD – Obrigatórias',
          'Apresentação das Demonstrações Contábeis – Comparativas',
          'Nova Estrutura das Demonstrações Contábeis – Base no IFRS',
        ],
      },
      {
        modulo: 'Módulo II: Cruzamento de Dados e Fechamento de Contas',
        duracao: '2 horas',
        topicos: [
          'O cruzamento das ECD x ECF – cuidados – Cruzamento de dados',
          'Revisão das contas antes do fechamento definitivo',
          'A forma de Tributação – Real Anual, Real Trimestral, Presumido e Arbitrado',
          'Cálculo dos tributos – lucro real trimestral e lucro presumido',
          'Lucro Real Trimestral x lucro real anual – vantagens e desvantagens',
          'Cálculo dos tributos – lucro real anual – Estimativa, Redução e Suspensão',
        ],
      },
      {
        modulo: 'Módulo III: Provisões e Registros Contábeis',
        duracao: '2 horas',
        topicos: [
          'Provisões Tributárias – Correntes e Futuras (Diferido)',
          'Zeramento das contas de Tributos a Recuperar',
          'Registros contábeis com repercussão na contabilidade fiscal',
          'O cruzamento do e-LACS e e-LALUR com a escrituração contábil',
          'Análise do Patrimônio Líquido – Lucros Acumulados, mantém ou não?',
          'Registro do AVP – Ajuste a Valor Presente – contabilização e controle',
        ],
      },
      {
        modulo: 'Módulo IV: Avaliação e Testes Contábeis',
        duracao: '2 horas',
        topicos: [
          'Perdas com Devedores Duvidosos – Novas Regras',
          'Teste de Impairment – Regras e quando aplicar',
          'Avaliação de Estoque a valor de Mercado',
          'Arbitramento do Estoque – Ausência de contabilidade de custo integrada',
          'Avaliação de Investimento – MEP – Método da Equivalência Patrimonial',
          'Ativo Imobilizado, Intangível e Bens de Arrendamento – avaliação',
        ],
      },
      {
        modulo: 'Módulo V: Encerramento do Balanço e Distribuição de Dividendos',
        duracao: '2 horas',
        topicos: [
          'Avaliação de ativos e Passivos – o que deve ficar no Balanço',
          'A apuração e contabilização dos tributos',
          'O limite das reservas de lucros',
          'Balancetes – periodicidade de levantamentos',
          'Lucros Apurados – Destinação',
          'Distribuição dos Dividendos – regras pela IN-RFB 1700/2017',
          'Cuidados no Encerramento das Contas de Resultado',
          'Notas Explicativas – elaboração e obrigatoriedade',
          'Ata de aprovação do Balanço – obrigatoriedade',
          'Publicação das Demonstrações Contábeis',
          'Assuntos diversos no fechamento do Balanço',
        ],
      },
    ],
  }
];
