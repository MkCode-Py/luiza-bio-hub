import { LUCAS, LUIZA } from "@/lib/contacts";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export function Duo() {
  return (
    <section
      id="treinamento"
      aria-labelledby="duo-title"
      className="relative px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-background sm:px-12 lg:rounded-[3.5rem] lg:px-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-clay/25 blur-3xl"
        />

        <div className="reveal relative">
          <p className="eyebrow text-clay-soft">Nutrição + Treinamento</p>
          <h2
            id="duo-title"
            className="font-display mt-5 max-w-xl text-[clamp(2rem,7vw,3.5rem)] leading-[1.02] text-background"
          >
            Dois acompanhamentos, uma mesma direção.
          </h2>
          <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-background/65">
            Para quem quer unir nutrição e treino, o contato acontece direto com cada profissional.
            Escolha por onde começar.
          </p>
        </div>

        <div className="relative mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
          <PersonCard
            name={LUIZA.name}
            role="Nutrição"
            instagram={LUIZA.instagram}
            instagramUrl={LUIZA.instagramUrl}
            whatsappUrl={LUIZA.whatsappUrl}
            cta="Falar com Luíza"
            highlight
          />

          <div
            aria-hidden="true"
            className="font-display flex items-center justify-center text-3xl text-clay-soft lg:flex-col lg:gap-4"
          >
            <span className="hidden h-16 w-px bg-background/15 lg:block" />
            <span className="leading-none">✳</span>
            <span className="hidden h-16 w-px bg-background/15 lg:block" />
          </div>

          <PersonCard
            name={LUCAS.name}
            role="Treinamento"
            instagram={LUCAS.instagram}
            instagramUrl={LUCAS.instagramUrl}
            whatsappUrl={LUCAS.whatsappUrl}
            cta="Falar com Lucas"
          />
        </div>
      </div>
    </section>
  );
}

function PersonCard({
  name,
  role,
  instagram,
  instagramUrl,
  whatsappUrl,
  cta,
  highlight = false,
}: {
  name: string;
  role: string;
  instagram: string;
  instagramUrl: string;
  whatsappUrl: string;
  cta: string;
  highlight?: boolean;
}) {
  return (
    <div className="reveal">
      <p
        className={`text-[0.7rem] tracking-[0.28em] uppercase ${highlight ? "text-clay-soft" : "text-background/45"}`}
      >
        {role}
      </p>
      <p className="font-display mt-3 text-[clamp(1.85rem,6vw,2.75rem)] leading-[1.02] text-background">
        {name}
      </p>
      <a
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-clay-soft"
      >
        <InstagramIcon />
        {instagram}
      </a>
      <div className="mt-6">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="cta-clay w-full sm:w-auto"
        >
          <WhatsAppIcon />
          {cta}
        </a>
      </div>
    </div>
  );
}
