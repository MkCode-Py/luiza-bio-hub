import { LUIZA } from "@/lib/contacts";
import { ArrowIcon } from "./icons";

export function About() {
  return (
    <section
      id="acompanhamento"
      aria-labelledby="about-title"
      className="relative px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[30rem] max-w-5xl rounded-[50%] bg-sand/70 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl">
        <p className="reveal eyebrow">O acompanhamento</p>
        <p className="reveal font-display mt-6 text-[clamp(1.75rem,6vw,3.15rem)] leading-[1.08] text-ink">
          Cada plano nasce da sua realidade: saúde, objetivos, rotina e o que cabe no seu dia.
        </p>
        <div className="reveal mt-10 grid gap-8 sm:grid-cols-2">
          <p className="text-[1rem] leading-relaxed text-muted-foreground">
            O trabalho é individualizado e construído junto com você — sem fórmulas prontas, sem
            promessas fáceis. A nutrição precisa fazer sentido na prática para se sustentar ao longo
            do tempo.
          </p>
          <p className="text-[1rem] leading-relaxed text-muted-foreground">
            Atendimento presencial em Rio das Ostras — RJ e online, com a mesma atenção e
            continuidade em qualquer formato. {LUIZA.crn}.
          </p>
        </div>
        <a
          href={LUIZA.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="reveal group mt-10 inline-flex items-center gap-3 text-[1.05rem] font-medium text-ink"
        >
          <span className="border-b border-clay/50 pb-1 transition-colors group-hover:border-clay group-hover:text-clay">
            Conversar com Luíza no WhatsApp
          </span>
          <ArrowIcon className="h-4 w-4 text-clay transition-transform duration-500 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
