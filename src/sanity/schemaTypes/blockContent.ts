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
	],
});
