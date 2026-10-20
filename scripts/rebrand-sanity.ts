// One-off content migration for the "Paloma Santos" rebrand.
// Run with: bunx sanity exec scripts/rebrand-sanity.ts --with-user-token
import { createReadStream } from "node:fs";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2026-01-28" });

const AUTHOR_ID = "fdc524a4-1527-4dba-bd75-c3f3f4af8108";
const AREAS = {
	previdenciario: "87ba9730-e8aa-467a-879b-4a6055c82206",
	trabalhista: "1fab4962-faaa-4dbe-9ffb-6b0e27429680",
	civil: "d6a97bff-10b2-47b4-8b7c-3b2613e68651",
};

const portrait = await client.assets.upload(
	"image",
	createReadStream("src/assets/paloma-santos.webp"),
	{ filename: "paloma-santos.webp" },
);

const tx = client
	.transaction()
	.patch(AREAS.previdenciario, (p) =>
		p.set({
			order: 0,
			description:
				"Aposentadorias, pensão por morte, salário-maternidade, benefícios por incapacidade, BPC/LOAS e isenção de Imposto de Renda por doença grave para aposentados e pensionistas.",
		}),
	)
	.patch(AREAS.trabalhista, (p) => p.set({ order: 1 }))
	.patch(AREAS.civil, (p) =>
		p.set({
			order: 2,
			description:
				"Contratos, direito do consumidor e bancário (superendividamento e descontos de consignados), responsabilidade civil, família e sucessões.",
		}),
	)
	.patch(AUTHOR_ID, (p) =>
		p.set({
			name: "Dra. Paloma Santos",
			role: "Advogada — Especialista em Direito Previdenciário",
			oab: "OAB/SP 490.797",
			bio: "Advogada com atuação voltada ao Direito Previdenciário e às áreas Trabalhista, Civil, Bancária e Tributária. Advocacia ágil, estratégica e humana, com atendimento online em todo o Brasil.",
			image: { _type: "image", asset: { _type: "reference", _ref: portrait._id } },
		}),
	);

const result = await tx.commit();
console.log(`Committed ${result.results.length} patches (transaction ${result.transactionId}).`);
