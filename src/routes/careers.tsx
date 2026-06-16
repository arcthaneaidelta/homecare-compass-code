import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join WeCare2" },
      { name: "description", content: "Flexible hours, competitive pay and ongoing training. Build a rewarding career in home care." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Careers"
      title="Build a rewarding career in care"
      description="Detailed Careers page coming next. Apply via the homepage form for now."
    />
  ),
});
