import { defineArrayMember, defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

// Each area gets its own landing page at /areas/<slug> (src/pages/areas/[slug].astro).
// Every "Página da área" and "SEO" field is optional: an empty field falls back to the
// default text in src/lib/areas.ts, so the page never renders blank.
export const areaDeAtuacao = defineType({
	name: "areaDeAtuacao",
	title: "Área de Atuação",
	type: "document",
	icon: CaseIcon,
	groups: [
		{
			name: "conteudo",
			title: "Conteúdo",
			default: true,
		},
		{
			name: "pagina",
			title: "Página da área",
		},
		{
			name: "seo",
			title: "SEO & Configurações",
		},
	],
	fields: [
		defineField({
			name: "title",
			title: "Nome da Área",
			type: "string",
			group: "conteudo",
			description: "O nome da área de atuação. Ex: Direito Trabalhista.",
			placeholder: "Ex: Direito Civil",
			validation: (Rule) => Rule.required().error("O nome da área é obrigatório."),
		}),
		defineField({
			name: "description",
			title: "Descrição",
			type: "text",
			group: "conteudo",
			rows: 3,
			description: "Uma breve descrição dos serviços prestados nesta área.",
			placeholder: "Ex: Assessoria jurídica em contratos, família e sucessões.",
			validation: (Rule) => Rule.required().error("A descrição é obrigatória."),
		}),
		defineField({
			name: "services",
			title: "Serviços em destaque",
			type: "array",
			group: "conteudo",
			description:
				"Aparecem no cartão da página inicial e na página da área. Recomendado: 3 itens. Se ficar vazio, o site usa o texto padrão.",
			of: [
				defineArrayMember({
					type: "object",
					name: "service",
					title: "Serviço",
					fields: [
						defineField({
							name: "heading",
							title: "Título",
							type: "string",
							placeholder: "Ex: Benefícios por Incapacidade e BPC/LOAS",
							validation: (Rule) => Rule.required().error("O título do serviço é obrigatório."),
						}),
						defineField({
							name: "text",
							title: "Texto",
							type: "text",
							rows: 3,
							validation: (Rule) => Rule.required().error("O texto do serviço é obrigatório."),
						}),
					],
					preview: {
						select: { title: "heading", subtitle: "text" },
					},
				}),
			],
		}),
		defineField({
			name: "headline",
			title: "Título da página",
			type: "string",
			group: "pagina",
			description:
				"O título principal (H1) da página da área. Use as palavras que o cliente procuraria no Google.",
			placeholder: "Ex: Aposentadoria, BPC/LOAS e benefícios do INSS",
			validation: (Rule) =>
				Rule.max(90).warning("Títulos curtos são mais fáceis de ler no celular."),
		}),
		defineField({
			name: "intro",
			title: "Introdução",
			type: "text",
			group: "pagina",
			rows: 4,
			description: "O parágrafo logo abaixo do título. Diga para quem é a página e como o atendimento funciona.",
		}),
		defineField({
			name: "whatsappMessage",
			title: "Mensagem pronta do WhatsApp",
			type: "string",
			group: "pagina",
			description: "O texto que já aparece digitado quando o visitante toca em \"Falar com a advogada\".",
			placeholder: "Ex: Olá! Gostaria de tirar dúvidas sobre Direito Previdenciário.",
		}),
		defineField({
			name: "faq",
			title: "Dúvidas frequentes",
			type: "array",
			group: "pagina",
			description:
				"Perguntas e respostas informativas (Provimento OAB 205/2021: sem promessa de resultado). Se ficar vazio, o site usa as perguntas padrão.",
			of: [
				defineArrayMember({
					type: "object",
					name: "faqItem",
					title: "Pergunta",
					fields: [
						defineField({
							name: "question",
							title: "Pergunta",
							type: "string",
							validation: (Rule) => Rule.required().error("A pergunta é obrigatória."),
						}),
						defineField({
							name: "answer",
							title: "Resposta",
							type: "text",
							rows: 4,
							validation: (Rule) => Rule.required().error("A resposta é obrigatória."),
						}),
					],
					preview: {
						select: { title: "question", subtitle: "answer" },
					},
				}),
			],
		}),
		defineField({
			name: "slug",
			title: "URL da Página",
			type: "slug",
			group: "seo",
			description:
				"Endereço da página: www.paloma-santos.adv.br/areas/<url>. Clique em 'Generate'. Mudar depois quebra links já divulgados e anúncios.",
			options: {
				source: "title",
				maxLength: 96,
			},
		}),
		defineField({
			name: "seoTitle",
			title: "Título para o Google",
			type: "string",
			group: "seo",
			description: "Título exibido na aba do navegador e nos resultados de busca.",
			validation: (Rule) =>
				Rule.max(70).warning("Títulos acima de 70 caracteres podem ser cortados no Google."),
		}),
		defineField({
			name: "seoDescription",
			title: "Descrição para o Google",
			type: "text",
			group: "seo",
			rows: 3,
			description: "Resumo exibido nos resultados de busca e ao compartilhar o link.",
			validation: (Rule) =>
				Rule.max(160).warning("Descrições acima de 160 caracteres podem ser cortadas no Google."),
		}),
		defineField({
			name: "icon",
			title: "Ícone",
			type: "string",
			group: "seo",
			description: "Nome do ícone (opcional, para uso futuro).",
		}),
		defineField({
			name: "order",
			title: "Ordem de Exibição",
			type: "number",
			group: "seo",
			description: "Menor número aparece primeiro no site. Ex: 1 = primeira posição.",
			initialValue: 0,
		}),
	],
	orderings: [
		{
			title: "Ordem de Exibição",
			name: "orderAsc",
			by: [{ field: "order", direction: "asc" }],
		},
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
		},
	},
});
