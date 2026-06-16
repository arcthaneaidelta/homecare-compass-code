import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/services/respite-care")({
  head: () => ({
    meta: [
      { title: "Respite Care — WeCare2" },
      { name: "description", content: "Flexible respite care that gives family carers a well-deserved break." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Service"
      title="Respite Care"
      description="Detailed Respite Care page coming next."
    />
  ),
});
