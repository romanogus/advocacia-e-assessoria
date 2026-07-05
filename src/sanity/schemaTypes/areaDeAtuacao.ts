import { defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const areaDeAtuacao = defineType({
	name: "areaDeAtuacao",
	title: "Área de Atuação",
	type: "document",
	icon: CaseIcon,
	fields: [
		defineField({
			name: "title",
			title: "Nome da Área",
			type: "string",
			description: "O nome da área de atuação. Ex: Direito Trabalhista.",
			placeholder: "Ex: Direito Civil",
			validation: (Rule) => Rule.required().error("O nome da área é obrigatório."),
		}),
		defineField({
			name: "description",
			title: "Descrição",
			type: "text",
			rows: 3,
			description: "Uma breve descrição dos serviços prestados nesta área.",
			placeholder: "Ex: Assessoria jurídica em contratos, família e sucessões.",
			validation: (Rule) => Rule.required().error("A descrição é obrigatória."),
		}),
		defineField({
			name: "icon",
			title: "Ícone",
			type: "string",
			description: "Nome do ícone (opcional, para uso futuro).",
		}),
		defineField({
			name: "order",
			title: "Ordem de Exibição",
			type: "number",
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
