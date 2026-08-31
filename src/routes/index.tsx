import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/landing/Hero";
import { Areas } from "@/components/landing/Areas";
import { About } from "@/components/landing/About";
import { Duo } from "@/components/landing/Duo";
import { Closing } from "@/components/landing/Closing";
import { MobileBar } from "@/components/landing/MobileBar";
import { useReveal } from "@/hooks/use-reveal";

const title = "Luíza Carrozza | Nutricionista em Rio das Ostras e Online";
const description =
  "Nutrição clínica, esportiva, saúde da mulher, diabetes e problemas metabólicos. Acompanhamento individualizado presencial em Rio das Ostras — RJ e online.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <main className="relative min-h-screen">
      <Hero />
      <Areas />
      <About />
      <Duo />
      <Closing />
      <MobileBar />
    </main>
  );
}
