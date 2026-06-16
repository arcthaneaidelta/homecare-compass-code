import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "@/components/site/PagePlaceholder";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home Care Services — WeCare2 Domiciliary Care" },
      { name: "description", content: "Personal care, live-in care, companionship, respite, dementia support, medication assistance and more." },
      { property: "og:title", content: "WeCare2 Home Care Services" },
      { property: "og:description", content: "A full range of professional domiciliary care services tailored to you." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Our Services"
      title="A full range of professional care services"
      description="Detailed Services overview coming next. We deliver person-centred home care across personal, live-in, companionship, respite, dementia and more."
    />
  ),
});
