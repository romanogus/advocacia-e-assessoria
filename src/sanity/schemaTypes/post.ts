import { defineType, defineField } from "sanity";

export const post = defineType({
	name: "post",
	title: "Artigo",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Título",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "author",
			title: "Autor",
			type: "reference",
			to: [{ type: "author" }],
		}),
		defineField({
			name: "mainImage",
			title: "Imagem de Capa",
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Texto Alternativo",
					type: "string",
					description: "Importante para acessibilidade e SEO",
				},
			],
		}),
		defineField({
			name: "categories",
			title: "Categorias",
			type: "array",
			of: [{ type: "reference", to: [{ type: "category" }] }],
		}),
		defineField({
			name: "publishedAt",
			title: "Data de Publicação",
			type: "datetime",
		}),
		defineField({
			name: "excerpt",
			title: "Resumo",
			type: "text",
			rows: 3,
			description: "Breve descrição para cards e SEO",
		}),
		defineField({
			name: "body",
			title: "Conteúdo",
			type: "blockContent",
		}),
	],
	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { title, author, media } = selection;
			return {
				title,
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
