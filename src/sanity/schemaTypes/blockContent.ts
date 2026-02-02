import { defineType, defineArrayMember } from "sanity";

export const blockContent = defineType({
	name: "blockContent",
	title: "Conteúdo",
	type: "array",
	of: [
		defineArrayMember({
			type: "block",
			title: "Bloco",
			styles: [
				{ title: "Normal", value: "normal" },
				{ title: "Título 2", value: "h2" },
				{ title: "Título 3", value: "h3" },
				{ title: "Título 4", value: "h4" },
				{ title: "Citação", value: "blockquote" },
			],
			lists: [
				{ title: "Lista", value: "bullet" },
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
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Texto Alternativo",
					type: "string",
					description: "Importante para acessibilidade e SEO",
				},
				{
					name: "caption",
					title: "Legenda",
					type: "string",
				},
			],
		}),
	],
});
