// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { ptBRLocale } from "@sanity/locale-pt-br";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Conteúdo")
					.items([
						S.listItem()
							.title("Estrutura do Site")
							.child(
								S.list()
									.title("Estrutura do Site")
									.items([
										S.documentTypeListItem("areaDeAtuacao").title(
											"Áreas de Atuação"
										),
										S.documentTypeListItem("author").title("Autores"),
									])
							),
						S.divider(),
						S.listItem()
							.title("Blog")
							.child(
								S.list()
									.title("Blog")
									.items([
										S.documentTypeListItem("post").title("Posts"),
										S.documentTypeListItem("category").title("Categorias"),
									])
							),
					]),
		}),
		ptBRLocale(),
	],
	schema,
});
