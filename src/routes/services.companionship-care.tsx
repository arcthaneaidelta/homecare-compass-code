import { createFileRoute } from "@tanstack/react-router";
import { Smile, Users, Heart, Sparkles, Coffee, MapPin } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

const img = "/care-respite.webp";

export const Route = createFileRoute("/services/companionship-care")({
  head: () => ({
    meta: [
      { title: "Companionship Care — WeCare2 Domiciliary Care" },
      { name: "description", content: "Warm, friendly companionship that brightens every day — chats, hobbies, trips out and shared meals." },
      { property: "og:title", content: "Companionship Care — WeCare2" },
      { property: "og:description", content: "Friendly, regular companionship to combat loneliness and lift the spirits." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      slug="companionship-care"
      eyebrow="Companionship Care"
      title="Friendly company that"
      italic="brightens every day."
      description="A regular visit from a friendly, familiar face can transform a week. Our companionship carers share conversation, hobbies and outings — and help with the little things around the home."
      image={img}
      intro="Loneliness affects health as much as physical conditions do. Companionship care brings warmth, routine and conversation back into the week — gently, on your terms."
      includes={[
        "Friendly conversation and a cup of tea",
        "Shared hobbies — reading, puzzles, crafts",
        "Walks, trips out and social outings",
        "Help with shopping and errands",
        "Light meal preparation together",
        "Help with letters, phone calls and devices",
        "Attending appointments and events",
        "Light household help",
      ]}
      benefits={[
        { icon: Smile, t: "Better Wellbeing", d: "Regular contact lifts mood and supports mental health." },
        { icon: Users, t: "A Familiar Face", d: "Whenever possible, the same trusted carer each visit." },
        { icon: Heart, t: "Family Reassurance", d: "Peace of mind that someone caring is checking in." },
        { icon: Coffee, t: "Truly Personal", d: "Visits shaped around interests, hobbies and routines." },
        { icon: MapPin, t: "Out & About", d: "Help getting to cafés, clubs, appointments and family." },
        { icon: Sparkles, t: "Flexible Visits", d: "From an hour a week to daily company — your choice." },
      ]}
      idealFor={[
        "Older adults living alone or far from family",
        "People recovering from bereavement",
        "Those who can no longer drive or get out easily",
        "Anyone living with mild memory loss",
        "Families wanting regular check-ins for a loved one",
        "People with hobbies they'd love to share again",
      ]}
    />
  ),
});
