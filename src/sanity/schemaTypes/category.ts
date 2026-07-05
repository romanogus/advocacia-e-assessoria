import { defineType, defineField } from "sanity";
import { TagIcon } from "@sanity/icons";

export const category = defineType({
	name: "category",
	title: "Categorias de Postagens",
	type: "document",
	icon: TagIcon,
	fields: [
		defineField({
			name: "title",
			title: "Nome da Categoria",
			type: "string",
			description: "O nome da categoria. Ex: Direito Trabalhista, Direito Civil, etc.",
			placeholder: "Ex: Direito Previdenciário",
			validation: (Rule) => Rule.required().error("O nome da categoria é obrigatório."),
		}),
		defineField({
			name: "slug",
			title: "URL da Categoria",
			type: "slug",
			description: "Gerado automaticamente a partir do nome. Clique em 'Generate'.",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required().error("Clique em 'Generate' para gerar a URL."),
		}),
		defineField({
			name: "description",
			title: "Descrição",
			type: "text",
			rows: 2,
			description: "Uma breve descrição desta categoria (opcional).",
			placeholder: "Ex: Artigos sobre aposentadoria, benefícios e auxílios do INSS.",
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "description",
		},
	},
});
