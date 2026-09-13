import { defineType, defineArrayMember } from "sanity";

export const blockContent = defineType({
	name: "blockContent",
	title: "Conteúdo",
	type: "array",
	of: [
		defineArrayMember({
			type: "block",
			title: "Bloco de Texto",
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "Título Principal", value: "h1" },
				{ title: "Título de Seção", value: "h2" },
				{ title: "Subtítulo", value: "h3" },
				{ title: "Subtítulo Menor", value: "h4" },
				{ title: "Citação", value: "blockquote" },
			],
			lists: [
				{ title: "Lista com Marcadores", value: "bullet" },
				{ title: "Lista Numerada", value: "number" },
			],
			marks: {
				decorators: [
					{ title: "Negrito", value: "strong" },
					{ title: "Itálico", value: "em" },
					{ title: "Sublinhado", value: "underline" },
				],
				annotations: [
					{
						name: "link",
						title: "Link",
						type: "object",
						fields: [
							{
								name: "href",
								title: "URL",
								type: "url",
								description:
									"Cole o endereço do link aqui. Ex: https://exemplo.com",
								validation: (Rule) =>
									Rule.uri({
										scheme: [
											"http",
											"https",
											"mailto",
											"tel",
										],
									}),
							},
						],
					},
				],
			},
		}),
		defineArrayMember({
			type: "image",
			title: "Imagem",
			description: "Adicione uma imagem ao conteúdo do artigo.",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Texto Alternativo",
					type: "string",
					description:
						"Descreva a imagem para acessibilidade e SEO.",
				},
				{
					name: "caption",
					title: "Legenda",
					type: "string",
					description:
						"Legenda exibida abaixo da imagem (opcional).",
				},
			],
		}),
		defineArrayMember({
			name: "callout",
			title: "Destaque Jurídico / Alerta",
			type: "object",
			fields: [
				{
					name: "type",
					title: "Tipo de Destaque",
					type: "string",
					initialValue: "tip",
					options: {
						list: [
							{ title: "💡 Dica Jurídica", value: "tip" },
							{ title: "⚠️ Atenção / Prazo Crítico", value: "warning" },
							{ title: "⚖️ O Que Diz a Lei / Decisões", value: "legal" },
							{ title: "ℹ️ Informação Importante", value: "info" },
						],
						layout: "radio",
						direction: "horizontal",
					},
				},
				{
					name: "title",
					title: "Título do Destaque (Opcional)",
					type: "string",
					placeholder: "Ex: Dica Importante sobre Abatimento de Despesas",
				},
				{
					name: "text",
					title: "Texto do Destaque",
					type: "text",
					rows: 3,
					validation: (Rule) => Rule.required().error("O texto do destaque é obrigatório."),
				},
			],
			preview: {
				select: {
					title: "title",
					text: "text",
					type: "type",
				},
				prepare(selection) {
					const { title, text, type } = selection;
					const emojiMap: Record<string, string> = {
						tip: "💡 Dica:",
						warning: "⚠️ Atenção:",
						legal: "⚖️ Lei/Decisão:",
						info: "ℹ️ Nota:",
					};
					return {
						title: title || emojiMap[type] || "Destaque",
						subtitle: text,
					};
				},
			},
		}),
		defineArrayMember({
			name: "articleCta",
			title: "Chamada para WhatsApp (CTA)",
			type: "object",
			fields: [
				{
					name: "title",
					title: "Título da Chamada",
					type: "string",
					placeholder: "Ex: Teve o benefício negado pelo INSS?",
					initialValue: "Precisa de orientação jurídica sobre este assunto?",
				},
				{
					name: "description",
					title: "Descrição Breve",
					type: "string",
					placeholder: "Ex: Nossa equipe pode analisar seu caso diretamente pelo WhatsApp.",
					initialValue: "Fale com nossa equipe diretamente pelo WhatsApp para avaliar o seu caso.",
				},
				{
					name: "buttonText",
					title: "Texto do Botão",
					type: "string",
					initialValue: "Falar com Advogada no WhatsApp",
				},
				{
					name: "customMessage",
					title: "Mensagem Pré-configurada do WhatsApp (Opcional)",
					type: "string",
					placeholder: "Ex: Olá! Gostaria de uma consulta sobre o BPC/LOAS.",
				},
			],
			preview: {
				select: {
					title: "title",
				},
				prepare(selection) {
					return {
						title: `📲 WhatsApp CTA: ${selection.title || "Falar com Advogada"}`,
					};
				},
			},
		}),
	],
});
