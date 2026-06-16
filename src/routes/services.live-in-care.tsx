import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/services/live-in-care")({
  head: () => ({
    meta: [
      { title: "Live-In Care — WeCare2" },
      { name: "description", content: "24/7 dedicated live-in care in the comfort of your own home." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Service"
      title="Live-In Care"
      description="Detailed Live-In Care page coming next."
    />
  ),
});
