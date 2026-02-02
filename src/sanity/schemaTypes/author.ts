import { defineType, defineField } from "sanity";

export const author = defineType({
	name: "author",
	title: "Autor",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Nome",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			title: "Foto",
			type: "image",
			options: { hotspot: true },
		}),
		defineField({
			name: "role",
			title: "Cargo",
			type: "string",
			description: "Ex: Advogada, Especialista em Direito Civil",
		}),
		defineField({
			name: "bio",
			title: "Biografia",
			type: "text",
			rows: 4,
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "role",
			media: "image",
		},
	},
});
