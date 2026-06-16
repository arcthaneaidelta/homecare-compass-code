import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WeCare2 — Compassionate Domiciliary Care" },
      { name: "description", content: "Learn about WeCare2, our mission, values, leadership and person-centred approach to home care." },
      { property: "og:title", content: "About WeCare2 Domiciliary Care" },
      { property: "og:description", content: "Founded by experienced care leaders — built on transparency, fairness and quality." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="About Us"
      title="Our story, mission and values"
      description="Detailed About page coming next. WeCare2 was founded by experienced nursing and care home leaders to raise the standard of home care across the UK."
    />
  ),
});
