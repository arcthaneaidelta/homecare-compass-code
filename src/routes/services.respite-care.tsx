import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Heart, ShieldCheck, Clock, Users, Sparkles } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/care-overnight.jpg";

export const Route = createFileRoute("/services/respite-care")({
  head: () => ({
    meta: [
      { title: "Respite Care — WeCare2 Domiciliary Care" },
      { name: "description", content: "Flexible respite care that gives family carers a well-deserved break — for a few hours, overnight or a full holiday." },
      { property: "og:title", content: "Respite Care — WeCare2" },
      { property: "og:description", content: "Reliable cover that lets you rest, recharge and return refreshed." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      slug="respite-care"
      eyebrow="Respite Care"
      title="A well-deserved break,"
      italic="for those who give so much."
      description="Family carers do extraordinary work — and need time to rest. Our respite care provides reliable, fully trained cover from a few hours through to several weeks, in the comfort of your loved one's home."
      image={img}
      intro="Whether you need an afternoon to yourself, a weekend off, or a proper holiday, our respite carers step seamlessly into your loved one's routine — so you can switch off knowing they're in safe hands."
      includes={[
        "Hourly, daytime or overnight cover",
        "Short breaks or extended holidays",
        "Full personal and medication care",
        "Meal preparation and household help",
        "Companionship and outings",
        "Detailed handover from family",
        "Daily updates while you're away",
        "Emergency and last-minute cover",
      ]}
      benefits={[
        { icon: CalendarClock, t: "Truly Flexible", d: "From a 2-hour break to a 3-week holiday — book the cover you need." },
        { icon: Heart, t: "Trusted Cover", d: "Vetted, trained carers who follow your established routine." },
        { icon: ShieldCheck, t: "Safe Handover", d: "Detailed care plan, briefing and supervisor check-ins." },
        { icon: Clock, t: "Short Notice", d: "Emergency respite available when life changes suddenly." },
        { icon: Users, t: "Continuity", d: "Where possible, the same respite carer each time." },
        { icon: Sparkles, t: "Real Rest", d: "Peace of mind so you genuinely switch off." },
      ]}
      idealFor={[
        "Family carers needing regular short breaks",
        "Families planning a holiday or weekend away",
        "People recovering from their own illness or operation",
        "Anyone caring for a partner with complex needs",
        "Families needing emergency cover at short notice",
        "Working carers juggling family and employment",
      ]}
    />
  ),
});
