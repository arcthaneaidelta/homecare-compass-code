import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/services/companionship-care")({
  head: () => ({
    meta: [
      { title: "Companionship Care — WeCare2" },
      { name: "description", content: "Warm, friendly companionship that brightens every day." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Service"
      title="Companionship Care"
      description="Detailed Companionship Care page coming next."
    />
  ),
});
