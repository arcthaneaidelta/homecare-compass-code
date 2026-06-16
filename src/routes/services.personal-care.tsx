import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/services/personal-care")({
  head: () => ({
    meta: [
      { title: "Personal Care — WeCare2" },
      { name: "description", content: "Discreet, dignified personal care including bathing, dressing, hygiene and continence support." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Service"
      title="Personal Care"
      description="Detailed Personal Care page coming next."
    />
  ),
});
