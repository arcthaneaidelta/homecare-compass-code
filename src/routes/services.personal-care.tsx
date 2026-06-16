import { createFileRoute } from "@tanstack/react-router";
import { Heart, ShieldCheck, Sparkles, Clock, UserCheck, Smile } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/care-hourly.webp";

export const Route = createFileRoute("/services/personal-care")({
  head: () => ({
    meta: [
      { title: "Personal Care at Home — WeCare2 Domiciliary Care" },
      { name: "description", content: "Discreet, dignified personal care: bathing, dressing, hygiene and continence support — delivered with warmth in your own home." },
      { property: "og:title", content: "Personal Care — WeCare2" },
      { property: "og:description", content: "Discreet, dignified personal care at home." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      slug="personal-care"
      eyebrow="Personal Care"
      title="Discreet, dignified"
      italic="personal care at home."
      description="Our trained carers support people with everyday personal needs — bathing, dressing, hygiene and continence — always with kindness, patience and complete respect for privacy."
      image={img}
      intro="Personal care is the foundation of independence at home. Our carers take the time to learn your preferences and routines, so every visit feels comfortable and familiar."
      includes={[
        "Bathing, showering and washing",
        "Dressing and grooming",
        "Oral and dental care",
        "Continence and toileting support",
        "Skincare and pressure-area care",
        "Hair washing and styling",
        "Help getting in and out of bed",
        "Discreet, respectful support",
      ]}
      benefits={[
        { icon: Heart, t: "Dignity First", d: "Care delivered with discretion, warmth and respect at every step." },
        { icon: UserCheck, t: "Trained Carers", d: "All carers complete personal-care training, DBS checks and shadow shifts." },
        { icon: Clock, t: "Flexible Visits", d: "From quick 30-minute calls through to multiple visits a day." },
        { icon: ShieldCheck, t: "Safe & Reliable", d: "Detailed care plans, supervision and 24/7 office support." },
        { icon: Sparkles, t: "Person-Centred", d: "Routines, preferences and choices shape every visit." },
        { icon: Smile, t: "Peace of Mind", d: "Families stay updated through clear visit notes and check-ins." },
      ]}
      idealFor={[
        "Older adults who need help with daily personal routines",
        "Those recovering from surgery, illness or hospital stays",
        "People living with long-term conditions or limited mobility",
        "Anyone wishing to remain independent at home",
        "Family carers needing trusted, regular support",
        "People with continence or skin-care needs",
      ]}
    />
  ),
});
