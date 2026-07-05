import { defineType, defineField } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const author = defineType({
	name: "author",
	title: "Membros do Escritório",
	type: "document",
	icon: UsersIcon,
	fields: [
		defineField({
			name: "name",
			title: "Nome Completo",
			type: "string",
			description: "Nome do advogado ou membro do escritório.",
			placeholder: "Ex: Dra. Paloma Santos",
			validation: (Rule) => Rule.required().error("O nome é obrigatório."),
		}),
		defineField({
			name: "slug",
			title: "URL do Perfil",
			type: "slug",
			description: "Gerado automaticamente a partir do nome. Clique em 'Generate'.",
			options: {
				source: "name",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required().error("Clique em 'Generate' para gerar a URL."),
		}),
		defineField({
			name: "image",
			title: "Foto de Perfil",
			type: "image",
			description: "Uma foto profissional do membro.",
			options: { hotspot: true },
		}),
		defineField({
			name: "role",
			title: "Cargo / Especialidade",
			type: "string",
			description: "Cargo ou área de especialização.",
			placeholder: "Ex: Advogada — Especialista em Direito Trabalhista",
		}),
		defineField({
			name: "bio",
			title: "Biografia",
			type: "text",
			rows: 4,
			description: "Uma breve biografia profissional.",
			placeholder: "Ex: Formada pela Universidade de São Paulo, com experiência em...",
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
