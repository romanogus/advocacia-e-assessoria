// Schema types index - exports all schemas for registration
import { blockContent } from "./blockContent";
import { author } from "./author";
import { category } from "./category";
import { post } from "./post";
import { areaDeAtuacao } from "./areaDeAtuacao";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [blockContent, author, category, post, areaDeAtuacao],
};
