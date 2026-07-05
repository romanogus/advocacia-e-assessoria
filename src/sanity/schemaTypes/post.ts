import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const post = defineType({
	name: "post",
	title: "Posts do Blog",
	type: "document",
	icon: DocumentTextIcon,
	groups: [
		{
			name: "conteudo",
			title: "Conteúdo",
			default: true,
		},
		{
			name: "seo",
			title: "SEO & Configurações",
		},
	],
	fields: [
		defineField({
			name: "title",
			title: "Título",
			type: "string",
			group: "conteudo",
			description: "O título do seu artigo. Será exibido na página e nos resultados de busca.",
			placeholder: "Ex: Direitos do Trabalhador na Rescisão Indireta",
			validation: (Rule) =>
				Rule.required().error("O título é obrigatório.")
					.max(120).warning("Títulos muito longos podem ser cortados nos resultados de busca."),
		}),
		defineField({
			name: "slug",
			title: "URL do Post",
			type: "slug",
			group: "seo",
			description: "Gerado automaticamente a partir do título. Clique em 'Generate' para criar.",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) =>
				Rule.required().error("A URL é obrigatória. Clique em 'Generate' para gerar automaticamente."),
		}),
		defineField({
			name: "status",
			title: "Status",
			type: "string",
			group: "conteudo",
			description: "Controle se o post está visível no site ou ainda é um rascunho.",
			initialValue: "rascunho",
			options: {
				list: [
					{ title: "📝 Rascunho", value: "rascunho" },
					{ title: "✅ Publicado", value: "publicado" },
				],
				layout: "radio",
				direction: "horizontal",
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "mainImage",
			title: "Imagem de Capa",
			type: "image",
			group: "conteudo",
			description: "A imagem principal que aparece no topo do artigo e nos cards de preview.",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Texto Alternativo",
					type: "string",
					description: "Descreva a imagem para acessibilidade e SEO. Ex: 'Martelo de juiz sobre mesa de madeira'",
				},
			],
		}),
		defineField({
			name: "excerpt",
			title: "Resumo",
			type: "text",
			group: "conteudo",
			rows: 3,
			description: "Uma breve descrição do artigo (2-3 frases). Aparece nos cards do blog e nos resultados de busca do Google.",
			placeholder: "Ex: Entenda quais são os seus direitos ao pedir demissão e como garantir o recebimento de todas as verbas rescisórias.",
			validation: (Rule) =>
				Rule.max(300).warning("O resumo ideal tem até 300 caracteres para não ser cortado nos resultados de busca."),
		}),
		defineField({
			name: "body",
			title: "Conteúdo do Artigo",
			type: "blockContent",
			group: "conteudo",
			description: "Escreva o conteúdo do artigo aqui. Use os botões de formatação para títulos, listas, negrito, etc.",
		}),
		defineField({
			name: "author",
			title: "Autor",
			type: "reference",
			group: "seo",
			to: [{ type: "author" }],
			description: "Selecione quem escreveu este artigo.",
		}),
		defineField({
			name: "categories",
			title: "Categorias",
			type: "array",
			group: "seo",
			of: [{ type: "reference", to: [{ type: "category" }] }],
			description: "Selecione uma ou mais categorias para organizar o artigo.",
		}),
		defineField({
			name: "publishedAt",
			title: "Data de Publicação",
			type: "datetime",
			group: "seo",
			description: "A data exibida no artigo. Preenchida automaticamente, mas pode ser alterada.",
			initialValue: () => new Date().toISOString(),
		}),
	],
	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
			status: "status",
		},
		prepare(selection) {
			const { title, author, media, status } = selection;
			const statusEmoji = status === "publicado" ? "✅" : "📝";
			return {
				title: `${statusEmoji} ${title}`,
				subtitle: author ? `por ${author}` : "",
				media,
			};
		},
	},
	orderings: [
		{
			title: "Data de Publicação (Recente)",
			name: "publishedAtDesc",
			by: [{ field: "publishedAt", direction: "desc" }],
		},
		{
			title: "Data de Publicação (Antiga)",
			name: "publishedAtAsc",
			by: [{ field: "publishedAt", direction: "asc" }],
		},
	],
});
