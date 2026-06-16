import { createFileRoute } from "@tanstack/react-router";
import { Home, ShieldCheck, Heart, Users, Clock, Sparkles } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";
import img from "@/assets/care-livein.webp";

export const Route = createFileRoute("/services/live-in-care")({
  head: () => ({
    meta: [
      { title: "Live-In Care at Home — WeCare2 Domiciliary Care" },
      { name: "description", content: "24/7 dedicated live-in care in the comfort of your own home — a trusted alternative to residential care." },
      { property: "og:title", content: "Live-In Care — WeCare2" },
      { property: "og:description", content: "Round-the-clock care from a dedicated carer who lives in your home." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      slug="live-in-care"
      eyebrow="Live-In Care"
      title="Dedicated 24/7 care,"
      italic="in your own home."
      description="A trusted alternative to residential care. A carefully matched carer lives with you, providing round-the-clock support while you stay surrounded by everything you love."
      image={img}
      intro="Live-in care keeps couples together, keeps pets at your side, and keeps every memory in its place. We match you with a carer whose skills and personality fit your life."
      includes={[
        "24-hour personal care and supervision",
        "Help with medication and health needs",
        "Meal planning, shopping and cooking",
        "Light housekeeping and laundry",
        "Companionship and social activities",
        "Mobility and transfer support",
        "Trips out, appointments and errands",
        "Care for couples and pets",
      ]}
      benefits={[
        { icon: Home, t: "Stay At Home", d: "Familiar surroundings, routines and memories — a true alternative to a care home." },
        { icon: Users, t: "1-to-1 Attention", d: "Dedicated care, not shared between residents — fully focused on you." },
        { icon: Heart, t: "Couples Welcome", d: "Stay together at home, even when only one partner needs care." },
        { icon: ShieldCheck, t: "Safe & Supported", d: "Office team on call 24/7 plus regular supervisor visits." },
        { icon: Clock, t: "Continuity Of Care", d: "The same carer day after day, with planned rotation breaks." },
        { icon: Sparkles, t: "Carefully Matched", d: "Carers chosen for skills, personality and shared interests." },
      ]}
      idealFor={[
        "People who want to remain at home long-term",
        "Couples who wish to stay together",
        "Those living with dementia or complex needs",
        "Anyone needing 24-hour reassurance",
        "Families wanting a trusted alternative to a care home",
        "People recovering from a serious illness or hospital stay",
      ]}
    />
  ),
});
