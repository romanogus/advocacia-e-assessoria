import { defineField, defineType } from "sanity";

export const areaDeAtuacao = defineType({
	name: "areaDeAtuacao",
	title: "Área de Atuação",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Título",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "description",
			title: "Descrição",
			type: "text",
			rows: 3,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "icon",
			title: "Ícone",
			type: "string",
			description: "Nome do ícone (opcional, para uso futuro)",
		}),
		defineField({
			name: "order",
			title: "Ordem",
			type: "number",
			description: "Ordem de exibição (menor número aparece primeiro)",
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
