import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact WeCare2 — Request A Care Assessment" },
      { name: "description", content: "Get in touch with the WeCare2 team for a free, no-obligation home care assessment." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Contact Us"
      title="Speak with our care team"
      description="A dedicated Contact page is coming next. For now, please use the contact form at the bottom of the homepage, or call 01229 846646."
    />
  ),
});
