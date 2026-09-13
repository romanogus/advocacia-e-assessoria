export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  mainImage?: any;
  author?: {
    name: string;
    role?: string;
    image?: any;
    bio?: string;
    oab?: string;
  };
  categories?: Array<{
    title: string;
    slug?: { current: string } | string;
  }>;
  body: any[];
}

export const exemplarPost: BlogPost = {
  _id: 'exemplar-pente-fino-bpc-loas',
  title: 'Pente-Fino do INSS no BPC/LOAS: Notificação Recebida? Como Evitar o Bloqueio do Benefício',
  slug: { current: 'pente-fino-inss-bpc-loas-como-evitar-bloqueio' },
  excerpt: 'Governo Federal convoca beneficiários do BPC/LOAS para atualização cadastral no CadÚnico e biometria. Entenda os prazos, o que fazer se o pagamento for bloqueado e como a Justiça protege seus direitos.',
  publishedAt: '2026-09-13T10:00:00.000Z',
  featured: true,
  author: {
    name: 'Dra. Paloma André dos Santos',
    role: 'Advogada — Especialista em Direito Previdenciário e Trabalhista',
    bio: 'Advogada fundadora de Santos & Trevizan, com atuação humanizada e especializada na defesa de segurados da Previdência Social e trabalhadores em todo o território nacional.',
    oab: 'Inscrição OAB/SP',
  },
  categories: [
    { title: 'Previdenciário', slug: { current: 'previdenciario' } },
  ],
  body: [
    {
      _type: 'block',
      _key: 'b1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's1',
          text: 'Milhares de brasileiros beneficiários do Benefício de Prestação Continuada (BPC/LOAS) foram surpreendidos nas últimas semanas com avisos emitidos pelo aplicativo Meu INSS e impressos nos extratos bancários: o Governo Federal e o INSS iniciaram uma ampla convocação nacional para revisão cadastral e validação biométrica.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's2',
          text: 'A medida atinge tanto idosos com idade igual ou superior a 65 anos quanto pessoas com deficiência de qualquer idade que dependem do pagamento mensal de um salário mínimo para manter sua subsistência digna. Se você ou alguém da sua família recebeu esse comunicado, é fundamental agir com rapidez e estratégia para não ter a renda suspensa.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b3',
      style: 'h2',
      children: [
        {
          _type: 'span',
          _key: 's3',
          text: 'Quem está sendo convocado pelo INSS?',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b4',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's4',
          text: 'A convocação prioritária publicada em portaria conjunta do Ministério do Desenvolvimento e Assistência Social (MDS) e do INSS abrange dois grupos principais de segurados:',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b5',
      listItem: 'bullet',
      level: 1,
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's5',
          text: 'Beneficiários sem atualização no CadÚnico há mais de 24 meses: O Cadastro Único deve ser renovado a cada dois anos presencialmente no CRAS da sua cidade.',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b6',
      listItem: 'bullet',
      level: 1,
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's6',
          text: 'Beneficiários sem cadastro biométrico: Segurados que não possuem biometria registrada na Justiça Eleitoral (Título de Eleitor) ou na nova Carteira de Identidade Nacional (CIN).',
          marks: [],
        },
      ],
    },
    {
      _type: 'callout',
      _key: 'c1',
      type: 'warning',
      title: 'Atenção aos Prazos Improrrogáveis',
      text: 'Os prazos começam a correr da data em que a notificação é gerada no extrato ou aplicativo: 45 dias para quem reside em municípios de pequeno porte e 90 dias para capitais e cidades de médio/grande porte. Não ignore a mensagem, pois o sistema bloqueia os saques bancários de forma automática.',
    },
    {
      _type: 'block',
      _key: 'b7',
      style: 'h2',
      children: [
        {
          _type: 'span',
          _key: 's7',
          text: 'Como regularizar a sua situação no CRAS sem sustos',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b8',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's8',
          text: 'Para regularizar o cadastro, o responsável pela unidade familiar deve agendar o atendimento no CRAS do seu bairro. É indispensável levar os documentos de todas as pessoas que moram na mesma residência: certidão de nascimento ou casamento, RG, CPF, comprovante de residência atualizado e comprovante de renda de todos os membros.',
          marks: [],
        },
      ],
    },
    {
      _type: 'callout',
      _key: 'c2',
      type: 'tip',
      title: 'Dica Jurídica: Abatimento de Gastos com Medicamentos e Fraldas',
      text: 'Muitas famílias têm o benefício cortado porque a renda ultrapassa um quarto do salário mínimo per capita. No entanto, o STF e a Justiça Federal já pacificaram que você tem direito a abater da renda familiar todos os gastos contínuos com remédios não fornecidos pela rede pública, fraldas geriátricas, consultas especializadas e alimentação especial prescrita por médico!',
    },
    {
      _type: 'articleCta',
      _key: 'cta1',
      title: 'Recebeu a notificação ou está com medo de perder o BPC?',
      description: 'Nossa equipe jurídica pode conferir o cálculo da sua renda familiar e orientar a documentação médica adequada para evitar que seu pagamento seja interrompido.',
      buttonText: 'Tirar Dúvidas com a Dra. Paloma',
      customMessage: 'Olá, Dra. Paloma! Li seu artigo sobre o pente-fino do BPC/LOAS e gostaria de auxílio para regularizar o benefício.',
    },
    {
      _type: 'block',
      _key: 'b9',
      style: 'h2',
      children: [
        {
          _type: 'span',
          _key: 's9',
          text: 'O que fazer se o pagamento já estiver bloqueado no banco?',
          marks: [],
        },
      ],
    },
    {
      _type: 'block',
      _key: 'b10',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's10',
          text: 'Se você foi sacar o benefício e a conta acusou bloqueio, saiba que essa suspensão inicial é preventiva. O beneficiário tem o prazo de até 30 dias para entrar em contato com a Central 135 do INSS e solicitar o desbloqueio cautelar, informando que já está em processo de agendamento no CRAS.',
          marks: [],
        },
      ],
    },
    {
      _type: 'callout',
      _key: 'c3',
      type: 'legal',
      title: 'O Que Diz a Justiça Federal',
      text: 'Por ter natureza eminentemente alimentar, a suspensão arbitrária do BPC pode ser revertida na Justiça por meio de Ação Ordinária com Pedido Liminar. Os tribunais têm determinado o restabelecimento imediato do pagamento em até 48 horas, além do pagamento integral de todas as parcelas retroativas com juros e correção monetária.',
    },
    {
      _type: 'block',
      _key: 'b11',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's11',
          text: 'Nunca deixe o prazo expirar sem tomar providências. Manter o Cadastro Único atualizado e contar com orientação jurídica especializada são os passos indispensáveis para proteger aquilo que é seu por direito.',
          marks: [],
        },
      ],
    },
  ],
};
