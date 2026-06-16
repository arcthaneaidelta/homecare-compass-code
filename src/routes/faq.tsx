import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — WeCare2 Domiciliary Care" },
      { name: "description", content: "Answers to the most common questions about WeCare2's home care services." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="FAQ"
      title="Frequently asked questions"
      description="Full FAQ page coming next. See the FAQ section on the homepage for common questions."
    />
  ),
});
