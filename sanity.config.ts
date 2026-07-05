// ./sanity.config.ts
import { defineConfig } from "sanity";
import { buildLegacyTheme } from "sanity";
import { structureTool } from "sanity/structure";
import { ptBRLocale } from "@sanity/locale-pt-br";
import { schema } from "./src/sanity/schemaTypes";
import { StudioIcon } from "./src/sanity/components/StudioIcon";
import {
	DocumentTextIcon,
	TagIcon,
	UsersIcon,
	CaseIcon,
	ComposeIcon,
} from "@sanity/icons";

// ─── Brand Theme ─────────────────────────────────────────────────
const santosTrevizanTheme = buildLegacyTheme({
	"--black": "#1D2A3D",
	"--white": "#FFFFFF",
	"--gray": "#6B7280",
	"--gray-base": "#6B7280",

	"--brand-primary": "#B8924A",
	"--brand-primary--inverted": "#FFFFFF",

	"--component-bg": "#FFFFFF",
	"--component-text-color": "#1D2A3D",

	"--default-button-color": "#B8924A",
	"--default-button-primary-color": "#B8924A",
	"--default-button-success-color": "#22C55E",
	"--default-button-warning-color": "#F59E0B",
	"--default-button-danger-color": "#EF4444",

	"--state-success-color": "#22C55E",
	"--state-warning-color": "#F59E0B",
	"--state-danger-color": "#EF4444",
	"--state-info-color": "#B8924A",

	"--main-navigation-color": "#1D2A3D",
	"--main-navigation-color--inverted": "#FFFFFF",

	"--focus-color": "#D4A857",
});

// ─── Studio Config ───────────────────────────────────────────────
export default defineConfig({
	name: "santos-trevizan",
	title: "Santos & Trevizan",
	subtitle: "Advocacia e Assessoria",

	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,

	icon: StudioIcon,
	theme: santosTrevizanTheme,

	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Painel de Controle")
					.items([
						// ── Blog Section (primary) ──────────────────
						S.listItem()
							.title("Blog")
							.icon(ComposeIcon)
							.child(
								S.list()
									.title("Blog")
									.items([
										S.documentTypeListItem("post")
											.title("Posts")
											.icon(DocumentTextIcon),
										S.documentTypeListItem("category")
											.title("Categorias")
											.icon(TagIcon),
										S.documentTypeListItem("author")
											.title("Autores")
											.icon(UsersIcon),
									]),
							),

						S.divider(),

						// ── Site Structure Section ──────────────────
						S.listItem()
							.title("Estrutura do Site")
							.icon(CaseIcon)
							.child(
								S.list()
									.title("Estrutura do Site")
									.items([
										S.documentTypeListItem("areaDeAtuacao")
											.title("Áreas de Atuação")
											.icon(CaseIcon),
									]),
							),
					]),
		}),
		ptBRLocale(),
	],

	schema,

	// ── New Document Options ────────────────────────────────────
	document: {
		newDocumentOptions: (prev, { creationContext }) => {
			// Only show Post, Category, Author, and AreaDeAtuacao as create options
			const allowedTypes = ["post", "category", "author", "areaDeAtuacao"];
			return prev.filter((template) =>
				allowedTypes.includes(template.templateId),
			);
		},
	},
});
