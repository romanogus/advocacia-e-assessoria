// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { ptBRLocale } from "@sanity/locale-pt-br";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_DATASET,
	plugins: [structureTool(), ptBRLocale()],
	schema,
});
