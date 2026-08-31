import logo from "@/assets/logo.png.asset.json";
import portrait from "@/assets/foto_luiza.jpg.asset.json";
import { LUIZA } from "@/lib/contacts";
import { ArrowIcon, WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <header className="relative overflow-hidden px-6 pt-10 pb-4 sm:px-10 lg:px-16 lg:pt-14">
      {/* halo orgânico de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-24 h-[34rem] w-[34rem] rounded-full bg-shell/60 blur-3xl sm:-right-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-40 h-[26rem] w-[26rem] rounded-full bg-clay/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <img
            src={logo.url}
            alt="Luíza Carrozza Nutricionista"
            width={160}
            height={80}
            className="h-12 w-auto sm:h-14"
            fetchPriority="high"
          />
          <span className="hidden text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase sm:block">
            {LUIZA.crn}
          </span>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          {/* Coluna editorial */}
          <div className="relative z-10 lg:pr-6">
            <p className="eyebrow">Nutricionista · Rio das Ostras & Online</p>

            <h1 className="font-display mt-5 text-[clamp(3rem,13vw,5.5rem)] leading-[0.88] text-ink lg:text-[clamp(4rem,6.4vw,7rem)]">
              Luíza
              <span className="block pl-[0.12em] text-clay italic">Carrozza</span>
            </h1>

            <p className="mt-7 max-w-md text-[1.25rem] leading-snug text-ink/85 sm:text-[1.4rem]">
              Nutrição para evoluir no corpo, na saúde e no esporte.
            </p>

            <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-muted-foreground">
              Acompanhamento individualizado, presencial em Rio das Ostras — RJ e online.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={LUIZA.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="cta-clay w-full sm:w-auto"
              >
                <WhatsAppIcon />
                Falar com Luíza
              </a>
              <a href="#acompanhamento" className="cta-ghost w-full sm:w-auto">
                Conhecer o acompanhamento
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Retrato */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 top-6 bottom-0 rounded-[42%_58%_46%_54%/52%_44%_56%_48%] bg-sand"
            />
            <div className="float-slow relative mx-auto w-[min(88%,26rem)]">
              <img
                src={portrait.url}
                alt="Retrato de Luíza Carrozza, nutricionista"
                width={1240}
                height={1240}
                fetchPriority="high"
                className="w-full rounded-full object-cover mix-blend-multiply"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full ring-1 ring-ink/8 ring-inset"
              />
            </div>
            <span className="absolute right-2 bottom-2 hidden rotate-3 rounded-full bg-background/80 px-4 py-2 text-[0.7rem] tracking-[0.22em] text-ink uppercase backdrop-blur-sm sm:block">
              Nutrição individualizada
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
