// Practice areas: Sanity content merged over the defaults below.
// Used by the home cards (src/pages/index.astro) and the landing pages (src/pages/areas/[slug].astro).
// A field left empty in Sanity falls back to the default, so a new deploy never shows a blank page.

export const WHATSAPP_PHONE = "5511955304453";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const AREAS_QUERY = `*[_type == "areaDeAtuacao"] | order(order asc) {
  _id,
  title,
  description,
  "slug": slug.current,
  headline,
  intro,
  whatsappMessage,
  services[]{ heading, text },
  faq[]{ question, answer },
  seoTitle,
  seoDescription
}`;

export interface AreaService {
  heading: string;
  text: string;
}

export interface AreaFaq {
  question: string;
  answer: string;
}

export interface Area {
  id: string;
  /** Stable analytics key (data-analytics-area); never changes with the title. */
  key: string;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
  headline: string;
  intro: string;
  whatsappMessage: string;
  services: AreaService[];
  faq: AreaFaq[];
  seoTitle: string;
  seoDescription: string;
}

type AreaDefaults = Omit<Area, "id" | "title" | "description">;

// Matched by a keyword in the area's title, as the home page always did.
const defaults: Record<string, AreaDefaults> = {
  previdenci: {
    key: "previdenciario",
    slug: "direito-previdenciario",
    icon: `<svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#B8924A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M24 6 L38 11 L38 24 Q38 35 24 42 Q10 35 10 24 L10 11 Z"/>
      <circle cx="24" cy="21" r="5"/>
      <path d="M15 36 Q15 30 24 30 Q33 30 33 36"/>
    </svg>`,
    headline: "Aposentadoria, BPC/LOAS e benefícios do INSS",
    intro: "Orientação jurídica para aposentados, pensionistas e segurados do INSS: pedidos de benefício, recursos contra negativas, BPC/LOAS e isenção de Imposto de Renda por doença grave. Atendimento 100% digital, em qualquer cidade do Brasil.",
    whatsappMessage: "Olá! Gostaria de tirar dúvidas sobre Direito Previdenciário (aposentadoria, benefícios, BPC/LOAS, isenção de Imposto de Renda). Poderia me ajudar?",
    services: [
      { heading: "Aposentadorias, Pensão e Salário-Maternidade", text: "Planejamento de aposentadoria por idade, tempo de contribuição ou especial, pensão por morte aos dependentes e salário-maternidade, inclusive em casos de duplo vínculo (CLT e MEI/autônoma)." },
      { heading: "Benefícios por Incapacidade e BPC/LOAS", text: "Requisitos para concessão e restabelecimento de auxílio-doença, aposentadoria por invalidez e auxílio-acidente, além do BPC/LOAS a idosos e pessoas com deficiência, inclusive após negativa do INSS." },
      { heading: "Isenção de IR por Doença Grave", text: "Aposentados e pensionistas com doenças graves (Lei nº 7.713/88) podem ter isenção do Imposto de Renda, sem teto de valor, e restituição do que foi descontado nos últimos 5 anos." },
    ],
    faq: [
      { question: "O INSS negou meu benefício. Ainda é possível recorrer?", answer: "Sim. Contra a decisão do INSS cabe recurso administrativo, em regra no prazo de 30 dias a partir da ciência da negativa, e também é possível buscar o benefício na Justiça. O caminho mais adequado depende do motivo da negativa e dos documentos que você já tem." },
      { question: "Quem tem direito ao BPC/LOAS?", answer: "O BPC/LOAS é pago a pessoas com 65 anos ou mais e a pessoas com deficiência, de qualquer idade, que estejam em situação de vulnerabilidade. Não é preciso ter contribuído para o INSS. Em regra, a renda por pessoa da família deve ser de até 1/4 do salário mínimo, mas outros elementos podem comprovar a necessidade. É preciso estar inscrito no CadÚnico." },
      { question: "Quem pode ter isenção de Imposto de Renda por doença grave?", answer: "A isenção da Lei nº 7.713/88 vale para os valores de aposentadoria, reforma ou pensão de quem tem uma das doenças graves previstas em lei, como câncer, cardiopatia grave e doença de Parkinson. Ela não alcança o salário de quem ainda está trabalhando. Também é possível pedir a restituição do imposto descontado nos últimos 5 anos." },
      { question: "Quais documentos devo separar?", answer: "Documento com foto, CPF, comprovante de residência, a carta de decisão do INSS (se houver), o extrato do CNIS e, nos casos de saúde, laudos, exames e receitas. Se ainda não tiver tudo, não tem problema: a conversa inicial ajuda a identificar o que falta." },
    ],
    seoTitle: "Direito Previdenciário: aposentadoria, BPC/LOAS e INSS — Paloma Santos",
    seoDescription: "Orientação sobre aposentadoria, pensão por morte, auxílio-doença, BPC/LOAS e isenção de IR por doença grave. Atendimento online em todo o Brasil.",
  },
  trabalhist: {
    key: "trabalhista",
    slug: "direito-trabalhista",
    icon: `<svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#B8924A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="8" y="18" width="32" height="22" rx="3"/>
      <path d="M18 18v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/>
      <line x1="8" y1="28" x2="40" y2="28"/>
      <rect x="20" y="25" width="8" height="6" rx="1.5"/>
    </svg>`,
    headline: "Rescisão, horas extras e direitos do trabalhador",
    intro: "Orientação para quem foi demitido, recebeu verbas rescisórias a menos ou trabalha além da jornada sem receber por isso. Entenda seus direitos e os prazos para reclamá-los. Atendimento 100% digital, em qualquer cidade do Brasil.",
    whatsappMessage: "Olá! Gostaria de tirar dúvidas sobre Direito Trabalhista (rescisão, horas extras, direitos trabalhistas). Poderia me ajudar?",
    services: [
      { heading: "Rescisão Contratual", text: "Orientação informativa sobre modalidades de demissão (sem justa causa, por justa causa, rescisão indireta) e o correto cálculo das verbas rescisórias previstas na CLT." },
      { heading: "Jornada de Trabalho e Horas Extras", text: "Esclarecimentos sobre os limites de jornada, banco de horas, adicional noturno, intervalos obrigatórios para repouso e alimentação, e o cálculo de horas extraordinárias." },
      { heading: "Direitos e Adicionais", text: "Informações sobre o recolhimento do FGTS, férias, décimo terceiro salário, além de adicionais de insalubridade, periculosidade e respeito às convenções coletivas." },
    ],
    faq: [
      { question: "Qual é o prazo para entrar com uma ação trabalhista?", answer: "A ação pode ser proposta em até 2 anos após o fim do contrato de trabalho, e nela é possível cobrar os direitos dos últimos 5 anos. Por isso vale buscar orientação logo após a saída da empresa." },
      { question: "Fui demitido por justa causa. Dá para contestar?", answer: "A justa causa precisa se enquadrar em uma das hipóteses do artigo 482 da CLT e ser comprovada pelo empregador. Quando isso não acontece, é possível pedir na Justiça a reversão, com o pagamento das verbas de uma demissão sem justa causa." },
      { question: "O que é rescisão indireta?", answer: "É quando o próprio empregador comete uma falta grave, como atrasar salários repetidamente ou deixar de depositar o FGTS (artigo 483 da CLT). Nesses casos, o trabalhador pode encerrar o contrato com os mesmos direitos de quem é demitido sem justa causa." },
      { question: "Quais documentos devo separar?", answer: "Carteira de trabalho (digital ou física), contrato, holerites, termo de rescisão, extrato do FGTS, controles de ponto e mensagens que mostrem a rotina de trabalho. Se ainda não tiver tudo, a conversa inicial ajuda a identificar o que falta." },
    ],
    seoTitle: "Direito Trabalhista: rescisão, horas extras e FGTS — Paloma Santos",
    seoDescription: "Orientação sobre demissão, verbas rescisórias, justa causa, rescisão indireta, horas extras e FGTS. Atendimento online em todo o Brasil.",
  },
  civil: {
    key: "civil",
    slug: "direito-civil",
    icon: `<svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="#B8924A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="24" y1="9" x2="24" y2="42"/>
      <line x1="15" y1="42" x2="33" y2="42"/>
      <line x1="7" y1="17" x2="41" y2="17"/>
      <line x1="11" y1="17" x2="11" y2="27"/>
      <path d="M6 27 Q11 32 16 27"/>
      <line x1="37" y1="17" x2="37" y2="27"/>
      <path d="M32 27 Q37 32 42 27"/>
    </svg>`,
    headline: "Contratos, consumidor, consignados, família e sucessões",
    intro: "Orientação sobre contratos, cobranças e descontos indevidos, superendividamento, divórcio, partilha de bens e inventários. Atendimento 100% digital, em qualquer cidade do Brasil.",
    whatsappMessage: "Olá! Gostaria de tirar dúvidas sobre Direito Civil (contratos, consumidor, empréstimos e descontos bancários, família, sucessões). Poderia me ajudar?",
    services: [
      { heading: "Análise e Elaboração de Contratos", text: "Assessoria jurídica na elaboração, revisão e distrato de instrumentos particulares para conferir segurança e mitigar riscos em relações negociais." },
      { heading: "Direito do Consumidor e Bancário", text: "Defesa do consumidor contra cobranças indevidas e práticas abusivas, incluindo superendividamento e descontos excessivos de empréstimos consignados e cartões RMC/RCC, com base na proteção do mínimo existencial." },
      { heading: "Família e Planejamento Sucessório", text: "Informações sobre divórcio consensual e litigioso, fixação de pensão alimentícia, termos de guarda de menores, partilha de bens e inventários judiciais ou extrajudiciais." },
    ],
    faq: [
      { question: "Há descontos de empréstimo no meu benefício que eu não reconheço. O que fazer?", answer: "Guarde o extrato do benefício (no Meu INSS) ou do banco que mostra os descontos e não assine nada novo com a instituição. Descontos sem contratação válida podem ser contestados, inclusive na Justiça, com pedido de suspensão e de devolução dos valores." },
      { question: "O que é a Lei do Superendividamento?", answer: "A Lei nº 14.181/2021 alterou o Código de Defesa do Consumidor para permitir que quem não consegue pagar as dívidas de consumo sem comprometer o básico para viver renegocie com todos os credores ao mesmo tempo, em um plano de pagamento que preserve o mínimo existencial." },
      { question: "O inventário pode ser feito em cartório?", answer: "Em regra, sim, quando os herdeiros estão de acordo, sempre com a participação de advogado. Regras recentes do Conselho Nacional de Justiça ampliaram essa possibilidade, inclusive em alguns casos com herdeiros menores. O inventário em cartório costuma ser mais rápido que o judicial." },
    ],
    seoTitle: "Direito Civil: consumidor, consignados, família e inventário — Paloma Santos",
    seoDescription: "Orientação sobre contratos, cobranças indevidas, superendividamento, descontos de consignados, divórcio, partilha de bens e inventário. Atendimento online em todo o Brasil.",
  },
};

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function defaultsFor(title: string): AreaDefaults | null {
  const lower = title?.toLowerCase() ?? "";
  for (const [keyword, data] of Object.entries(defaults)) {
    if (lower.includes(keyword)) return data;
  }
  return null;
}

/** Merges one Sanity areaDeAtuacao document (shaped by AREAS_QUERY) over its defaults. */
export function resolveArea(doc: any): Area {
  const base = defaultsFor(doc.title);
  const slug = doc.slug || base?.slug || slugify(doc.title);
  const description = doc.description ?? "";
  return {
    id: doc._id,
    key: base?.key ?? slug,
    slug,
    title: doc.title,
    description,
    icon: base?.icon ?? null,
    headline: doc.headline || base?.headline || doc.title,
    intro: doc.intro || base?.intro || description,
    whatsappMessage: doc.whatsappMessage || base?.whatsappMessage || `Olá! Gostaria de tirar dúvidas sobre ${doc.title}. Poderia me ajudar?`,
    services: doc.services?.length ? doc.services : base?.services ?? [],
    faq: doc.faq?.length ? doc.faq : base?.faq ?? [],
    seoTitle: doc.seoTitle || base?.seoTitle || `${doc.title} — Paloma Santos`,
    seoDescription: doc.seoDescription || base?.seoDescription || description,
  };
}

export function serviceAnchor(heading: string) {
  return slugify(heading);
}
