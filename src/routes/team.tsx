import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Care Team — WeCare2" },
      { name: "description", content: "Meet the trained, DBS-checked carers and coordinators behind WeCare2." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Our Team"
      title="Meet the people behind WeCare2"
      description="Detailed Team page coming next."
    />
  ),
});
